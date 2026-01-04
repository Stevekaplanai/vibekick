# VibeKick.co

**Your Vibe Coding Sidekick** ⚡

A Chrome extension that provides quick, customizable prompts for vibe coding.

## Features

- **Quick Search** - Find the right prompt in seconds
- **Fill-in-the-Blank Editor** - Customize prompts with your context
- **One-Click Copy** - Paste directly into any LLM
- **Categorized Prompts** - Feature, Debug, Refactor, Test, Explain

## Installation (Development)

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select the `extension` folder

## Project Structure

```
vibekick.co/
├── extension/
│   ├── manifest.json    # Chrome extension manifest
│   ├── popup.html       # Extension popup UI
│   ├── styles.css       # Styling
│   ├── prompts.js       # Prompt library
│   ├── app.js           # Main application logic
│   └── icons/           # Extension icons
├── docs/
│   └── product-brief.md # Product requirements
└── README.md
```

## Adding New Prompts

Edit `extension/prompts.js` and add a new prompt object:

```javascript
{
  id: "unique-id",
  title: "Prompt Title",
  category: "feature", // feature, debug, refactor, test, explain
  template: `Your prompt with {{placeholders}}`,
  fields: [
    { key: "placeholders", label: "Label", placeholder: "Hint text" }
  ]
}
```

## Tech Stack

- Vanilla JavaScript (no build step needed)
- Chrome Extension Manifest V3
- CSS with modern features

## Deployment

- Domain: vibekick.co
- Chrome Web Store (coming soon)

---

Built by Steve Kaplan
