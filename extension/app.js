/**
 * VibeKick - Auto-Enhance Your Prompts with Gamification!
 * Type anything → Get a better prompt → Power up → Copy → Celebrate!
 */

class VibeKick {
  constructor() {
    this.powerLevel = 0;
    this.maxPower = 5;
    this.copiedCount = 0;
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
    this.suggestions = document.getElementById('suggestions');
    this.powerFill = document.getElementById('power-fill');
    this.powerLevelDisplay = document.getElementById('power-level');
    this.achievement = document.getElementById('achievement');
    this.achievementText = document.getElementById('achievement-text');
    this.confettiContainer = document.getElementById('confetti-container');
  }

  bindEvents() {
    // Auto-enhance as user types (debounced)
    let debounceTimer;
    this.inputText.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        this.resetPower();
        this.autoEnhance();
      }, 300);
    });

    // Suggestion chips
    this.suggestions.addEventListener('click', (e) => {
      if (e.target.classList.contains('chip')) {
        this.inputText.value = e.target.dataset.prompt;
        this.resetPower();
        this.autoEnhance();
        this.inputText.focus();
      }
    });

    // Enhance buttons
    this.enhanceInputBtn.addEventListener('click', () => {
      this.enhanceInput();
    });

    this.enhanceOutputBtn.addEventListener('click', () => {
      this.powerUp();
    });

    // Copy button
    this.copyBtn.addEventListener('click', () => {
      this.copyPrompt();
    });
  }

  detectIntent(text) {
    const lower = text.toLowerCase();

    if (/\b(fix|bug|error|issue|broken|not working|crash|fail|debug)\b/.test(lower)) {
      return 'debug';
    }
    if (/\b(explain|what is|what does|how does|why|understand|mean)\b/.test(lower)) {
      return 'explain';
    }
    if (/\b(create|build|make|add|implement|new|generate|write)\b/.test(lower)) {
      return 'create';
    }
    if (/\b(refactor|improve|optimize|clean|better|simplify|update)\b/.test(lower)) {
      return 'refactor';
    }
    if (/\b(test|spec|coverage|unit test|e2e|integration)\b/.test(lower)) {
      return 'test';
    }
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
    this.addPower(1);
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

    let cleanInput = input;
    if (cleanInput.length > 0 && cleanInput[0] === cleanInput[0].toLowerCase()) {
      cleanInput = cleanInput.charAt(0).toUpperCase() + cleanInput.slice(1);
    }

    if (!/[.!?]$/.test(cleanInput)) {
      cleanInput += '.';
    }

    return e.prefix + cleanInput + e.suffix;
  }

  enhanceInput() {
    const input = this.inputText.value.trim();
    if (!input) return;

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

    if (enhanced.split(' ').length < 5) {
      enhanced += " (include all relevant code and context)";
    }

    this.inputText.value = enhanced;
    this.autoEnhance();
    this.showMiniConfetti();
  }

  powerUp() {
    if (this.powerLevel >= this.maxPower) {
      this.showAchievement("🔥 MAX POWER!", "You're at maximum power!");
      return;
    }

    const current = this.outputText.value.trim();
    if (!current) return;

    const powerUps = [
      "\n\nAdditional requirements:\n- Follow best practices and conventions\n- Handle edge cases appropriately\n- Include error handling",
      "\n\n- Use modern syntax and patterns\n- Make the code production-ready\n- Consider performance implications",
      "\n\n- Add helpful comments for complex logic\n- Ensure the solution is maintainable\n- Consider accessibility if applicable",
      "\n\n- Include TypeScript types if applicable\n- Follow SOLID principles\n- Write clean, self-documenting code",
      "\n\n- Consider security implications\n- Add input validation\n- Handle all error states gracefully"
    ];

    const powerIndex = this.powerLevel;
    if (powerIndex < powerUps.length) {
      this.outputText.value = current + powerUps[powerIndex];
      this.addPower(1);
      this.outputText.classList.add('powered-up');

      // Shake effect
      this.outputText.classList.add('shake');
      setTimeout(() => this.outputText.classList.remove('shake'), 300);

      // Mini celebration
      this.showMiniConfetti();

      if (this.powerLevel >= this.maxPower) {
        this.enhanceOutputBtn.textContent = '🔥 MAX POWER!';
        this.enhanceOutputBtn.classList.add('maxed');
        this.showAchievement("⚡ SUPERCHARGED!", "Maximum power reached!");
        this.launchConfetti();
      }
    }
  }

  addPower(amount) {
    this.powerLevel = Math.min(this.powerLevel + amount, this.maxPower);
    this.updatePowerMeter();
  }

  resetPower() {
    this.powerLevel = 0;
    this.updatePowerMeter();
    this.outputText.classList.remove('powered-up');
    this.enhanceOutputBtn.textContent = '🚀 Power Up!';
    this.enhanceOutputBtn.classList.remove('maxed');
  }

  updatePowerMeter() {
    const percentage = (this.powerLevel / this.maxPower) * 100;
    this.powerFill.style.width = `${percentage}%`;
    this.powerLevelDisplay.textContent = this.powerLevel;

    if (this.powerLevel >= this.maxPower) {
      this.powerFill.classList.add('max');
    } else {
      this.powerFill.classList.remove('max');
    }
  }

  async copyPrompt() {
    const text = this.outputText.value.trim();
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      this.copiedCount++;

      // Success animation
      this.copyBtn.classList.add('success');
      this.copyBtn.textContent = '✓ Copied!';

      // Celebration based on power level
      if (this.powerLevel >= this.maxPower) {
        this.launchConfetti();
        this.showAchievement("🏆 LEGENDARY!", "Max power prompt copied!");
      } else if (this.powerLevel >= 3) {
        this.launchConfetti();
        this.showAchievement("🎯 NICE!", "Powered-up prompt copied!");
      } else {
        this.showMiniConfetti();
        this.showAchievement("✅ COPIED!", "Ready to paste!");
      }

      // Milestone achievements
      if (this.copiedCount === 5) {
        setTimeout(() => this.showAchievement("🌟 FIVE STAR!", "5 prompts copied!"), 1500);
      } else if (this.copiedCount === 10) {
        setTimeout(() => this.showAchievement("🚀 POWER USER!", "10 prompts copied!"), 1500);
      }

      setTimeout(() => {
        this.copyBtn.classList.remove('success');
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

  showAchievement(icon, text) {
    this.achievement.querySelector('.achievement-icon').textContent = icon;
    this.achievementText.textContent = text;
    this.achievement.classList.remove('hidden');
    this.achievement.classList.add('show');

    setTimeout(() => {
      this.achievement.classList.remove('show');
    }, 2500);
  }

  launchConfetti() {
    const colors = ['#00d4ff', '#00ff88', '#ff00ff', '#ffff00', '#ff6600'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      setTimeout(() => {
        this.createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
      }, i * 20);
    }
  }

  showMiniConfetti() {
    const colors = ['#00d4ff', '#00ff88'];
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        this.createConfettiPiece(colors[Math.floor(Math.random() * colors.length)]);
      }, i * 30);
    }
  }

  createConfettiPiece(color) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.backgroundColor = color;
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.animationDuration = `${2 + Math.random() * 2}s`;

    this.confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.vibeKick = new VibeKick();
});
