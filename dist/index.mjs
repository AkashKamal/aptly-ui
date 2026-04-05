// src/components/Button.tsx
import React from "react";

// src/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = React.forwardRef(
  ({ className, variant = "solid", size = "md", shape = "default", fullWidth, style, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
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
import React4 from "react";

// src/components/ThemeProvider.tsx
import { createContext, useContext, useEffect } from "react";

// src/components/Tooltip.tsx
import * as React2 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var TooltipRoot = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React2.forwardRef(({ className, sideOffset = 4, position = "top", ...props }, ref) => /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx2(TooltipPrimitive.Arrow, { className: "fill-[var(--aptly-primary)]" })
    ]
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
function Tooltip({ content, children, position = "top", className }) {
  return /* @__PURE__ */ jsx2(TooltipProvider, { children: /* @__PURE__ */ jsxs(TooltipRoot, { children: [
    /* @__PURE__ */ jsx2(TooltipTrigger, { asChild: true, children }),
    /* @__PURE__ */ jsx2(TooltipContent, { position, className, children: content })
  ] }) });
}

// src/components/ThemeProvider.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var ThemeContext = createContext(null);
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
  useEffect(() => {
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
  return /* @__PURE__ */ jsx3(ThemeContext.Provider, { value: config, children: /* @__PURE__ */ jsx3(TooltipProvider, { children: /* @__PURE__ */ jsx3("div", { className: `aptly-theme-root aptly-card-${config.cardStyle || "solid"}`, children }) }) });
}
var useAptlyTheme = () => useContext(ThemeContext);

// src/components/ContentCard.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var ContentCard = React4.forwardRef(
  ({ className, elevation = 1, interactive = false, style, ...props }, ref) => {
    const theme = useAptlyTheme();
    const isGlass = theme?.cardStyle === "glass";
    const isFlat = theme?.cardStyle === "flat";
    return /* @__PURE__ */ jsx4(
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
import React5 from "react";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var TextInput = React5.forwardRef(
  ({ className, label, error, helperText, id, style, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-1.5 w-full", children: [
      label && /* @__PURE__ */ jsx5("label", { htmlFor: inputId, className: "font-semibold text-[var(--aptly-text)] tracking-tight ml-1", style: { fontSize: "calc(0.875rem * var(--aptly-font-scale))" }, children: label }),
      /* @__PURE__ */ jsx5("div", { className: "relative flex items-center", children: /* @__PURE__ */ jsx5(
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
      error ? /* @__PURE__ */ jsx5("p", { id: errorId, className: "font-semibold text-[var(--aptly-error)] mt-1 ml-1", style: { fontSize: "calc(0.8125rem * var(--aptly-font-scale))" }, children: error }) : helperText ? /* @__PURE__ */ jsx5("p", { id: helperId, className: "text-[var(--aptly-text-secondary)] mt-1 ml-1", style: { fontSize: "calc(0.8125rem * var(--aptly-font-scale))" }, children: helperText }) : null
    ] });
  }
);
TextInput.displayName = "TextInput";

// src/components/Badge.tsx
import React6 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Badge = React6.forwardRef(
  ({ className, variant = "neutral", appearance = "soft", style, ...props }, ref) => {
    return /* @__PURE__ */ jsx6(
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
import React7 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var Avatar = React7.forwardRef(
  ({ className, src, fallback, size = "md", style, ...props }, ref) => {
    return /* @__PURE__ */ jsx7(
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
        children: src ? /* @__PURE__ */ jsx7("img", { src, alt: fallback, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsx7("span", { children: fallback.substring(0, 2).toUpperCase() })
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/components/Switch.tsx
import * as React8 from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var Switch = React8.forwardRef(({ className, label, id, ...props }, ref) => {
  const switchId = id || React8.useId();
  return /* @__PURE__ */ jsxs3("div", { className: "flex items-center", style: { gap: "var(--aptly-pad-sm)" }, children: [
    /* @__PURE__ */ jsx8(
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
        children: /* @__PURE__ */ jsx8(
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
    label && /* @__PURE__ */ jsx8(
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
import React9 from "react";
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var Sidebar = React9.forwardRef(
  ({ className, collapsed = false, children, style, ...props }, ref) => {
    return /* @__PURE__ */ jsx9(
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
var SidebarItem = React9.forwardRef(
  ({ className, active, icon, collapsed, children, style, ...props }, ref) => {
    return /* @__PURE__ */ jsxs4(
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
          icon && /* @__PURE__ */ jsx9("span", { className: cn("shrink-0 flex items-center justify-center", active ? "text-[var(--aptly-primary)]" : "text-[var(--aptly-text-muted)]"), children: icon }),
          !collapsed && /* @__PURE__ */ jsx9("span", { className: "truncate tracking-tight", children })
        ]
      }
    );
  }
);
SidebarItem.displayName = "SidebarItem";

// src/components/Header.tsx
import React10 from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Header = React10.forwardRef(
  ({ className, sticky = true, children, style, ...props }, ref) => {
    return /* @__PURE__ */ jsx10(
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
import React11 from "react";
import { Search } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var SearchBar = React11.forwardRef(
  ({ className, iconPosition = "left", shortcut, inputSize = "md", variant = "solid", style, ...props }, ref) => {
    return /* @__PURE__ */ jsxs5("div", { className: cn("relative flex items-center w-full", className), children: [
      iconPosition === "left" && /* @__PURE__ */ jsx11("div", { className: "absolute left-3 z-10 text-[var(--aptly-text-muted)] pointer-events-none flex items-center justify-center", children: /* @__PURE__ */ jsx11(Search, { size: 18, strokeWidth: 2.5, style: { transform: "scale(var(--aptly-font-scale))" } }) }),
      /* @__PURE__ */ jsx11(
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
      shortcut && /* @__PURE__ */ jsx11("div", { className: "absolute right-3 bg-[var(--aptly-bg)] text-[var(--aptly-text-muted)] px-1.5 py-[2px] rounded-[var(--aptly-radius-sm)] border border-[var(--aptly-border-light)] z-10 pointer-events-none font-bold", style: { fontSize: "calc(10px * var(--aptly-font-scale))" }, children: shortcut })
    ] });
  }
);
SearchBar.displayName = "SearchBar";

// src/components/Profile.tsx
import React12, { useState } from "react";
import { ChevronDown, LogOut, User, Settings } from "lucide-react";
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var Profile = React12.forwardRef(
  ({ className, name, email, avatarSrc, style, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    return /* @__PURE__ */ jsxs6("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs6(
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
            /* @__PURE__ */ jsx12(Avatar, { fallback: name, src: avatarSrc, size: "sm" }),
            /* @__PURE__ */ jsxs6("div", { className: "hidden md:block overflow-hidden", children: [
              /* @__PURE__ */ jsx12("p", { className: "font-bold truncate leading-tight", style: { fontSize: "calc(0.875rem * var(--aptly-font-scale))" }, children: name }),
              /* @__PURE__ */ jsx12("p", { className: "text-[var(--aptly-text-muted)] truncate leading-tight", style: { fontSize: "calc(0.75rem * var(--aptly-font-scale))" }, children: email })
            ] }),
            /* @__PURE__ */ jsx12(ChevronDown, { size: 14, className: cn("text-[var(--aptly-text-muted)] transition-transform", isOpen && "rotate-180") })
          ]
        }
      ),
      isOpen && /* @__PURE__ */ jsxs6("div", { className: "absolute right-0 mt-2 w-48 bg-[var(--aptly-surface)] border border-[var(--aptly-border-light)] rounded-[var(--aptly-radius)] shadow-[var(--aptly-shadow-lg)] z-50 py-1 animate-in fade-in zoom-in-95 duration-200", children: [
        /* @__PURE__ */ jsxs6("div", { className: "px-4 py-2 border-b border-[var(--aptly-border-light)] mb-1", children: [
          /* @__PURE__ */ jsx12("p", { className: "font-bold text-sm truncate", children: name }),
          /* @__PURE__ */ jsx12("p", { className: "text-xs text-[var(--aptly-text-muted)] truncate", children: email })
        ] }),
        /* @__PURE__ */ jsxs6("button", { className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-bg)] transition-colors", children: [
          /* @__PURE__ */ jsx12(User, { size: 14 }),
          " My Profile"
        ] }),
        /* @__PURE__ */ jsxs6("button", { className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-[var(--aptly-text-secondary)] hover:bg-[var(--aptly-bg)] transition-colors", children: [
          /* @__PURE__ */ jsx12(Settings, { size: 14 }),
          " Settings"
        ] }),
        /* @__PURE__ */ jsx12("div", { className: "h-px bg-[var(--aptly-border-light)] my-1" }),
        /* @__PURE__ */ jsxs6("button", { className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors", children: [
          /* @__PURE__ */ jsx12(LogOut, { size: 14 }),
          " Sign Out"
        ] })
      ] })
    ] });
  }
);
Profile.displayName = "Profile";

// src/components/Skeleton.tsx
import React13 from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
var Skeleton = React13.forwardRef(
  ({ className, variant = "rect", width, height, style, ...props }, ref) => {
    return /* @__PURE__ */ jsx13(
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
import * as React14 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
var TabsContext = React14.createContext({
  variant: "underline"
});
var Tabs = React14.forwardRef(({ className, variant = "underline", ...props }, ref) => /* @__PURE__ */ jsx14(TabsContext.Provider, { value: { variant }, children: /* @__PURE__ */ jsx14(
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
  return /* @__PURE__ */ jsx14(
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
  return /* @__PURE__ */ jsxs7(
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
        /* @__PURE__ */ jsx14("span", { className: "relative z-10", children: props.children }),
        (variant === "underline" || variant === "vertical") && /* @__PURE__ */ jsx14(
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
var TabsContent = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx14(
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
import * as React15 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
var Modal = DialogPrimitive.Root;
var ModalTrigger = DialogPrimitive.Trigger;
var ModalPortal = DialogPrimitive.Portal;
var ModalClose = DialogPrimitive.Close;
var ModalOverlay = React15.forwardRef(({ className, blurOverlay = true, ...props }, ref) => /* @__PURE__ */ jsx15(
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
var ModalContent = React15.forwardRef(({ className, children, variant = "standard", blurOverlay, ...props }, ref) => /* @__PURE__ */ jsxs8(ModalPortal, { children: [
  /* @__PURE__ */ jsx15(ModalOverlay, { blurOverlay }),
  /* @__PURE__ */ jsxs8(
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
        /* @__PURE__ */ jsxs8(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--aptly-border-focus)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-[var(--aptly-text-secondary)]", children: [
          /* @__PURE__ */ jsx15(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx15("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
ModalContent.displayName = DialogPrimitive.Content.displayName;
var ModalHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx15(
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
}) => /* @__PURE__ */ jsx15(
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
var ModalTitle = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
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
var ModalDescription = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
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
import * as React16 from "react";
import * as DialogPrimitive2 from "@radix-ui/react-dialog";
import { X as X2 } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
var Drawer = DialogPrimitive2.Root;
var DrawerTrigger = DialogPrimitive2.Trigger;
var DrawerPortal = DialogPrimitive2.Portal;
var DrawerClose = DialogPrimitive2.Close;
var DrawerOverlay = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
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
var DrawerContent = React16.forwardRef(({ className, children, position = "right", ...props }, ref) => /* @__PURE__ */ jsxs9(DrawerPortal, { children: [
  /* @__PURE__ */ jsx16(DrawerOverlay, {}),
  /* @__PURE__ */ jsxs9(
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
        /* @__PURE__ */ jsx16("div", { className: "h-full overflow-y-auto", children }),
        /* @__PURE__ */ jsxs9(DialogPrimitive2.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--aptly-border-focus)] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-[var(--aptly-text-secondary)]", children: [
          /* @__PURE__ */ jsx16(X2, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx16("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DrawerContent.displayName = DialogPrimitive2.Content.displayName;
var DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx16(
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
}) => /* @__PURE__ */ jsx16(
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
var DrawerTitle = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
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
var DrawerDescription = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
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
  return /* @__PURE__ */ jsx16(Drawer, { open: isOpen, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsx16(DrawerContent, { position, children }) });
}

// src/components/DataTable.tsx
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
function DataTable({
  columns,
  data,
  striped = false,
  borderless = false
}) {
  return /* @__PURE__ */ jsx17("div", { className: "w-full overflow-x-auto rounded-[var(--aptly-radius-lg)] shadow-[var(--aptly-shadow-sm)] border border-[var(--aptly-border-light)] bg-[var(--aptly-surface)] aptly-hardware", children: /* @__PURE__ */ jsxs10("table", { className: cn("w-full text-left whitespace-nowrap", !borderless && "divide-y divide-[var(--aptly-border-light)]"), children: [
    /* @__PURE__ */ jsx17("thead", { className: "bg-[var(--aptly-bg)] text-[var(--aptly-text-secondary)] font-bold", children: /* @__PURE__ */ jsx17("tr", { children: columns.map((col) => /* @__PURE__ */ jsx17(
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
    /* @__PURE__ */ jsx17("tbody", { className: cn(!borderless && "divide-y divide-[var(--aptly-border-light)]", "bg-[var(--aptly-surface)] text-[var(--aptly-text)]"), children: data.map((row, i) => /* @__PURE__ */ jsx17(
      "tr",
      {
        className: cn(
          "hover:bg-[var(--aptly-bg)] transition-colors duration-[var(--aptly-speed)] cursor-default group",
          striped && i % 2 !== 0 && "bg-[var(--aptly-bg)]/50"
        ),
        children: columns.map((col, idx) => /* @__PURE__ */ jsx17(
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
import React17 from "react";
import { jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
var Checkbox = React17.forwardRef(
  ({ className, label, variant = "check", inputSize = "md", id, style, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    const sizeVar = inputSize === "sm" ? "calc(1rem * var(--aptly-scale))" : inputSize === "lg" ? "calc(1.5rem * var(--aptly-scale))" : "calc(1.25rem * var(--aptly-scale))";
    return /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-3", style: { gap: "var(--aptly-pad-sm)" }, children: [
      /* @__PURE__ */ jsxs11("div", { className: "relative flex items-center justify-center group h-fit", children: [
        /* @__PURE__ */ jsx18(
          "input",
          {
            type: "checkbox",
            id: inputId,
            ref,
            className: "peer sr-only",
            ...props
          }
        ),
        /* @__PURE__ */ jsx18(
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
            children: variant === "check" ? /* @__PURE__ */ jsx18("svg", { className: "w-full h-full text-white scale-0 transition-transform duration-[200ms] peer-checked:scale-100 ease-[var(--aptly-ease-spring)] p-0.5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx18("polyline", { points: "20 6 9 17 4 12" }) }) : /* @__PURE__ */ jsx18("div", { className: "w-1/2 h-1/2 rounded-full bg-white scale-0 transition-transform duration-[200ms] peer-checked:scale-100 ease-[var(--aptly-ease-spring)]" })
          }
        )
      ] }),
      label && /* @__PURE__ */ jsx18("label", { htmlFor: inputId, className: "font-semibold text-[var(--aptly-text)] select-none cursor-pointer", style: { fontSize: "calc(0.875rem * var(--aptly-font-scale))" }, children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/components/ProgressBar.tsx
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
function ProgressBar({ value, size = "md", variant = "linear", color, className }) {
  const percentage = Math.min(Math.max(value, 0), 100);
  if (variant === "circular") {
    const baseSize = size === "sm" ? 32 : size === "lg" ? 64 : 48;
    const sz = `calc(${baseSize}px * var(--aptly-scale))`;
    return /* @__PURE__ */ jsx19("div", { style: { width: sz, height: sz }, className: cn("relative", className), children: /* @__PURE__ */ jsxs12("svg", { className: "w-full h-full transform -rotate-90", viewBox: "0 0 100 100", children: [
      /* @__PURE__ */ jsx19(
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
      /* @__PURE__ */ jsx19(
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
  return /* @__PURE__ */ jsx19(
    "div",
    {
      className: cn("w-full bg-[var(--aptly-border-light)] rounded-full overflow-hidden shadow-inner", className),
      style: {
        height: size === "sm" ? "calc(0.375rem * var(--aptly-scale))" : size === "lg" ? "calc(0.75rem * var(--aptly-scale))" : "calc(0.5rem * var(--aptly-scale))"
      },
      children: /* @__PURE__ */ jsx19(
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
import React18 from "react";
import { jsx as jsx20, jsxs as jsxs13 } from "react/jsx-runtime";
var Slider = React18.forwardRef(
  ({ className, size = "md", style, ...props }, ref) => {
    return /* @__PURE__ */ jsxs13("div", { className: cn("relative flex items-center w-full group", className), style: { height: "var(--aptly-h-sm)" }, children: [
      /* @__PURE__ */ jsx20(
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
      /* @__PURE__ */ jsx20("style", { dangerouslySetInnerHTML: { __html: `
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
import * as React19 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { jsx as jsx21, jsxs as jsxs14 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React19.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs14(
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
      /* @__PURE__ */ jsx21(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
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
var DropdownMenuContent = React19.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx21(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx21(
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
var DropdownMenuItem = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx21(
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
var DropdownMenuCheckboxItem = React19.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs14(
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
      /* @__PURE__ */ jsx21("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx21(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx21(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs14(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none transition-colors focus:bg-[var(--aptly-bg)] focus:text-[var(--aptly-primary)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx21("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx21(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx21(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx21(
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
var DropdownMenuSeparator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
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
  return /* @__PURE__ */ jsx21(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/Popover.tsx
import * as React20 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx22 } from "react/jsx-runtime";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React20.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx22(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx22(
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
import * as React21 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown as ChevronDown2 } from "lucide-react";
import { jsx as jsx23, jsxs as jsxs15 } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx23(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b border-[var(--aptly-border-light)]", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React21.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx23(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs15(
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
      /* @__PURE__ */ jsx23(ChevronDown2, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React21.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx23(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx23("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/ScrollArea.tsx
import * as React22 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { jsx as jsx24, jsxs as jsxs16 } from "react/jsx-runtime";
var ScrollArea = React22.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs16(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx24(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
      /* @__PURE__ */ jsx24(ScrollBar, {}),
      /* @__PURE__ */ jsx24(ScrollAreaPrimitive.Corner, {})
    ]
  }
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React22.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx24(
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
    children: /* @__PURE__ */ jsx24(ScrollAreaPrimitive.Thumb, { className: "relative flex-1 rounded-full bg-[var(--aptly-border)] hover:bg-[var(--aptly-text-muted)] transition-colors" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

// src/components/Separator.tsx
import * as React23 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx25 } from "react/jsx-runtime";
var Separator2 = React23.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx25(
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
import * as React24 from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
var Card = React24.forwardRef(({ className, variant = "default", ...props }, ref) => /* @__PURE__ */ jsx26(
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
var CardHeader = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx26(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx26(
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
var CardDescription = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx26(
  "p",
  {
    ref,
    className: cn("text-sm text-[var(--aptly-text-secondary)]", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx26("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx26(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/Label.tsx
import * as React25 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { jsx as jsx27 } from "react/jsx-runtime";
var Label2 = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx27(
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
import * as React26 from "react";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { jsx as jsx28, jsxs as jsxs17 } from "react/jsx-runtime";
var Alert = React26.forwardRef(
  ({ className, variant = "default", children, ...props }, ref) => {
    const Icon2 = {
      default: Info,
      destructive: AlertCircle,
      success: CheckCircle,
      warning: AlertTriangle
    }[variant];
    return /* @__PURE__ */ jsxs17(
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
          /* @__PURE__ */ jsx28(Icon2, { className: "h-4 w-4" }),
          children
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var AlertTitle = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx28(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx28(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed opacity-90", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

// src/components/Textarea.tsx
import * as React27 from "react";
import { jsx as jsx29 } from "react/jsx-runtime";
var Textarea = React27.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx29(
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
import * as React28 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check2, ChevronDown as ChevronDown3, ChevronUp } from "lucide-react";
import { jsx as jsx30, jsxs as jsxs18 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React28.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs18(
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
      /* @__PURE__ */ jsx30(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx30(ChevronDown3, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx30(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx30(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx30(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx30(ChevronDown3, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React28.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx30(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs18(
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
      /* @__PURE__ */ jsx30(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx30(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx30(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx30(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React28.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs18(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[var(--aptly-primary-bg)] focus:text-[var(--aptly-primary)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx30("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx30(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx30(Check2, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx30(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx30(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-[var(--aptly-border-light)]", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/Toggle.tsx
import * as React29 from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { jsx as jsx31 } from "react/jsx-runtime";
var Toggle = React29.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => /* @__PURE__ */ jsx31(
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
import * as React30 from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { jsx as jsx32 } from "react/jsx-runtime";
var ToggleGroupContext = React30.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React30.forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => /* @__PURE__ */ jsx32(
  ToggleGroupPrimitive.Root,
  {
    ref,
    className: cn("flex items-center justify-center gap-1", className),
    ...props,
    children: /* @__PURE__ */ jsx32(ToggleGroupContext.Provider, { value: { variant, size }, children })
  }
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React30.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React30.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx32(
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
import * as React31 from "react";
import { ChevronRight as ChevronRight2, MoreHorizontal } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { jsx as jsx33, jsxs as jsxs19 } from "react/jsx-runtime";
var Breadcrumb = React31.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx33("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx33(
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
var BreadcrumbItem = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx33(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React31.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx33(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-[var(--aptly-text)]", className),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx33(
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
}) => /* @__PURE__ */ jsx33(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx33(ChevronRight2, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs19(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx33(MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx33("span", { className: "sr-only", children: "More" })
    ]
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
export {
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
  Label2 as Label,
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
  Separator2 as Separator,
  Sidebar,
  SidebarItem,
  Skeleton,
  Slider,
  Switch,
  TabsExtended as Tabs,
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
  Tooltip as TooltipSimple,
  TooltipTrigger,
  cn,
  useAptlyTheme
};
//# sourceMappingURL=index.mjs.map