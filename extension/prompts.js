/**
 * VibeKick Prompt Library - 100 Ready-to-Use Prompts
 * Just pick one, optionally add context, and copy!
 */

window.PROMPTS = [
  // ==================== FEATURE (20) ====================
  { id: "new-feature", title: "Build New Feature", category: "feature", template: "Build this feature for me with complete, working code. Include all necessary files and explain your approach." },
  { id: "create-component", title: "Create Component", category: "feature", template: "Create a reusable component that's well-structured and easy to customize." },
  { id: "add-api-endpoint", title: "Add API Endpoint", category: "feature", template: "Add a new API endpoint with proper validation, error handling, and RESTful conventions." },
  { id: "create-form", title: "Create Form", category: "feature", template: "Create a form with validation, error messages, and proper submit handling." },
  { id: "add-auth", title: "Add Authentication", category: "feature", template: "Implement authentication with secure password handling and session management." },
  { id: "create-modal", title: "Create Modal", category: "feature", template: "Create an accessible modal with keyboard support and smooth animations." },
  { id: "add-search", title: "Add Search", category: "feature", template: "Implement search functionality with debouncing and result highlighting." },
  { id: "add-pagination", title: "Add Pagination", category: "feature", template: "Add pagination with page numbers, navigation, and items per page selector." },
  { id: "add-notifications", title: "Add Notifications", category: "feature", template: "Create a toast/notification system with different types and auto-dismiss." },
  { id: "add-dark-mode", title: "Add Dark Mode", category: "feature", template: "Implement dark mode with system preference detection and toggle." },
  { id: "add-file-upload", title: "Add File Upload", category: "feature", template: "Implement file upload with drag-and-drop, validation, and progress indicator." },
  { id: "add-infinite-scroll", title: "Add Infinite Scroll", category: "feature", template: "Implement infinite scroll with loading indicators and error handling." },
  { id: "create-dashboard", title: "Create Dashboard", category: "feature", template: "Create a responsive dashboard layout with cards and key metrics." },
  { id: "add-realtime", title: "Add Real-time Updates", category: "feature", template: "Implement real-time updates with connection handling and reconnection logic." },
  { id: "create-wizard", title: "Create Multi-step Form", category: "feature", template: "Create a multi-step wizard with progress indication and step validation." },
  { id: "add-shortcuts", title: "Add Keyboard Shortcuts", category: "feature", template: "Implement keyboard shortcuts with a help modal showing available shortcuts." },
  { id: "add-export", title: "Add Export Feature", category: "feature", template: "Add data export in multiple formats (CSV, JSON, PDF)." },
  { id: "add-undo-redo", title: "Add Undo/Redo", category: "feature", template: "Implement undo/redo with keyboard shortcuts and history stack." },
  { id: "add-drag-drop", title: "Add Drag and Drop", category: "feature", template: "Implement drag and drop for reordering with visual feedback." },
  { id: "add-filters", title: "Add Filter System", category: "feature", template: "Create a filtering system with multiple filter types and URL persistence." },

  // ==================== DEBUG (15) ====================
  { id: "fix-error", title: "Fix This Error", category: "debug", template: "I'm getting an error. Explain what's causing it and provide the fix." },
  { id: "debug-behavior", title: "Debug Behavior", category: "debug", template: "This isn't working as expected. Help me understand why and fix it." },
  { id: "fix-typescript", title: "Fix TypeScript Error", category: "debug", template: "Fix this TypeScript error while maintaining type safety." },
  { id: "fix-async", title: "Fix Async Issue", category: "debug", template: "I'm having async/await issues. Fix the race condition or promise handling." },
  { id: "fix-memory-leak", title: "Fix Memory Leak", category: "debug", template: "I suspect a memory leak. Help me identify and fix it." },
  { id: "fix-infinite-loop", title: "Fix Infinite Loop", category: "debug", template: "My code is causing an infinite loop or re-render. Fix it." },
  { id: "fix-cors", title: "Fix CORS Error", category: "debug", template: "I'm getting CORS errors. Provide both frontend and backend solutions." },
  { id: "fix-hydration", title: "Fix Hydration Error", category: "debug", template: "I'm getting hydration mismatch errors. Fix the server/client difference." },
  { id: "fix-state", title: "Fix State Not Updating", category: "debug", template: "My state updates aren't reflecting in the UI. Fix it." },
  { id: "fix-null", title: "Fix Null/Undefined Error", category: "debug", template: "I'm getting null/undefined errors. Add proper checks and fix the root cause." },
  { id: "fix-500", title: "Fix API 500 Error", category: "debug", template: "My API is returning 500 errors. Debug and fix the server-side issue." },
  { id: "fix-slow-query", title: "Fix Slow Query", category: "debug", template: "This database query is slow. Optimize it and suggest indexes." },
  { id: "fix-build", title: "Fix Build Error", category: "debug", template: "My project won't build. Fix the compilation error." },
  { id: "fix-css", title: "Fix CSS Issue", category: "debug", template: "My CSS isn't working as expected. Debug and fix the styling." },
  { id: "fix-mobile", title: "Fix Mobile Issue", category: "debug", template: "This works on desktop but not mobile. Fix the mobile-specific issue." },

  // ==================== REFACTOR (15) ====================
  { id: "refactor-code", title: "Refactor This Code", category: "refactor", template: "Refactor this code to improve readability and maintainability. Explain each improvement." },
  { id: "extract-functions", title: "Extract Functions", category: "refactor", template: "This code does too much. Extract it into smaller, single-purpose functions." },
  { id: "add-typescript", title: "Add TypeScript", category: "refactor", template: "Convert this JavaScript to TypeScript with proper types and interfaces." },
  { id: "modernize", title: "Modernize Syntax", category: "refactor", template: "Update this to modern JavaScript syntax - const/let, arrow functions, optional chaining, etc." },
  { id: "optimize", title: "Optimize Performance", category: "refactor", template: "Optimize this code for better performance. Identify and fix bottlenecks." },
  { id: "remove-duplication", title: "Remove Duplication", category: "refactor", template: "There's duplicated code here. Refactor it to follow DRY principles." },
  { id: "modernize-legacy", title: "Modernize Legacy Code", category: "refactor", template: "This is legacy code. Update it to current best practices." },
  { id: "add-error-handling", title: "Add Error Handling", category: "refactor", template: "Add comprehensive error handling with try-catch and meaningful messages." },
  { id: "add-validation", title: "Add Validation", category: "refactor", template: "Add proper input validation with type checking and sanitization." },
  { id: "convert-to-hooks", title: "Convert to Hooks", category: "refactor", template: "Convert this class component to a functional component with hooks." },
  { id: "simplify", title: "Simplify Conditionals", category: "refactor", template: "These conditionals are complex. Simplify using early returns or guard clauses." },
  { id: "add-logging", title: "Add Logging", category: "refactor", template: "Add appropriate logging for debugging and monitoring." },
  { id: "make-reusable", title: "Make Reusable", category: "refactor", template: "This code is too specific. Make it more reusable and configurable." },
  { id: "improve-naming", title: "Improve Naming", category: "refactor", template: "The names are unclear. Suggest better names that convey purpose." },
  { id: "add-docs", title: "Add Documentation", category: "refactor", template: "Add JSDoc comments with parameter descriptions and examples." },

  // ==================== TEST (10) ====================
  { id: "write-unit-tests", title: "Write Unit Tests", category: "test", template: "Write unit tests covering main functionality, edge cases, and error conditions." },
  { id: "write-integration-tests", title: "Write Integration Tests", category: "test", template: "Write integration tests verifying different parts work together." },
  { id: "write-e2e-tests", title: "Write E2E Tests", category: "test", template: "Write end-to-end tests for this complete user flow." },
  { id: "add-coverage", title: "Increase Coverage", category: "test", template: "Identify untested paths and write tests to cover them." },
  { id: "write-api-tests", title: "Write API Tests", category: "test", template: "Write tests for this API including success, validation errors, and auth." },
  { id: "add-mocks", title: "Add Mocks", category: "test", template: "Mock the external dependencies so I can test in isolation." },
  { id: "test-edge-cases", title: "Test Edge Cases", category: "test", template: "Identify edge cases and write tests for boundary values and unusual inputs." },
  { id: "write-snapshot-tests", title: "Write Snapshot Tests", category: "test", template: "Write snapshot tests for this component." },
  { id: "test-async", title: "Test Async Code", category: "test", template: "Write tests for this async code with proper promise handling." },
  { id: "test-a11y", title: "Test Accessibility", category: "test", template: "Write tests to verify accessibility - ARIA, keyboard nav, screen readers." },

  // ==================== EXPLAIN (10) ====================
  { id: "explain-code", title: "Explain This Code", category: "explain", template: "Explain what this code does step by step in simple terms." },
  { id: "explain-concept", title: "Explain Concept", category: "explain", template: "Explain this programming concept simply with practical examples." },
  { id: "explain-architecture", title: "Explain Architecture", category: "explain", template: "Explain the architecture - how are pieces organized and why?" },
  { id: "explain-error", title: "Explain Error", category: "explain", template: "Explain what this error means and how to avoid it." },
  { id: "explain-library", title: "Explain Library", category: "explain", template: "Explain how to use this library feature with common patterns." },
  { id: "explain-algorithm", title: "Explain Algorithm", category: "explain", template: "Explain how this algorithm works with time/space complexity." },
  { id: "explain-pattern", title: "Explain Pattern", category: "explain", template: "Explain this design pattern - when to use it and example implementation." },
  { id: "explain-diff", title: "Explain Difference", category: "explain", template: "Explain the difference between these two approaches." },
  { id: "explain-why", title: "Explain Why It Works", category: "explain", template: "This works but I don't understand why. Explain the mechanism." },
  { id: "eli5", title: "Explain Like I'm 5", category: "explain", template: "Explain this simply using analogies. Avoid jargon." },

  // ==================== API (10) ====================
  { id: "design-api", title: "Design REST API", category: "api", template: "Design a REST API with endpoints, methods, request/response formats." },
  { id: "add-graphql", title: "Add GraphQL", category: "api", template: "Create a GraphQL schema with types, queries, mutations, and resolvers." },
  { id: "handle-api-errors", title: "Handle API Errors", category: "api", template: "Implement proper API error handling with status codes and messages." },
  { id: "add-rate-limiting", title: "Add Rate Limiting", category: "api", template: "Implement rate limiting with per-user limits and proper headers." },
  { id: "add-api-validation", title: "Add Request Validation", category: "api", template: "Add request validation with clear error messages." },
  { id: "add-api-auth", title: "Add API Auth", category: "api", template: "Implement API authentication with token handling." },
  { id: "document-api", title: "Document API", category: "api", template: "Create API documentation with request/response examples." },
  { id: "optimize-api", title: "Optimize API", category: "api", template: "Optimize this API for performance - caching, pagination, queries." },
  { id: "add-webhook", title: "Add Webhooks", category: "api", template: "Implement webhooks with event types and retry logic." },
  { id: "version-api", title: "Version API", category: "api", template: "Add API versioning and handle breaking changes." },

  // ==================== DATABASE (10) ====================
  { id: "design-schema", title: "Design Schema", category: "database", template: "Design a database schema with tables, relationships, and indexes." },
  { id: "write-migration", title: "Write Migration", category: "database", template: "Write a database migration with up and down scripts." },
  { id: "optimize-query", title: "Optimize Query", category: "database", template: "Optimize this slow query and suggest indexes." },
  { id: "add-indexes", title: "Add Indexes", category: "database", template: "Recommend indexes for this database with trade-off explanations." },
  { id: "write-sql", title: "Write SQL Query", category: "database", template: "Write a SQL query for this requirement with joins if needed." },
  { id: "normalize", title: "Normalize Database", category: "database", template: "Help normalize this database design to appropriate normal form." },
  { id: "add-soft-delete", title: "Add Soft Delete", category: "database", template: "Implement soft delete with schema changes and query updates." },
  { id: "add-transactions", title: "Add Transactions", category: "database", template: "Add transaction handling for data consistency." },
  { id: "create-seeds", title: "Create Seed Data", category: "database", template: "Create realistic seed data covering various scenarios." },
  { id: "backup-strategy", title: "Backup Strategy", category: "database", template: "Design a backup strategy with frequency and restoration procedures." },

  // ==================== UI (10) ====================
  { id: "make-responsive", title: "Make Responsive", category: "ui", template: "Make this fully responsive for mobile, tablet, and desktop." },
  { id: "add-animation", title: "Add Animation", category: "ui", template: "Add smooth, purposeful animations and micro-interactions." },
  { id: "improve-a11y", title: "Improve Accessibility", category: "ui", template: "Improve accessibility - ARIA, keyboard nav, focus management." },
  { id: "add-loading-state", title: "Add Loading State", category: "ui", template: "Create loading states with skeleton loaders and smooth transitions." },
  { id: "add-empty-state", title: "Add Empty State", category: "ui", template: "Design an empty state with helpful messaging and call-to-action." },
  { id: "add-error-state", title: "Add Error State", category: "ui", template: "Design error states with friendly messages and recovery actions." },
  { id: "improve-form-ux", title: "Improve Form UX", category: "ui", template: "Improve form UX with inline validation and helpful hints." },
  { id: "add-transitions", title: "Add Transitions", category: "ui", template: "Add smooth page/view transitions with enter/exit animations." },
  { id: "create-tooltip", title: "Create Tooltip", category: "ui", template: "Create an accessible tooltip handling positioning and keyboard." },
  { id: "design-table", title: "Design Data Table", category: "ui", template: "Design a data table with sorting, filtering, and pagination." },

  // ==================== DEVOPS (5) ====================
  { id: "create-dockerfile", title: "Create Dockerfile", category: "devops", template: "Create a Dockerfile with multi-stage builds and security best practices." },
  { id: "setup-cicd", title: "Setup CI/CD", category: "devops", template: "Set up a CI/CD pipeline with testing, building, and deployment." },
  { id: "add-github-actions", title: "Add GitHub Actions", category: "devops", template: "Create GitHub Actions for testing, linting, and deployment." },
  { id: "setup-monitoring", title: "Setup Monitoring", category: "devops", template: "Set up monitoring with health checks and error tracking." },
  { id: "configure-env", title: "Configure Environments", category: "devops", template: "Set up environment config for dev, staging, and production." },

  // ==================== AI (5) ====================
  { id: "add-ai-feature", title: "Add AI Feature", category: "ai", template: "Integrate AI with API setup, prompt engineering, and error handling." },
  { id: "write-prompt", title: "Write AI Prompt", category: "ai", template: "Write an effective prompt with system instructions and examples." },
  { id: "add-streaming", title: "Add Streaming", category: "ai", template: "Implement streaming AI responses with loading and error states." },
  { id: "add-embeddings", title: "Add Vector Search", category: "ai", template: "Implement vector/semantic search with embeddings and similarity." },
  { id: "add-rag", title: "Add RAG System", category: "ai", template: "Implement RAG with document processing and context injection." }
];
