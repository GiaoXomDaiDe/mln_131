import axios from 'axios';

interface AivoovTtsResponse {
  status: boolean;
  message: string;
  audio: string;  // Base64 encoded audio
}

interface CachedAudio {
  url: string;
  blogId: string;
  createdAt: number;
  audio?: HTMLAudioElement;
}

class AivoovTtsService {
  private static instance: AivoovTtsService;
  private cache: Map<string, CachedAudio> = new Map();
  private readonly API_URL = 'https://aivoov.com/api/v8/create';
  private readonly API_KEY = '6189ac7e-c3c0-46a5-bcc2-187ff214982e';
  private readonly VOICE_ID = 'f2f08621-cc68-40b8-a19f-1ca21d530893';
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  private constructor() {}

  public static getInstance(): AivoovTtsService {
    if (!AivoovTtsService.instance) {
      AivoovTtsService.instance = new AivoovTtsService();
    }
    return AivoovTtsService.instance;
  }

  private getCacheKey(blogId: string, voiceId: string = this.VOICE_ID): string {
    return `${blogId}_${voiceId}`;
  }

  private isCacheValid(cachedAudio: CachedAudio): boolean {
    const now = Date.now();
    return now - cachedAudio.createdAt < this.CACHE_DURATION;
  }

  private processTextForTts(text: string): string {
    console.log('[Aivoov TTS] Processing text for speech synthesis...');
    console.log('[Aivoov TTS] Original text length:', text.length);
    
    // Split into words and count up to 150 words
    const words = text.trim().split(/\s+/);
    console.log('[Aivoov TTS] Total words in original text:', words.length);
    
    // Take only first 150 words but keep original formatting and punctuation
    const limitedWords = words.slice(0, 150);
    const result = limitedWords.join(' ');
    
    console.log('[Aivoov TTS] Words taken:', limitedWords.length);
    console.log('[Aivoov TTS] Final text length:', result.length);
    console.log('[Aivoov TTS] Final text (first 100 chars):', result.substring(0, 100) + '...');
    console.log('[Aivoov TTS] Text kept all punctuation for proper voice pausing');
    
    return result.trim();
  }

  private base64ToBlob(base64: string, mimeType: string = 'audio/mpeg'): Blob {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  }

  public async generateSpeech(
    text: string, 
    blogId: string, 
    voiceId: string = this.VOICE_ID
  ): Promise<HTMLAudioElement> {
    const cacheKey = this.getCacheKey(blogId, voiceId);
    console.log('[Aivoov TTS] Cache key:', cacheKey);
    
    // Check if we have valid cached audio
    if (this.cache.has(cacheKey)) {
      console.log('[Aivoov TTS] Found cached audio for this blog');
      const cachedAudio = this.cache.get(cacheKey)!;
      if (this.isCacheValid(cachedAudio) && cachedAudio.audio) {
        console.log('[Aivoov TTS] Using valid cached audio - no API call needed');
        return cachedAudio.audio;
      } else {
        console.log('[Aivoov TTS] Cache expired or invalid, removing from cache');
        this.cache.delete(cacheKey);
      }
    } else {
      console.log('[Aivoov TTS] No cached audio found for this blog');
    }

    try {
      // Process text to first 200 letters only
      const processedText = this.processTextForTts(text);
      
      console.log('[Aivoov TTS] ===== MAKING AIVOOV API REQUEST =====');
      console.log('[Aivoov TTS] URL:', this.API_URL);
      console.log('[Aivoov TTS] API Key:', this.API_KEY);
      console.log('[Aivoov TTS] Voice ID:', voiceId);
      console.log('[Aivoov TTS] Processed text:', processedText);
      
      // Prepare form data for Aivoov API
      const formData = new URLSearchParams();
      formData.append('voice_id[]', voiceId);
      formData.append('transcribe_text[]', processedText);
      formData.append('transcribe_ssml_pitch_rate[]', 'default');
      formData.append('transcribe_ssml_spk_rate[]', 'default');
      formData.append('transcribe_ssml_volume[]', 'default');
      
      console.log('[Aivoov TTS] Form data:', formData.toString());
      console.log('[Aivoov TTS] ===== SENDING REQUEST =====');
      
      const response = await axios({
        method: 'POST',
        url: this.API_URL,
        headers: {
          'X-API-KEY': this.API_KEY,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: formData,
        timeout: 15000, // 15 second timeout
      });

      const result: AivoovTtsResponse = response.data;
      
      // Print the COMPLETE response for debugging
      console.log('[Aivoov TTS] ===== COMPLETE API RESPONSE =====');
      console.log('[Aivoov TTS] Full response object:', JSON.stringify(result, null, 2));
      console.log('[Aivoov TTS] Response keys:', Object.keys(result));
      console.log('[Aivoov TTS] Status field:', result.status);
      console.log('[Aivoov TTS] Message field:', result.message);
      console.log('[Aivoov TTS] Audio field length:', result.audio ? result.audio.length : 'null/undefined');
      console.log('[Aivoov TTS] ===== END RESPONSE =====');
      
      if (!result.status) {
        throw new Error(result.message || 'Aivoov TTS API error');
      }

      if (!result.audio) {
        throw new Error('No audio data received from Aivoov API');
      }

      console.log('[Aivoov TTS] Converting Base64 audio to blob...');
      
      // Convert Base64 to blob and create object URL
      const audioBlob = this.base64ToBlob(result.audio);
      const audioUrl = URL.createObjectURL(audioBlob);
      
      console.log('[Aivoov TTS] Audio blob created, size:', audioBlob.size, 'bytes');
      console.log('[Aivoov TTS] Object URL created:', audioUrl);
      
      // Create audio element 
      const audio = new Audio(audioUrl);
      console.log('[Aivoov TTS] Audio element created with object URL');
      console.log('[Aivoov TTS] Audio element ready for playback');
      
      // Cache the audio
      const cachedAudio: CachedAudio = {
        url: audioUrl,
        blogId,
        createdAt: Date.now(),
        audio,
      };
      
      this.cache.set(cacheKey, cachedAudio);
      console.log('[Aivoov TTS] Audio cached successfully with key:', cacheKey);
      console.log('[Aivoov TTS] Cache now contains', this.cache.size, 'items');
      
      return audio;
    } catch (error) {
      console.error('[Aivoov TTS] Service Error:', error);
      
      // Improve error messages
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          throw new Error('Aivoov TTS API timeout. Please try again.');
        }
        if (error.response?.status === 401) {
          throw new Error('Aivoov TTS API key invalid or expired.');
        }
        if (error.response?.status === 403) {
          throw new Error('Aivoov TTS API access forbidden. Check your API key.');
        }
        if (error.response?.status && error.response.status >= 500) {
          throw new Error('Aivoov TTS server error. Please try again later.');
        }
      }
      
      throw error;
    }
  }

  public clearCache(): void {
    this.cache.clear();
  }

  public removeBlogFromCache(blogId: string): void {
    for (const [key, cachedAudio] of this.cache.entries()) {
      if (cachedAudio.blogId === blogId) {
        this.cache.delete(key);
      }
    }
  }

  public getCacheInfo(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    };
  }
}

export default AivoovTtsService;
