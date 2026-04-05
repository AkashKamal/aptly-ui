"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Alert: () => Alert,
  AlertDescription: () => AlertDescription,
  AlertTitle: () => AlertTitle,
  Avatar: () => Avatar,
  Badge: () => Badge,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbEllipsis: () => BreadcrumbEllipsis,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  ContentCard: () => ContentCard,
  DataTable: () => DataTable,
  Drawer: () => Drawer,
  DrawerClose: () => DrawerClose,
  DrawerContent: () => DrawerContent,
  DrawerDescription: () => DrawerDescription,
  DrawerFooter: () => DrawerFooter,
  DrawerHeader: () => DrawerHeader,
  DrawerLegacy: () => DrawerLegacy,
  DrawerOverlay: () => DrawerOverlay,
  DrawerPortal: () => DrawerPortal,
  DrawerTitle: () => DrawerTitle,
  DrawerTrigger: () => DrawerTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Header: () => Header,
  Label: () => Label2,
  Modal: () => Modal,
  ModalClose: () => ModalClose,
  ModalContent: () => ModalContent,
  ModalDescription: () => ModalDescription,
  ModalFooter: () => ModalFooter,
  ModalHeader: () => ModalHeader,
  ModalOverlay: () => ModalOverlay,
  ModalPortal: () => ModalPortal,
  ModalTitle: () => ModalTitle,
  ModalTrigger: () => ModalTrigger,
  Popover: () => Popover,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  Profile: () => Profile,
  ProgressBar: () => ProgressBar,
  ScrollArea: () => ScrollArea,
  ScrollBar: () => ScrollBar,
  SearchBar: () => SearchBar,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Separator: () => Separator2,
  Sidebar: () => Sidebar,
  SidebarItem: () => SidebarItem,
  Skeleton: () => Skeleton,
  Slider: () => Slider,
  Switch: () => Switch,
  Tabs: () => TabsExtended,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  TextInput: () => TextInput,
  Textarea: () => Textarea,
  ThemeProvider: () => ThemeProvider,
  Toggle: () => Toggle,
  ToggleGroup: () => ToggleGroup,
  ToggleGroupItem: () => ToggleGroupItem,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipRoot: () => TooltipRoot,
  TooltipSimple: () => Tooltip,
  TooltipTrigger: () => TooltipTrigger,
  cn: () => cn,
  useAptlyTheme: () => useAptlyTheme
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_react = __toESM(require("react"));

// src/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = import_react.default.forwardRef(
  ({ className, variant = "solid", size = "md", shape = "default", fullWidth, style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        ref,
        className: cn(
          "relative inline-flex items-center justify-center font-semibold tracking-tight aptly-hardware transition-all duration-[var(--aptly-transition)] outline-none select-none disabled:opacity-40 disabled:pointer-events-none",
          fullWidth && "w-full",
          // SHAPES
          {
            "rounded-[var(--aptly-radius)]": shape === "default",
            "rounded-[var(--aptly-radius-full)]": shape === "pill",
            "rounded-[var(--aptly-radius-sm)]": shape === "square"
          },
          // VARIANTS
          {
            "bg-[var(--aptly-primary)] text-white shadow-[var(--aptly-shadow-sm)] hover:shadow-[var(--aptly-shadow-md)] active:scale-[0.98]": variant === "solid",
            "bg-transparent border border-[var(--aptly-border)] text-[var(--aptly-text)] hover:bg-[var(--aptly-bg)]": variant === "outline",
            "bg-transparent text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-primary-bg)] hover:text-[var(--aptly-primary)]": variant === "ghost",
            "bg-[var(--aptly-bg)] text-[var(--aptly-text)] hover:bg-[var(--aptly-primary-bg)] border border-[var(--aptly-border-light)]": variant === "neutral",
            "aptly-glass text-[var(--aptly-text)]": variant === "glass"
          },
          className
        ),
        style: {
          height: size === "sm" ? "var(--aptly-h-sm)" : size === "lg" ? "var(--aptly-h-lg)" : "var(--aptly-h-md)",
          paddingLeft: "var(--aptly-pad-md)",
          paddingRight: "var(--aptly-pad-md)",
          fontSize: "calc(0.875rem * var(--aptly-font-scale))",
          ...style
        },
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ContentCard.tsx
var import_react3 = __toESM(require("react"));

// src/components/ThemeProvider.tsx
var import_react2 = require("react");

// src/components/Tooltip.tsx
var React2 = __toESM(require("react"));
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var TooltipRoot = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React2.forwardRef(({ className, sideOffset = 4, position = "top", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
  TooltipPrimitive.Content,
  {
    ref,
    side: position,
    sideOffset,
    className: cn(
      "z-[9999] overflow-hidden rounded-[var(--aptly-radius-sm)] bg-[var(--aptly-primary)] px-3 py-1.5 font-semibold text-white shadow-[var(--aptly-shadow-md)] aptly-hardware animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    style: {
      fontSize: "calc(11px * var(--aptly-font-scale))",
      paddingLeft: "var(--aptly-pad-sm)",
      paddingRight: "var(--aptly-pad-sm)",
      paddingTop: "calc(0.25rem * var(--aptly-scale))",
      paddingBottom: "calc(0.25rem * var(--aptly-scale))"
    },
    ...props,
    children: [
      props.children,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TooltipPrimitive.Arrow, { className: "fill-[var(--aptly-primary)]" })
    ]
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
function Tooltip({ content, children, position = "top", className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(TooltipRoot, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TooltipTrigger, { asChild: true, children }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TooltipContent, { position, className, children: content })
  ] }) });
}

// src/components/ThemeProvider.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var ThemeContext = (0, import_react2.createContext)(null);
var MANAGED_CSS_VARS = [
  "--aptly-primary",
  "--aptly-surface",
  "--aptly-bg",
  "--aptly-text",
  "--aptly-radius",
  "--aptly-radius-sm",
  "--aptly-radius-lg",
  "--aptly-scale",
  "--aptly-font-scale",
  "--aptly-speed",
  "--aptly-font-body",
  "--aptly-ring-width",
  "--aptly-ring-offset"
];
function ThemeProvider({ config = {}, children }) {
  (0, import_react2.useEffect)(() => {
    const root = document.documentElement;
    if (config.primary) root.style.setProperty("--aptly-primary", config.primary);
    if (config.surface) root.style.setProperty("--aptly-surface", config.surface);
    if (config.bg) root.style.setProperty("--aptly-bg", config.bg);
    if (config.text) root.style.setProperty("--aptly-text", config.text);
    if (config.radius) {
      const radiusNum = parseInt(config.radius, 10);
      root.style.setProperty("--aptly-radius", config.radius);
      root.style.setProperty("--aptly-radius-sm", `${Math.max(4, radiusNum - 4)}px`);
      root.style.setProperty("--aptly-radius-lg", `${radiusNum + 4}px`);
    }
    if (config.density === "compact") {
      root.style.setProperty("--aptly-scale", "0.75");
      root.style.setProperty("--aptly-font-scale", "0.85");
    } else if (config.density === "spacious") {
      root.style.setProperty("--aptly-scale", "1.25");
      root.style.setProperty("--aptly-font-scale", "1.1");
    } else {
      root.style.setProperty("--aptly-scale", "1");
      root.style.setProperty("--aptly-font-scale", "1");
    }
    if (config.animationSpeed === "instant") root.style.setProperty("--aptly-speed", "0ms");
    else if (config.animationSpeed === "fast") root.style.setProperty("--aptly-speed", "150ms");
    else root.style.setProperty("--aptly-speed", "400ms");
    if (config.focusRingStyle === "bold") {
      root.style.setProperty("--aptly-ring-width", "3px");
      root.style.setProperty("--aptly-ring-offset", "3px");
    } else if (config.focusRingStyle === "none") {
      root.style.setProperty("--aptly-ring-width", "0px");
      root.style.setProperty("--aptly-ring-offset", "0px");
    } else {
      root.style.setProperty("--aptly-ring-width", "2px");
      root.style.setProperty("--aptly-ring-offset", "2px");
    }
    if (config.fontFamily) {
      root.style.setProperty("--aptly-font-body", `"${config.fontFamily}", system-ui, sans-serif`);
    }
    return () => {
      MANAGED_CSS_VARS.forEach((v) => root.style.removeProperty(v));
    };
  }, [config]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ThemeContext.Provider, { value: config, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `aptly-theme-root aptly-card-${config.cardStyle || "solid"}`, children }) }) });
}
var useAptlyTheme = () => (0, import_react2.useContext)(ThemeContext);

// src/components/ContentCard.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var ContentCard = import_react3.default.forwardRef(
  ({ className, elevation = 1, interactive = false, style, ...props }, ref) => {
    const theme = useAptlyTheme();
    const isGlass = theme?.cardStyle === "glass";
    const isFlat = theme?.cardStyle === "flat";
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        ref,
        className: cn(
          "aptly-hardware transition-all duration-[var(--aptly-transition)] overflow-hidden",
          isGlass ? "aptly-glass border-0" : "bg-[var(--aptly-surface)] shadow-[inset_0_0_0_0.5px_var(--aptly-border-light)]",
          isFlat && !isGlass && "shadow-none bg-transparent border border-[var(--aptly-border)]",
          !isFlat && !isGlass && {
            "shadow-[var(--aptly-shadow-sm)]": elevation === 1,
            "shadow-[var(--aptly-shadow-md)]": elevation === 2,
            "shadow-[var(--aptly-shadow-lg)]": elevation === 3,
            "hover:-translate-y-1 hover:shadow-[var(--aptly-shadow-md)] cursor-pointer": interactive
          },
          className
        ),
        style: {
          borderRadius: "var(--aptly-radius-lg)",
          padding: "var(--aptly-pad-lg)",
          ...style
        },
        ...props
      }
    );
  }
);
ContentCard.displayName = "ContentCard";

// src/components/TextInput.tsx
var import_react4 = __toESM(require("react"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var TextInput = import_react4.default.forwardRef(
  ({ className, label, error, helperText, id, style, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-col gap-1.5 w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { htmlFor: inputId, className: "font-semibold text-[var(--aptly-text)] tracking-tight ml-1", style: { fontSize: "calc(0.875rem * var(--aptly-font-scale))" }, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "relative flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          id: inputId,
          ref,
          "aria-invalid": !!error,
          "aria-describedby": error ? errorId : helperText ? helperId : void 0,
          className: cn(
            "flex w-full rounded-[var(--aptly-radius)] border border-[var(--aptly-border)] bg-transparent text-[var(--aptly-text)] transition-all duration-[var(--aptly-transition)] focus-visible:outline-none focus:border-transparent focus:ring-[var(--aptly-ring-width)] focus:ring-[var(--aptly-border-focus)] disabled:cursor-not-allowed disabled:bg-[var(--aptly-bg)] disabled:opacity-50 placeholder:text-[var(--aptly-text-muted)]",
            error && "border-[var(--aptly-error)] focus:ring-[var(--aptly-error)] text-[var(--aptly-error)]",
            className
          ),
          style: {
            height: "var(--aptly-h-md)",
            paddingLeft: "var(--aptly-pad-md)",
            paddingRight: "var(--aptly-pad-md)",
            fontSize: "calc(0.9375rem * var(--aptly-font-scale))",
            ...style
          },
          ...props
        }
      ) }),
      error ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { id: errorId, className: "font-semibold text-[var(--aptly-error)] mt-1 ml-1", style: { fontSize: "calc(0.8125rem * var(--aptly-font-scale))" }, children: error }) : helperText ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { id: helperId, className: "text-[var(--aptly-text-secondary)] mt-1 ml-1", style: { fontSize: "calc(0.8125rem * var(--aptly-font-scale))" }, children: helperText }) : null
    ] });
  }
);
TextInput.displayName = "TextInput";

// src/components/Badge.tsx
var import_react5 = __toESM(require("react"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var Badge = import_react5.default.forwardRef(
  ({ className, variant = "neutral", appearance = "soft", style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "span",
      {
        ref,
        className: cn(
          "inline-flex items-center rounded-full font-bold tracking-wider uppercase select-none border",
          {
            "bg-[var(--aptly-primary)] text-white border-transparent": variant === "primary" && appearance === "solid",
            "bg-[var(--aptly-primary-bg)] text-[var(--aptly-primary)] border-transparent": variant === "primary" && appearance === "soft",
            "bg-[var(--aptly-success)] text-white border-transparent": variant === "success" && appearance === "solid",
            "bg-emerald-50 text-[var(--aptly-success)] border-emerald-100": variant === "success" && appearance === "soft",
            "bg-[var(--aptly-warning)] text-white border-transparent": variant === "warning" && appearance === "solid",
            "bg-amber-50 text-[var(--aptly-warning)] border-amber-100": variant === "warning" && appearance === "soft",
            "bg-[var(--aptly-error)] text-white border-transparent": variant === "error" && appearance === "solid",
            "bg-red-50 text-[var(--aptly-error)] border-red-100": variant === "error" && appearance === "soft",
            "bg-[var(--aptly-bg)] text-[var(--aptly-text-secondary)] border-[var(--aptly-border)]": variant === "neutral"
          },
          className
        ),
        style: {
          paddingLeft: "calc(0.6rem * var(--aptly-scale))",
          paddingRight: "calc(0.6rem * var(--aptly-scale))",
          paddingTop: "calc(0.15rem * var(--aptly-scale))",
          paddingBottom: "calc(0.15rem * var(--aptly-scale))",
          fontSize: "calc(10px * var(--aptly-font-scale))",
          lineHeight: "1",
          ...style
        },
        ...props
      }
    );
  }
);
Badge.displayName = "Badge";

// src/components/Avatar.tsx
var import_react6 = __toESM(require("react"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var Avatar = import_react6.default.forwardRef(
  ({ className, src, fallback, size = "md", style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        ref,
        className: cn(
          "relative flex shrink-0 items-center justify-center rounded-full bg-[var(--aptly-primary-bg)] text-[var(--aptly-primary)] font-bold aptly-hardware overflow-hidden",
          className
        ),
        style: {
          width: size === "sm" ? "var(--aptly-h-sm)" : size === "lg" ? "var(--aptly-h-lg)" : "var(--aptly-h-md)",
          height: size === "sm" ? "var(--aptly-h-sm)" : size === "lg" ? "var(--aptly-h-lg)" : "var(--aptly-h-md)",
          fontSize: size === "sm" ? "calc(10px * var(--aptly-font-scale))" : size === "lg" ? "calc(16px * var(--aptly-font-scale))" : "calc(13px * var(--aptly-font-scale))",
          ...style
        },
        ...props,
        children: src ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src, alt: fallback, className: "h-full w-full object-cover" }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: fallback.substring(0, 2).toUpperCase() })
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/components/Switch.tsx
var React8 = __toESM(require("react"));
var SwitchPrimitive = __toESM(require("@radix-ui/react-switch"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var Switch = React8.forwardRef(({ className, label, id, ...props }, ref) => {
  const switchId = id || React8.useId();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center", style: { gap: "var(--aptly-pad-sm)" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      SwitchPrimitive.Root,
      {
        className: cn(
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aptly-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--aptly-bg)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--aptly-primary)] data-[state=unchecked]:bg-[var(--aptly-border)] shadow-inner aptly-hardware",
          className
        ),
        style: {
          height: "calc(1.5rem * var(--aptly-scale))",
          width: "calc(2.75rem * var(--aptly-scale))"
        },
        id: switchId,
        ...props,
        ref,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          SwitchPrimitive.Thumb,
          {
            className: cn(
              "pointer-events-none block rounded-full bg-white shadow-[var(--aptly-shadow-sm)] ring-0 transition-transform data-[state=checked]:translate-x-[calc(1.25rem * var(--aptly-scale))] data-[state=unchecked]:translate-x-0"
            ),
            style: {
              height: "calc(1.25rem * var(--aptly-scale))",
              width: "calc(1.25rem * var(--aptly-scale))"
            }
          }
        )
      }
    ),
    label && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "label",
      {
        htmlFor: switchId,
        className: "font-semibold text-[var(--aptly-text)] select-none cursor-pointer",
        style: { fontSize: "calc(0.875rem * var(--aptly-font-scale))" },
        children: label
      }
    )
  ] });
});
Switch.displayName = SwitchPrimitive.Root.displayName;

// src/components/Sidebar.tsx
var import_react7 = __toESM(require("react"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var Sidebar = import_react7.default.forwardRef(
  ({ className, collapsed = false, children, style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "aside",
      {
        ref,
        className: cn(
          "flex flex-col bg-[var(--aptly-surface)] border-r border-[var(--aptly-border-light)] transition-all duration-[var(--aptly-transition)] overflow-hidden shrink-0",
          className
        ),
        style: {
          width: collapsed ? "var(--aptly-sidebar-w-collapsed)" : "var(--aptly-sidebar-w)",
          minWidth: collapsed ? "var(--aptly-sidebar-w-collapsed)" : "var(--aptly-sidebar-w)",
          ...style
        },
        ...props,
        children
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var SidebarItem = import_react7.default.forwardRef(
  ({ className, active, icon, collapsed, children, style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "button",
      {
        ref,
        className: cn(
          "flex items-center w-full outline-none transition-all duration-[var(--aptly-transition)] rounded-[var(--aptly-radius-sm)] select-none",
          active ? "bg-[var(--aptly-primary-bg)] text-[var(--aptly-primary)] font-semibold" : "text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-bg)] hover:text-[var(--aptly-text)]",
          collapsed && "justify-center",
          className
        ),
        style: {
          padding: "var(--aptly-pad-md)",
          gap: "var(--aptly-pad-sm)",
          fontSize: "calc(0.875rem * var(--aptly-font-scale))",
          ...style
        },
        ...props,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: cn("shrink-0 flex items-center justify-center", active ? "text-[var(--aptly-primary)]" : "text-[var(--aptly-text-muted)]"), children: icon }),
          !collapsed && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "truncate tracking-tight", children })
        ]
      }
    );
  }
);
SidebarItem.displayName = "SidebarItem";

// src/components/Header.tsx
var import_react8 = __toESM(require("react"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var Header = import_react8.default.forwardRef(
  ({ className, sticky = true, children, style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "header",
      {
        ref,
        className: cn(
          "flex items-center justify-between w-full bg-[var(--aptly-surface)] border-b border-[var(--aptly-border-light)] z-40 transition-shadow duration-[var(--aptly-transition)]",
          sticky ? "sticky top-0 shadow-[var(--aptly-shadow-sm)]" : "relative",
          className
        ),
        style: {
          height: "var(--aptly-header-h)",
          paddingLeft: "var(--aptly-pad-lg)",
          paddingRight: "var(--aptly-pad-lg)",
          ...style
        },
        ...props,
        children
      }
    );
  }
);
Header.displayName = "Header";

// src/components/SearchBar.tsx
var import_react9 = __toESM(require("react"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var SearchBar = import_react9.default.forwardRef(
  ({ className, iconPosition = "left", shortcut, inputSize = "md", variant = "solid", style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: cn("relative flex items-center w-full", className), children: [
      iconPosition === "left" && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "absolute left-3 z-10 text-[var(--aptly-text-muted)] pointer-events-none flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react.Search, { size: 18, strokeWidth: 2.5, style: { transform: "scale(var(--aptly-font-scale))" } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "input",
        {
          ref,
          type: "search",
          placeholder: "Search...",
          className: cn(
            "w-full rounded-[var(--aptly-radius-full)] font-medium aptly-hardware transition-all duration-[var(--aptly-transition)] focus:border-transparent focus:ring-[var(--aptly-ring-width)] focus:ring-[var(--aptly-border-focus)] placeholder:text-[var(--aptly-text-muted)] outline-none",
            {
              "bg-[var(--aptly-surface)] shadow-[inset_0_0_0_1px_var(--aptly-border-light)]": variant === "solid",
              "aptly-glass border-none shadow-none focus:bg-[rgba(255,255,255,0.9)]": variant === "glass",
              "bg-[var(--aptly-bg)] border-none shadow-none focus:bg-[var(--aptly-surface)] focus:shadow-[var(--aptly-shadow-sm)]": variant === "minimal"
            },
            iconPosition === "left" ? "pl-10" : "pl-4",
            shortcut ? "pr-14" : "pr-4"
          ),
          style: {
            height: inputSize === "sm" ? "var(--aptly-h-sm)" : inputSize === "lg" ? "var(--aptly-h-lg)" : "var(--aptly-h-md)",
            fontSize: "calc(0.875rem * var(--aptly-font-scale))",
            ...style
          },
          ...props
        }
      ),
      shortcut && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "absolute right-3 bg-[var(--aptly-bg)] text-[var(--aptly-text-muted)] px-1.5 py-[2px] rounded-[var(--aptly-radius-sm)] border border-[var(--aptly-border-light)] z-10 pointer-events-none font-bold", style: { fontSize: "calc(10px * var(--aptly-font-scale))" }, children: shortcut })
    ] });
  }
);
SearchBar.displayName = "SearchBar";

// src/components/Profile.tsx
var import_react10 = __toESM(require("react"));
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var Profile = import_react10.default.forwardRef(
  ({ className, name, email, avatarSrc, style, ...props }, ref) => {
    const [isOpen, setIsOpen] = (0, import_react10.useState)(false);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        "button",
        {
          ref,
          onClick: () => setIsOpen(!isOpen),
          className: cn(
            "flex items-center text-left hover:bg-[var(--aptly-bg)] transition-all duration-[var(--aptly-transition)] rounded-[var(--aptly-radius)] outline-none select-none",
            className
          ),
          style: {
            padding: "var(--aptly-pad-xs)",
            gap: "var(--aptly-pad-sm)",
            ...style
          },
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Avatar, { fallback: name, src: avatarSrc, size: "sm" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "hidden md:block overflow-hidden", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "font-bold truncate leading-tight", style: { fontSize: "calc(0.875rem * var(--aptly-font-scale))" }, children: name }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-[var(--aptly-text-muted)] truncate leading-tight", style: { fontSize: "calc(0.75rem * var(--aptly-font-scale))" }, children: email })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react2.ChevronDown, { size: 14, className: cn("text-[var(--aptly-text-muted)] transition-transform", isOpen && "rotate-180") })
          ]
        }
      ),
      isOpen && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "absolute right-0 mt-2 w-48 bg-[var(--aptly-surface)] border border-[var(--aptly-border-light)] rounded-[var(--aptly-radius)] shadow-[var(--aptly-shadow-lg)] z-50 py-1 animate-in fade-in zoom-in-95 duration-200", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "px-4 py-2 border-b border-[var(--aptly-border-light)] mb-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "font-bold text-sm truncate", children: name }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-xs text-[var(--aptly-text-muted)] truncate", children: email })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-bg)] transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react2.User, { size: 14 }),
          " My Profile"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-bg)] transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react2.Settings, { size: 14 }),
          " Settings"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "h-px bg-[var(--aptly-border-light)] my-1" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react2.LogOut, { size: 14 }),
          " Sign Out"
        ] })
      ] })
    ] });
  }
);
Profile.displayName = "Profile";

// src/components/Skeleton.tsx
var import_react11 = __toESM(require("react"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var Skeleton = import_react11.default.forwardRef(
  ({ className, variant = "rect", width, height, style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "div",
      {
        ref,
        className: cn(
          "animate-pulse bg-[var(--aptly-border-light)] aptly-hardware",
          variant === "circle" ? "rounded-full" : "rounded-[var(--aptly-radius-sm)]",
          className
        ),
        style: {
          width,
          height: height || (variant === "text" ? "1em" : void 0),
          ...style
        },
        ...props
      }
    );
  }
);
Skeleton.displayName = "Skeleton";

// src/components/Tabs.tsx
var React14 = __toESM(require("react"));
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
var import_jsx_runtime14 = require("react/jsx-runtime");
var TabsContext = React14.createContext({
  variant: "underline"
});
var Tabs = React14.forwardRef(({ className, variant = "underline", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TabsContext.Provider, { value: { variant }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  TabsPrimitive.Root,
  {
    ref,
    className: cn(
      "flex w-full",
      variant === "vertical" ? "flex-row" : "flex-col",
      className
    ),
    style: {
      gap: variant === "vertical" ? "var(--aptly-pad-xl)" : "0"
    },
    ...props
  }
) }));
Tabs.displayName = TabsPrimitive.Root.displayName;
var TabsList = React14.forwardRef(({ className, ...props }, ref) => {
  const { variant } = React14.useContext(TabsContext);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    TabsPrimitive.List,
    {
      ref,
      className: cn(
        "relative flex",
        variant === "vertical" ? "flex-col border-r border-[var(--aptly-border-light)]" : "flex-row",
        variant === "underline" && "border-b border-[var(--aptly-border-light)]",
        variant === "pill" && "bg-[var(--aptly-bg)] p-1 rounded-[var(--aptly-radius-md)] inline-flex w-max",
        className
      ),
      style: {
        minWidth: variant === "vertical" ? "calc(12rem * var(--aptly-scale))" : "auto"
      },
      ...props
    }
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React14.forwardRef(({ className, ...props }, ref) => {
  const { variant } = React14.useContext(TabsContext);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    TabsPrimitive.Trigger,
    {
      ref,
      className: cn(
        "relative font-semibold transition-colors duration-[var(--aptly-transition)] outline-none rounded-[var(--aptly-radius-sm)] aptly-hardware select-none group",
        "text-[var(--aptly-text-secondary)] hover:text-[var(--aptly-text)] hover:bg-[var(--aptly-bg)]",
        "data-[state=active]:text-[var(--aptly-primary)]",
        variant === "pill" && "data-[state=active]:bg-[var(--aptly-surface)] data-[state=active]:text-[var(--aptly-text)] data-[state=active]:shadow-[var(--aptly-shadow-sm)]",
        variant === "vertical" && "mb-1 text-left w-full",
        className
      ),
      style: {
        paddingLeft: "var(--aptly-pad-md)",
        paddingRight: "var(--aptly-pad-md)",
        paddingTop: "var(--aptly-pad-sm)",
        paddingBottom: "var(--aptly-pad-sm)",
        fontSize: "calc(0.875rem * var(--aptly-font-scale))"
      },
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "relative z-10", children: props.children }),
        (variant === "underline" || variant === "vertical") && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "span",
          {
            className: cn(
              "absolute bg-[var(--aptly-primary)] z-0 rounded-full hidden group-data-[state=active]:block",
              variant === "underline" ? "bottom-[-1px] left-0 h-[2px] w-full" : "right-[-1px] top-0 w-[2px] h-full"
            )
          }
        )
      ]
    }
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "flex-1 animate-in fade-in duration-300 focus-visible:outline-none",
      className
    ),
    style: { paddingTop: "var(--aptly-pad-md)" },
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
var TabsExtended = Tabs;
TabsExtended.List = TabsList;
TabsExtended.Trigger = TabsTrigger;
TabsExtended.Content = TabsContent;

// src/components/Modal.tsx
var React15 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var Modal = DialogPrimitive.Root;
var ModalTrigger = DialogPrimitive.Trigger;
var ModalPortal = DialogPrimitive.Portal;
var ModalClose = DialogPrimitive.Close;
var ModalOverlay = React15.forwardRef(({ className, blurOverlay = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      blurOverlay && "backdrop-blur-md",
      className
    ),
    ...props
  }
));
ModalOverlay.displayName = DialogPrimitive.Overlay.displayName;
var ModalContent = React15.forwardRef(({ className, children, variant = "standard", blurOverlay, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(ModalPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ModalOverlay, { blurOverlay }),
  /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-1/2 top-1/2 z-50 grid w-[90vw] -translate-x-1/2 -translate-y-1/2 gap-6 border border-[var(--aptly-border-light)] bg-[var(--aptly-surface)] shadow-[var(--aptly-shadow-lg)] duration-[var(--aptly-transition)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 outline-none aptly-hardware sm:w-full",
        {
          "sm:max-w-sm": variant === "alert",
          "sm:max-w-lg": variant === "standard",
          "max-w-[95vw] h-[95vh]": variant === "fullscreen"
        },
        className
      ),
      style: {
        borderRadius: variant === "fullscreen" ? "var(--aptly-radius-lg)" : "var(--aptly-radius)",
        padding: "var(--aptly-pad-lg)"
      },
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--aptly-border-focus)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-[var(--aptly-text-secondary)]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react3.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
ModalContent.displayName = DialogPrimitive.Content.displayName;
var ModalHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
ModalHeader.displayName = "ModalHeader";
var ModalFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
ModalFooter.displayName = "ModalFooter";
var ModalTitle = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "font-bold leading-none tracking-tight text-[var(--aptly-text)]",
      className
    ),
    style: { fontSize: "calc(1.125rem * var(--aptly-font-scale))" },
    ...props
  }
));
ModalTitle.displayName = DialogPrimitive.Title.displayName;
var ModalDescription = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-[var(--aptly-text-secondary)]", className),
    style: { fontSize: "calc(0.875rem * var(--aptly-font-scale))" },
    ...props
  }
));
ModalDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/Drawer.tsx
var React16 = __toESM(require("react"));
var DialogPrimitive2 = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var Drawer = DialogPrimitive2.Root;
var DrawerTrigger = DialogPrimitive2.Trigger;
var DrawerPortal = DialogPrimitive2.Portal;
var DrawerClose = DialogPrimitive2.Close;
var DrawerOverlay = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  DialogPrimitive2.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DrawerOverlay.displayName = DialogPrimitive2.Overlay.displayName;
var DrawerContent = React16.forwardRef(({ className, children, position = "right", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(DrawerPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DrawerOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    DialogPrimitive2.Content,
    {
      ref,
      className: cn(
        "fixed z-50 bg-[var(--aptly-surface)] shadow-[var(--aptly-shadow-lg)] transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 aptly-hardware outline-none",
        {
          "inset-y-0 left-0 h-full w-[var(--aptly-drawer-w)] min-w-[var(--aptly-drawer-w)] border-r border-[var(--aptly-border-light)] data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left": position === "left",
          "inset-y-0 right-0 h-full w-[var(--aptly-drawer-w)] min-w-[var(--aptly-drawer-w)] border-l border-[var(--aptly-border-light)] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right": position === "right",
          "inset-x-0 bottom-0 min-h-[50vh] max-h-[90vh] border-t border-[var(--aptly-border-light)] rounded-t-[var(--aptly-radius-lg)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom": position === "bottom"
        },
        className
      ),
      style: {
        padding: "var(--aptly-pad-lg)"
      },
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "h-full overflow-y-auto", children }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(DialogPrimitive2.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--aptly-border-focus)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-[var(--aptly-text-secondary)]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react4.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DrawerContent.displayName = DialogPrimitive2.Content.displayName;
var DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left mb-4",
      className
    ),
    ...props
  }
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4",
      className
    ),
    ...props
  }
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  DialogPrimitive2.Title,
  {
    ref,
    className: cn(
      "font-bold leading-none tracking-tight text-[var(--aptly-text)]",
      className
    ),
    style: { fontSize: "calc(1.125rem * var(--aptly-font-scale))" },
    ...props
  }
));
DrawerTitle.displayName = DialogPrimitive2.Title.displayName;
var DrawerDescription = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  DialogPrimitive2.Description,
  {
    ref,
    className: cn("text-sm text-[var(--aptly-text-secondary)]", className),
    style: { fontSize: "calc(0.875rem * var(--aptly-font-scale))" },
    ...props
  }
));
DrawerDescription.displayName = DialogPrimitive2.Description.displayName;
function DrawerLegacy({ isOpen, onClose, position = "right", children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Drawer, { open: isOpen, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DrawerContent, { position, children }) });
}

// src/components/DataTable.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function DataTable({
  columns,
  data,
  striped = false,
  borderless = false
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "w-full overflow-x-auto rounded-[var(--aptly-radius-lg)] shadow-[var(--aptly-shadow-sm)] border border-[var(--aptly-border-light)] bg-[var(--aptly-surface)] aptly-hardware", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("table", { className: cn("w-full text-left whitespace-nowrap", !borderless && "divide-y divide-[var(--aptly-border-light)]"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("thead", { className: "bg-[var(--aptly-bg)] text-[var(--aptly-text-secondary)] font-bold", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tr", { children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "th",
      {
        className: "uppercase tracking-widest opacity-70",
        style: {
          padding: "var(--aptly-pad-md)",
          fontSize: "calc(10px * var(--aptly-font-scale))"
        },
        children: col.header
      },
      col.key
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tbody", { className: cn(!borderless && "divide-y divide-[var(--aptly-border-light)]", "bg-[var(--aptly-surface)] text-[var(--aptly-text)]"), children: data.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "tr",
      {
        className: cn(
          "hover:bg-[var(--aptly-bg)] transition-colors duration-[var(--aptly-speed)] cursor-default group",
          striped && i % 2 !== 0 && "bg-[var(--aptly-bg)]/50"
        ),
        children: columns.map((col, idx) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "td",
          {
            className: cn(
              "transition-colors",
              idx === 0 && "font-semibold"
            ),
            style: {
              padding: "var(--aptly-pad-md)",
              fontSize: "calc(0.875rem * var(--aptly-font-scale))"
            },
            children: col.render ? col.render(row) : row[col.key]
          },
          col.key
        ))
      },
      i
    )) })
  ] }) });
}

// src/components/Checkbox.tsx
var import_react12 = __toESM(require("react"));
var import_jsx_runtime18 = require("react/jsx-runtime");
var Checkbox = import_react12.default.forwardRef(
  ({ className, label, variant = "check", inputSize = "md", id, style, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    const sizeVar = inputSize === "sm" ? "calc(1rem * var(--aptly-scale))" : inputSize === "lg" ? "calc(1.5rem * var(--aptly-scale))" : "calc(1.25rem * var(--aptly-scale))";
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center gap-3", style: { gap: "var(--aptly-pad-sm)" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "relative flex items-center justify-center group h-fit", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "input",
          {
            type: "checkbox",
            id: inputId,
            ref,
            className: "peer sr-only",
            ...props
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "label",
          {
            htmlFor: inputId,
            className: cn(
              "aptly-hardware flex items-center justify-center border-[1.5px] border-[var(--aptly-border-focus)] bg-[var(--aptly-surface)] cursor-pointer transition-all duration-[150ms] peer-focus-visible:ring-[var(--aptly-ring-width)] peer-focus-visible:ring-[var(--aptly-border-focus)] peer-focus-visible:ring-offset-2 peer-checked:bg-[var(--aptly-primary)] peer-checked:border-[var(--aptly-primary)] peer-disabled:opacity-50 peer-disabled:cursor-not-allowed group-hover:shadow-[var(--aptly-shadow-sm)]",
              variant === "dot" ? "rounded-full" : "rounded-[var(--aptly-radius-sm)]",
              className
            ),
            style: {
              width: sizeVar,
              height: sizeVar,
              ...style
            },
            children: variant === "check" ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("svg", { className: "w-full h-full text-white scale-0 transition-transform duration-[200ms] peer-checked:scale-100 ease-[var(--aptly-ease-spring)] p-0.5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("polyline", { points: "20 6 9 17 4 12" }) }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "w-1/2 h-1/2 rounded-full bg-white scale-0 transition-transform duration-[200ms] peer-checked:scale-100 ease-[var(--aptly-ease-spring)]" })
          }
        )
      ] }),
      label && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: inputId, className: "font-semibold text-[var(--aptly-text)] select-none cursor-pointer", style: { fontSize: "calc(0.875rem * var(--aptly-font-scale))" }, children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/components/ProgressBar.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function ProgressBar({ value, size = "md", variant = "linear", color, className }) {
  const percentage = Math.min(Math.max(value, 0), 100);
  if (variant === "circular") {
    const baseSize = size === "sm" ? 32 : size === "lg" ? 64 : 48;
    const sz = `calc(${baseSize}px * var(--aptly-scale))`;
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { style: { width: sz, height: sz }, className: cn("relative", className), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("svg", { className: "w-full h-full transform -rotate-90", viewBox: "0 0 100 100", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "circle",
        {
          className: "text-[var(--aptly-border-light)]",
          strokeWidth: "10",
          stroke: "currentColor",
          fill: "transparent",
          r: "40",
          cx: "50",
          cy: "50"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "circle",
        {
          className: "text-[var(--aptly-primary)] transition-all duration-[var(--aptly-transition)]",
          strokeWidth: "10",
          strokeDasharray: "251.2",
          strokeDashoffset: 251.2 - percentage / 100 * 251.2,
          strokeLinecap: "round",
          stroke: color || "currentColor",
          fill: "transparent",
          r: "40",
          cx: "50",
          cy: "50"
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "div",
    {
      className: cn("w-full bg-[var(--aptly-border-light)] rounded-full overflow-hidden shadow-inner", className),
      style: {
        height: size === "sm" ? "calc(0.375rem * var(--aptly-scale))" : size === "lg" ? "calc(0.75rem * var(--aptly-scale))" : "calc(0.5rem * var(--aptly-scale))"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "div",
        {
          className: "h-full bg-[var(--aptly-primary)] rounded-full transition-all duration-[1000ms] ease-out aptly-hardware",
          style: { width: `${percentage}%`, backgroundColor: color }
        }
      )
    }
  );
}

// src/components/Slider.tsx
var import_react13 = __toESM(require("react"));
var import_jsx_runtime20 = require("react/jsx-runtime");
var Slider = import_react13.default.forwardRef(
  ({ className, size = "md", style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: cn("relative flex items-center w-full group", className), style: { height: "var(--aptly-h-sm)" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        "input",
        {
          type: "range",
          ref,
          className: cn(
            "w-full bg-transparent appearance-none cursor-pointer aptly-hardware outline-none",
            // Custom styles for webkit slider thumb and track using our variables
            "[&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[var(--aptly-border)] [&::-webkit-slider-runnable-track]:transition-colors",
            "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[1.5px] [&::-webkit-slider-thumb]:border-[var(--aptly-border-focus)] [&::-webkit-slider-thumb]:bg-[var(--aptly-surface)] [&::-webkit-slider-thumb]:shadow-[var(--aptly-shadow-md)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:ease-[var(--aptly-ease-spring)] hover:[&::-webkit-slider-thumb]:scale-110",
            "focus-visible:[&::-webkit-slider-thumb]:ring-[var(--aptly-ring-width)] focus-visible:[&::-webkit-slider-thumb]:ring-[var(--aptly-border-focus)] focus-visible:[&::-webkit-slider-thumb]:ring-offset-2 focus-visible:[&::-webkit-slider-thumb]:ring-offset-[var(--aptly-bg)]"
          ),
          style: {
            ...style
          },
          ...props
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("style", { dangerouslySetInnerHTML: { __html: `
          input[type=range]::-webkit-slider-runnable-track { height: calc(${size === "sm" ? 4 : size === "lg" ? 12 : 8}px * var(--aptly-scale)); }
          input[type=range]::-webkit-slider-thumb { 
            height: calc(${size === "sm" ? 16 : size === "lg" ? 24 : 20}px * var(--aptly-scale)); 
            width: calc(${size === "sm" ? 16 : size === "lg" ? 24 : 20}px * var(--aptly-scale)); 
            margin-top: calc(${size === "sm" ? -6 : size === "lg" ? -6 : -6}px * var(--aptly-scale));
          }
        ` } })
    ] });
  }
);
Slider.displayName = "Slider";

// src/components/DropdownMenu.tsx
var React19 = __toESM(require("react"));
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React19.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[var(--aptly-bg)] data-[state=open]:bg-[var(--aptly-bg)]",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react5.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-[var(--aptly-radius-sm)] border border-[var(--aptly-border-light)] bg-[var(--aptly-surface)] p-1 text-[var(--aptly-text)] shadow-[var(--aptly-shadow-md)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React19.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[12rem] overflow-hidden rounded-[var(--aptly-radius-sm)] border border-[var(--aptly-border-light)] bg-[var(--aptly-surface)] p-1 text-[var(--aptly-text)] shadow-[var(--aptly-shadow-lg)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 aptly-hardware",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none transition-colors focus:bg-[var(--aptly-bg)] focus:text-[var(--aptly-primary)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React19.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none transition-colors focus:bg-[var(--aptly-bg)] focus:text-[var(--aptly-primary)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react5.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none transition-colors focus:bg-[var(--aptly-bg)] focus:text-[var(--aptly-primary)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react5.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-xs font-bold text-[var(--aptly-text-muted)] uppercase tracking-wider",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-[var(--aptly-border-light)]", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/Popover.tsx
var React20 = __toESM(require("react"));
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime22 = require("react/jsx-runtime");
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React20.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-[var(--aptly-radius-sm)] border border-[var(--aptly-border-light)] bg-[var(--aptly-surface)] p-4 text-[var(--aptly-text)] shadow-[var(--aptly-shadow-md)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 aptly-hardware",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/Accordion.tsx
var React21 = __toESM(require("react"));
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"));
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b border-[var(--aptly-border-light)]", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React21.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-bold transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react6.ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React21.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/ScrollArea.tsx
var React22 = __toESM(require("react"));
var ScrollAreaPrimitive = __toESM(require("@radix-ui/react-scroll-area"));
var import_jsx_runtime24 = require("react/jsx-runtime");
var ScrollArea = React22.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ScrollBar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React22.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  ScrollAreaPrimitive.Scrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ScrollAreaPrimitive.Thumb, { className: "relative flex-1 rounded-full bg-[var(--aptly-border)] hover:bg-[var(--aptly-text-muted)] transition-colors" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

// src/components/Separator.tsx
var React23 = __toESM(require("react"));
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_runtime25 = require("react/jsx-runtime");
var Separator2 = React23.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-[var(--aptly-border-light)]",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator2.displayName = SeparatorPrimitive.Root.displayName;

// src/components/Card.tsx
var React24 = __toESM(require("react"));
var import_jsx_runtime26 = require("react/jsx-runtime");
var Card = React24.forwardRef(({ className, variant = "default", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
  "div",
  {
    ref,
    className: cn(
      "rounded-[var(--aptly-radius-lg)] border border-[var(--aptly-border)] bg-[var(--aptly-surface)] text-[var(--aptly-text)] shadow-sm transition-all duration-200",
      variant === "glass" && "aptly-glass border-[var(--aptly-border-light)]",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
  "p",
  {
    ref,
    className: cn("text-sm text-[var(--aptly-text-secondary)]", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/Label.tsx
var React25 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_jsx_runtime27 = require("react/jsx-runtime");
var Label2 = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(
      "text-sm font-medium leading-none text-[var(--aptly-text)] peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    ),
    ...props
  }
));
Label2.displayName = LabelPrimitive.Root.displayName;

// src/components/Alert.tsx
var React26 = __toESM(require("react"));
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime28 = require("react/jsx-runtime");
var Alert = React26.forwardRef(
  ({ className, variant = "default", children, ...props }, ref) => {
    const Icon2 = {
      default: import_lucide_react7.Info,
      destructive: import_lucide_react7.AlertCircle,
      success: import_lucide_react7.CheckCircle,
      warning: import_lucide_react7.AlertTriangle
    }[variant];
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "div",
      {
        ref,
        role: "alert",
        className: cn(
          "relative w-full rounded-[var(--aptly-radius)] border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
          {
            "bg-[var(--aptly-bg)] text-[var(--aptly-text)] border-[var(--aptly-border)]": variant === "default",
            "border-[var(--aptly-error)] text-[var(--aptly-error)] bg-[var(--aptly-error)]/5 [&>svg]:text-[var(--aptly-error)]": variant === "destructive",
            "border-[var(--aptly-success)] text-[var(--aptly-success)] bg-[var(--aptly-success)]/5 [&>svg]:text-[var(--aptly-success)]": variant === "success",
            "border-[var(--aptly-warning)] text-[var(--aptly-warning)] bg-[var(--aptly-warning)]/5 [&>svg]:text-[var(--aptly-warning)]": variant === "warning"
          },
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Icon2, { className: "h-4 w-4" }),
          children
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var AlertTitle = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed opacity-90", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

// src/components/Textarea.tsx
var React27 = __toESM(require("react"));
var import_jsx_runtime29 = require("react/jsx-runtime");
var Textarea = React27.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-[var(--aptly-radius-sm)] border border-[var(--aptly-border)] bg-[var(--aptly-surface)] px-3 py-2 text-sm ring-offset-background placeholder:text-[var(--aptly-text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:border-[var(--aptly-border-focus)]",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/Select.tsx
var React28 = __toESM(require("react"));
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react8 = require("lucide-react");
var import_jsx_runtime30 = require("react/jsx-runtime");
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React28.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-[var(--aptly-h-md)] w-full items-center justify-between rounded-[var(--aptly-radius-sm)] border border-[var(--aptly-border)] bg-[var(--aptly-surface)] px-3 py-2 text-sm ring-offset-background placeholder:text-[var(--aptly-text-muted)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 transition-all focus:border-[var(--aptly-border-focus)]",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react8.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react8.ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react8.ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React28.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-[var(--aptly-radius)] border border-[var(--aptly-border)] bg-[var(--aptly-surface)] text-[var(--aptly-text)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectScrollUpButton, {}),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React28.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[var(--aptly-primary-bg)] focus:text-[var(--aptly-primary)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react8.Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-[var(--aptly-border-light)]", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/Toggle.tsx
var React29 = __toESM(require("react"));
var TogglePrimitive = __toESM(require("@radix-ui/react-toggle"));
var import_jsx_runtime31 = require("react/jsx-runtime");
var Toggle = React29.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
  TogglePrimitive.Root,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center rounded-[var(--aptly-radius-sm)] text-sm font-medium transition-colors hover:bg-[var(--aptly-primary-bg)] hover:text-[var(--aptly-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--aptly-primary)] data-[state=on]:text-white",
      {
        "bg-transparent": variant === "default",
        "border border-[var(--aptly-border)] bg-transparent hover:bg-[var(--aptly-bg)]": variant === "outline"
      },
      {
        "h-9 px-3": size === "default",
        "h-8 px-2": size === "sm",
        "h-10 px-3": size === "lg"
      },
      className
    ),
    ...props
  }
));
Toggle.displayName = TogglePrimitive.Root.displayName;

// src/components/ToggleGroup.tsx
var React30 = __toESM(require("react"));
var ToggleGroupPrimitive = __toESM(require("@radix-ui/react-toggle-group"));
var import_jsx_runtime32 = require("react/jsx-runtime");
var ToggleGroupContext = React30.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React30.forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
  ToggleGroupPrimitive.Root,
  {
    ref,
    className: cn("flex items-center justify-center gap-1", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ToggleGroupContext.Provider, { value: { variant, size }, children })
  }
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React30.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React30.useContext(ToggleGroupContext);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    ToggleGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "inline-flex items-center justify-center rounded-[var(--aptly-radius-sm)] text-sm font-medium transition-colors hover:bg-[var(--aptly-primary-bg)] hover:text-[var(--aptly-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--aptly-primary)] data-[state=on]:text-white",
        {
          "bg-transparent": (variant || context.variant) === "default",
          "border border-[var(--aptly-border)] bg-transparent hover:bg-[var(--aptly-bg)]": (variant || context.variant) === "outline"
        },
        {
          "h-9 px-3": (size || context.size) === "default",
          "h-8 px-2": (size || context.size) === "sm",
          "h-10 px-3": (size || context.size) === "lg"
        },
        className
      ),
      ...props,
      children
    }
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

// src/components/Breadcrumb.tsx
var React31 = __toESM(require("react"));
var import_lucide_react9 = require("lucide-react");
var import_react_slot = require("@radix-ui/react-slot");
var import_jsx_runtime33 = require("react/jsx-runtime");
var Breadcrumb = React31.forwardRef(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
  "ol",
  {
    ref,
    className: cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-[var(--aptly-text-secondary)] sm:gap-2.5",
      className
    ),
    ...props
  }
));
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React31.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? import_react_slot.Slot : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-[var(--aptly-text)]", className),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
  "span",
  {
    ref,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: cn("font-normal text-[var(--aptly-text)]", className),
    ...props
  }
));
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react9.ChevronRight, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react9.MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "sr-only", children: "More" })
    ]
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  Badge,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  ContentCard,
  DataTable,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerLegacy,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Header,
  Label,
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalPortal,
  ModalTitle,
  ModalTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Profile,
  ProgressBar,
  ScrollArea,
  ScrollBar,
  SearchBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Sidebar,
  SidebarItem,
  Skeleton,
  Slider,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TextInput,
  Textarea,
  ThemeProvider,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipSimple,
  TooltipTrigger,
  cn,
  useAptlyTheme
});
//# sourceMappingURL=index.js.map