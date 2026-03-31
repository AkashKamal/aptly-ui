# @aptly/ui Component Library (Hyper-Elegant V2)

A premium, hyper-elegant, and blazing-fast React component library built for modular MSME applications. 
This library powers the frontend UI for the Aptly Modular Architecture.

## Ideology: Hyper-Elegant & Blazing Fast
This UI pushes past traditional design tokens into premium, GPU-accelerated territory:
- **Hardware-Accelerated Speed:** We strictly use `translateZ(0)` and `transform3d` CSS scaling. This forces the client GPU to natively render micro-interactions (like Button hovers or Checkbox checks) at buttery 60fps.
- **Micro-Borders & Glassmorphism:** We avoid harsh `1px` lines in favor of sub-pixel Retina inset box-shadows (`inset 0 0 0 1.5px rgba(...)`) and frosted glass overlays (`backdrop-filter`).
- **Spring Easing:** Hard transitions are replaced with an organic spring cubic bezier (`cubic-bezier(0.19, 1, 0.22, 1)`) for a hyper-realistic, fluid feel.
- **Dynamic Density:** All internal paddings (`var(--aptly-pad-md)`) are computationally scaled in CSS via a global density configuration multiplier token.

## Provided Components
All components feature extensive internal variations (e.g. sizes, layouts, visual geometries) out of the box:
- `Button` (Sizes, Variants, Pills/Squares)
- `ContentCard` (Dynamic elevations, interactions, glass/flat renders)
- `TextInput` & `SearchBar` (Sizes, fluid icons, shortcut badges)
- `Avatar` & `Profile`
- `Badge` & `Skeleton`
- `Switch`, `Checkbox`, `Radio`, `Slider`, `ProgressBar`
- `Modal`, `Drawer`, `Tooltip`
- `Sidebar`, `Header`, `Tabs`, `DataTable`

---

# <for_ai_agents> 🤖 STRICT HAND-OFF INSTRUCTIONS
**CRITICAL: If you are an AI agent picking up this codebase to continue building a client application, you MUST adhere strictly to the following rules to maintain the aesthetic architecture.**

### 1. Processing `aptly-theme.json`
If the user hands you an `aptly-theme.json` file (exported from the Configurator module), you must use it as the fundamental design config for the incoming client app. 

Example integration pattern when scaffolding a new React app:
```tsx
import themeConfig from './path/to/aptly-theme.json'; // The exported blob
import { ThemeProvider, Header, Sidebar, ContentCard, Button } from '@aptly/ui';

// Note: Config includes complex tuning like 'density', 'cardStyle', 'animationSpeed', 'focusRingStyle'
export default function RootLayout({ children }) {
  return (
    <ThemeProvider config={themeConfig}>
       <div className="flex h-screen bg-[var(--aptly-bg)]">
         <Sidebar collapsed={false}>...</Sidebar>
         <div className="flex-1 flex flex-col min-w-0">
            <Header>...</Header>
            <main className="p-8">{children}</main>
         </div>
       </div>
    </ThemeProvider>
  )
}
```

### 2. Strict Coding Rules for New UI Component Work
- **NEVER** build structural elements with raw Tailwind `transition-all duration-200`. You **MUST** use the custom tokens (`duration-[var(--aptly-transition)]`, `ease-[var(--aptly-ease-spring)]`).
- **ALWAYS** include `aptly-hardware` class on anything that moves or scales on hover to prevent repaints.
- **NEVER** use explicit pixel padding classes (`p-4`). Always use semantic padding variables (`p-[var(--aptly-pad-md)]`) so the entire UI scales beautifully when the user toggles the global `Density` Config.
- **ALWAYS** wrap dynamic class strings in the exported `cn()` utility function from `src/utils.ts`.
</for_ai_agents>
