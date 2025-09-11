# VOWEL AND WORD COUNTER PROJECT DOCUMENTATION

## LIST OF FILE NAMES WITH ITS PURPOSE

| FileName | Purpose |
|----------|---------|
| app/page.tsx | Main React component that implements the text analyzer interface with vowel and word counting functionality |
| app/layout.tsx | Root layout component that defines the HTML structure, metadata, and font configuration for the entire application |
| app/globals.css | Global CSS file containing Tailwind CSS configuration, color variables for light/dark themes, and base styling |
| components/ui/card.tsx | Reusable Card component for creating structured content containers with header, content, and description sections |
| components/ui/textarea.tsx | Textarea input component with consistent styling and accessibility features for text input |
| components/ui/label.tsx | Label component for form inputs with proper accessibility attributes and consistent styling |
| components/theme-provider.tsx | Theme provider component for managing light/dark mode functionality across the application |
| lib/utils.ts | Utility functions including the `cn` function for conditionally joining CSS class names |
| hooks/use-mobile.tsx | Custom React hook for detecting mobile device viewport and responsive behavior |
| hooks/use-toast.ts | Custom React hook for managing toast notifications and user feedback messages |
| next.config.mjs | Next.js configuration file for build settings, optimizations, and deployment configurations |
| package.json | Project dependencies, scripts, and metadata for npm package management |
| tsconfig.json | TypeScript configuration file defining compiler options and project structure |
| components.json | Configuration file for shadcn/ui component library setup and customization |
| README.md | Project documentation with setup instructions, features, and usage guidelines |
| .gitignore | Git configuration file specifying which files and directories to exclude from version control |

## CONCEPTS USED IN THE APPLICATION

### Frontend Technologies
- **React.js**: JavaScript library for building user interfaces with component-based architecture
- **Next.js**: React framework providing server-side rendering, routing, and optimization features
- **TypeScript**: Typed superset of JavaScript for enhanced code reliability and developer experience

### UI/UX Design
- **shadcn/ui**: Modern component library built on Radix UI primitives with Tailwind CSS styling
- **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development and consistent design
- **Responsive Design**: Mobile-first approach ensuring optimal experience across all device sizes

### State Management
- **React Hooks**: useState for managing component state and real-time text analysis
- **Client-side Rendering**: "use client" directive for interactive components requiring browser APIs

### Text Processing Algorithms
- **Vowel Counting**: Regular expression pattern matching to identify and count vowels (a, e, i, o, u)
- **Word Counting**: String manipulation using split() and filter() methods to accurately count words
- **Real-time Analysis**: Immediate calculation and display of statistics as user types

### Development Tools
- **Geist Font**: Modern typography using Geist Sans and Geist Mono font families
- **Vercel Analytics**: Performance monitoring and user behavior tracking
- **Git Version Control**: Source code management and collaboration workflow

### Accessibility Features
- **Semantic HTML**: Proper use of labels, headings, and ARIA attributes for screen readers
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Color Contrast**: High contrast ratios meeting WCAG guidelines for text readability

### Performance Optimizations
- **Component Splitting**: Modular architecture with reusable UI components
- **Efficient Rendering**: Optimized React rendering with proper state management
- **Lazy Loading**: Next.js automatic code splitting and optimization features
