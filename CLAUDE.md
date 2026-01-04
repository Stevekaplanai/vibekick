# VibeKick.co Project Instructions

## Project Overview

VibeKick is a Chrome extension for vibe coding prompts. It provides a quick search interface for curated, fill-in-the-blank prompts that users can customize and copy to their clipboard.

## Architecture

- **Chrome Extension** (Manifest V3)
- **Vanilla JavaScript** - No framework, no build step
- **Local Storage** - For favorites and custom prompts (future)

## Key Files

- `extension/manifest.json` - Chrome extension configuration
- `extension/popup.html` - Main popup UI
- `extension/styles.css` - All styling
- `extension/prompts.js` - Prompt library data
- `extension/app.js` - Application logic

## Development

1. Load unpacked extension in Chrome from `extension/` folder
2. Edit files directly - reload extension to see changes
3. No build process required

## Adding Prompts

Add to `prompts.js` array with this structure:
```javascript
{
  id: "unique-id",
  title: "Display Title",
  category: "feature|debug|refactor|test|explain",
  template: "Prompt with {{placeholder}} syntax",
  fields: [
    { key: "placeholder", label: "User Label", placeholder: "Hint", multiline: false }
  ]
}
```

## Important Rules

1. Keep the extension lightweight - no heavy dependencies
2. All prompts must have fill-in-the-blank fields
3. Use semantic categories for organization
4. Test in Chrome after changes

## Future Features

- [ ] Custom user prompts (stored in chrome.storage)
- [ ] Favorites system
- [ ] Sync across devices
- [ ] Landing page at vibekick.co
- [ ] Chrome Web Store publishing
