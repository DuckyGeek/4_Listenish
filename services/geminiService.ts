
import { GoogleGenAI, Modality } from "@google/genai";

// Helpers for Audio Decoding
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const numChannels = 1;
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

/**
 * Generates speech for the given text using Gemini TTS.
 * Returns an AudioBuffer ready to play.
 */
export async function generateSpeech(
  text: string,
  audioContext: AudioContext
): Promise<AudioBuffer> {
  try {
    // Initialize client INSIDE the function to ensure we use the latest process.env.API_KEY
    // This prevents issues where the key might be injected after module load.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            // Kore is generally a good balanced voice.
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      throw new Error("No audio data received from Gemini.");
    }

    const audioBytes = decode(base64Audio);
    return await decodeAudioData(audioBytes, audioContext);

  } catch (error) {
    console.error("Gemini TTS Error:", error);
    throw error;
  }
}

/**
 * Constructs the text prompt for the "Learning Mode"
 */
export function constructLearningPrompt(word: string, definition: string): string {
  // Separate letters with commas to force pauses and distinct pronunciation
  // e.g., "A, B, S, O, L, U, T, E"
  const spelledOut = word.toUpperCase().split('').join(', ');
  
  // Remove common part-of-speech markers for the reading prompt so the AI doesn't say "noun" or "n dot"
  const cleanDefinition = definition
    .replace(/\b(n|v|adj|adv|prep|conj|pron|vt|vi|num|art|aux)\./g, '') // English abbreviations
    .replace(/\[.*?\]/g, '') // Remove [建] etc
    .trim();

  return `
    You are an expert English teacher. Generate audio for this vocabulary lesson strictly following these steps:

    1. **Read the Word**: Read the English word "${word}" naturally with a standard British accent.
    
    2. [Pause for 0.5s]

    3. **Spell the Word**: Spell the word letter-by-letter.
       - **CRITICAL**: Pronounce each letter individually by its Alphabet Name. 
         - 'A' must be pronounced /eɪ/ (as in "Ace"). Do NOT say "ah".
         - 'Z' must be pronounced /zɛd/ (Zed).
       - **Speed**: Speak slowly (approx 0.8x speed) and rhythmically.
       - **Format**: Read it exactly like this sequence: ${spelledOut}.
       - Do NOT group letters together (e.g. do not say "d-o-u-b-l-e  o"). Read every letter distinctively.

    4. [Pause for 0.5s]

    5. **Read Definition**: Switch to standard Mandarin Chinese (Putonghua) to read the definition.
       - Read strictly ONLY the meaning: "${cleanDefinition}".
       - Do NOT read the part of speech (like "n.", "adj.", "verb").
  `;
}

/**
 * Constructs simple dictation prompt
 */
export function constructDictationPrompt(word: string): string {
    return `Please read the following word clearly with a standard British English accent: ${word}`;
}
