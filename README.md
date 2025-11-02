# KenStack Bun Next.js Mantine Template

A modern, production-ready Next.js template built with Bun runtime, featuring Mantine UI, TanStack Query, and Jotai for state management. This template provides a solid foundation for building scalable React applications with TypeScript, theme switching, and optimal developer experience.

## Tech Stack

### Core Framework

- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Latest React version with improved features
- **TypeScript 5** - Type-safe development

### Runtime & Package Manager

- **Bun 1.2.4+** - Fast JavaScript runtime and package manager

### UI & Styling

- **Mantine 8.3.6** - Comprehensive React component library
- **PostCSS** - CSS processing with Mantine preset
- **CSS Modules** - Scoped styling support

### State Management & Data Fetching

- **TanStack Query 5.90.6** - Powerful data synchronization for React
- **Jotai 2.15.1** - Primitive and flexible state management for React

### Icons

- **Tabler Icons React 3.35.0** - Beautiful open-source icons
- **Mantine Dev Icons 2.0.0** - Additional icon set

## Features

### Theme Management

- Built-in theme switcher component supporting:
  - Light mode
  - Dark mode
  - Auto mode (follows system preference)
- Theme preference persisted in localStorage
- Seamless theme transitions across the application

### React Query Integration

- Optimized QueryClient configuration for Next.js App Router
- Server-side rendering (SSR) support with proper hydration
- Automatic query client management (separate instances for server/browser)
- Configurable stale time and query dehydration

### State Management

- Jotai atoms setup with example atoms
- Type-safe atom definitions
- Easy to extend with custom atoms

### Developer Experience

- TypeScript configured with strict mode
- ESLint with Next.js recommended rules
- Path aliases configured (@/_ for src/_)
- Hot module replacement (HMR) in development
- PostCSS with Mantine breakpoint variables

### Project Structure

- Organized folder structure following Next.js App Router conventions
- Separated concerns: components, providers, lib, atoms
- Clean and maintainable codebase

## Getting Started

### Prerequisites

- **Bun** 1.2.4 or higher installed on your system
- Node.js 18+ (if not using Bun exclusively)

Install Bun if you haven't already:

```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# Windows
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Installation

1. Clone the repository or use this template:

```bash
git clone <repository-url>
cd kenstack-bun-nextjs-mantine
```

2. Install dependencies:

```bash
bun install
```

3. Run the development server:

```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── page.module.css    # Page-specific styles
├── components/            # Reusable React components
│   └── ThemeSwitcher.tsx  # Theme switcher component
├── providers/             # React context providers
│   ├── index.tsx         # Main provider wrapper
│   └── ReactQueryProvider.tsx  # TanStack Query provider
├── lib/                   # Utility functions and helpers
│   └── get-query-client.ts  # QueryClient factory
└── atom/                  # Jotai atoms
    └── index.atom.ts     # Atom definitions
```

## Available Scripts

- `bun dev` - Start development server on port 3000
- `bun build` - Build production-ready application
- `bun start` - Start production server (run after build)
- `bun lint` - Run ESLint to check code quality

## Configuration Files

### TypeScript (`tsconfig.json`)

- Strict type checking enabled
- Path aliases configured (@/_ maps to src/_)
- Next.js plugins and optimizations

### Next.js (`next.config.ts`)

- TypeScript configuration
- Extensible for custom Next.js features

### PostCSS (`postcss.config.cjs`)

- Mantine preset for CSS processing
- Breakpoint variables for responsive design:
  - xs: 36em
  - sm: 48em
  - md: 62em
  - lg: 75em
  - xl: 88em

### ESLint (`eslint.config.mjs`)

- Next.js core web vitals rules
- TypeScript-specific rules
- Production-ready linting configuration

## Key Features Explained

### Theme Switcher

The theme switcher component (`src/components/ThemeSwitcher.tsx`) provides a simple interface for users to toggle between light, dark, and auto themes. It uses Mantine's `useMantineColorScheme` hook and displays appropriate icons for each mode.

**Usage:**

```tsx
import ThemeSwitcher from "@/components/ThemeSwitcher";

<ThemeSwitcher />;
```

### React Query Setup

The React Query configuration (`src/lib/get-query-client.ts`) is optimized for Next.js App Router:

- Separate query clients for server and browser
- Prevents query client recreation during React suspense
- Includes pending queries in dehydration for better SSR
- Default stale time of 60 seconds

**Customize query defaults:**

```typescript
// src/lib/get-query-client.ts
defaultOptions: {
  queries: {
    staleTime: 60 * 1000, // Adjust as needed
    // Add more default options
  },
}
```

### State Management with Jotai

Example atoms are provided in `src/atom/index.atom.ts`. You can create new atoms following the same pattern:

```typescript
import { atom } from "jotai";

export const myAtom = atom<string>("default value");
```

**Usage in components:**

```tsx
import { useAtom } from "jotai";
import { myAtom } from "@/atom";

const [value, setValue] = useAtom(myAtom);
```

### Mantine Theme Customization

Customize the Mantine theme in `src/providers/index.tsx`:

```typescript
const theme = createTheme({
  primaryColor: "blue",
  fontFamily: "Open Sans, sans-serif",
  // Add more theme customizations
});
```

## Customization

### Adding New Components

1. Create component files in `src/components/`
2. Use TypeScript for type safety
3. Follow the existing component patterns
4. Export components for reuse

### Extending Providers

The main provider wrapper (`src/providers/index.tsx`) combines all context providers. Add new providers by wrapping the children:

```tsx
<MantineProvider>
  <JotaiProvider>
    <ReactQueryProvider>
      <YourNewProvider>{children}</YourNewProvider>
    </ReactQueryProvider>
  </JotaiProvider>
</MantineProvider>
```

### Path Aliases

The template uses `@/*` to reference the `src/*` directory. Import files like:

```typescript
import Component from "@/components/Component";
import { utility } from "@/lib/utility";
```

## Best Practices

### Code Organization

- Keep components small and focused
- Use TypeScript interfaces for props
- Extract reusable logic into custom hooks
- Place utility functions in `src/lib/`

### Styling

- Use Mantine components when possible
- Prefer CSS Modules for component-specific styles
- Use Mantine's responsive utilities for breakpoints
- Maintain consistent spacing using Mantine's spacing scale

### State Management

- Use Jotai atoms for component-level state
- Use TanStack Query for server state
- Consider React Query mutations for data mutations
- Keep atoms close to where they're used when possible

### TypeScript

- Enable strict mode (already configured)
- Define interfaces for all props and data structures
- Avoid using `any` type
- Leverage TypeScript's inference capabilities

## Deployment

### Build for Production

```bash
bun build
```

This creates an optimized production build in the `.next` directory.

### Deploy to Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your app will be deployed automatically

### Deploy to Other Platforms

This template works with any platform that supports Next.js:

- **Netlify** - Configure build command: `bun build`
- **Railway** - Automatic Next.js detection
- **Docker** - Create a Dockerfile for containerized deployment
- **Self-hosted** - Use `bun start` after building

## Browser Support

This template supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Learning Resources

### Next.js

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router Guide](https://nextjs.org/docs/app)

### Mantine

- [Mantine Documentation](https://mantine.dev)
- [Mantine Components](https://mantine.dev/core/)
- [Mantine Theming](https://mantine.dev/theming/mantine-provider/)

### TanStack Query

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [React Query Guide](https://tanstack.com/query/latest/docs/react/overview)

### Jotai

- [Jotai Documentation](https://jotai.org)
- [Jotai Basics](https://jotai.org/docs/basics/concepts)

### Bun

- [Bun Documentation](https://bun.sh/docs)
- [Bun Runtime](https://bun.sh)

## Contributing

When contributing to this template:

1. Follow the existing code style
2. Use TypeScript for all new files
3. Add appropriate type definitions
4. Test your changes thoroughly
5. Update documentation if needed

## License

This template is available for use in personal and commercial projects. Customize it to fit your needs.

## Support

For issues and questions:

- Check the documentation of respective libraries
- Review Next.js, Mantine, and TanStack Query documentation
- Open an issue in the repository if you find bugs

## Version

Current template version: 0.1.0

---

Built with modern web technologies for optimal developer experience and performance.
