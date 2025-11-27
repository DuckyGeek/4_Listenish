export enum BookType {
  GAOKAO = 'Gaokao',
  IELTS = 'IELTS',
  TOEFL = 'TOEFL'
}

export interface Word {
  id: string;
  term: string;
  phonetic: string;
  definition: string;
  example: string;
  mastered: boolean; // If true, skipped in future plans
}

export interface UserSettings {
  selectedBook: BookType;
  targetDays: number; // How many days to finish the book
  loopsPerWord: number; // For Learning Mode
  dictationInterval: number; // Seconds between words in Dictation
  startDate: string; // ISO date string
}

export enum AppMode {
  DASHBOARD = 'DASHBOARD',
  TODAY_LIST = 'TODAY_LIST',
  LEARN_PLAYER = 'LEARN_PLAYER',
  DICTATION_PLAYER = 'DICTATION_PLAYER',
  SETTINGS = 'SETTINGS'
}

export interface DailyStats {
  totalWords: number;
  masteredWords: number;
  remainingWords: number;
  dailyGoal: number;
}