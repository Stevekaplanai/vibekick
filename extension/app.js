/**
 * VibeKick - Main Application Logic
 */

class VibeKick {
  constructor() {
    this.prompts = window.PROMPTS || [];
    this.currentCategory = 'all';
    this.currentPrompt = null;
    this.fieldValues = {};

    this.init();
  }

  init() {
    this.bindElements();
    this.bindEvents();
    this.renderPrompts();
  }

  bindElements() {
    this.searchInput = document.getElementById('search');
    this.categoriesContainer = document.getElementById('categories');
    this.promptList = document.getElementById('prompt-list');
    this.promptEditor = document.getElementById('prompt-editor');
    this.editorTitle = document.getElementById('editor-title');
    this.editorFields = document.getElementById('editor-fields');
    this.previewText = document.getElementById('preview-text');
    this.backBtn = document.getElementById('back-btn');
    this.copyBtn = document.getElementById('copy-btn');
    this.copyFeedback = document.getElementById('copy-feedback');
  }

  bindEvents() {
    // Search
    this.searchInput.addEventListener('input', (e) => {
      this.filterPrompts(e.target.value);
    });

    // Categories
    this.categoriesContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('category-btn')) {
        this.setCategory(e.target.dataset.category);
      }
    });

    // Back button
    this.backBtn.addEventListener('click', () => {
      this.hideEditor();
    });

    // Copy button
    this.copyBtn.addEventListener('click', () => {
      this.copyPrompt();
    });

    // Keyboard shortcut: Escape to go back
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.promptEditor.classList.contains('hidden')) {
        this.hideEditor();
      }
    });
  }

  setCategory(category) {
    this.currentCategory = category;

    // Update button states
    const buttons = this.categoriesContainer.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });

    this.filterPrompts(this.searchInput.value);
  }

  filterPrompts(searchTerm = '') {
    const term = searchTerm.toLowerCase();

    const filtered = this.prompts.filter(prompt => {
      const matchesCategory = this.currentCategory === 'all' || prompt.category === this.currentCategory;
      const matchesSearch = !term ||
        prompt.title.toLowerCase().includes(term) ||
        prompt.template.toLowerCase().includes(term) ||
        prompt.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });

    this.renderPrompts(filtered);
  }

  renderPrompts(prompts = this.prompts) {
    if (prompts.length === 0) {
      this.promptList.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🔍</div>
          <p>No prompts found</p>
        </div>
      `;
      return;
    }

    this.promptList.innerHTML = prompts.map(prompt => `
      <div class="prompt-card" data-id="${prompt.id}">
        <div class="prompt-card-header">
          <span class="prompt-card-title">${prompt.title}</span>
          <span class="prompt-card-category">${prompt.category}</span>
        </div>
        <div class="prompt-card-preview">${this.getPreviewText(prompt.template)}</div>
      </div>
    `).join('');

    // Bind click events to cards
    this.promptList.querySelectorAll('.prompt-card').forEach(card => {
      card.addEventListener('click', () => {
        const prompt = this.prompts.find(p => p.id === card.dataset.id);
        if (prompt) {
          this.openEditor(prompt);
        }
      });
    });
  }

  getPreviewText(template) {
    // Replace placeholders with visual indicator and truncate
    return template
      .replace(/\{\{(\w+)\}\}/g, '[$1]')
      .replace(/\n/g, ' ')
      .substring(0, 80) + '...';
  }

  openEditor(prompt) {
    this.currentPrompt = prompt;
    this.fieldValues = {};

    // Set title
    this.editorTitle.textContent = prompt.title;

    // Render fields
    this.editorFields.innerHTML = prompt.fields.map(field => `
      <div class="field-group">
        <label class="field-label" for="field-${field.key}">${field.label}</label>
        ${field.multiline
          ? `<textarea
              class="field-input"
              id="field-${field.key}"
              data-key="${field.key}"
              placeholder="${field.placeholder || ''}"
              rows="3"
            ></textarea>`
          : `<input
              type="text"
              class="field-input"
              id="field-${field.key}"
              data-key="${field.key}"
              placeholder="${field.placeholder || ''}"
            />`
        }
      </div>
    `).join('');

    // Bind input events for live preview
    this.editorFields.querySelectorAll('.field-input').forEach(input => {
      input.addEventListener('input', (e) => {
        this.fieldValues[e.target.dataset.key] = e.target.value;
        this.updatePreview();
      });
    });

    // Initial preview
    this.updatePreview();

    // Show editor
    this.promptEditor.classList.remove('hidden');
    this.copyFeedback.classList.add('hidden');

    // Focus first field
    const firstInput = this.editorFields.querySelector('.field-input');
    if (firstInput) {
      firstInput.focus();
    }
  }

  hideEditor() {
    this.promptEditor.classList.add('hidden');
    this.currentPrompt = null;
    this.fieldValues = {};
  }

  updatePreview() {
    if (!this.currentPrompt) return;

    let preview = this.currentPrompt.template;

    // Replace filled placeholders
    for (const [key, value] of Object.entries(this.fieldValues)) {
      if (value) {
        preview = preview.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
      }
    }

    // Highlight unfilled placeholders
    preview = preview.replace(
      /\{\{(\w+)\}\}/g,
      '<span class="placeholder">[$1]</span>'
    );

    this.previewText.innerHTML = preview;
  }

  getFilledPrompt() {
    if (!this.currentPrompt) return '';

    let prompt = this.currentPrompt.template;

    // Replace all placeholders with values or leave empty
    for (const field of this.currentPrompt.fields) {
      const value = this.fieldValues[field.key] || `[${field.label}]`;
      prompt = prompt.replace(new RegExp(`\\{\\{${field.key}\\}\\}`, 'g'), value);
    }

    return prompt;
  }

  async copyPrompt() {
    const prompt = this.getFilledPrompt();

    try {
      await navigator.clipboard.writeText(prompt);

      // Show feedback
      this.copyFeedback.classList.remove('hidden');
      this.copyBtn.textContent = '✓ Copied!';

      // Reset after delay
      setTimeout(() => {
        this.copyFeedback.classList.add('hidden');
        this.copyBtn.textContent = '📋 Copy to Clipboard';
      }, 2000);

    } catch (err) {
      console.error('Failed to copy:', err);
      this.copyBtn.textContent = '❌ Failed to copy';

      setTimeout(() => {
        this.copyBtn.textContent = '📋 Copy to Clipboard';
      }, 2000);
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.vibeKick = new VibeKick();
});
