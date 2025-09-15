/**
 * Utility functions to convert markdown text to speech-friendly text
 * Handles headings, lists, formatting, and other markdown elements
 * to create natural pauses and flow for text-to-speech systems
 */

interface MarkdownToSpeechOptions {
  addHeadingPauses?: boolean;
  addListPauses?: boolean;
  removeFormatting?: boolean;
  addSentenceBreaks?: boolean;
}

export class MarkdownToSpeechConverter {
  private options: Required<MarkdownToSpeechOptions>;

  constructor(options: MarkdownToSpeechOptions = {}) {
    this.options = {
      addHeadingPauses: true,
      addListPauses: true,
      removeFormatting: true,
      addSentenceBreaks: true,
      ...options
    };
  }

  /**
   * Convert markdown text to speech-friendly text
   */
  public convert(markdownText: string): string {
    console.log('[Markdown to Speech] Converting markdown to TTS-friendly text...');
    console.log('[Markdown to Speech] Original text length:', markdownText.length);

    let text = markdownText;

    // Step 1: Handle headings (convert # ## ### to text with commas)
    if (this.options.addHeadingPauses) {
      text = this.convertHeadings(text);
    }

    // Step 2: Handle lists (convert - * + to text with commas)
    if (this.options.addListPauses) {
      text = this.convertLists(text);
    }

    // Step 3: Remove formatting (bold, italic, code, links)
    if (this.options.removeFormatting) {
      text = this.removeFormatting(text);
    }

    // Step 4: Clean up and add sentence breaks
    if (this.options.addSentenceBreaks) {
      text = this.addSentenceBreaks(text);
    }

    // Step 5: Final cleanup
    text = this.finalCleanup(text);

    console.log('[Markdown to Speech] Converted text length:', text.length);
    console.log('[Markdown to Speech] Sample output:', text.substring(0, 150) + '...');

    return text;
  }

  /**
   * Convert headings to text with pauses
   */
  private convertHeadings(text: string): string {
    console.log('[Markdown to Speech] Converting headings...');
    
    // Handle different heading levels
    return text
      // H1: # Heading -> "Heading,"
      .replace(/^#{1}\s+(.+)$/gm, '$1,')
      // H2: ## Heading -> "Heading,"
      .replace(/^#{2}\s+(.+)$/gm, '$1,')
      // H3: ### Heading -> "Heading,"
      .replace(/^#{3}\s+(.+)$/gm, '$1,')
      // H4-H6: #### Heading -> "Heading,"
      .replace(/^#{4,6}\s+(.+)$/gm, '$1,');
  }

  /**
   * Convert lists to text with pauses
   */
  private convertLists(text: string): string {
    console.log('[Markdown to Speech] Converting lists...');
    
    return text
      // Unordered lists: - item or * item or + item -> "item,"
      .replace(/^[\s]*[-\*\+]\s+(.+)$/gm, '$1,')
      // Ordered lists: 1. item or 1) item -> "item,"
      .replace(/^[\s]*\d+[\.\)]\s+(.+)$/gm, '$1,');
  }

  /**
   * Remove markdown formatting while keeping text
   */
  private removeFormatting(text: string): string {
    console.log('[Markdown to Speech] Removing formatting...');
    
    return text
      // Bold: **text** or __text__ -> text
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/__(.*?)__/g, '$1')
      // Italic: *text* or _text_ -> text
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/_(.*?)_/g, '$1')
      // Strikethrough: ~~text~~ -> text
      .replace(/~~(.*?)~~/g, '$1')
      // Inline code: `text` -> text
      .replace(/`([^`]+)`/g, '$1')
      // Links: [text](url) -> text
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
      // Images: ![alt](url) -> alt
      .replace(/!\[([^\]]*)\]\([^\)]+\)/g, '$1')
      // Reference links: [text][ref] -> text
      .replace(/\[([^\]]+)\]\[[^\]]+\]/g, '$1');
  }

  /**
   * Add natural sentence breaks and pauses
   */
  private addSentenceBreaks(text: string): string {
    console.log('[Markdown to Speech] Adding sentence breaks...');
    
    return text
      // Add pause after colons (for definitions)
      .replace(/:\s*(?=[A-Z])/g, ': ')
      // Ensure proper spacing after periods
      .replace(/\.\s*(?=[A-Z])/g, '. ')
      // Add pause after semicolons
      .replace(/;\s*(?=[A-Z])/g, '; ');
  }

  /**
   * Final cleanup of the text
   */
  private finalCleanup(text: string): string {
    console.log('[Markdown to Speech] Final cleanup...');
    
    return text
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, '')
      .replace(/~~~[\s\S]*?~~~/g, '')
      // Remove horizontal rules
      .replace(/^[-\*_]{3,}$/gm, '')
      // Remove HTML tags
      .replace(/<[^>]+>/g, '')
      // Clean up multiple spaces
      .replace(/\s+/g, ' ')
      // Clean up multiple commas
      .replace(/,+/g, ',')
      // Clean up multiple periods
      .replace(/\.+/g, '.')
      // Remove leading/trailing whitespace from each line
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('\n')
      // Final trim
      .trim();
  }
}

/**
 * Quick conversion function for common use cases
 */
export function markdownToSpeech(markdownText: string, options?: MarkdownToSpeechOptions): string {
  const converter = new MarkdownToSpeechConverter(options);
  return converter.convert(markdownText);
}

/**
 * Preset for blog content conversion
 */
export function convertBlogToSpeech(markdownText: string): string {
  return markdownToSpeech(markdownText, {
    addHeadingPauses: true,
    addListPauses: true,
    removeFormatting: true,
    addSentenceBreaks: true
  });
}

/**
 * Test the conversion with the provided example
 */
export function testConversion(): void {
  const exampleText = `# Cạnh tranh trong nền kinh tế thị trường

## 1. Cạnh tranh trong nội bộ ngành

### Khái niệm
Là cạnh tranh giữa các doanh nghiệp trong cùng một ngành hàng hóa.

### Biện pháp cạnh tranh
* Giảm giá bán, khuyến mãi
* Nâng cao chất lượng, mẫu mã sản phẩm
* Tối ưu hóa chi phí để hạ giá trị cá biệt`;

  console.log('=== TESTING MARKDOWN TO SPEECH CONVERSION ===');
  console.log('Original:', exampleText);
  console.log('Converted:', convertBlogToSpeech(exampleText));
  console.log('=== END TEST ===');
}
