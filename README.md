# @aptly/ui — Hyper-Elegant React Component Library

> **For AI Agents:** This is the frontend UI library for the Aptly modular platform. Import components from `@aptly/ui` and the theme CSS from `@aptly/ui/styles`. All components use CSS variable tokens — never use hardcoded Tailwind values that contradict the theme.

## Installation

```bash
# From GitHub (recommended for Aptly projects)
npm install github:AptlyOrg/aptly-ui
```

### Peer Dependencies (must be in your app)

```bash
npm install react react-dom tailwindcss
```

## Setup — Two Required Steps

### Step 1: Import the theme CSS

In your app's root layout or entry point, import the theme CSS **once**:

```typescript
import '@aptly/ui/styles';
```

This loads all CSS variable tokens (colors, spacing, shadows, animations, radii) that every component relies on.

### Step 2: Wrap your app in ThemeProvider

```tsx
import { ThemeProvider } from '@aptly/ui';

// Default theme (or load from aptly-theme.json)
export default function RootLayout({ children }) {
  return (
    <ThemeProvider config={{}}>
      {children}
    </ThemeProvider>
  );
}
```

---

## <for_ai_agents> 🤖 AI AGENT INTEGRATION GUIDE

**CRITICAL: Read this entire section before writing ANY frontend code for an Aptly client application.**

### Setup Pattern (Next.js App Router)

```tsx
// app/layout.tsx
import '@aptly/ui/styles';  // REQUIRED — loads all CSS tokens
import themeConfig from './aptly-theme.json';  // Exported from showcase configurator
import { ThemeProvider, Sidebar, SidebarItem, Header } from '@aptly/ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider config={themeConfig}>
          <div className="flex h-screen bg-[var(--aptly-bg)]">
            <Sidebar collapsed={false}>
              <SidebarItem icon={<DashboardIcon />} active>Dashboard</SidebarItem>
              <SidebarItem icon={<UsersIcon />}>Clients</SidebarItem>
            </Sidebar>
            <div className="flex-1 flex flex-col min-w-0">
              <Header>...</Header>
              <main className="flex-1 overflow-y-auto p-[var(--aptly-pad-lg)]">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Processing `aptly-theme.json`

If the user provides an `aptly-theme.json` file (exported from the Showcase Configurator), import it and pass it to `ThemeProvider`:

```json
{
  "primary": "#10b981",
  "surface": "#111827",
  "bg": "#030712",
  "text": "#f9fafb",
  "radius": "12px",
  "fontFamily": "Inter",
  "density": "comfortable",
  "cardStyle": "solid",
  "focusRingStyle": "subtle",
  "animationSpeed": "fluid"
}
```

All fields are optional. ThemeProvider applies them as CSS variable overrides on `:root`.

### Theme Config Reference

| Property | Type | Default | Effect |
|---|---|---|---|
| `primary` | CSS color | `#111827` | Primary accent color for buttons, badges, active states |
| `surface` | CSS color | `#FFFFFF` | Card/panel background |
| `bg` | CSS color | `#F9FAFB` | Page background |
| `text` | CSS color | `#111827` | Primary text color |
| `radius` | CSS length | `12px` | Border radius (auto-cascades to sm/lg variants) |
| `fontFamily` | Font name | `Inter` | Body font |
| `density` | `compact` \| `comfortable` \| `spacious` | `comfortable` | Global UI scaling (affects all padding, heights, font sizes) |
| `cardStyle` | `solid` \| `glass` \| `flat` | `solid` | Card rendering mode |
| `focusRingStyle` | `subtle` \| `bold` \| `none` | `subtle` | Keyboard focus indicator thickness |
| `animationSpeed` | `instant` \| `fast` \| `fluid` | `fluid` | Global transition speed |

### Strict Coding Rules

1. **NEVER** use hardcoded Tailwind classes for spacing, colors, or radii that contradict the theme.
   - ❌ `p-4`, `rounded-lg`, `bg-gray-100`, `text-gray-900`
   - ✅ `p-[var(--aptly-pad-md)]`, `rounded-[var(--aptly-radius)]`, `bg-[var(--aptly-bg)]`, `text-[var(--aptly-text)]`

2. **ALWAYS** include `aptly-hardware` class on animated/hovered elements:
   ```tsx
   <div className="aptly-hardware transition-all duration-[var(--aptly-transition)]">
   ```

3. **ALWAYS** use the `cn()` utility for dynamic class strings:
   ```tsx
   import { cn } from '@aptly/ui';
   <div className={cn("base-class", isActive && "active-class")} />
   ```

4. **NEVER** build raw structural elements. Use the provided components.

### Available CSS Variable Tokens

```
--aptly-primary          --aptly-primary-hover     --aptly-primary-bg
--aptly-surface          --aptly-surface-glass     --aptly-bg
--aptly-text             --aptly-text-secondary    --aptly-text-muted
--aptly-border           --aptly-border-light      --aptly-border-focus
--aptly-success          --aptly-warning           --aptly-error
--aptly-scale            --aptly-font-scale
--aptly-pad-xs/sm/md/lg/xl
--aptly-h-sm/md/lg       --aptly-header-h
--aptly-sidebar-w        --aptly-sidebar-w-collapsed  --aptly-drawer-w
--aptly-radius-sm        --aptly-radius             --aptly-radius-lg  --aptly-radius-full
--aptly-shadow-sm/md/lg
--aptly-speed            --aptly-ease-spring        --aptly-transition
--aptly-ring-width       --aptly-ring-offset
--aptly-font-body
```

### Complete Component Reference

#### Layout & Structure

| Component | Import | Key Props |
|---|---|---|
| `Sidebar` | `{ Sidebar, SidebarItem }` | `collapsed?: boolean` |
| `Header` | `{ Header }` | Standard `div` props |
| `Card` | `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }` | `variant?: 'solid' \| 'glass' \| 'flat'` |
| `ContentCard` | `{ ContentCard }` | `elevation?: 1\|2\|3`, `interactive?: boolean` |
| `Modal` | `{ Modal, ModalContent, ModalHeader, ModalTitle, ModalTrigger, ModalClose, ModalFooter, ModalDescription }` | `variant?: 'standard' \| 'alert' \| 'fullscreen'` |
| `Drawer` | `{ Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription }` | `position?: 'right' \| 'left'` |
| `Tabs` | `{ Tabs }` — uses `Tabs.List`, `Tabs.Trigger`, `Tabs.Content` | `variant?: 'underline' \| 'pills' \| 'vertical'` |
| `ScrollArea` | `{ ScrollArea }` | Standard scroll container |
| `Separator` | `{ Separator }` | `orientation?: 'horizontal' \| 'vertical'` |

#### Forms & Inputs

| Component | Import | Key Props |
|---|---|---|
| `Button` | `{ Button }` | `variant?: 'solid'\|'outline'\|'ghost'\|'glass'\|'neutral'`, `size?: 'sm'\|'md'\|'lg'`, `shape?: 'default'\|'pill'\|'square'`, `fullWidth?: boolean` |
| `TextInput` | `{ TextInput }` | `label?: string`, `error?: string` |
| `Textarea` | `{ Textarea }` | Standard textarea props |
| `Checkbox` | `{ Checkbox }` | `label?: string` |
| `Switch` | `{ Switch }` | Standard switch props |
| `Select` | `{ Select, SelectTrigger, SelectValue, SelectContent, SelectItem }` | Radix Select API |
| `Slider` | `{ Slider }` | `min`, `max`, `step`, `defaultValue` |
| `SearchBar` | `{ SearchBar }` | `placeholder`, `inputSize?: 'sm'\|'md'\|'lg'`, `variant?: 'solid'\|'ghost'` |
| `Label` | `{ Label }` | Radix Label API |
| `Toggle` | `{ Toggle }` | Standard toggle props |
| `ToggleGroup` | `{ ToggleGroup, ToggleGroupItem }` | `type?: 'single'\|'multiple'` |

#### Data & Display

| Component | Import | Key Props |
|---|---|---|
| `DataTable` | `{ DataTable }` | `columns: Column[]`, `data: any[]`, `density?: string` |
| `Badge` | `{ Badge }` | `variant?: 'primary'\|'success'\|'warning'\|'error'\|'neutral'`, `appearance?: 'solid'\|'soft'` |
| `Avatar` | `{ Avatar }` | `src?: string`, `fallback: string`, `size?: 'sm'\|'md'\|'lg'` |
| `Alert` | `{ Alert, AlertTitle, AlertDescription }` | `variant?: 'default'\|'success'\|'warning'\|'error'` |
| `ProgressBar` | `{ ProgressBar }` | `value: number`, `size?: 'sm'\|'md'\|'lg'` |
| `Skeleton` | `{ Skeleton }` | `width`, `height`, `variant` |
| `Profile` | `{ Profile }` | `name: string`, `email?: string` |
| `Breadcrumb` | `{ Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator }` | Standard breadcrumb API |
| `Accordion` | `{ Accordion, AccordionItem, AccordionTrigger, AccordionContent }` | `type?: 'single'\|'multiple'`, `collapsible?: boolean` |

#### Overlay & Interaction

| Component | Import | Key Props |
|---|---|---|
| `DropdownMenu` | `{ DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuPortal, DropdownMenuGroup, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem }` | Radix DropdownMenu API |
| `Popover` | `{ Popover, PopoverTrigger, PopoverContent }` | Radix Popover API |
| `Tooltip` | `{ Tooltip, TooltipProvider }` | `content: string`, `position?: 'top'\|'bottom'\|'left'\|'right'` |

#### Utilities

| Export | Usage |
|---|---|
| `cn(...classes)` | Tailwind-safe class merging utility |
| `ThemeProvider` | Root theme wrapper (required) |
| `useAptlyTheme()` | Hook to access current theme config |

</for_ai_agents>
