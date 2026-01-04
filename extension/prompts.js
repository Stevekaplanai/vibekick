/**
 * VibeKick Prompt Library - Top 100 Vibe Coding Scenarios
 *
 * Categories:
 * - feature: Building new features
 * - debug: Fixing bugs and errors
 * - refactor: Improving existing code
 * - test: Writing tests
 * - explain: Understanding code
 * - api: API integration
 * - database: Database operations
 * - ui: UI/UX development
 * - devops: Deployment and infrastructure
 * - ai: AI/ML integration
 */

const PROMPTS = [
  // ============================================================
  // FEATURE - Building New Features (20 prompts)
  // ============================================================
  {
    id: "new-feature",
    title: "Build a New Feature",
    category: "feature",
    template: `Build me a {{feature_name}} feature using {{tech_stack}}.

Requirements:
{{requirements}}

Please provide:
1. Complete implementation code
2. Any necessary file structure
3. Brief explanation of the approach`,
    fields: [
      { key: "feature_name", label: "Feature Name", placeholder: "e.g., user authentication" },
      { key: "tech_stack", label: "Tech Stack", placeholder: "e.g., React + Supabase" },
      { key: "requirements", label: "Requirements", placeholder: "e.g., email/password login, password reset", multiline: true }
    ]
  },
  {
    id: "create-component",
    title: "Create a Component",
    category: "feature",
    template: `Create a {{component_name}} component using {{framework}}.

It should:
{{functionality}}

Styling: {{styling_approach}}`,
    fields: [
      { key: "component_name", label: "Component Name", placeholder: "e.g., DataTable" },
      { key: "framework", label: "Framework", placeholder: "e.g., React + TypeScript" },
      { key: "functionality", label: "What should it do?", placeholder: "e.g., display sortable data, pagination", multiline: true },
      { key: "styling_approach", label: "Styling", placeholder: "e.g., Tailwind CSS" }
    ]
  },
  {
    id: "add-api-endpoint",
    title: "Add API Endpoint",
    category: "feature",
    template: `Create an API endpoint for {{action}}.

Framework: {{framework}}
Method: {{http_method}}
Path: {{endpoint_path}}

Request body:
{{request_body}}

Expected response:
{{response_format}}`,
    fields: [
      { key: "action", label: "What does it do?", placeholder: "e.g., creating a new user" },
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js API routes" },
      { key: "http_method", label: "HTTP Method", placeholder: "e.g., POST" },
      { key: "endpoint_path", label: "Endpoint Path", placeholder: "e.g., /api/users" },
      { key: "request_body", label: "Request Body", placeholder: "e.g., { email, password }", multiline: true },
      { key: "response_format", label: "Response Format", placeholder: "e.g., { user: { id, email } }", multiline: true }
    ]
  },
  {
    id: "create-form",
    title: "Create a Form",
    category: "feature",
    template: `Create a {{form_type}} form using {{framework}}.

Fields needed:
{{fields}}

Validation requirements:
{{validation}}

On submit: {{submit_action}}`,
    fields: [
      { key: "form_type", label: "Form Type", placeholder: "e.g., registration, contact, checkout" },
      { key: "framework", label: "Framework", placeholder: "e.g., React Hook Form + Zod" },
      { key: "fields", label: "Form Fields", placeholder: "e.g., name, email, password, confirm password", multiline: true },
      { key: "validation", label: "Validation Rules", placeholder: "e.g., email format, password 8+ chars", multiline: true },
      { key: "submit_action", label: "Submit Action", placeholder: "e.g., POST to /api/register" }
    ]
  },
  {
    id: "add-auth",
    title: "Add Authentication",
    category: "feature",
    template: `Add {{auth_type}} authentication to my {{framework}} app.

Provider: {{auth_provider}}

I need:
{{requirements}}

Include protected routes and session handling.`,
    fields: [
      { key: "auth_type", label: "Auth Type", placeholder: "e.g., email/password, OAuth, magic link" },
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js" },
      { key: "auth_provider", label: "Auth Provider", placeholder: "e.g., Supabase, NextAuth, Clerk" },
      { key: "requirements", label: "Requirements", placeholder: "e.g., login, register, password reset, session persistence", multiline: true }
    ]
  },
  {
    id: "create-modal",
    title: "Create a Modal/Dialog",
    category: "feature",
    template: `Create a {{modal_type}} modal component using {{framework}}.

Content: {{content}}
Actions: {{actions}}

Requirements:
- Close on backdrop click
- Close on Escape key
- Trap focus inside modal
- Animate in/out`,
    fields: [
      { key: "modal_type", label: "Modal Type", placeholder: "e.g., confirmation, form, info" },
      { key: "framework", label: "Framework", placeholder: "e.g., React + Radix UI" },
      { key: "content", label: "Modal Content", placeholder: "e.g., delete confirmation message" },
      { key: "actions", label: "Action Buttons", placeholder: "e.g., Cancel, Delete" }
    ]
  },
  {
    id: "add-search",
    title: "Add Search Functionality",
    category: "feature",
    template: `Add search functionality to {{what_to_search}}.

Framework: {{framework}}
Search type: {{search_type}}

Features needed:
{{features}}`,
    fields: [
      { key: "what_to_search", label: "What to Search", placeholder: "e.g., products list, user database" },
      { key: "framework", label: "Framework", placeholder: "e.g., React" },
      { key: "search_type", label: "Search Type", placeholder: "e.g., client-side filter, API search, full-text" },
      { key: "features", label: "Features", placeholder: "e.g., debounce, highlight matches, search history", multiline: true }
    ]
  },
  {
    id: "add-pagination",
    title: "Add Pagination",
    category: "feature",
    template: `Add {{pagination_type}} pagination to {{component}}.

Framework: {{framework}}
Items per page: {{items_per_page}}
Total items source: {{data_source}}

Include page numbers, previous/next buttons, and current page indicator.`,
    fields: [
      { key: "pagination_type", label: "Pagination Type", placeholder: "e.g., numbered, infinite scroll, load more" },
      { key: "component", label: "Component", placeholder: "e.g., products list" },
      { key: "framework", label: "Framework", placeholder: "e.g., React" },
      { key: "items_per_page", label: "Items Per Page", placeholder: "e.g., 10" },
      { key: "data_source", label: "Data Source", placeholder: "e.g., API endpoint, local array" }
    ]
  },
  {
    id: "add-notifications",
    title: "Add Toast Notifications",
    category: "feature",
    template: `Add a toast notification system to my {{framework}} app.

Types needed: {{notification_types}}
Position: {{position}}
Auto-dismiss: {{auto_dismiss}}

Include success, error, warning, and info variants.`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., React" },
      { key: "notification_types", label: "Types", placeholder: "e.g., success, error, warning, info" },
      { key: "position", label: "Position", placeholder: "e.g., top-right, bottom-center" },
      { key: "auto_dismiss", label: "Auto Dismiss", placeholder: "e.g., 5 seconds, never" }
    ]
  },
  {
    id: "add-dark-mode",
    title: "Add Dark Mode",
    category: "feature",
    template: `Add dark mode toggle to my {{framework}} app using {{styling}}.

Requirements:
- Persist preference in localStorage
- Respect system preference initially
- Smooth transition between modes
- Toggle component in {{location}}`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js" },
      { key: "styling", label: "Styling Approach", placeholder: "e.g., Tailwind CSS, CSS variables" },
      { key: "location", label: "Toggle Location", placeholder: "e.g., header, settings page" }
    ]
  },
  {
    id: "add-file-upload",
    title: "Add File Upload",
    category: "feature",
    template: `Add file upload functionality using {{framework}}.

Upload destination: {{destination}}
Allowed file types: {{file_types}}
Max file size: {{max_size}}

Include:
- Drag and drop
- Progress indicator
- Preview for images
- Error handling`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., React + react-dropzone" },
      { key: "destination", label: "Upload To", placeholder: "e.g., Supabase Storage, S3, Cloudinary" },
      { key: "file_types", label: "Allowed Types", placeholder: "e.g., images only, PDF, any" },
      { key: "max_size", label: "Max Size", placeholder: "e.g., 5MB" }
    ]
  },
  {
    id: "add-infinite-scroll",
    title: "Add Infinite Scroll",
    category: "feature",
    template: `Add infinite scroll to {{component}} using {{framework}}.

Data source: {{data_source}}
Items per load: {{items_per_load}}

Include:
- Loading indicator
- End of list detection
- Error handling with retry
- Scroll position restoration`,
    fields: [
      { key: "component", label: "Component", placeholder: "e.g., feed, product list" },
      { key: "framework", label: "Framework", placeholder: "e.g., React + Intersection Observer" },
      { key: "data_source", label: "Data Source", placeholder: "e.g., /api/posts?cursor=" },
      { key: "items_per_load", label: "Items Per Load", placeholder: "e.g., 20" }
    ]
  },
  {
    id: "create-dashboard",
    title: "Create a Dashboard",
    category: "feature",
    template: `Create a {{dashboard_type}} dashboard using {{framework}}.

Sections needed:
{{sections}}

Data sources:
{{data_sources}}

Include responsive grid layout and loading states.`,
    fields: [
      { key: "dashboard_type", label: "Dashboard Type", placeholder: "e.g., admin, analytics, user" },
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js + Tailwind" },
      { key: "sections", label: "Dashboard Sections", placeholder: "e.g., stats cards, charts, recent activity, user list", multiline: true },
      { key: "data_sources", label: "Data Sources", placeholder: "e.g., /api/stats, /api/users", multiline: true }
    ]
  },
  {
    id: "add-realtime",
    title: "Add Real-time Updates",
    category: "feature",
    template: `Add real-time updates to {{feature}} using {{technology}}.

Framework: {{framework}}
Events to subscribe: {{events}}

Handle connection status (connected, disconnected, reconnecting).`,
    fields: [
      { key: "feature", label: "Feature", placeholder: "e.g., chat messages, notifications, live data" },
      { key: "technology", label: "Technology", placeholder: "e.g., Supabase Realtime, Socket.io, Pusher" },
      { key: "framework", label: "Framework", placeholder: "e.g., React" },
      { key: "events", label: "Events", placeholder: "e.g., INSERT, UPDATE, DELETE on messages table", multiline: true }
    ]
  },
  {
    id: "create-wizard",
    title: "Create Multi-Step Wizard",
    category: "feature",
    template: `Create a multi-step {{wizard_type}} wizard using {{framework}}.

Steps:
{{steps}}

Requirements:
- Progress indicator
- Back/Next navigation
- Validation per step
- Save progress between steps
- Final submission to {{submit_to}}`,
    fields: [
      { key: "wizard_type", label: "Wizard Type", placeholder: "e.g., onboarding, checkout, form" },
      { key: "framework", label: "Framework", placeholder: "e.g., React + React Hook Form" },
      { key: "steps", label: "Steps", placeholder: "1. Personal info\n2. Preferences\n3. Review\n4. Confirm", multiline: true },
      { key: "submit_to", label: "Submit To", placeholder: "e.g., /api/onboarding" }
    ]
  },
  {
    id: "add-keyboard-shortcuts",
    title: "Add Keyboard Shortcuts",
    category: "feature",
    template: `Add keyboard shortcuts to my {{framework}} app.

Shortcuts needed:
{{shortcuts}}

Include:
- Keyboard shortcut help modal (show on ?)
- Don't trigger when typing in inputs
- Visual indicators for available shortcuts`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., React" },
      { key: "shortcuts", label: "Shortcuts", placeholder: "Cmd+K: Search\nCmd+N: New item\nEsc: Close modal", multiline: true }
    ]
  },
  {
    id: "add-export",
    title: "Add Export Functionality",
    category: "feature",
    template: `Add export functionality for {{data_type}} in {{format}} format.

Framework: {{framework}}
Data source: {{data_source}}

Include:
- Export button with loading state
- File download trigger
- Error handling`,
    fields: [
      { key: "data_type", label: "Data Type", placeholder: "e.g., user list, report data" },
      { key: "format", label: "Export Format", placeholder: "e.g., CSV, PDF, Excel" },
      { key: "framework", label: "Framework", placeholder: "e.g., React" },
      { key: "data_source", label: "Data Source", placeholder: "e.g., current table data, API fetch" }
    ]
  },
  {
    id: "add-undo-redo",
    title: "Add Undo/Redo",
    category: "feature",
    template: `Add undo/redo functionality to {{feature}} using {{framework}}.

Actions to track:
{{actions}}

Include:
- Keyboard shortcuts (Cmd+Z, Cmd+Shift+Z)
- Undo/Redo buttons with disabled states
- History limit of {{history_limit}} actions`,
    fields: [
      { key: "feature", label: "Feature", placeholder: "e.g., text editor, canvas, form" },
      { key: "framework", label: "Framework", placeholder: "e.g., React + useReducer" },
      { key: "actions", label: "Actions to Track", placeholder: "e.g., text changes, item moves, deletions", multiline: true },
      { key: "history_limit", label: "History Limit", placeholder: "e.g., 50" }
    ]
  },
  {
    id: "add-drag-drop",
    title: "Add Drag and Drop",
    category: "feature",
    template: `Add drag and drop to {{feature}} using {{framework}}.

Drag items: {{drag_items}}
Drop zones: {{drop_zones}}

Include:
- Visual feedback during drag
- Reorder within same list
- Move between lists (if applicable)
- Touch device support`,
    fields: [
      { key: "feature", label: "Feature", placeholder: "e.g., task board, file organizer" },
      { key: "framework", label: "Framework", placeholder: "e.g., React + dnd-kit" },
      { key: "drag_items", label: "Drag Items", placeholder: "e.g., task cards, list items" },
      { key: "drop_zones", label: "Drop Zones", placeholder: "e.g., columns, folders" }
    ]
  },
  {
    id: "add-filters",
    title: "Add Filter System",
    category: "feature",
    template: `Add a filter system to {{component}} using {{framework}}.

Filter options:
{{filter_options}}

Requirements:
- URL sync (filters in query params)
- Clear all filters button
- Active filter count badge
- Mobile-friendly filter panel`,
    fields: [
      { key: "component", label: "Component", placeholder: "e.g., product list, job board" },
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js" },
      { key: "filter_options", label: "Filter Options", placeholder: "e.g., category, price range, date, status", multiline: true }
    ]
  },

  // ============================================================
  // DEBUG - Fixing Bugs and Errors (15 prompts)
  // ============================================================
  {
    id: "fix-error",
    title: "Fix an Error",
    category: "debug",
    template: `I'm getting this error:

\`\`\`
{{error_message}}
\`\`\`

When I try to {{action}}.

Here's my code:

\`\`\`{{language}}
{{code}}
\`\`\`

What's causing this and how do I fix it?`,
    fields: [
      { key: "error_message", label: "Error Message", placeholder: "Paste the error", multiline: true },
      { key: "action", label: "What were you doing?", placeholder: "e.g., submit the form" },
      { key: "language", label: "Language", placeholder: "e.g., typescript" },
      { key: "code", label: "Your Code", placeholder: "Paste relevant code", multiline: true }
    ]
  },
  {
    id: "debug-behavior",
    title: "Debug Unexpected Behavior",
    category: "debug",
    template: `My code is not behaving as expected.

Expected: {{expected}}
Actual: {{actual}}

Here's my code:

\`\`\`{{language}}
{{code}}
\`\`\`

What's wrong?`,
    fields: [
      { key: "expected", label: "Expected Behavior", placeholder: "e.g., form should submit" },
      { key: "actual", label: "Actual Behavior", placeholder: "e.g., nothing happens" },
      { key: "language", label: "Language", placeholder: "e.g., javascript" },
      { key: "code", label: "Your Code", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "fix-typescript-error",
    title: "Fix TypeScript Error",
    category: "debug",
    template: `I have this TypeScript error:

\`\`\`
{{error}}
\`\`\`

In this code:

\`\`\`typescript
{{code}}
\`\`\`

How do I fix the types?`,
    fields: [
      { key: "error", label: "TypeScript Error", placeholder: "Paste the TS error", multiline: true },
      { key: "code", label: "Code", placeholder: "Paste code with error", multiline: true }
    ]
  },
  {
    id: "fix-async-issue",
    title: "Fix Async/Await Issue",
    category: "debug",
    template: `I'm having an async/await issue.

Problem: {{problem}}

\`\`\`{{language}}
{{code}}
\`\`\`

The data is {{issue_description}}.`,
    fields: [
      { key: "problem", label: "Problem", placeholder: "e.g., data is undefined, race condition" },
      { key: "language", label: "Language", placeholder: "e.g., javascript" },
      { key: "code", label: "Your Code", placeholder: "Paste async code", multiline: true },
      { key: "issue_description", label: "What's happening?", placeholder: "e.g., undefined when I expect an array" }
    ]
  },
  {
    id: "fix-memory-leak",
    title: "Fix Memory Leak",
    category: "debug",
    template: `I suspect a memory leak in my {{framework}} app.

Symptoms: {{symptoms}}

Suspected code:

\`\`\`{{language}}
{{code}}
\`\`\`

How do I identify and fix the leak?`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., React" },
      { key: "symptoms", label: "Symptoms", placeholder: "e.g., increasing memory usage, slow performance over time" },
      { key: "language", label: "Language", placeholder: "e.g., javascript" },
      { key: "code", label: "Suspected Code", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "fix-infinite-loop",
    title: "Fix Infinite Loop/Re-render",
    category: "debug",
    template: `My {{framework}} component is {{issue_type}}.

\`\`\`{{language}}
{{code}}
\`\`\`

What's causing the infinite loop and how do I fix it?`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., React" },
      { key: "issue_type", label: "Issue", placeholder: "e.g., re-rendering infinitely, stuck in loop" },
      { key: "language", label: "Language", placeholder: "e.g., typescript" },
      { key: "code", label: "Component Code", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "fix-cors",
    title: "Fix CORS Error",
    category: "debug",
    template: `I'm getting a CORS error:

\`\`\`
{{error}}
\`\`\`

Frontend: {{frontend}}
Backend: {{backend}}
Request: {{request_type}} to {{endpoint}}

How do I fix this?`,
    fields: [
      { key: "error", label: "CORS Error", placeholder: "Paste the error", multiline: true },
      { key: "frontend", label: "Frontend URL", placeholder: "e.g., localhost:3000" },
      { key: "backend", label: "Backend URL", placeholder: "e.g., api.example.com" },
      { key: "request_type", label: "Request Type", placeholder: "e.g., POST" },
      { key: "endpoint", label: "Endpoint", placeholder: "e.g., /api/data" }
    ]
  },
  {
    id: "fix-hydration",
    title: "Fix Hydration Error",
    category: "debug",
    template: `I'm getting a hydration mismatch error in {{framework}}:

\`\`\`
{{error}}
\`\`\`

Component:

\`\`\`{{language}}
{{code}}
\`\`\`

How do I fix the server/client mismatch?`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js" },
      { key: "error", label: "Hydration Error", placeholder: "Paste error", multiline: true },
      { key: "language", label: "Language", placeholder: "e.g., tsx" },
      { key: "code", label: "Component", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "fix-state-not-updating",
    title: "Fix State Not Updating",
    category: "debug",
    template: `My {{framework}} state isn't updating correctly.

Expected: State should {{expected}}
Actual: {{actual}}

\`\`\`{{language}}
{{code}}
\`\`\`

Why isn't the state updating?`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., React" },
      { key: "expected", label: "Expected", placeholder: "e.g., update to new value" },
      { key: "actual", label: "Actual", placeholder: "e.g., stays the same" },
      { key: "language", label: "Language", placeholder: "e.g., typescript" },
      { key: "code", label: "Code", placeholder: "Paste state code", multiline: true }
    ]
  },
  {
    id: "fix-null-undefined",
    title: "Fix Null/Undefined Error",
    category: "debug",
    template: `I'm getting "Cannot read property of undefined/null":

\`\`\`
{{error}}
\`\`\`

Code:

\`\`\`{{language}}
{{code}}
\`\`\`

Where is the null check missing?`,
    fields: [
      { key: "error", label: "Error", placeholder: "Paste error", multiline: true },
      { key: "language", label: "Language", placeholder: "e.g., javascript" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "fix-api-500",
    title: "Fix API 500 Error",
    category: "debug",
    template: `My API endpoint is returning a 500 error.

Endpoint: {{endpoint}}
Request: {{request}}

Server code:

\`\`\`{{language}}
{{code}}
\`\`\`

Server logs show: {{logs}}`,
    fields: [
      { key: "endpoint", label: "Endpoint", placeholder: "e.g., POST /api/users" },
      { key: "request", label: "Request Body", placeholder: "e.g., { email: '...' }", multiline: true },
      { key: "language", label: "Language", placeholder: "e.g., javascript" },
      { key: "code", label: "Server Code", placeholder: "Paste API code", multiline: true },
      { key: "logs", label: "Server Logs", placeholder: "Paste error logs", multiline: true }
    ]
  },
  {
    id: "fix-slow-query",
    title: "Fix Slow Database Query",
    category: "debug",
    template: `This database query is too slow (taking {{time}}):

\`\`\`sql
{{query}}
\`\`\`

Table structure:
{{schema}}

How can I optimize this query?`,
    fields: [
      { key: "time", label: "Current Time", placeholder: "e.g., 5 seconds" },
      { key: "query", label: "SQL Query", placeholder: "Paste query", multiline: true },
      { key: "schema", label: "Table Schema", placeholder: "Describe tables and indexes", multiline: true }
    ]
  },
  {
    id: "fix-build-error",
    title: "Fix Build/Compile Error",
    category: "debug",
    template: `My build is failing with:

\`\`\`
{{error}}
\`\`\`

Build command: {{command}}
Framework: {{framework}}

Relevant file:

\`\`\`{{language}}
{{code}}
\`\`\``,
    fields: [
      { key: "error", label: "Build Error", placeholder: "Paste error", multiline: true },
      { key: "command", label: "Build Command", placeholder: "e.g., npm run build" },
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js, Vite" },
      { key: "language", label: "Language", placeholder: "e.g., typescript" },
      { key: "code", label: "Relevant Code", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "fix-css-issue",
    title: "Fix CSS/Styling Issue",
    category: "debug",
    template: `My CSS isn't working as expected.

Expected: {{expected}}
Actual: {{actual}}

HTML:
\`\`\`html
{{html}}
\`\`\`

CSS:
\`\`\`css
{{css}}
\`\`\`

What's wrong with my styles?`,
    fields: [
      { key: "expected", label: "Expected", placeholder: "e.g., centered, full width" },
      { key: "actual", label: "Actual", placeholder: "e.g., aligned left, overflowing" },
      { key: "html", label: "HTML", placeholder: "Paste HTML", multiline: true },
      { key: "css", label: "CSS", placeholder: "Paste CSS", multiline: true }
    ]
  },
  {
    id: "debug-mobile",
    title: "Debug Mobile-Only Issue",
    category: "debug",
    template: `Something only breaks on mobile devices.

Works on: {{works_on}}
Breaks on: {{breaks_on}}
Issue: {{issue}}

Code:
\`\`\`{{language}}
{{code}}
\`\`\`

How do I fix this mobile-specific issue?`,
    fields: [
      { key: "works_on", label: "Works On", placeholder: "e.g., desktop Chrome" },
      { key: "breaks_on", label: "Breaks On", placeholder: "e.g., iPhone Safari" },
      { key: "issue", label: "Issue", placeholder: "e.g., button not clickable, layout broken" },
      { key: "language", label: "Language", placeholder: "e.g., tsx" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true }
    ]
  },

  // ============================================================
  // REFACTOR - Improving Existing Code (15 prompts)
  // ============================================================
  {
    id: "refactor-code",
    title: "Refactor Code",
    category: "refactor",
    template: `Refactor this {{language}} code to be more {{quality}}.

\`\`\`{{language}}
{{code}}
\`\`\`

Keep the same functionality. Explain what you changed.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "quality", label: "Improve", placeholder: "e.g., readable, performant, maintainable" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "extract-functions",
    title: "Extract to Functions",
    category: "refactor",
    template: `Break this code into smaller, reusable functions:

\`\`\`{{language}}
{{code}}
\`\`\`

Each function should have a single responsibility.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., Python" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "add-typescript",
    title: "Add TypeScript Types",
    category: "refactor",
    template: `Add TypeScript types to this JavaScript code:

\`\`\`javascript
{{code}}
\`\`\`

Add interfaces, type annotations, and proper generics where needed.`,
    fields: [
      { key: "code", label: "JavaScript Code", placeholder: "Paste JS code", multiline: true }
    ]
  },
  {
    id: "convert-syntax",
    title: "Convert Code Syntax",
    category: "refactor",
    template: `Convert this {{from_language}} code to {{to_language}}:

\`\`\`{{from_language}}
{{code}}
\`\`\`

Use idiomatic {{to_language}} patterns.`,
    fields: [
      { key: "from_language", label: "From", placeholder: "e.g., JavaScript" },
      { key: "to_language", label: "To", placeholder: "e.g., TypeScript" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "optimize-performance",
    title: "Optimize for Performance",
    category: "refactor",
    template: `Optimize this {{language}} code for better performance:

\`\`\`{{language}}
{{code}}
\`\`\`

Current issue: {{issue}}

Provide optimized version with explanation.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., React" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true },
      { key: "issue", label: "Performance Issue", placeholder: "e.g., slow render, high memory" }
    ]
  },
  {
    id: "remove-duplication",
    title: "Remove Code Duplication",
    category: "refactor",
    template: `Remove duplication from this code by creating shared utilities:

\`\`\`{{language}}
{{code}}
\`\`\`

Create reusable functions or components for the repeated patterns.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "Code with Duplication", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "modernize-code",
    title: "Modernize Legacy Code",
    category: "refactor",
    template: `Modernize this {{language}} code using current best practices:

\`\`\`{{language}}
{{code}}
\`\`\`

Update to use: {{modern_features}}`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., JavaScript" },
      { key: "code", label: "Legacy Code", placeholder: "Paste code", multiline: true },
      { key: "modern_features", label: "Modern Features", placeholder: "e.g., async/await, optional chaining, destructuring" }
    ]
  },
  {
    id: "improve-error-handling",
    title: "Improve Error Handling",
    category: "refactor",
    template: `Add proper error handling to this code:

\`\`\`{{language}}
{{code}}
\`\`\`

Include:
- Try/catch blocks
- Meaningful error messages
- Proper error propagation
- {{additional_requirements}}`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true },
      { key: "additional_requirements", label: "Additional", placeholder: "e.g., logging, user-friendly messages" }
    ]
  },
  {
    id: "add-validation",
    title: "Add Input Validation",
    category: "refactor",
    template: `Add input validation to this {{language}} code:

\`\`\`{{language}}
{{code}}
\`\`\`

Validate:
{{validations}}

Use {{validation_library}} if applicable.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true },
      { key: "validations", label: "Validations Needed", placeholder: "e.g., required fields, email format, number ranges", multiline: true },
      { key: "validation_library", label: "Library", placeholder: "e.g., Zod, Yup, joi" }
    ]
  },
  {
    id: "convert-class-to-hooks",
    title: "Convert Class to Hooks",
    category: "refactor",
    template: `Convert this React class component to a functional component with hooks:

\`\`\`jsx
{{code}}
\`\`\`

Use useState, useEffect, and other hooks as needed.`,
    fields: [
      { key: "code", label: "Class Component", placeholder: "Paste class component", multiline: true }
    ]
  },
  {
    id: "simplify-conditionals",
    title: "Simplify Conditionals",
    category: "refactor",
    template: `Simplify these complex conditionals:

\`\`\`{{language}}
{{code}}
\`\`\`

Make them more readable using early returns, guard clauses, or lookup objects.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., JavaScript" },
      { key: "code", label: "Complex Conditionals", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "add-logging",
    title: "Add Proper Logging",
    category: "refactor",
    template: `Add proper logging to this {{language}} code:

\`\`\`{{language}}
{{code}}
\`\`\`

Use {{logging_library}} with appropriate log levels (debug, info, warn, error).`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., Node.js" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true },
      { key: "logging_library", label: "Logging Library", placeholder: "e.g., winston, pino, console" }
    ]
  },
  {
    id: "make-reusable",
    title: "Make Component Reusable",
    category: "refactor",
    template: `Make this {{framework}} component more reusable:

\`\`\`{{language}}
{{code}}
\`\`\`

Add props for: {{customizable_parts}}

Keep good defaults.`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., React" },
      { key: "language", label: "Language", placeholder: "e.g., tsx" },
      { key: "code", label: "Component", placeholder: "Paste component", multiline: true },
      { key: "customizable_parts", label: "Make Customizable", placeholder: "e.g., colors, sizes, content, callbacks" }
    ]
  },
  {
    id: "improve-naming",
    title: "Improve Variable Naming",
    category: "refactor",
    template: `Improve the variable and function names in this code to be more descriptive:

\`\`\`{{language}}
{{code}}
\`\`\`

Make names self-documenting without needing comments.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., JavaScript" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "add-jsdoc",
    title: "Add JSDoc Comments",
    category: "refactor",
    template: `Add JSDoc comments to this code:

\`\`\`{{language}}
{{code}}
\`\`\`

Include @param, @returns, @throws, and @example where appropriate.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., javascript" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true }
    ]
  },

  // ============================================================
  // TEST - Writing Tests (10 prompts)
  // ============================================================
  {
    id: "write-unit-tests",
    title: "Write Unit Tests",
    category: "test",
    template: `Write unit tests for this {{language}} code:

\`\`\`{{language}}
{{code}}
\`\`\`

Use {{testing_framework}}.

Cover:
{{test_cases}}`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "Code to Test", placeholder: "Paste code", multiline: true },
      { key: "testing_framework", label: "Framework", placeholder: "e.g., Jest, Vitest" },
      { key: "test_cases", label: "Test Cases", placeholder: "e.g., happy path, errors, edge cases", multiline: true }
    ]
  },
  {
    id: "test-react-component",
    title: "Test React Component",
    category: "test",
    template: `Write tests for this React component:

\`\`\`tsx
{{code}}
\`\`\`

Use {{testing_library}}.

Test:
{{scenarios}}`,
    fields: [
      { key: "code", label: "Component", placeholder: "Paste component", multiline: true },
      { key: "testing_library", label: "Library", placeholder: "e.g., React Testing Library + Jest" },
      { key: "scenarios", label: "Test Scenarios", placeholder: "e.g., renders, click handlers, states", multiline: true }
    ]
  },
  {
    id: "test-api-endpoint",
    title: "Test API Endpoint",
    category: "test",
    template: `Write integration tests for this API endpoint:

\`\`\`{{language}}
{{code}}
\`\`\`

Framework: {{framework}}
Test: {{http_method}} {{endpoint}}

Cover success, validation errors, and auth scenarios.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "API Code", placeholder: "Paste API handler", multiline: true },
      { key: "framework", label: "Test Framework", placeholder: "e.g., Supertest + Jest" },
      { key: "http_method", label: "Method", placeholder: "e.g., POST" },
      { key: "endpoint", label: "Endpoint", placeholder: "e.g., /api/users" }
    ]
  },
  {
    id: "test-hook",
    title: "Test Custom Hook",
    category: "test",
    template: `Write tests for this custom React hook:

\`\`\`typescript
{{code}}
\`\`\`

Use @testing-library/react-hooks.

Test all return values and state changes.`,
    fields: [
      { key: "code", label: "Hook Code", placeholder: "Paste custom hook", multiline: true }
    ]
  },
  {
    id: "add-e2e-test",
    title: "Write E2E Test",
    category: "test",
    template: `Write an E2E test for this user flow using {{framework}}:

Flow:
{{user_flow}}

Page URL: {{url}}

Test both happy path and error scenarios.`,
    fields: [
      { key: "framework", label: "E2E Framework", placeholder: "e.g., Playwright, Cypress" },
      { key: "user_flow", label: "User Flow", placeholder: "1. Go to login\n2. Enter credentials\n3. Click submit\n4. Verify dashboard", multiline: true },
      { key: "url", label: "Starting URL", placeholder: "e.g., /login" }
    ]
  },
  {
    id: "test-edge-cases",
    title: "Add Edge Case Tests",
    category: "test",
    template: `Add edge case tests for this function:

\`\`\`{{language}}
{{code}}
\`\`\`

Consider:
- Empty/null inputs
- Boundary values
- Invalid types
- Large inputs
- Concurrent access`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "Function", placeholder: "Paste function", multiline: true }
    ]
  },
  {
    id: "mock-api-test",
    title: "Test with Mocked API",
    category: "test",
    template: `Write tests for this component that makes API calls:

\`\`\`{{language}}
{{code}}
\`\`\`

Mock the API using {{mocking_library}}.

Test loading, success, and error states.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., tsx" },
      { key: "code", label: "Component", placeholder: "Paste component", multiline: true },
      { key: "mocking_library", label: "Mocking Library", placeholder: "e.g., MSW, jest.mock" }
    ]
  },
  {
    id: "snapshot-test",
    title: "Add Snapshot Tests",
    category: "test",
    template: `Add snapshot tests for these {{framework}} components:

{{components}}

Use Jest snapshots. Include tests for different prop combinations.`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., React" },
      { key: "components", label: "Components", placeholder: "List component names and their key props", multiline: true }
    ]
  },
  {
    id: "test-accessibility",
    title: "Test Accessibility",
    category: "test",
    template: `Write accessibility tests for this component:

\`\`\`{{language}}
{{code}}
\`\`\`

Use {{testing_tool}}.

Check ARIA labels, keyboard navigation, and focus management.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., tsx" },
      { key: "code", label: "Component", placeholder: "Paste component", multiline: true },
      { key: "testing_tool", label: "Testing Tool", placeholder: "e.g., jest-axe, @axe-core/react" }
    ]
  },
  {
    id: "test-database",
    title: "Test Database Operations",
    category: "test",
    template: `Write tests for these database operations:

\`\`\`{{language}}
{{code}}
\`\`\`

Database: {{database}}
Use {{testing_approach}} for test isolation.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "Database Code", placeholder: "Paste db operations", multiline: true },
      { key: "database", label: "Database", placeholder: "e.g., PostgreSQL, MongoDB" },
      { key: "testing_approach", label: "Test Approach", placeholder: "e.g., test database, transactions, mocks" }
    ]
  },

  // ============================================================
  // EXPLAIN - Understanding Code (10 prompts)
  // ============================================================
  {
    id: "explain-code",
    title: "Explain This Code",
    category: "explain",
    template: `Explain what this {{language}} code does:

\`\`\`{{language}}
{{code}}
\`\`\`

Include:
1. High-level purpose
2. Step by step breakdown
3. Key patterns used`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., JavaScript" },
      { key: "code", label: "Code", placeholder: "Paste code", multiline: true }
    ]
  },
  {
    id: "explain-concept",
    title: "Explain a Concept",
    category: "explain",
    template: `Explain {{concept}} in {{context}}.

I'm at a {{level}} level.

Include:
- Simple explanation
- Practical example
- When to use it
- Common pitfalls`,
    fields: [
      { key: "concept", label: "Concept", placeholder: "e.g., React hooks, async/await" },
      { key: "context", label: "Context", placeholder: "e.g., React, Node.js" },
      { key: "level", label: "Your Level", placeholder: "e.g., beginner, intermediate" }
    ]
  },
  {
    id: "explain-error-message",
    title: "Explain Error Message",
    category: "explain",
    template: `Explain what this error means and common causes:

\`\`\`
{{error}}
\`\`\`

Context: {{context}}

What typically causes this and how to prevent it?`,
    fields: [
      { key: "error", label: "Error Message", placeholder: "Paste error", multiline: true },
      { key: "context", label: "Context", placeholder: "e.g., React app, Node server" }
    ]
  },
  {
    id: "explain-regex",
    title: "Explain Regex",
    category: "explain",
    template: `Explain what this regex does:

\`\`\`
{{regex}}
\`\`\`

Break down each part and give examples of what it matches/doesn't match.`,
    fields: [
      { key: "regex", label: "Regex Pattern", placeholder: "e.g., /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/" }
    ]
  },
  {
    id: "explain-architecture",
    title: "Explain Architecture Pattern",
    category: "explain",
    template: `Explain the {{pattern}} architecture pattern.

I'm building a {{project_type}} with {{tech_stack}}.

Include:
- Core concepts
- Folder structure
- Pros and cons
- When to use it`,
    fields: [
      { key: "pattern", label: "Pattern", placeholder: "e.g., MVC, Clean Architecture, Feature-sliced" },
      { key: "project_type", label: "Project Type", placeholder: "e.g., e-commerce app, SaaS" },
      { key: "tech_stack", label: "Tech Stack", placeholder: "e.g., Next.js, Node.js" }
    ]
  },
  {
    id: "compare-approaches",
    title: "Compare Approaches",
    category: "explain",
    template: `Compare these approaches for {{task}}:

Option A: {{option_a}}
Option B: {{option_b}}

Context: {{context}}

Which is better and why?`,
    fields: [
      { key: "task", label: "Task", placeholder: "e.g., state management, API calls" },
      { key: "option_a", label: "Option A", placeholder: "e.g., Redux" },
      { key: "option_b", label: "Option B", placeholder: "e.g., Zustand" },
      { key: "context", label: "Your Context", placeholder: "e.g., small team, large app, need offline" }
    ]
  },
  {
    id: "explain-design-pattern",
    title: "Explain Design Pattern",
    category: "explain",
    template: `Explain the {{pattern}} design pattern in {{language}}.

Include:
- Problem it solves
- Implementation example
- Real-world use cases
- When NOT to use it`,
    fields: [
      { key: "pattern", label: "Pattern", placeholder: "e.g., Singleton, Factory, Observer" },
      { key: "language", label: "Language", placeholder: "e.g., TypeScript, Python" }
    ]
  },
  {
    id: "explain-algorithm",
    title: "Explain Algorithm",
    category: "explain",
    template: `Explain the {{algorithm}} algorithm.

Include:
- How it works (step by step)
- Time and space complexity
- Implementation in {{language}}
- When to use it`,
    fields: [
      { key: "algorithm", label: "Algorithm", placeholder: "e.g., binary search, quicksort, BFS" },
      { key: "language", label: "Language", placeholder: "e.g., JavaScript" }
    ]
  },
  {
    id: "explain-diff",
    title: "Explain Difference Between",
    category: "explain",
    template: `Explain the difference between {{thing_a}} and {{thing_b}} in {{context}}.

When should I use each one?`,
    fields: [
      { key: "thing_a", label: "Thing A", placeholder: "e.g., useEffect" },
      { key: "thing_b", label: "Thing B", placeholder: "e.g., useLayoutEffect" },
      { key: "context", label: "Context", placeholder: "e.g., React" }
    ]
  },
  {
    id: "review-code",
    title: "Review My Code",
    category: "explain",
    template: `Review this {{language}} code:

\`\`\`{{language}}
{{code}}
\`\`\`

Check for:
- Bugs
- Performance issues
- Security problems
- Best practice violations
- Readability improvements`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "Code to Review", placeholder: "Paste code", multiline: true }
    ]
  },

  // ============================================================
  // API - API Integration (10 prompts)
  // ============================================================
  {
    id: "integrate-api",
    title: "Integrate an API",
    category: "api",
    template: `Integrate the {{api_name}} API to {{purpose}}.

Tech stack: {{tech_stack}}
Auth: {{auth_type}}

I need to:
{{requirements}}

Include complete implementation with error handling.`,
    fields: [
      { key: "api_name", label: "API", placeholder: "e.g., Stripe, OpenAI" },
      { key: "purpose", label: "Purpose", placeholder: "e.g., process payments" },
      { key: "tech_stack", label: "Tech Stack", placeholder: "e.g., Next.js" },
      { key: "auth_type", label: "Auth Type", placeholder: "e.g., API key, OAuth" },
      { key: "requirements", label: "Requirements", placeholder: "e.g., create checkout, handle webhooks", multiline: true }
    ]
  },
  {
    id: "create-api-client",
    title: "Create API Client",
    category: "api",
    template: `Create a typed API client for this API:

Base URL: {{base_url}}
Auth: {{auth}}

Endpoints:
{{endpoints}}

Use {{http_library}} with TypeScript types for all requests/responses.`,
    fields: [
      { key: "base_url", label: "Base URL", placeholder: "e.g., https://api.example.com/v1" },
      { key: "auth", label: "Auth Method", placeholder: "e.g., Bearer token in header" },
      { key: "endpoints", label: "Endpoints", placeholder: "GET /users, POST /users, etc.", multiline: true },
      { key: "http_library", label: "HTTP Library", placeholder: "e.g., fetch, axios, ky" }
    ]
  },
  {
    id: "handle-webhook",
    title: "Handle Webhook",
    category: "api",
    template: `Create a webhook handler for {{service}} webhooks.

Framework: {{framework}}
Events to handle:
{{events}}

Include signature verification and idempotency.`,
    fields: [
      { key: "service", label: "Service", placeholder: "e.g., Stripe, GitHub" },
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js API routes" },
      { key: "events", label: "Events", placeholder: "e.g., payment_intent.succeeded, checkout.session.completed", multiline: true }
    ]
  },
  {
    id: "add-rate-limiting",
    title: "Add Rate Limiting",
    category: "api",
    template: `Add rate limiting to my {{framework}} API.

Limits: {{limits}}
Storage: {{storage}}

Include proper error responses and headers.`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js, Express" },
      { key: "limits", label: "Rate Limits", placeholder: "e.g., 100 requests per minute per user" },
      { key: "storage", label: "Storage", placeholder: "e.g., Redis, in-memory" }
    ]
  },
  {
    id: "api-error-handling",
    title: "Add API Error Handling",
    category: "api",
    template: `Add proper error handling to this API code:

\`\`\`{{language}}
{{code}}
\`\`\`

Include:
- Error codes and messages
- Validation errors
- Auth errors
- Rate limit errors
- Consistent error format`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "API Code", placeholder: "Paste API code", multiline: true }
    ]
  },
  {
    id: "add-caching",
    title: "Add API Caching",
    category: "api",
    template: `Add caching to this API endpoint:

\`\`\`{{language}}
{{code}}
\`\`\`

Cache strategy: {{strategy}}
TTL: {{ttl}}
Storage: {{storage}}`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "API Code", placeholder: "Paste API code", multiline: true },
      { key: "strategy", label: "Strategy", placeholder: "e.g., cache-first, stale-while-revalidate" },
      { key: "ttl", label: "TTL", placeholder: "e.g., 5 minutes" },
      { key: "storage", label: "Storage", placeholder: "e.g., Redis, memory" }
    ]
  },
  {
    id: "rest-to-graphql",
    title: "Convert REST to GraphQL",
    category: "api",
    template: `Convert this REST API to GraphQL:

Endpoints:
{{endpoints}}

Types:
{{types}}

Use {{framework}}.`,
    fields: [
      { key: "endpoints", label: "REST Endpoints", placeholder: "GET /users, POST /users/:id", multiline: true },
      { key: "types", label: "Data Types", placeholder: "User { id, name, email }", multiline: true },
      { key: "framework", label: "GraphQL Framework", placeholder: "e.g., Apollo Server, Pothos" }
    ]
  },
  {
    id: "add-api-auth",
    title: "Add API Authentication",
    category: "api",
    template: `Add {{auth_type}} authentication to my {{framework}} API.

Protect these routes: {{protected_routes}}

Include:
- Token generation/validation
- Refresh token logic
- Middleware for protected routes`,
    fields: [
      { key: "auth_type", label: "Auth Type", placeholder: "e.g., JWT, session, API key" },
      { key: "framework", label: "Framework", placeholder: "e.g., Express, Next.js" },
      { key: "protected_routes", label: "Protected Routes", placeholder: "e.g., /api/users, /api/orders", multiline: true }
    ]
  },
  {
    id: "api-documentation",
    title: "Generate API Documentation",
    category: "api",
    template: `Generate OpenAPI/Swagger documentation for this API:

\`\`\`{{language}}
{{code}}
\`\`\`

Include all endpoints, request/response schemas, and examples.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "API Code", placeholder: "Paste API handlers", multiline: true }
    ]
  },
  {
    id: "fetch-with-retry",
    title: "Add Retry Logic to API Calls",
    category: "api",
    template: `Add retry logic to this API call:

\`\`\`{{language}}
{{code}}
\`\`\`

Retry on: {{retry_conditions}}
Max retries: {{max_retries}}
Backoff: {{backoff_strategy}}`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., TypeScript" },
      { key: "code", label: "API Code", placeholder: "Paste fetch code", multiline: true },
      { key: "retry_conditions", label: "Retry On", placeholder: "e.g., 5xx errors, network errors" },
      { key: "max_retries", label: "Max Retries", placeholder: "e.g., 3" },
      { key: "backoff_strategy", label: "Backoff", placeholder: "e.g., exponential, linear" }
    ]
  },

  // ============================================================
  // DATABASE - Database Operations (10 prompts)
  // ============================================================
  {
    id: "write-query",
    title: "Write Database Query",
    category: "database",
    template: `Write a {{query_type}} query for {{database}}.

Purpose: {{purpose}}

Schema:
{{schema}}

Requirements:
{{requirements}}`,
    fields: [
      { key: "query_type", label: "Query Type", placeholder: "e.g., SELECT, INSERT" },
      { key: "database", label: "Database", placeholder: "e.g., PostgreSQL, Supabase" },
      { key: "purpose", label: "Purpose", placeholder: "e.g., get users with orders" },
      { key: "schema", label: "Schema", placeholder: "Describe tables", multiline: true },
      { key: "requirements", label: "Requirements", placeholder: "e.g., filter by date, pagination", multiline: true }
    ]
  },
  {
    id: "design-schema",
    title: "Design Database Schema",
    category: "database",
    template: `Design a database schema for {{project_type}}.

Database: {{database}}

Entities:
{{entities}}

Requirements:
{{requirements}}

Include tables, relationships, and indexes.`,
    fields: [
      { key: "project_type", label: "Project", placeholder: "e.g., e-commerce, blog" },
      { key: "database", label: "Database", placeholder: "e.g., PostgreSQL" },
      { key: "entities", label: "Entities", placeholder: "e.g., users, products, orders", multiline: true },
      { key: "requirements", label: "Requirements", placeholder: "e.g., soft delete, audit log", multiline: true }
    ]
  },
  {
    id: "add-rls",
    title: "Add Row Level Security",
    category: "database",
    template: `Add RLS policies to this Supabase table:

Table: {{table_name}}
Schema:
{{schema}}

Access rules:
{{rules}}`,
    fields: [
      { key: "table_name", label: "Table", placeholder: "e.g., posts" },
      { key: "schema", label: "Schema", placeholder: "id, user_id, content, created_at", multiline: true },
      { key: "rules", label: "Access Rules", placeholder: "e.g., users can only see their own posts", multiline: true }
    ]
  },
  {
    id: "write-migration",
    title: "Write Database Migration",
    category: "database",
    template: `Write a database migration for {{database}} using {{tool}}.

Change: {{change}}

Current state:
{{current}}

Include both up and down migrations.`,
    fields: [
      { key: "database", label: "Database", placeholder: "e.g., PostgreSQL" },
      { key: "tool", label: "Migration Tool", placeholder: "e.g., Prisma, Drizzle, raw SQL" },
      { key: "change", label: "Change", placeholder: "e.g., add status column to orders" },
      { key: "current", label: "Current Schema", placeholder: "Current table structure", multiline: true }
    ]
  },
  {
    id: "optimize-query",
    title: "Optimize Slow Query",
    category: "database",
    template: `Optimize this slow query (taking {{time}}):

\`\`\`sql
{{query}}
\`\`\`

Table info:
{{table_info}}

Suggest indexes and query improvements.`,
    fields: [
      { key: "time", label: "Current Time", placeholder: "e.g., 5 seconds" },
      { key: "query", label: "Query", placeholder: "Paste query", multiline: true },
      { key: "table_info", label: "Table Info", placeholder: "Rows, indexes, etc.", multiline: true }
    ]
  },
  {
    id: "add-prisma",
    title: "Create Prisma Schema",
    category: "database",
    template: `Create a Prisma schema for these models:

{{models}}

Database: {{database}}

Include relationships and necessary indexes.`,
    fields: [
      { key: "models", label: "Models", placeholder: "User (id, email, name)\nPost (id, title, userId)", multiline: true },
      { key: "database", label: "Database", placeholder: "e.g., postgresql" }
    ]
  },
  {
    id: "seed-data",
    title: "Create Seed Data",
    category: "database",
    template: `Create seed data for {{database}} using {{tool}}.

Tables:
{{tables}}

Generate realistic sample data for development.`,
    fields: [
      { key: "database", label: "Database", placeholder: "e.g., PostgreSQL" },
      { key: "tool", label: "Tool", placeholder: "e.g., Prisma, Drizzle, SQL" },
      { key: "tables", label: "Tables", placeholder: "users (10), posts (50), comments (200)", multiline: true }
    ]
  },
  {
    id: "add-soft-delete",
    title: "Add Soft Delete",
    category: "database",
    template: `Add soft delete to {{table}} table.

Current schema:
{{schema}}

ORM: {{orm}}

Include:
- deleted_at column
- Default scope to hide deleted
- Restore functionality`,
    fields: [
      { key: "table", label: "Table", placeholder: "e.g., users" },
      { key: "schema", label: "Current Schema", placeholder: "Describe columns", multiline: true },
      { key: "orm", label: "ORM", placeholder: "e.g., Prisma, Drizzle" }
    ]
  },
  {
    id: "add-audit-log",
    title: "Add Audit Logging",
    category: "database",
    template: `Add audit logging for {{tables}} tables.

Database: {{database}}
Track: {{actions}}

Include who, what, when, and previous/new values.`,
    fields: [
      { key: "tables", label: "Tables", placeholder: "e.g., users, orders" },
      { key: "database", label: "Database", placeholder: "e.g., PostgreSQL + Supabase" },
      { key: "actions", label: "Track Actions", placeholder: "e.g., INSERT, UPDATE, DELETE" }
    ]
  },
  {
    id: "add-full-text-search",
    title: "Add Full-Text Search",
    category: "database",
    template: `Add full-text search to {{table}} table.

Database: {{database}}
Search fields: {{fields}}
Search type: {{search_type}}

Include search API endpoint example.`,
    fields: [
      { key: "table", label: "Table", placeholder: "e.g., products" },
      { key: "database", label: "Database", placeholder: "e.g., PostgreSQL" },
      { key: "fields", label: "Search Fields", placeholder: "e.g., title, description, tags" },
      { key: "search_type", label: "Search Type", placeholder: "e.g., prefix matching, fuzzy" }
    ]
  },

  // ============================================================
  // UI - UI/UX Development (10 prompts)
  // ============================================================
  {
    id: "create-layout",
    title: "Create Page Layout",
    category: "ui",
    template: `Create a {{layout_type}} layout using {{framework}}.

Sections:
{{sections}}

Responsive breakpoints: {{breakpoints}}

Include semantic HTML and accessibility.`,
    fields: [
      { key: "layout_type", label: "Layout Type", placeholder: "e.g., dashboard, landing page" },
      { key: "framework", label: "Framework", placeholder: "e.g., React + Tailwind" },
      { key: "sections", label: "Sections", placeholder: "e.g., header, sidebar, main, footer", multiline: true },
      { key: "breakpoints", label: "Breakpoints", placeholder: "e.g., mobile, tablet, desktop" }
    ]
  },
  {
    id: "create-navbar",
    title: "Create Navigation",
    category: "ui",
    template: `Create a {{nav_type}} navigation component using {{framework}}.

Links:
{{links}}

Features:
{{features}}`,
    fields: [
      { key: "nav_type", label: "Nav Type", placeholder: "e.g., horizontal header, sidebar" },
      { key: "framework", label: "Framework", placeholder: "e.g., React + Tailwind" },
      { key: "links", label: "Nav Links", placeholder: "Home, Products, About, Contact", multiline: true },
      { key: "features", label: "Features", placeholder: "e.g., mobile menu, dropdown, active state", multiline: true }
    ]
  },
  {
    id: "create-table",
    title: "Create Data Table",
    category: "ui",
    template: `Create a data table component using {{framework}}.

Columns:
{{columns}}

Features:
{{features}}

Data source: {{data_source}}`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., React + TanStack Table" },
      { key: "columns", label: "Columns", placeholder: "Name, Email, Status, Actions", multiline: true },
      { key: "features", label: "Features", placeholder: "e.g., sorting, filtering, pagination, row selection", multiline: true },
      { key: "data_source", label: "Data Source", placeholder: "e.g., API endpoint, local array" }
    ]
  },
  {
    id: "create-card",
    title: "Create Card Component",
    category: "ui",
    template: `Create a {{card_type}} card component using {{framework}}.

Content:
{{content}}

Variants: {{variants}}

Include hover effects and click handling.`,
    fields: [
      { key: "card_type", label: "Card Type", placeholder: "e.g., product, user profile, article" },
      { key: "framework", label: "Framework", placeholder: "e.g., React + Tailwind" },
      { key: "content", label: "Content", placeholder: "e.g., image, title, description, price, button", multiline: true },
      { key: "variants", label: "Variants", placeholder: "e.g., default, featured, compact" }
    ]
  },
  {
    id: "add-animations",
    title: "Add Animations",
    category: "ui",
    template: `Add animations to this component:

\`\`\`{{language}}
{{code}}
\`\`\`

Animation library: {{library}}

Animations needed:
{{animations}}`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., tsx" },
      { key: "code", label: "Component", placeholder: "Paste component", multiline: true },
      { key: "library", label: "Animation Library", placeholder: "e.g., Framer Motion, CSS" },
      { key: "animations", label: "Animations", placeholder: "e.g., fade in, slide up, stagger children", multiline: true }
    ]
  },
  {
    id: "make-responsive",
    title: "Make Component Responsive",
    category: "ui",
    template: `Make this component responsive:

\`\`\`{{language}}
{{code}}
\`\`\`

Breakpoints:
- Mobile: {{mobile}}
- Tablet: {{tablet}}
- Desktop: {{desktop}}

Use {{styling}}.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., tsx" },
      { key: "code", label: "Component", placeholder: "Paste component", multiline: true },
      { key: "mobile", label: "Mobile Layout", placeholder: "e.g., stack vertically, hide sidebar" },
      { key: "tablet", label: "Tablet Layout", placeholder: "e.g., 2 columns" },
      { key: "desktop", label: "Desktop Layout", placeholder: "e.g., 3 columns, sidebar visible" },
      { key: "styling", label: "Styling", placeholder: "e.g., Tailwind CSS" }
    ]
  },
  {
    id: "create-skeleton",
    title: "Create Loading Skeleton",
    category: "ui",
    template: `Create a loading skeleton for this component:

\`\`\`{{language}}
{{code}}
\`\`\`

Use {{framework}} with subtle animation.`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., tsx" },
      { key: "code", label: "Component", placeholder: "Paste component", multiline: true },
      { key: "framework", label: "Framework", placeholder: "e.g., Tailwind CSS, shadcn/ui" }
    ]
  },
  {
    id: "create-empty-state",
    title: "Create Empty State",
    category: "ui",
    template: `Create an empty state component for {{context}} using {{framework}}.

Include:
- Illustration or icon
- Helpful message
- Primary action button
- Optional secondary action`,
    fields: [
      { key: "context", label: "Context", placeholder: "e.g., no search results, empty inbox" },
      { key: "framework", label: "Framework", placeholder: "e.g., React + Tailwind" }
    ]
  },
  {
    id: "improve-accessibility",
    title: "Improve Accessibility",
    category: "ui",
    template: `Improve the accessibility of this component:

\`\`\`{{language}}
{{code}}
\`\`\`

Add:
- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support`,
    fields: [
      { key: "language", label: "Language", placeholder: "e.g., tsx" },
      { key: "code", label: "Component", placeholder: "Paste component", multiline: true }
    ]
  },
  {
    id: "create-chart",
    title: "Create Chart/Graph",
    category: "ui",
    template: `Create a {{chart_type}} chart using {{framework}}.

Data format:
{{data_format}}

Features:
{{features}}

Make it responsive and accessible.`,
    fields: [
      { key: "chart_type", label: "Chart Type", placeholder: "e.g., bar, line, pie, area" },
      { key: "framework", label: "Chart Library", placeholder: "e.g., Recharts, Chart.js" },
      { key: "data_format", label: "Data Format", placeholder: "e.g., [{name: 'Jan', value: 100}]", multiline: true },
      { key: "features", label: "Features", placeholder: "e.g., tooltip, legend, animation", multiline: true }
    ]
  },

  // ============================================================
  // DEVOPS - Deployment & Infrastructure (5 prompts)
  // ============================================================
  {
    id: "deploy-vercel",
    title: "Deploy to Vercel",
    category: "devops",
    template: `Help me deploy my {{framework}} app to Vercel.

Current setup:
{{setup}}

Environment variables needed:
{{env_vars}}

Include build configuration and any gotchas.`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js" },
      { key: "setup", label: "Current Setup", placeholder: "Describe your project", multiline: true },
      { key: "env_vars", label: "Env Variables", placeholder: "DATABASE_URL, API_KEY, etc.", multiline: true }
    ]
  },
  {
    id: "setup-ci-cd",
    title: "Setup CI/CD Pipeline",
    category: "devops",
    template: `Create a CI/CD pipeline using {{platform}} for my {{project_type}}.

On push to main:
{{on_push}}

On pull request:
{{on_pr}}

Include test, build, and deploy steps.`,
    fields: [
      { key: "platform", label: "CI/CD Platform", placeholder: "e.g., GitHub Actions" },
      { key: "project_type", label: "Project Type", placeholder: "e.g., Next.js + Supabase" },
      { key: "on_push", label: "On Push to Main", placeholder: "e.g., deploy to production", multiline: true },
      { key: "on_pr", label: "On Pull Request", placeholder: "e.g., run tests, preview deploy", multiline: true }
    ]
  },
  {
    id: "docker-setup",
    title: "Create Dockerfile",
    category: "devops",
    template: `Create a Dockerfile for my {{project_type}} app.

Framework: {{framework}}
Node version: {{node_version}}

Optimize for:
{{optimizations}}`,
    fields: [
      { key: "project_type", label: "Project Type", placeholder: "e.g., web app, API server" },
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js, Express" },
      { key: "node_version", label: "Node Version", placeholder: "e.g., 20" },
      { key: "optimizations", label: "Optimize For", placeholder: "e.g., small image size, fast builds", multiline: true }
    ]
  },
  {
    id: "setup-monitoring",
    title: "Setup Error Monitoring",
    category: "devops",
    template: `Setup error monitoring with {{service}} in my {{framework}} app.

Track:
{{track}}

Include source maps and user context.`,
    fields: [
      { key: "service", label: "Service", placeholder: "e.g., Sentry, LogRocket" },
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js" },
      { key: "track", label: "Track", placeholder: "e.g., errors, performance, user sessions", multiline: true }
    ]
  },
  {
    id: "setup-analytics",
    title: "Setup Analytics",
    category: "devops",
    template: `Setup {{analytics_service}} analytics in my {{framework}} app.

Track:
{{events}}

Be privacy-conscious and GDPR compliant.`,
    fields: [
      { key: "analytics_service", label: "Analytics", placeholder: "e.g., Plausible, PostHog, GA4" },
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js" },
      { key: "events", label: "Events to Track", placeholder: "e.g., page views, signups, purchases", multiline: true }
    ]
  },

  // ============================================================
  // AI - AI/ML Integration (5 prompts)
  // ============================================================
  {
    id: "add-chatbot",
    title: "Add AI Chatbot",
    category: "ai",
    template: `Add an AI chatbot to my {{framework}} app using {{ai_provider}}.

Features:
{{features}}

Include streaming responses and conversation history.`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js" },
      { key: "ai_provider", label: "AI Provider", placeholder: "e.g., OpenAI, Anthropic" },
      { key: "features", label: "Features", placeholder: "e.g., system prompt, context, stop button", multiline: true }
    ]
  },
  {
    id: "ai-text-generation",
    title: "Add AI Text Generation",
    category: "ai",
    template: `Add AI text generation to {{feature}} using {{ai_provider}}.

Use case: {{use_case}}
Input: {{input}}
Output: {{output}}

Include proper error handling and rate limiting.`,
    fields: [
      { key: "feature", label: "Feature", placeholder: "e.g., product descriptions" },
      { key: "ai_provider", label: "AI Provider", placeholder: "e.g., OpenAI GPT-4" },
      { key: "use_case", label: "Use Case", placeholder: "e.g., generate marketing copy" },
      { key: "input", label: "Input", placeholder: "e.g., product name, features" },
      { key: "output", label: "Output", placeholder: "e.g., 3 description variants" }
    ]
  },
  {
    id: "add-embeddings",
    title: "Add Vector Embeddings",
    category: "ai",
    template: `Add vector embeddings for {{use_case}} using {{provider}}.

Store in: {{vector_db}}
Data to embed: {{data}}

Include search functionality.`,
    fields: [
      { key: "use_case", label: "Use Case", placeholder: "e.g., semantic search, recommendations" },
      { key: "provider", label: "Embedding Provider", placeholder: "e.g., OpenAI, Cohere" },
      { key: "vector_db", label: "Vector Database", placeholder: "e.g., Supabase pgvector, Pinecone" },
      { key: "data", label: "Data to Embed", placeholder: "e.g., product descriptions, documents" }
    ]
  },
  {
    id: "add-image-generation",
    title: "Add AI Image Generation",
    category: "ai",
    template: `Add AI image generation using {{provider}} to my {{framework}} app.

Use case: {{use_case}}
Image specs: {{specs}}

Include loading states and error handling.`,
    fields: [
      { key: "provider", label: "Provider", placeholder: "e.g., DALL-E, Stable Diffusion" },
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js" },
      { key: "use_case", label: "Use Case", placeholder: "e.g., avatar generation, product mockups" },
      { key: "specs", label: "Image Specs", placeholder: "e.g., 512x512, PNG" }
    ]
  },
  {
    id: "add-rag",
    title: "Add RAG (Retrieval Augmented Generation)",
    category: "ai",
    template: `Add RAG to my {{framework}} app for {{use_case}}.

AI Provider: {{ai_provider}}
Vector DB: {{vector_db}}
Documents: {{documents}}

Include document chunking and retrieval.`,
    fields: [
      { key: "framework", label: "Framework", placeholder: "e.g., Next.js" },
      { key: "use_case", label: "Use Case", placeholder: "e.g., Q&A over docs, support bot" },
      { key: "ai_provider", label: "AI Provider", placeholder: "e.g., OpenAI, Anthropic" },
      { key: "vector_db", label: "Vector DB", placeholder: "e.g., Supabase pgvector" },
      { key: "documents", label: "Documents", placeholder: "e.g., markdown files, PDFs" }
    ]
  }
];

// Make available globally
window.PROMPTS = PROMPTS;
