# @aptly/ui Component Library

A premium, elegant, and timeless React component library built for modular MSME applications. 
This library powers the frontend UI for the Aptly Modular Platform.

## Ideology: Elegant & Timeless Design
This UI diverges from traditional "boxy" enterprise templates to offer a highly sophisticated, beautiful user experience:
- **Softer Radii**: We use `12px` to `16px` border radii (`--aptly-radius`) for a fluid, organic feel.
- **Diffuse Elevation**: We use deep, blurred shadows (`--aptly-shadow-md` and `lg`) instead of harsh drops. Interactive elements feel like they are floating.
- **Subtle Boundaries**: Hard structural borders are avoided. We use translucent borders (`rgba(0,0,0,0.04)`) to gently define zones without boxing them in.
- **Spaciousness**: Generous padding is mandatory. Space equals elegance.
- **Micro-Interactions**: Hover and active states utilize smooth CSS transforms (`scale(0.98)` or `-translate-y-1`) for a fluid, tactile feel rather than sharp color flips.

## Library Architecture
- **Core Builder**: Built using `tsup` into dual CJS & ESM modules.
- **Styling**: Vanilla CSS custom properties (`src/styles/theme.css`) to ensure framework-agnostic token management.
- **Dynamic Theming**: The `ThemeProvider.tsx` context dynamically overwrites CSS variables on the `:root` to allow client applications to inject their own branding (colors, radii).

## Running the Showcase
To visually test the components, run the local Vite showcase:
```bash
npm run dev
```

---

# <for_ai_agents> 🤖 STRICT HAND-OFF INSTRUCTIONS
**CRITICAL: If you are an AI agent picking up this codebase to continue work, you MUST adhere strictly to the following rules to maintain the aesthetic architecture.**

### 1. The Elegant Foundation (Do Not Alter)
The following foundational components are precisely tuned to the elegant aesthetic. Do not make them boxy.
- `Button.tsx` (Supports solid, outline, ghost variants with fluid animations)
- `ContentCard.tsx` (Supports Elevation layers 1, 2, 3 with hover lift transformations)
- `TextInput.tsx` (Minimal fluid borders with focused ring)
- `Avatar.tsx` (Circular, shadow-backed image wrappers)
- `Badge.tsx` (Soft and solid semantic labels)
- `Switch.tsx` (Smooth animated toggles)

### 2. Pending Components to Scaffold
The user may ask you to build more UI components. When building the following, **you must use the existing `--aptly-` CSS variables** and match the padding/shadow elegance of `ContentCard`:
- `DataTable.tsx` (Must use transparent borders and soft `var(--aptly-bg)` hover highlights per row)
- `Modal.tsx` & `Dialog.tsx` (Must use absolute centering, a subtle backdrop blur `backdrop-filter: blur(4px)`, and `var(--aptly-shadow-lg)`)
- `Drawer.tsx` (Slide-out panel for forms)
- `Tabs.tsx` (Smooth sliding active-state indicator)
- `Skeleton.tsx` (Pulse animation for loading states)
- `Sidebar.tsx` (Elegant collapsible application navigation)
- `Tooltip.tsx` (Minimal floating text wrapper)

### 3. Processing `aptly-theme.json`
If the user hands you a file named `aptly-theme.json` (exported from the Configurator module), you must use it as the fundamental design config for the client application you are building. It will dictate the exact `--aptly-` custom properties natively via the ThemeProvider.

Example integration pattern when scaffolding a new Next.js or Vite React App:
```tsx
import themeConfig from './path/to/aptly-theme.json'; // The exported blob
import { ThemeProvider, AppShell, Header, Sidebar } from '@aptly/ui';

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

### 4. Strict Coding Rules for New Work
- **NEVER** hardcode hex colors or explicit pixel radii directly in the React components. Always use `var(--aptly-surface)`, `var(--aptly-text)`, `var(--aptly-radius-lg)`, etc.
- **NEVER** use harsh Tailwind default shadows. Only use `var(--aptly-shadow-sm/md/lg)`.
- **ALWAYS** wrap dynamic class strings in the exported `cn()` utility function from `src/utils.ts`.
- **ALWAYS** export your new component in `src/index.ts`.
- **ALWAYS** add a functional demonstration of your new component to `showcase/App.tsx` so the user can verify it visually via `npm run dev`.
</for_ai_agents>
