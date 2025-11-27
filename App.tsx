
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BookType, UserSettings, AppMode, Word } from './types';
import { SAMPLE_WORDS, DEFAULT_SETTINGS } from './constants';
import { generateSpeech, constructLearningPrompt, constructDictationPrompt } from './services/geminiService';
import { Button } from './components/Button';
import { SwipeableRow } from './components/SwipeableRow';
import { 
  BookOpen, 
  Settings as SettingsIcon, 
  Headphones, 
  PenTool, 
  ChevronLeft, 
  Play, 
  Pause, 
  Check, 
  RotateCw,
  AlertCircle
} from 'lucide-react';

const App: React.FC = () => {
  // --- State ---
  const [words, setWords] = useState<Record<BookType, Word[]>>(SAMPLE_WORDS);
  const [settings, setSettings] = useState<UserSettings>(DEFAULT_SETTINGS);
  const [currentMode, setCurrentMode] = useState<AppMode>(AppMode.DASHBOARD);
  
  // Player State
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [playerError, setPlayerError] = useState<string | null>(null);
  
  // Refs
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const nextDictationTimeoutRef = useRef<number | null>(null);
  const audioCacheRef = useRef<Map<string, AudioBuffer>>(new Map());
  // Ref to track if we should really play audio after async fetch returns
  const stopSignalRef = useRef(false);

  // --- Derived State (Study Plan) ---
  const currentBookWords = useMemo(() => words[settings.selectedBook], [words, settings.selectedBook]);
  
  const dailyPlan = useMemo(() => {
    const unmastered = currentBookWords.filter(w => !w.mastered);
    const startDate = new Date(settings.startDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const daysPassed = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    const remainingDays = Math.max(1, settings.targetDays - daysPassed + 1);
    const calculatedRate = Math.ceil(unmastered.length / remainingDays);
    const MIN_WORDS_PER_DAY = 5;
    const wordsPerDay = Math.max(calculatedRate, MIN_WORDS_PER_DAY);
    
    return unmastered.slice(0, wordsPerDay);
  }, [currentBookWords, settings]);

  const progress = useMemo(() => {
    const total = currentBookWords.length;
    const mastered = currentBookWords.filter(w => w.mastered).length;
    return { total, mastered, percentage: total > 0 ? Math.round((mastered / total) * 100) : 0 };
  }, [currentBookWords]);

  // --- Actions ---

  // Clear cache when book changes or new day
  useEffect(() => {
    audioCacheRef.current.clear();
  }, [settings.selectedBook, dailyPlan]);

  const handleMarkMastered = (wordId: string) => {
    setWords(prev => ({
      ...prev,
      [settings.selectedBook]: prev[settings.selectedBook].map(w => 
        w.id === wordId ? { ...w, mastered: true } : w
      )
    }));
  };

  const initAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  const stopAudio = () => {
    stopSignalRef.current = true; // Signal pending async ops to stop
    if (audioSourceRef.current) {
      audioSourceRef.current.stop();
      audioSourceRef.current = null;
    }
    if (nextDictationTimeoutRef.current) {
      clearTimeout(nextDictationTimeoutRef.current);
      nextDictationTimeoutRef.current = null;
    }
    setIsPlaying(false);
    setIsLoadingAudio(false);
  };

  const getAudioBuffer = async (prompt: string): Promise<AudioBuffer> => {
    // Check Cache first
    if (audioCacheRef.current.has(prompt)) {
      return audioCacheRef.current.get(prompt)!;
    }
    // Fetch from API
    const buffer = await generateSpeech(prompt, audioContextRef.current!);
    // Save to Cache
    audioCacheRef.current.set(prompt, buffer);
    return buffer;
  }

  // --- Learning Mode Logic ---
  
  const playLearnWord = async (index: number) => {
    if (stopSignalRef.current) return;
    if (!dailyPlan[index] || !audioContextRef.current) return;
    
    setPlayerError(null);
    setIsLoadingAudio(true);

    try {
      const word = dailyPlan[index];
      const prompt = constructLearningPrompt(word.term, word.definition);
      
      const buffer = await getAudioBuffer(prompt);
      
      if (stopSignalRef.current) {
         setIsLoadingAudio(false);
         return; 
      }
      
      const source = audioContextRef.current.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContextRef.current.destination);
      
      source.onended = () => {
         if (stopSignalRef.current) return;

         setLoopCount(currentCount => {
             const nextCount = currentCount + 1;
             if (nextCount < settings.loopsPerWord) {
                 // Replay same word (will hit cache)
                 playLearnWord(index);
                 return nextCount;
             } else {
                 const nextIndex = index + 1;
                 if (nextIndex < dailyPlan.length) {
                     setActiveWordIndex(nextIndex);
                     setTimeout(() => playLearnWord(nextIndex), 500); 
                     return 0;
                 } else {
                     setIsPlaying(false);
                     return 0;
                 }
             }
         });
      };
      
      audioSourceRef.current = source;
      source.start();
      setIsLoadingAudio(false);
    } catch (e) {
      console.error(e);
      setPlayerError("Failed to generate audio. Please check connection.");
      setIsLoadingAudio(false);
      setIsPlaying(false);
    }
  };

  const startLearnSession = () => {
    initAudio();
    stopSignalRef.current = false;
    setPlayerError(null);
    setIsPlaying(true);
    setLoopCount(0); 
    playLearnWord(activeWordIndex);
  };

  // --- Dictation Mode Logic ---

  const playDictationWord = async (index: number, repetition: number) => {
     if (stopSignalRef.current) return;
     if (!dailyPlan[index] || !audioContextRef.current) return;
     
     setPlayerError(null);
     setIsLoadingAudio(true);

     try {
       const word = dailyPlan[index];
       const prompt = constructDictationPrompt(word.term);
       
       const buffer = await getAudioBuffer(prompt);
       
       if (stopSignalRef.current) {
         setIsLoadingAudio(false);
         return;
       }

       const source = audioContextRef.current.createBufferSource();
       source.buffer = buffer;
       source.connect(audioContextRef.current.destination);
       
       source.onended = () => {
          if (stopSignalRef.current) return;

          // Default dictation repeats 3 times
          if (repetition < 3) {
             // Add a small delay between repetitions
             setTimeout(() => {
                 playDictationWord(index, repetition + 1);
             }, 800);
          } else {
            setIsLoadingAudio(false); 
            nextDictationTimeoutRef.current = window.setTimeout(() => {
               if (stopSignalRef.current) return;
               const nextIndex = index + 1;
               if (nextIndex < dailyPlan.length) {
                 setActiveWordIndex(nextIndex);
                 playDictationWord(nextIndex, 1);
               } else {
                 setIsPlaying(false);
               }
            }, settings.dictationInterval * 1000);
          }
       };
       
       audioSourceRef.current = source;
       source.start();
       setIsLoadingAudio(false);
     } catch (e) {
       console.error(e);
       setPlayerError("Audio error. Check API Key or Network.");
       setIsLoadingAudio(false);
       setIsPlaying(false);
     }
  };

  const startDictationSession = () => {
    initAudio();
    stopSignalRef.current = false;
    setPlayerError(null);
    setIsPlaying(true);
    playDictationWord(activeWordIndex, 1);
  };

  // --- Render Helpers ---

  const renderDashboard = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Current Progress</h2>
        <div className="flex items-end justify-between mb-2">
          <span className="text-4xl font-bold text-blue-600">{progress.percentage}%</span>
          <span className="text-slate-500 mb-1">{progress.mastered} / {progress.total} Words</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3">
          <div 
            className="bg-blue-600 h-3 rounded-full transition-all duration-500" 
            style={{ width: `${progress.percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setCurrentMode(AppMode.TODAY_LIST)}
          className="p-5 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center space-y-3 hover:border-blue-200 transition-colors"
        >
          <div className="p-3 bg-blue-50 rounded-full text-blue-600">
            <BookOpen size={24} />
          </div>
          <span className="font-semibold text-slate-700">Daily List</span>
          <span className="text-xs text-slate-400">{dailyPlan.length} words today</span>
        </button>

        <button 
          onClick={() => setCurrentMode(AppMode.LEARN_PLAYER)}
          className="p-5 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center space-y-3 hover:border-emerald-200 transition-colors"
        >
          <div className="p-3 bg-emerald-50 rounded-full text-emerald-600">
            <Headphones size={24} />
          </div>
          <span className="font-semibold text-slate-700">Learn Mode</span>
          <span className="text-xs text-slate-400">Loop & Listen</span>
        </button>

         <button 
          onClick={() => setCurrentMode(AppMode.DICTATION_PLAYER)}
          className="col-span-2 p-5 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-row items-center justify-between px-8 hover:border-purple-200 transition-colors"
        >
          <div className="flex items-center space-x-4">
             <div className="p-3 bg-purple-50 rounded-full text-purple-600">
                <PenTool size={24} />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-slate-700">Dictation Test</span>
                <span className="text-xs text-slate-400">Test your spelling</span>
              </div>
          </div>
          <ChevronLeft className="rotate-180 text-slate-300" />
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <SettingsIcon className="w-5 h-5 mr-2 text-slate-500"/> Study Settings
        </h3>
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Select Book</label>
                <div className="flex rounded-md shadow-sm" role="group">
                    {Object.values(BookType).map((type, idx) => (
                        <button
                            key={type}
                            onClick={() => setSettings(s => ({ ...s, selectedBook: type }))}
                            className={`px-4 py-2 text-sm font-medium border first:rounded-l-lg last:rounded-r-lg flex-1 
                                ${settings.selectedBook === type 
                                    ? 'bg-blue-600 text-white border-blue-600' 
                                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                <span className="text-sm text-slate-600">Target Days</span>
                <div className="flex items-center space-x-2">
                    <button onClick={() => setSettings(s => ({...s, targetDays: Math.max(1, s.targetDays - 1)}))} className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200">-</button>
                    <span className="w-8 text-center font-medium">{settings.targetDays}</span>
                    <button onClick={() => setSettings(s => ({...s, targetDays: s.targetDays + 1}))} className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200">+</button>
                </div>
            </div>

            <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                <span className="text-sm text-slate-600">Loops per Word</span>
                <div className="flex items-center space-x-2">
                    <button onClick={() => setSettings(s => ({...s, loopsPerWord: Math.max(1, s.loopsPerWord - 1)}))} className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200">-</button>
                    <span className="w-8 text-center font-medium">{settings.loopsPerWord}</span>
                    <button onClick={() => setSettings(s => ({...s, loopsPerWord: s.loopsPerWord + 1}))} className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200">+</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );

  const renderTodayList = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800">Today's Words ({dailyPlan.length})</h2>
          <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">Swipe left to master</span>
      </div>
      
      {dailyPlan.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
            <CheckCircleIcon size={48} className="mx-auto mb-3 text-emerald-400 opacity-50"/>
            <p>All words for today are mastered!</p>
        </div>
      ) : (
        <div className="pb-20">
          {dailyPlan.map((word) => (
            <SwipeableRow key={word.id} onDelete={() => handleMarkMastered(word.id)}>
              <div className="p-4 flex flex-col bg-white">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-lg font-bold text-slate-800">{word.term}</span>
                        <span className="text-sm text-slate-400 ml-2">{word.phonetic}</span>
                    </div>
                </div>
                <p className="text-slate-600 mt-1">{word.definition}</p>
              </div>
            </SwipeableRow>
          ))}
        </div>
      )}
    </div>
  );

  const renderPlayer = (mode: 'LEARN' | 'DICTATION') => {
    const isLearn = mode === 'LEARN';
    const currentWord = dailyPlan[activeWordIndex];

    if (!currentWord) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
                 <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                    <Check size={32} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-800">Session Complete!</h2>
                 <p className="text-slate-500">You've finished your daily {isLearn ? 'learning' : 'dictation'}.</p>
                 <Button onClick={() => setCurrentMode(AppMode.DASHBOARD)}>Back to Dashboard</Button>
            </div>
        );
    }

    return (
      <div className="flex flex-col items-center justify-between h-[calc(100vh-140px)]">
        <div className="w-full pt-10 text-center space-y-8">
            <div className="space-y-2">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                    {isLearn ? 'Learning Mode' : 'Dictation Mode'}
                </h3>
                <p className="text-xs text-slate-300">
                    Word {activeWordIndex + 1} of {dailyPlan.length}
                </p>
            </div>

            <div className="py-10 relative flex justify-center">
                 {/* Visualizer Circle */}
                 {playerError ? (
                    <div className="w-48 h-48 mx-auto rounded-full bg-red-50 flex flex-col items-center justify-center text-red-500 px-4">
                        <AlertCircle size={32} className="mb-2" />
                        <span className="text-xs font-medium">{playerError}</span>
                    </div>
                 ) : isLoadingAudio ? (
                    <div className="w-40 h-40 mx-auto rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-600 animate-pulse">Generating...</span>
                    </div>
                 ) : (
                    <div className={`w-48 h-48 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${isPlaying ? 'bg-blue-50 shadow-xl scale-110' : 'bg-slate-50'}`}>
                        {isLearn ? (
                             <div className="text-center px-4">
                                <h1 className="text-3xl font-bold text-slate-800">{currentWord.term}</h1>
                                <p className="text-slate-500 mt-2 text-base line-clamp-3">{currentWord.definition}</p>
                             </div>
                        ) : (
                            <div className="text-center">
                                <Headphones size={64} className="text-slate-400 mb-2 mx-auto" />
                                {isPlaying && <p className="text-xs text-slate-400 animate-pulse">Playing...</p>}
                            </div>
                        )}
                    </div>
                 )}
            </div>
            
            {/* Dictation Hint */}
            {!isLearn && (
                <div className="h-16 flex items-center justify-center">
                    <p className="text-slate-400 text-sm bg-slate-100 px-4 py-2 rounded-full">
                        {playerError ? "Tap retry to continue" : "Listen and spell the word"}
                    </p>
                </div>
            )}
        </div>

        {/* Controls */}
        <div className="w-full bg-white rounded-3xl p-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
             <div className="flex items-center justify-center space-x-8">
                <button 
                    onClick={() => {
                        const prev = activeWordIndex - 1;
                        if(prev >= 0) {
                            stopAudio();
                            setActiveWordIndex(prev);
                            setIsPlaying(false); 
                        }
                    }}
                    className="p-3 text-slate-400 hover:text-slate-600"
                    disabled={activeWordIndex === 0}
                >
                    <ChevronLeft size={28} />
                </button>

                <button 
                    onClick={() => {
                        if (isPlaying) {
                            stopAudio();
                        } else {
                            if (isLearn) startLearnSession();
                            else startDictationSession();
                        }
                    }}
                    className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${isPlaying ? 'bg-amber-100 text-amber-600' : 'bg-blue-600 text-white'}`}
                >
                    {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                </button>

                 <button 
                    onClick={() => {
                         const next = activeWordIndex + 1;
                         if(next < dailyPlan.length) {
                             stopAudio();
                             setActiveWordIndex(next);
                             setIsPlaying(false);
                         }
                    }}
                    className="p-3 text-slate-400 hover:text-slate-600 rotate-180"
                    disabled={activeWordIndex >= dailyPlan.length - 1}
                >
                    <ChevronLeft size={28} />
                </button>
             </div>
             
             {isLearn && (
                 <div className="mt-6 flex justify-center text-xs text-slate-400 space-x-1">
                    <span>Playing loop</span>
                    <span className="font-bold text-slate-600">{loopCount + 1}</span>
                    <span>of</span>
                    <span className="font-bold text-slate-600">{settings.loopsPerWord}</span>
                 </div>
             )}
        </div>
      </div>
    );
  };

  // --- Main Render ---

  return (
    <div className="min-h-screen max-w-md mx-auto bg-slate-50 shadow-2xl overflow-hidden relative font-sans text-slate-900">
      
      {/* Header */}
      <header className="bg-white px-6 py-5 sticky top-0 z-20 flex items-center justify-between shadow-sm">
        {currentMode !== AppMode.DASHBOARD ? (
             <button onClick={() => {
                 stopAudio();
                 setCurrentMode(AppMode.DASHBOARD);
             }} className="p-1 -ml-2 text-slate-600 hover:bg-slate-100 rounded-full">
                 <ChevronLeft size={24} />
             </button>
        ) : (
            <div className="flex items-center space-x-2 text-blue-600">
                <div className="p-1.5 bg-blue-100 rounded-lg">
                    <RotateCw size={20} />
                </div>
                <span className="font-bold tracking-tight text-lg">Listenish</span>
            </div>
        )}
        
        <div className="text-sm font-medium bg-slate-100 px-3 py-1 rounded-full text-slate-600">
            {settings.selectedBook}
        </div>
      </header>

      {/* Content Area */}
      <main className="p-6 pb-24 min-h-[calc(100vh-80px)]">
         {currentMode === AppMode.DASHBOARD && renderDashboard()}
         {currentMode === AppMode.TODAY_LIST && renderTodayList()}
         {currentMode === AppMode.LEARN_PLAYER && renderPlayer('LEARN')}
         {currentMode === AppMode.DICTATION_PLAYER && renderPlayer('DICTATION')}
      </main>

    </div>
  );
};

// Helper for empty state icon
const CheckCircleIcon = ({ size, className }: {size:number, className?: string}) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export default App;
