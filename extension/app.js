/**
 * VibeKick - Auto-Enhance Your Prompts
 * Type anything → Get a better prompt → Copy
 */

class VibeKick {
  constructor() {
    this.enhanceLevel = 0; // Track enhancement iterations
    this.init();
  }

  init() {
    this.bindElements();
    this.bindEvents();
  }

  bindElements() {
    this.inputText = document.getElementById('input-text');
    this.outputText = document.getElementById('output-text');
    this.enhanceInputBtn = document.getElementById('enhance-input-btn');
    this.enhanceOutputBtn = document.getElementById('enhance-output-btn');
    this.copyBtn = document.getElementById('copy-btn');
    this.copyFeedback = document.getElementById('copy-feedback');
  }

  bindEvents() {
    // Auto-enhance as user types (debounced)
    let debounceTimer;
    this.inputText.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        this.enhanceLevel = 0;
        this.autoEnhance();
      }, 300);
    });

    // Enhance buttons
    this.enhanceInputBtn.addEventListener('click', () => {
      this.enhanceInput();
    });

    this.enhanceOutputBtn.addEventListener('click', () => {
      this.enhanceOutput();
    });

    // Copy button
    this.copyBtn.addEventListener('click', () => {
      this.copyPrompt();
    });
  }

  detectIntent(text) {
    const lower = text.toLowerCase();

    // Debug/Fix patterns
    if (/\b(fix|bug|error|issue|broken|not working|crash|fail|debug)\b/.test(lower)) {
      return 'debug';
    }
    // Explain patterns
    if (/\b(explain|what is|what does|how does|why|understand|mean)\b/.test(lower)) {
      return 'explain';
    }
    // Create/Build patterns
    if (/\b(create|build|make|add|implement|new|generate|write)\b/.test(lower)) {
      return 'create';
    }
    // Refactor patterns
    if (/\b(refactor|improve|optimize|clean|better|simplify|update)\b/.test(lower)) {
      return 'refactor';
    }
    // Test patterns
    if (/\b(test|spec|coverage|unit test|e2e|integration)\b/.test(lower)) {
      return 'test';
    }
    // Review patterns
    if (/\b(review|check|analyze|evaluate|audit)\b/.test(lower)) {
      return 'review';
    }

    return 'general';
  }

  autoEnhance() {
    const input = this.inputText.value.trim();

    if (!input) {
      this.outputText.value = '';
      return;
    }

    const intent = this.detectIntent(input);
    let enhanced = this.generateEnhancedPrompt(input, intent);

    this.outputText.value = enhanced;
  }

  generateEnhancedPrompt(input, intent) {
    const enhancements = {
      debug: {
        prefix: "I need help debugging this issue: ",
        suffix: "\n\nPlease:\n1. Identify the root cause\n2. Explain why this is happening\n3. Provide a working fix\n4. Suggest how to prevent this in the future"
      },
      explain: {
        prefix: "Please explain this clearly: ",
        suffix: "\n\nProvide:\n1. A simple explanation\n2. A practical example\n3. Common use cases or gotchas"
      },
      create: {
        prefix: "Help me build this: ",
        suffix: "\n\nInclude:\n1. Complete, working code\n2. Brief explanation of the approach\n3. Any important considerations"
      },
      refactor: {
        prefix: "Help me improve this code: ",
        suffix: "\n\nFocus on:\n1. Readability and maintainability\n2. Performance if applicable\n3. Best practices\n\nExplain each change you make."
      },
      test: {
        prefix: "Write tests for this: ",
        suffix: "\n\nInclude:\n1. Happy path tests\n2. Edge cases\n3. Error scenarios\n\nUse descriptive test names."
      },
      review: {
        prefix: "Review this code: ",
        suffix: "\n\nCheck for:\n1. Bugs or potential issues\n2. Performance concerns\n3. Best practice violations\n4. Security issues\n\nProvide specific suggestions."
      },
      general: {
        prefix: "",
        suffix: "\n\nProvide a complete solution with clear explanations."
      }
    };

    const e = enhancements[intent];

    // Clean up input - capitalize first letter if needed
    let cleanInput = input;
    if (cleanInput.length > 0 && cleanInput[0] === cleanInput[0].toLowerCase()) {
      cleanInput = cleanInput.charAt(0).toUpperCase() + cleanInput.slice(1);
    }

    // Add period if missing
    if (!/[.!?]$/.test(cleanInput)) {
      cleanInput += '.';
    }

    return e.prefix + cleanInput + e.suffix;
  }

  enhanceInput() {
    const input = this.inputText.value.trim();
    if (!input) return;

    // Make the input more specific/detailed
    const expansions = [
      { pattern: /\bfix\b/gi, replacement: "fix and debug" },
      { pattern: /\berror\b/gi, replacement: "error/exception" },
      { pattern: /\bcreate\b/gi, replacement: "create and implement" },
      { pattern: /\badd\b/gi, replacement: "add and integrate" },
      { pattern: /\btest\b/gi, replacement: "write comprehensive tests for" },
      { pattern: /\bexplain\b/gi, replacement: "explain in detail" },
      { pattern: /\bimprove\b/gi, replacement: "improve and optimize" },
    ];

    let enhanced = input;
    expansions.forEach(({ pattern, replacement }) => {
      enhanced = enhanced.replace(pattern, replacement);
    });

    // Add context hints if short
    if (enhanced.split(' ').length < 5) {
      enhanced += " (include all relevant code and context)";
    }

    this.inputText.value = enhanced;
    this.autoEnhance();
  }

  enhanceOutput() {
    this.enhanceLevel++;
    const current = this.outputText.value.trim();
    if (!current) return;

    const additions = [
      "\n\nAdditional requirements:\n- Follow best practices and conventions\n- Handle edge cases appropriately\n- Include error handling",
      "\n\n- Use modern syntax and patterns\n- Make the code production-ready\n- Consider performance implications",
      "\n\n- Add helpful comments for complex logic\n- Ensure the solution is maintainable\n- Consider accessibility if applicable",
    ];

    const additionIndex = Math.min(this.enhanceLevel - 1, additions.length - 1);

    if (this.enhanceLevel <= additions.length) {
      this.outputText.value = current + additions[additionIndex];
    }

    // Visual feedback that we've maxed out
    if (this.enhanceLevel >= additions.length) {
      this.enhanceOutputBtn.textContent = '✓ Fully Enhanced';
      setTimeout(() => {
        this.enhanceOutputBtn.textContent = '✨ Auto Enhance';
      }, 1500);
    }
  }

  async copyPrompt() {
    const text = this.outputText.value.trim();
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);

      this.copyFeedback.classList.remove('hidden');
      this.copyBtn.textContent = '✓ Copied!';

      setTimeout(() => {
        this.copyFeedback.classList.add('hidden');
        this.copyBtn.textContent = '📋 Copy Prompt';
      }, 2000);

    } catch (err) {
      console.error('Failed to copy:', err);
      this.copyBtn.textContent = '❌ Failed';
      setTimeout(() => {
        this.copyBtn.textContent = '📋 Copy Prompt';
      }, 2000);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.vibeKick = new VibeKick();
});
