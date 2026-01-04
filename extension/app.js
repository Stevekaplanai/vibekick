/**
 * VibeKick - AI-Powered Prompt Enhancement
 * Type anything → AI enhances it → Power up → Copy → Celebrate!
 */

class VibeKick {
  constructor() {
    this.powerLevel = 0;
    this.maxPower = 5;
    this.copiedCount = 0;
    this.apiKey = null;
    this.init();
  }

  async init() {
    this.bindElements();
    this.bindEvents();
    await this.loadApiKey();
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
    this.settingsBtn = document.getElementById('settings-btn');
    this.settingsPanel = document.getElementById('settings-panel');
    this.closeSettings = document.getElementById('close-settings');
    this.apiKeyInput = document.getElementById('api-key');
    this.saveSettingsBtn = document.getElementById('save-settings');
    this.loading = document.getElementById('loading');
  }

  bindEvents() {
    // Auto-enhance as user types (debounced)
    let debounceTimer;
    this.inputText.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        this.resetPower();
        this.localEnhance();
      }, 300);
    });

    // Suggestion chips
    this.suggestions.addEventListener('click', (e) => {
      if (e.target.classList.contains('chip')) {
        this.inputText.value = e.target.dataset.prompt;
        this.resetPower();
        this.localEnhance();
        this.inputText.focus();
      }
    });

    // AI Enhance button - calls LLM
    this.enhanceInputBtn.addEventListener('click', () => {
      this.aiEnhance();
    });

    // Power Up button - calls LLM
    this.enhanceOutputBtn.addEventListener('click', () => {
      this.powerUp();
    });

    // Copy button
    this.copyBtn.addEventListener('click', () => {
      this.copyPrompt();
    });

    // Settings
    this.settingsBtn.addEventListener('click', () => {
      this.settingsPanel.classList.toggle('hidden');
    });

    this.closeSettings.addEventListener('click', () => {
      this.settingsPanel.classList.add('hidden');
    });

    this.saveSettingsBtn.addEventListener('click', () => {
      this.saveApiKey();
    });
  }

  async loadApiKey() {
    try {
      const result = await chrome.storage.local.get(['openai_api_key']);
      if (result.openai_api_key) {
        this.apiKey = result.openai_api_key;
        this.apiKeyInput.value = '••••••••••••••••';
      }
    } catch (e) {
      console.log('Storage not available, using local storage');
      this.apiKey = localStorage.getItem('openai_api_key');
      if (this.apiKey) {
        this.apiKeyInput.value = '••••••••••••••••';
      }
    }
  }

  async saveApiKey() {
    const key = this.apiKeyInput.value.trim();
    if (!key || key === '••••••••••••••••') {
      this.showAchievement("⚠️", "Enter a valid API key");
      return;
    }

    this.apiKey = key;

    try {
      await chrome.storage.local.set({ openai_api_key: key });
    } catch (e) {
      localStorage.setItem('openai_api_key', key);
    }

    this.apiKeyInput.value = '••••••••••••••••';
    this.settingsPanel.classList.add('hidden');
    this.showAchievement("✅", "API key saved!");
  }

  // Local enhancement (no API, instant)
  localEnhance() {
    const input = this.inputText.value.trim();
    if (!input) {
      this.outputText.value = '';
      return;
    }

    const intent = this.detectIntent(input);
    const enhanced = this.generateLocalPrompt(input, intent);
    this.outputText.value = enhanced;
    this.addPower(1);
  }

  detectIntent(text) {
    const lower = text.toLowerCase();
    if (/\b(fix|bug|error|issue|broken|not working|crash|fail|debug)\b/.test(lower)) return 'debug';
    if (/\b(explain|what is|what does|how does|why|understand|mean)\b/.test(lower)) return 'explain';
    if (/\b(create|build|make|add|implement|new|generate|write)\b/.test(lower)) return 'create';
    if (/\b(refactor|improve|optimize|clean|better|simplify|update)\b/.test(lower)) return 'refactor';
    if (/\b(test|spec|coverage|unit test|e2e|integration)\b/.test(lower)) return 'test';
    if (/\b(review|check|analyze|evaluate|audit)\b/.test(lower)) return 'review';
    return 'general';
  }

  generateLocalPrompt(input, intent) {
    const templates = {
      debug: `I need help debugging: ${input}\n\nPlease identify the root cause and provide a fix.`,
      explain: `Please explain: ${input}\n\nProvide a clear explanation with examples.`,
      create: `Help me build: ${input}\n\nInclude complete, working code.`,
      refactor: `Help me improve: ${input}\n\nFocus on readability and best practices.`,
      test: `Write tests for: ${input}\n\nInclude edge cases and error scenarios.`,
      review: `Review this: ${input}\n\nCheck for bugs, performance, and best practices.`,
      general: `${input}\n\nProvide a complete solution with explanations.`
    };
    return templates[intent];
  }

  // AI Enhancement - calls OpenAI API
  async aiEnhance() {
    const input = this.inputText.value.trim();
    if (!input) {
      this.showAchievement("⚠️", "Type something first!");
      return;
    }

    if (!this.apiKey) {
      this.settingsPanel.classList.remove('hidden');
      this.showAchievement("🔑", "Add your OpenAI API key");
      return;
    }

    this.showLoading(true);

    try {
      const enhanced = await this.callOpenAI(
        `You are an expert prompt engineer. Take this rough idea and transform it into a detailed, effective prompt that will get the best results from an AI coding assistant.

User's rough idea: "${input}"

Create a comprehensive prompt that:
1. Clearly states the goal
2. Provides necessary context
3. Specifies desired output format
4. Includes any important constraints or requirements

Return ONLY the enhanced prompt, no explanations.`,
        300
      );

      this.outputText.value = enhanced;
      this.addPower(2);
      this.showMiniConfetti();
      this.showAchievement("✨", "AI Enhanced!");

    } catch (error) {
      this.showAchievement("❌", error.message);
    } finally {
      this.showLoading(false);
    }
  }

  // Power Up - adds more detail via AI
  async powerUp() {
    const current = this.outputText.value.trim();
    if (!current) {
      this.showAchievement("⚠️", "Enhance first!");
      return;
    }

    if (this.powerLevel >= this.maxPower) {
      this.showAchievement("🔥", "MAX POWER!");
      this.launchConfetti();
      return;
    }

    if (!this.apiKey) {
      this.settingsPanel.classList.remove('hidden');
      this.showAchievement("🔑", "Add your OpenAI API key");
      return;
    }

    this.showLoading(true);

    const powerUpPrompts = [
      "Add specific requirements for error handling and edge cases.",
      "Add requirements for code quality: types, documentation, and best practices.",
      "Add performance considerations and optimization requirements.",
      "Add security requirements and input validation needs.",
      "Add testing requirements and acceptance criteria."
    ];

    try {
      const powerPrompt = powerUpPrompts[this.powerLevel] || powerUpPrompts[0];

      const enhanced = await this.callOpenAI(
        `You are an expert prompt engineer. Take this prompt and make it more powerful by adding more specific requirements.

Current prompt:
"${current}"

Enhancement focus: ${powerPrompt}

Return the enhanced prompt with the new requirements seamlessly integrated. Return ONLY the enhanced prompt.`,
        500
      );

      this.outputText.value = enhanced;
      this.addPower(1);
      this.outputText.classList.add('powered-up');
      this.outputText.classList.add('shake');
      setTimeout(() => this.outputText.classList.remove('shake'), 300);
      this.showMiniConfetti();

      if (this.powerLevel >= this.maxPower) {
        this.enhanceOutputBtn.textContent = '🔥 MAX POWER!';
        this.enhanceOutputBtn.classList.add('maxed');
        this.showAchievement("⚡", "SUPERCHARGED!");
        this.launchConfetti();
      } else {
        this.showAchievement("🚀", `Power Level ${this.powerLevel}!`);
      }

    } catch (error) {
      this.showAchievement("❌", error.message);
    } finally {
      this.showLoading(false);
    }
  }

  async callOpenAI(prompt, maxTokens = 300) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: maxTokens,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  }

  showLoading(show) {
    if (show) {
      this.loading.classList.remove('hidden');
    } else {
      this.loading.classList.add('hidden');
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

      this.copyBtn.classList.add('success');
      this.copyBtn.textContent = '✓ Copied!';

      if (this.powerLevel >= this.maxPower) {
        this.launchConfetti();
        this.showAchievement("🏆", "LEGENDARY prompt copied!");
      } else if (this.powerLevel >= 3) {
        this.launchConfetti();
        this.showAchievement("🎯", "Powered-up prompt copied!");
      } else {
        this.showMiniConfetti();
        this.showAchievement("✅", "Ready to paste!");
      }

      if (this.copiedCount === 5) {
        setTimeout(() => this.showAchievement("🌟", "5 prompts copied!"), 1500);
      } else if (this.copiedCount === 10) {
        setTimeout(() => this.showAchievement("🚀", "POWER USER!"), 1500);
      }

      setTimeout(() => {
        this.copyBtn.classList.remove('success');
        this.copyBtn.textContent = '📋 Copy Prompt';
      }, 2000);

    } catch (err) {
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
    for (let i = 0; i < 50; i++) {
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
