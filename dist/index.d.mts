import * as React from 'react';
import React__default, { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { ClassValue } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outline' | 'ghost' | 'glass' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    shape?: 'default' | 'pill' | 'square';
    fullWidth?: boolean;
}
declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

interface ContentCardProps extends HTMLAttributes<HTMLDivElement> {
    elevation?: 1 | 2 | 3;
    interactive?: boolean;
}
declare const ContentCard: React__default.ForwardRefExoticComponent<ContentCardProps & React__default.RefAttributes<HTMLDivElement>>;

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}
declare const TextInput: React__default.ForwardRefExoticComponent<TextInputProps & React__default.RefAttributes<HTMLInputElement>>;

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'success' | 'warning' | 'error' | 'neutral' | 'primary';
    appearance?: 'solid' | 'soft' | 'outline';
}
declare const Badge: React__default.ForwardRefExoticComponent<BadgeProps & React__default.RefAttributes<HTMLSpanElement>>;

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    src?: string;
    fallback: string;
    size?: 'sm' | 'md' | 'lg';
}
declare const Avatar: React__default.ForwardRefExoticComponent<AvatarProps & React__default.RefAttributes<HTMLDivElement>>;

declare const Switch: React.ForwardRefExoticComponent<Omit<SwitchPrimitive.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
    label?: string;
} & React.RefAttributes<HTMLButtonElement>>;

interface SidebarProps extends HTMLAttributes<HTMLElement> {
    collapsed?: boolean;
}
declare const Sidebar: React__default.ForwardRefExoticComponent<SidebarProps & React__default.RefAttributes<HTMLElement>>;
interface SidebarItemProps extends HTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    icon?: React__default.ReactNode;
    collapsed?: boolean;
}
declare const SidebarItem: React__default.ForwardRefExoticComponent<SidebarItemProps & React__default.RefAttributes<HTMLButtonElement>>;

interface HeaderProps extends HTMLAttributes<HTMLElement> {
    sticky?: boolean;
}
declare const Header: React__default.ForwardRefExoticComponent<HeaderProps & React__default.RefAttributes<HTMLElement>>;

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
    iconPosition?: 'left' | 'right';
    shortcut?: string;
    inputSize?: 'sm' | 'md' | 'lg';
    variant?: 'solid' | 'glass' | 'minimal';
}
declare const SearchBar: React__default.ForwardRefExoticComponent<SearchBarProps & React__default.RefAttributes<HTMLInputElement>>;

interface ProfileProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    email: string;
    avatarSrc?: string;
}
declare const Profile: React__default.ForwardRefExoticComponent<ProfileProps & React__default.RefAttributes<HTMLButtonElement>>;

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'rect' | 'circle' | 'text';
    width?: string | number;
    height?: string | number;
}
declare const Skeleton: React__default.ForwardRefExoticComponent<SkeletonProps & React__default.RefAttributes<HTMLDivElement>>;

declare const Tabs: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    variant?: "underline" | "pill" | "vertical";
} & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TabsExtended: typeof Tabs & {
    List: typeof TabsList;
    Trigger: typeof TabsTrigger;
    Content: typeof TabsContent;
};

declare const Modal: React.FC<DialogPrimitive.DialogProps>;
declare const ModalTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const ModalPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const ModalClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const ModalOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    blurOverlay?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const ModalContent: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    variant?: "alert" | "standard" | "fullscreen";
    blurOverlay?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const ModalHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ModalFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ModalTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const ModalDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

declare const Drawer: React.FC<DialogPrimitive.DialogProps>;
declare const DrawerTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DrawerPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const DrawerClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const DrawerOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DrawerContent: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    position?: "left" | "right" | "bottom";
} & React.RefAttributes<HTMLDivElement>>;
declare const DrawerHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare function DrawerLegacy({ isOpen, onClose, position, children }: {
    isOpen: boolean;
    onClose: () => void;
    position?: 'left' | 'right' | 'bottom';
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

interface Column<T> {
    key: string;
    header: string;
    render?: (row: T) => React__default.ReactNode;
}
interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    density?: 'compact' | 'comfortable' | 'spacious';
    striped?: boolean;
    borderless?: boolean;
}
declare function DataTable<T extends Record<string, any>>({ columns, data, striped, borderless }: DataTableProps<T>): react_jsx_runtime.JSX.Element;

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    variant?: 'check' | 'dot';
    inputSize?: 'sm' | 'md' | 'lg';
}
declare const Checkbox: React__default.ForwardRefExoticComponent<CheckboxProps & React__default.RefAttributes<HTMLInputElement>>;

interface ProgressBarProps {
    value: number;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'linear' | 'circular';
    className?: string;
    color?: string;
}
declare function ProgressBar({ value, size, variant, color, className }: ProgressBarProps): react_jsx_runtime.JSX.Element;

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'sm' | 'md' | 'lg';
}
declare const Slider: React__default.ForwardRefExoticComponent<SliderProps & React__default.RefAttributes<HTMLInputElement>>;

declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const TooltipRoot: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    sideOffset?: number;
    position?: "top" | "bottom" | "left" | "right";
} & React.RefAttributes<HTMLDivElement>>;
interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
}
/**
 * Tooltip component for showing contextual information.
 * Supports both simple API (via props) and Radix-style composable API.
 */
declare function Tooltip({ content, children, position, className }: TooltipProps): react_jsx_runtime.JSX.Element;

type AptlyThemeConfig = {
    primary?: string;
    surface?: string;
    bg?: string;
    text?: string;
    radius?: string;
    fontFamily?: string;
    density?: 'compact' | 'comfortable' | 'spacious';
    cardStyle?: 'solid' | 'glass' | 'flat';
    focusRingStyle?: 'subtle' | 'bold' | 'none';
    animationSpeed?: 'instant' | 'fast' | 'fluid';
};
declare function ThemeProvider({ config, children }: {
    config?: AptlyThemeConfig;
    children: React__default.ReactNode;
}): react_jsx_runtime.JSX.Element;
declare const useAptlyTheme: () => AptlyThemeConfig | null;

declare const DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const ScrollArea: React.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Separator: React.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "glass";
} & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & React.RefAttributes<HTMLLabelElement>>;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "destructive" | "success" | "warning";
}
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Toggle: React.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & React.RefAttributes<HTMLButtonElement>>;

declare const ToggleGroup: React.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React.RefAttributes<HTMLDivElement>, "ref">) & {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
}) & React.RefAttributes<HTMLDivElement>>;
declare const ToggleGroupItem: React.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & React.RefAttributes<HTMLButtonElement>>;

declare const Breadcrumb: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, type AlertProps, AlertTitle, type AptlyThemeConfig, Avatar, type AvatarProps, Badge, type BadgeProps, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, type CheckboxProps, type Column, ContentCard, type ContentCardProps, DataTable, type DataTableProps, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerLegacy, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Header, type HeaderProps, Label, Modal, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalOverlay, ModalPortal, ModalTitle, ModalTrigger, Popover, PopoverContent, PopoverTrigger, Profile, type ProfileProps, ProgressBar, type ProgressBarProps, ScrollArea, ScrollBar, SearchBar, type SearchBarProps, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sidebar, SidebarItem, type SidebarItemProps, type SidebarProps, Skeleton, type SkeletonProps, Slider, type SliderProps, Switch, TabsExtended as Tabs, TabsContent, TabsList, TabsTrigger, TextInput, type TextInputProps, Textarea, type TextareaProps, ThemeProvider, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, type TooltipProps, TooltipProvider, TooltipRoot, Tooltip as TooltipSimple, TooltipTrigger, cn, useAptlyTheme };
