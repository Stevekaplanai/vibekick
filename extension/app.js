/**
 * VibeKick - Main Application Logic
 * Ultra-simple: Pick a prompt, optionally add context, copy.
 */

class VibeKick {
  constructor() {
    this.prompts = window.PROMPTS || [];
    this.currentCategory = 'all';
    this.currentPrompt = null;
    this.context = '';

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
    this.searchInput.addEventListener('input', (e) => {
      this.filterPrompts(e.target.value);
    });

    this.categoriesContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('category-btn')) {
        this.setCategory(e.target.dataset.category);
      }
    });

    this.backBtn.addEventListener('click', () => {
      this.hideEditor();
    });

    this.copyBtn.addEventListener('click', () => {
      this.copyPrompt();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.promptEditor.classList.contains('hidden')) {
        this.hideEditor();
      }
    });
  }

  setCategory(category) {
    this.currentCategory = category;

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
    return template
      .replace(/\n/g, ' ')
      .substring(0, 80) + '...';
  }

  openEditor(prompt) {
    this.currentPrompt = prompt;
    this.context = '';

    this.editorTitle.textContent = prompt.title;

    // Single optional context box
    this.editorFields.innerHTML = `
      <div class="field-group">
        <label class="field-label" for="context">
          Add context <span class="optional">(optional)</span>
        </label>
        <textarea
          class="field-input"
          id="context"
          placeholder="Paste code, error messages, or any relevant details..."
          rows="4"
        ></textarea>
      </div>
    `;

    const contextInput = document.getElementById('context');
    contextInput.addEventListener('input', (e) => {
      this.context = e.target.value;
      this.updatePreview();
    });

    this.updatePreview();

    this.promptEditor.classList.remove('hidden');
    this.copyFeedback.classList.add('hidden');
  }

  hideEditor() {
    this.promptEditor.classList.add('hidden');
    this.currentPrompt = null;
    this.context = '';
  }

  updatePreview() {
    if (!this.currentPrompt) return;

    let preview = this.currentPrompt.template;

    if (this.context.trim()) {
      preview += '\n\n---\n\n' + this.context;
    }

    this.previewText.textContent = preview;
  }

  getFilledPrompt() {
    if (!this.currentPrompt) return '';

    let prompt = this.currentPrompt.template;

    if (this.context.trim()) {
      prompt += '\n\n---\n\n' + this.context;
    }

    return prompt;
  }

  async copyPrompt() {
    const prompt = this.getFilledPrompt();

    try {
      await navigator.clipboard.writeText(prompt);

      this.copyFeedback.classList.remove('hidden');
      this.copyBtn.textContent = '✓ Copied!';

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

document.addEventListener('DOMContentLoaded', () => {
  window.vibeKick = new VibeKick();
});
