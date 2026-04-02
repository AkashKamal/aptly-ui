import React, { useState, useMemo } from 'react';
import { 
  ThemeProvider, Button, ContentCard, TextInput, Badge, Avatar, Switch, 
  Sidebar, SidebarItem, Header, SearchBar, Profile, Skeleton,
  Tabs, Modal, ModalContent, ModalHeader, ModalTitle, Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, 
  DataTable, Checkbox, ProgressBar, Slider, Tooltip, AptlyThemeConfig,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, 
  DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuPortal,
  Popover, PopoverTrigger, PopoverContent,
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  ScrollArea, Separator,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Label, Alert, AlertTitle, AlertDescription, Textarea,
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  Toggle, ToggleGroup, ToggleGroupItem,
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator
} from '../src';
import { 
  LayoutDashboard, Users, Settings as SettingsIcon, Bell, Download, Menu, 
  FileText, ArrowUpRight, HelpCircle, Server, Activity, Shield, 
  Palette, Smartphone, Monitor, Code, CheckCircle2, AlertCircle, TrendingUp, Layers, MousePointer2,
  ChevronDown, LogOut, User, Settings, Info, Search
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// --- MOCK DATA ---
const chartData = [
  { name: 'Mon', usage: 4000, traffic: 2400 },
  { name: 'Tue', usage: 3000, traffic: 1398 },
  { name: 'Wed', usage: 2000, traffic: 9800 },
  { name: 'Thu', usage: 2780, traffic: 3908 },
  { name: 'Fri', usage: 1890, traffic: 4800 },
  { name: 'Sat', usage: 2390, traffic: 3800 },
  { name: 'Sun', usage: 3490, traffic: 4300 },
];

const teamData = [
  { name: 'Alex Rivera', role: 'DevOps Lead', status: 'Online', avatar: 'AR' },
  { name: 'Sarah Chen', role: 'Lead Architect', status: 'In Meeting', avatar: 'SC' },
  { name: 'Marcus Bell', role: 'Frontend Engineer', status: 'Offline', avatar: 'MB' },
];

// --- PRESETS ---
const PRESETS: Record<string, AptlyThemeConfig> = {
  'Obsidian': {
    primary: '#10b981', // Emerald
    surface: '#111827',
    bg: '#030712',
    text: '#f9fafb',
    radius: '12px',
    density: 'comfortable',
    cardStyle: 'solid',
    animationSpeed: 'fluid'
  },
  'Nordic': {
    primary: '#3b82f6', // Blue
    surface: '#ffffff',
    bg: '#f8fafc',
    text: '#1e293b',
    radius: '8px',
    density: 'compact',
    cardStyle: 'flat',
    animationSpeed: 'fast'
  },
  'Glassy': {
    primary: '#8b5cf6', // Violet
    surface: '#ffffff',
    bg: '#f5f3ff',
    text: '#1e1b4b',
    radius: '24px',
    density: 'spacious',
    cardStyle: 'glass',
    animationSpeed: 'fluid'
  }
};

export default function App() {
  // --- STATE ---
  const [themeConfig, setThemeConfig] = useState<AptlyThemeConfig>({
    primary: '#111827',
    surface: '#FFFFFF',
    bg: '#F9FAFB',
    text: '#111827',
    radius: '16px',
    fontFamily: 'Inter',
    density: 'comfortable',
    cardStyle: 'solid',
    focusRingStyle: 'subtle',
    animationSpeed: 'fluid'
  });

  const [activeScenario, setActiveScenario] = useState<'dashboard' | 'crm' | 'library' | 'settings'>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [configPanelOpen, setConfigPanelOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<'standard'|'alert'|'fullscreen' | null>(null);
  const [progress, setProgress] = useState(65);
  const [showCode, setShowCode] = useState(false);

  // --- HANDLERS ---
  const applyPreset = (name: string) => {
    setThemeConfig({ ...themeConfig, ...PRESETS[name] });
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(themeConfig, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aptly-theme.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  // --- RENDER HELPERS ---
  const fonts = ['Inter', 'Outfit', 'Space Grotesk', 'Playfair Display', 'Plus Jakarta Sans', 'Roboto Mono'];

  return (
    <ThemeProvider config={themeConfig}>
      <div className="flex h-screen w-full bg-[var(--aptly-bg)] text-[var(--aptly-text)] overflow-hidden transition-colors duration-500 font-body">
        
        {/* SIDEBAR NAVIGATION */}
        <Sidebar collapsed={sidebarCollapsed} className="z-20 border-r border-[var(--aptly-border-light)] shadow-none">
          <div className="flex items-center gap-3 px-6 h-16 border-b border-[var(--aptly-border-light)] shrink-0 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-[var(--aptly-primary)] flex items-center justify-center shrink-0 shadow-lg shadow-[var(--aptly-primary)]/20">
               <Layers size={18} className="text-white" />
            </div>
            {!sidebarCollapsed && <span className="font-bold tracking-tighter text-lg">Aptly UI</span>}
          </div>
          <div className="flex-1 overflow-y-auto py-6 space-y-2">
            <SidebarItem active={activeScenario === 'dashboard'} icon={<LayoutDashboard size={20} />} collapsed={sidebarCollapsed} onClick={() => setActiveScenario('dashboard')}>Studio Overview</SidebarItem>
            <SidebarItem active={activeScenario === 'crm'} icon={<Users size={20} />} collapsed={sidebarCollapsed} onClick={() => setActiveScenario('crm')}>Team & Data</SidebarItem>
            <SidebarItem active={activeScenario === 'library'} icon={<Code size={20} />} collapsed={sidebarCollapsed} onClick={() => setActiveScenario('library')}>Library Explorer</SidebarItem>
            <SidebarItem active={activeScenario === 'settings'} icon={<SettingsIcon size={20} />} collapsed={sidebarCollapsed} onClick={() => setActiveScenario('settings')}>System Config</SidebarItem>
            <div className="mt-8 px-6 mb-2">
               {!sidebarCollapsed && <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--aptly-text-muted)]">Components</p>}
            </div>
            <SidebarItem icon={<MousePointer2 size={20} />} collapsed={sidebarCollapsed} onClick={() => setModalVariant('standard')}>Modals Test</SidebarItem>
            <SidebarItem icon={<Activity size={20} />} collapsed={sidebarCollapsed}>Hardware Metrics</SidebarItem>
          </div>
          <div className="p-4 border-t border-[var(--aptly-border-light)]">
             <Button variant="neutral" size="sm" fullWidth onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="justify-start px-2">
               <Menu size={18} className="mr-3" />
               {!sidebarCollapsed && "Collapse Sidebar"}
             </Button>
          </div>
        </Sidebar>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative">
          
          <Header className="z-10 border-b border-[var(--aptly-border-light)] bg-[var(--aptly-surface)]/80 backdrop-blur-md">
            <div className="flex items-center gap-4 w-full">
               <div className="max-w-md w-full">
                 <SearchBar placeholder="Command + K to search studio..." iconPosition="left" shortcut="⌘K" inputSize="md" variant="solid" />
               </div>
            </div>
            
            <div className="flex items-center gap-3 shrink-0 px-4">
               <Tooltip content="Open Visual Configurator" position="bottom">
                  <Button variant="neutral" size="sm" shape="square" onClick={() => setConfigPanelOpen(true)}>
                    <Palette size={20} />
                  </Button>
               </Tooltip>
               
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="neutral" size="sm" shape="square">
                      <Bell size={20} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                      <span className="font-bold text-sm">Hardware Acceleration Active</span>
                      <span className="text-xs text-[var(--aptly-text-muted)]">GPU threads are now being utilized for all UI transitions.</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                      <span className="font-bold text-sm">New Theme Exported</span>
                      <span className="text-xs text-[var(--aptly-text-muted)]">Your 'Obsidian' theme configuration was saved to local storage.</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="justify-center text-[var(--aptly-primary)] font-bold">Mark all as read</DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>

               <div className="h-6 w-px bg-[var(--aptly-border-light)] mx-1"></div>
               
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Profile name="Dev Studio" email="pro@aptly.design" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveScenario('settings')}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
          </Header>

          <main className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10 scroll-smooth pb-32">
            
            {/* SCENARIO RENDERER */}
            {activeScenario === 'dashboard' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-end justify-between">
                   <div>
                      <h1 className="text-4xl font-bold tracking-tight mb-2">Studio Intelligence</h1>
                      <p className="text-[var(--aptly-text-secondary)]">Experience hardware-accelerated components in a data-rich environment.</p>
                   </div>
                   <div className="flex gap-3">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="md">
                             <Download size={18} className="mr-2" />
                             Export Data
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <h4 className="font-bold leading-none text-sm">Export Options</h4>
                              <p className="text-xs text-[var(--aptly-text-muted)]">
                                Select the data format and range for your export.
                              </p>
                            </div>
                            <div className="grid gap-2">
                              <Button variant="outline" size="sm" className="justify-start">CSV Format (.csv)</Button>
                              <Button variant="outline" size="sm" className="justify-start">JSON Format (.json)</Button>
                              <Button variant="solid" size="sm">Download Now</Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                      <Button variant="solid" size="md" className="shadow-lg shadow-[var(--aptly-primary)]/20">
                         Create Project
                      </Button>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   <ContentCard interactive elevation={1} className="flex flex-col gap-4">
                      <div className="flex justify-between items-start">
                         <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500"><TrendingUp size={20} /></div>
                         <Badge variant="success" appearance="soft">+12.5%</Badge>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--aptly-text-secondary)] uppercase tracking-wider">Total Revenue</p>
                        <h3 className="text-2xl font-bold">$128,430</h3>
                      </div>
                   </ContentCard>
                   <ContentCard interactive elevation={1} className="flex flex-col gap-4">
                      <div className="flex justify-between items-start">
                         <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500"><Users size={20} /></div>
                         <Badge variant="primary" appearance="soft">+430</Badge>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--aptly-text-secondary)] uppercase tracking-wider">Active Users</p>
                        <h3 className="text-2xl font-bold">14,202</h3>
                      </div>
                   </ContentCard>
                   <ContentCard interactive elevation={1} className="flex flex-col gap-4">
                      <div className="flex justify-between items-start">
                         <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500"><Activity size={20} /></div>
                         <Badge variant="warning" appearance="soft">Stable</Badge>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--aptly-text-secondary)] uppercase tracking-wider">System Health</p>
                        <h3 className="text-2xl font-bold">99.9%</h3>
                      </div>
                   </ContentCard>
                   <ContentCard interactive elevation={1} className="flex flex-col gap-4">
                      <div className="flex justify-between items-start">
                         <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500"><Shield size={20} /></div>
                         <Badge variant="success" appearance="solid">Encrypted</Badge>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--aptly-text-secondary)] uppercase tracking-wider">Security Score</p>
                        <h3 className="text-2xl font-bold">A+ Grade</h3>
                      </div>
                   </ContentCard>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                   <ContentCard elevation={1} className="xl:col-span-2 space-y-6">
                      <div className="flex items-center justify-between">
                         <h3 className="text-xl font-bold tracking-tight">System Performance</h3>
                         <div className="flex gap-2">
                            <Button variant="neutral" size="sm">7 Days</Button>
                            <Button variant="outline" size="sm">30 Days</Button>
                         </div>
                      </div>
                      <div className="h-[300px] w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={chartData}>
                            <defs>
                              <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--aptly-primary)" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="var(--aptly-primary)" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--aptly-border-light)" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--aptly-text-muted)', fontSize: 12}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--aptly-text-muted)', fontSize: 12}} />
                            <RechartsTooltip 
                              contentStyle={{ 
                                backgroundColor: 'var(--aptly-surface)', 
                                borderColor: 'var(--aptly-border)', 
                                borderRadius: 'var(--aptly-radius)',
                                boxShadow: 'var(--aptly-shadow-md)'
                              }} 
                            />
                            <Area type="monotone" dataKey="usage" stroke="var(--aptly-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorUsage)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                   </ContentCard>

                   <div className="space-y-8">
                      <ContentCard elevation={1} className="space-y-6">
                         <h3 className="text-lg font-bold tracking-tight border-b border-[var(--aptly-border-light)] pb-4">Real-time Sync</h3>
                         <div className="space-y-6">
                            <div className="flex justify-between items-center">
                               <span className="text-sm font-medium">Node Distribution</span>
                               <span className="text-xs font-bold text-[var(--aptly-text-muted)]">ACTIVE</span>
                            </div>
                            <ProgressBar value={progress} size="md" className="shadow-inner" />
                            <div className="grid grid-cols-2 gap-4">
                               <div className="p-3 rounded-xl bg-[var(--aptly-bg)]">
                                  <p className="text-[10px] uppercase font-bold text-[var(--aptly-text-muted)] mb-1">Inbound</p>
                                  <p className="text-sm font-bold">1.2 GB/s</p>
                               </div>
                               <div className="p-3 rounded-xl bg-[var(--aptly-bg)]">
                                  <p className="text-[10px] uppercase font-bold text-[var(--aptly-text-muted)] mb-1">Outbound</p>
                                  <p className="text-sm font-bold">840 MB/s</p>
                               </div>
                            </div>
                            <Button variant="solid" fullWidth size="md">Optimize Clusters</Button>
                         </div>
                      </ContentCard>

                      <ContentCard elevation={2} className="flex flex-col items-center py-8 text-center bg-gradient-to-br from-[var(--aptly-primary)]/5 to-transparent border border-[var(--aptly-primary)]/10">
                         <div className="w-16 h-16 rounded-full bg-[var(--aptly-primary)] flex items-center justify-center text-white mb-4 shadow-xl shadow-[var(--aptly-primary)]/30">
                            <CheckCircle2 size={32} />
                         </div>
                         <h3 className="font-bold text-lg">System Integrity</h3>
                         <p className="text-sm text-[var(--aptly-text-secondary)] mt-2 px-6">Hardware acceleration is currently forcing GPU rendering on all layers.</p>
                      </ContentCard>
                   </div>
                </div>
              </div>
            )}

            {activeScenario === 'crm' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                   <h1 className="text-4xl font-bold tracking-tight mb-2">Team Collaboration</h1>
                   <p className="text-[var(--aptly-text-secondary)]">Manage high-performance teams with sub-pixel precise UI components.</p>
                </div>

                <ContentCard elevation={1}>
                   <div className="flex items-center justify-between mb-8">
                      <div className="flex gap-4 items-center">
                         <div className="w-48">
                            <SearchBar placeholder="Search team..." inputSize="sm" />
                         </div>
                         <div className="flex -space-x-3">
                            <Avatar fallback="A" size="sm" className="ring-2 ring-[var(--aptly-surface)]" />
                            <Avatar fallback="B" size="sm" className="ring-2 ring-[var(--aptly-surface)]" />
                            <Avatar fallback="C" size="sm" className="ring-2 ring-[var(--aptly-surface)]" />
                            <div className="w-8 h-8 rounded-full bg-[var(--aptly-bg)] border-2 border-[var(--aptly-surface)] flex items-center justify-center text-[10px] font-bold">+12</div>
                         </div>
                      </div>
                      <div className="flex gap-2">
                         <Button variant="outline" size="sm">Export CSV</Button>
                         <Button variant="solid" size="sm">Invite Member</Button>
                      </div>
                   </div>

                   <DataTable 
                      density={themeConfig.density}
                      columns={[
                        { key: 'name', header: 'Member', render: (row) => (
                           <div className="flex items-center gap-3">
                              <Avatar fallback={row.avatar} size="md" />
                              <div>
                                 <p className="font-bold text-sm">{row.name}</p>
                                 <p className="text-xs text-[var(--aptly-text-muted)]">{row.role}</p>
                              </div>
                           </div>
                        )},
                        { key: 'status', header: 'Status', render: (row) => (
                           <Badge variant={row.status === 'Online' ? 'success' : row.status === 'In Meeting' ? 'warning' : 'neutral'} appearance="soft">
                              {row.status}
                           </Badge>
                        )},
                        { key: 'activity', header: 'Recent Performance', render: () => (
                           <div className="w-32 h-8">
                              <ResponsiveContainer width="100%" height="100%">
                                 <BarChart data={[{v: 40}, {v: 70}, {v: 45}, {v: 90}, {v: 65}]}>
                                    <Bar dataKey="v" fill="var(--aptly-primary)" radius={[2, 2, 0, 0]} />
                                 </BarChart>
                              </ResponsiveContainer>
                           </div>
                        )},
                        { key: 'action', header: '', render: () => <Button variant="neutral" size="sm" shape="square"><ArrowUpRight size={16} /></Button> }
                      ]}
                      data={teamData}
                   />
                </ContentCard>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <ContentCard elevation={1} className="space-y-4">
                      <h3 className="font-bold">Project Milestones</h3>
                      <div className="space-y-4 pt-2">
                         {[1, 2, 3].map(i => (
                           <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-[var(--aptly-bg)] group hover:bg-[var(--aptly-primary-bg)] transition-colors cursor-pointer">
                              <Checkbox defaultChecked={i === 1} />
                              <div className="flex-1">
                                 <p className="text-sm font-bold">Phase {i}: Component Architecture</p>
                                 <p className="text-xs text-[var(--aptly-text-muted)]">Target: Q{i} 2024</p>
                              </div>
                              <Badge variant="neutral">v1.2.{i}</Badge>
                           </div>
                         ))}
                      </div>
                   </ContentCard>
                   <ContentCard elevation={1} className="space-y-4">
                      <h3 className="font-bold">Access Permissions</h3>
                      <div className="space-y-4 pt-2">
                         <div className="flex items-center justify-between p-3 rounded-xl border border-[var(--aptly-border-light)]">
                            <div>
                               <p className="text-sm font-bold">Public Sharing</p>
                               <p className="text-xs text-[var(--aptly-text-muted)]">Allow external link access</p>
                            </div>
                            <Switch defaultChecked />
                         </div>
                         <div className="flex items-center justify-between p-3 rounded-xl border border-[var(--aptly-border-light)]">
                            <div>
                               <p className="text-sm font-bold">Biometric Auth</p>
                               <p className="text-xs text-[var(--aptly-text-muted)]">Require hardware key</p>
                            </div>
                            <Switch />
                         </div>
                      </div>
                   </ContentCard>
                </div>
              </div>
            )}

            {activeScenario === 'library' && (
               <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Library Explorer</h1>
                    <p className="text-[var(--aptly-text-secondary)]">Deep dive into our accessible, modular, and AI-optimized component architecture.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                     <section className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                           <Layers size={18} className="text-[var(--aptly-primary)]" />
                           <h2 className="text-xl font-bold">Surfaces & Layout</h2>
                        </div>
                        <ContentCard className="p-0 overflow-hidden">
                           <div className="p-6 border-b border-[var(--aptly-border-light)] bg-[var(--aptly-bg)]/50">
                              <p className="text-xs font-bold text-[var(--aptly-text-muted)] uppercase mb-4">ScrollArea & Separator</p>
                              <ScrollArea className="h-64 w-full rounded-xl border border-[var(--aptly-border-light)] bg-[var(--aptly-surface)] p-4">
                                 <div className="space-y-4">
                                    <h4 className="text-sm font-bold underline">The Aptly Manifesto</h4>
                                    <p className="text-sm leading-relaxed">
                                       In the age of AI, developers need a new kind of UI tool. Not a library that is heavy and opaque, but one that is light, modular, and easily understood by both humans and machines.
                                    </p>
                                    <Separator className="my-4" />
                                    <p className="text-sm leading-relaxed">
                                       Aptly UI is built on Radix primitives, ensuring 100% accessibility out of the box. Our tokenized system allows for global changes in a single JSON file, saving thousands of tokens during AI development cycles.
                                    </p>
                                    <Separator className="my-4" />
                                    <div className="flex h-5 items-center space-x-4 text-sm font-medium">
                                       <div>v2.0</div>
                                       <Separator orientation="vertical" />
                                       <div>Modular</div>
                                       <Separator orientation="vertical" />
                                       <div>Fast</div>
                                    </div>
                                    <p className="text-sm leading-relaxed">
                                       Repeat this block to see scrolling...
                                    </p>
                                    {[1, 2, 3, 4, 5].map(i => (
                                       <p key={i} className="text-sm opacity-50">Modular UI logic fragment {i} generated for acceleration testing.</p>
                                    ))}
                                 </div>
                              </ScrollArea>
                           </div>
                        </ContentCard>
                     </section>

                     <section className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                           <Menu size={18} className="text-[var(--aptly-primary)]" />
                           <h2 className="text-xl font-bold">Interactive Overlays</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           <ContentCard className="flex flex-col items-center justify-center py-12 gap-6">
                              <p className="text-xs font-bold text-[var(--aptly-text-muted)] uppercase">Dropdown Menus</p>
                              <DropdownMenu>
                                 <DropdownMenuTrigger asChild>
                                    <Button variant="solid">Open Menu <ChevronDown className="ml-2 h-4 w-4" /></Button>
                                 </DropdownMenuTrigger>
                                 <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>Project Actions</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>New Tab <DropdownMenuShortcut>⌘T</DropdownMenuShortcut></DropdownMenuItem>
                                    <DropdownMenuItem>Duplicate <DropdownMenuShortcut>⌘D</DropdownMenuShortcut></DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuSub>
                                       <DropdownMenuSubTrigger>Invite Members</DropdownMenuSubTrigger>
                                       <DropdownMenuPortal>
                                          <DropdownMenuSubContent>
                                             <DropdownMenuItem>Email</DropdownMenuItem>
                                             <DropdownMenuItem>Slack</DropdownMenuItem>
                                             <DropdownMenuSeparator />
                                             <DropdownMenuItem>More...</DropdownMenuItem>
                                          </DropdownMenuSubContent>
                                       </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600">Delete Project</DropdownMenuItem>
                                 </DropdownMenuContent>
                              </DropdownMenu>
                           </ContentCard>

                           <ContentCard className="flex flex-col items-center justify-center py-12 gap-6">
                              <p className="text-xs font-bold text-[var(--aptly-text-muted)] uppercase">Popovers</p>
                              <Popover>
                                 <PopoverTrigger asChild>
                                    <Button variant="outline">View Info <Info className="ml-2 h-4 w-4" /></Button>
                                 </PopoverTrigger>
                                 <PopoverContent className="w-80">
                                    <div className="flex flex-col gap-2">
                                       <h4 className="font-bold">System Architecture</h4>
                                       <p className="text-xs text-[var(--aptly-text-secondary)]">Aptly uses a distributed node system for rendering complexity across multiple GPU threads.</p>
                                       <div className="mt-2 pt-2 border-t border-[var(--aptly-border-light)] flex justify-between items-center">
                                          <span className="text-[10px] font-bold">Latency: 0.4ms</span>
                                          <Badge variant="success" appearance="solid">Healthy</Badge>
                                       </div>
                                    </div>
                                 </PopoverContent>
                              </Popover>
                           </ContentCard>
                        </div>
                     </section>

                                           <section className="space-y-6 lg:col-span-2">
                         <div className="flex items-center gap-2 mb-4">
                            <Layers size={18} className="text-[var(--aptly-primary)]" />
                            <h2 className="text-xl font-bold">Aptly V2 Extensions</h2>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                               <Alert variant="warning">
                                  <AlertTitle>Hardware Acceleration</AlertTitle>
                                  <AlertDescription>Your GPU is currently handling 84% of UI transitions.</AlertDescription>
                               </Alert>
                               
                               <Card variant="glass">
                                  <CardHeader>
                                     <CardTitle>Architecture Card</CardTitle>
                                     <CardDescription>Hyper-Elegant composition model.</CardDescription>
                                  </CardHeader>
                                  <CardContent>
                                     <p className="text-sm">Aptly V2 cards use a flexible sub-component architecture for maximum layout control.</p>
                                  </CardContent>
                                  <CardFooter className="justify-end">
                                     <Button variant="solid" size="sm">Details</Button>
                                  </CardFooter>
                               </Card>
                            </div>

                            <div className="space-y-6">
                               <ContentCard elevation={1} className="space-y-4">
                                  <div className="space-y-2">
                                     <Label>Deployment Region</Label>
                                     <Select defaultValue="us">
                                        <SelectTrigger>
                                           <SelectValue placeholder="Select..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                           <SelectItem value="us">United States (West)</SelectItem>
                                           <SelectItem value="eu">Europe (Frankfurt)</SelectItem>
                                           <SelectItem value="as">Asia (Tokyo)</SelectItem>
                                        </SelectContent>
                                     </Select>
                                  </div>

                                  <div className="space-y-2">
                                     <Label>System Logs</Label>
                                     <Textarea placeholder="Enter diagnostic commands..." />
                                  </div>
                                  
                                  <div className="flex justify-between items-center bg-[var(--aptly-bg)] p-3 rounded-xl border border-[var(--aptly-border-light)]">
                                     <Label>Turbo Mode</Label>
                                     <ToggleGroup type="single" defaultValue="on">
                                        <ToggleGroupItem value="on">On</ToggleGroupItem>
                                        <ToggleGroupItem value="off">Off</ToggleGroupItem>
                                     </ToggleGroup>
                                  </div>
                               </ContentCard>

                               <div className="p-2">
                                  <Breadcrumb>
                                     <BreadcrumbList>
                                        <BreadcrumbItem>
                                           <BreadcrumbLink href="#">Roots</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                           <BreadcrumbLink href="#">Library</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                           <BreadcrumbPage>Explorer</BreadcrumbPage>
                                        </BreadcrumbItem>
                                     </BreadcrumbList>
                                  </Breadcrumb>
                               </div>
                            </div>
                         </div>
                      </section>

<section className="space-y-6 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                           <Layers size={18} className="text-[var(--aptly-primary)]" />
                           <h2 className="text-xl font-bold">Disclosure Components</h2>
                        </div>
                        <ContentCard>
                           <Accordion type="single" collapsible className="w-full">
                              <AccordionItem value="item-1">
                                 <AccordionTrigger>What makes Aptly UI token-efficient?</AccordionTrigger>
                                 <AccordionContent>
                                    Aptly UI uses a highly standardized API and relies on Radix primitives. This means the AI doesn't need to write custom CSS or complex state logic; it simply uses clean, semantic components that are already optimized.
                                 </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2">
                                 <AccordionTrigger>Is it compatible with Tailwind CSS?</AccordionTrigger>
                                 <AccordionContent>
                                    Yes, 100%. While we use CSS variables for global tokens, every component is styled using Tailwind utility classes, allowing for seamless integration and customization.
                                 </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-3">
                                 <AccordionTrigger>Can I export my custom theme?</AccordionTrigger>
                                 <AccordionContent>
                                    Absolutely. The mandatory Theme Export feature allows you to download your `themeConfig.json` at any time, which can then be used to initialize any other project with your exact same visual identity.
                                 </AccordionContent>
                              </AccordionItem>
                           </Accordion>
                        </ContentCard>
                     </section>
                  </div>
               </div>
            )}

            {activeScenario === 'settings' && (
              <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div>
                   <h1 className="text-4xl font-bold tracking-tight mb-2">System Configuration</h1>
                   <p className="text-[var(--aptly-text-secondary)]">Adjust foundational engine parameters for your modular application.</p>
                </div>

                <ContentCard elevation={2}>
                   <Tabs defaultValue="general" variant="underline">
                      <Tabs.List className="mb-8">
                         <Tabs.Trigger value="general">General</Tabs.Trigger>
                         <Tabs.Trigger value="engine">Engine Optimization</Tabs.Trigger>
                         <Tabs.Trigger value="billing">Billing & Tiers</Tabs.Trigger>
                      </Tabs.List>
                      
                      <Tabs.Content value="general">
                         <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                               <TextInput label="Workspace Name" placeholder="Aptly Enterprise" />
                               <TextInput label="Contact Email" placeholder="ops@company.com" />
                            </div>
                            <div className="space-y-4">
                               <p className="text-sm font-bold">Communication Density</p>
                               <Slider defaultValue={progress} />
                               <div className="flex justify-between text-[10px] font-bold text-[var(--aptly-text-muted)] uppercase tracking-widest">
                                  <span>Minimal</span>
                                  <span>Standard</span>
                                  <span>Exhaustive</span>
                               </div>
                            </div>
                            <div className="pt-6 border-t border-[var(--aptly-border-light)] flex justify-end gap-3">
                               <Button variant="neutral">Reset Defaults</Button>
                               <Button variant="solid" className="px-8 shadow-lg shadow-[var(--aptly-primary)]/20">Save Changes</Button>
                            </div>
                         </div>
                      </Tabs.Content>
                      
                      <Tabs.Content value="engine">
                         <div className="space-y-6">
                            <ContentCard elevation={1} className="bg-[var(--aptly-bg)] border-0">
                               <div className="flex gap-4">
                                  <div className="p-3 rounded-full bg-[var(--aptly-primary)] text-white shrink-0 h-fit shadow-lg shadow-[var(--aptly-primary)]/30">
                                     <Server size={24} />
                                  </div>
                                  <div>
                                     <h4 className="font-bold">Hardware Acceleration (GPU)</h4>
                                     <p className="text-sm text-[var(--aptly-text-secondary)] mt-1">
                                        Forcing `translateZ(0)` on all interactive layers for butter-smooth 60fps renders.
                                     </p>
                                     <div className="mt-4 flex items-center gap-4">
                                        <Switch defaultChecked />
                                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--aptly-primary)]">Optimized</span>
                                     </div>
                                  </div>
                               </div>
                            </ContentCard>
                            <div className="p-6 rounded-2xl border-2 border-dashed border-[var(--aptly-border)] flex flex-col items-center text-center">
                               <AlertCircle size={32} className="text-[var(--aptly-text-muted)] mb-3" />
                               <p className="font-bold text-sm">Advanced Tuning Locked</p>
                               <p className="text-xs text-[var(--aptly-text-muted)] mt-1">Please upgrade to the Enterprise Engine for sub-millisecond control.</p>
                               <Button variant="outline" size="sm" className="mt-4">View Tiers</Button>
                            </div>
                         </div>
                                             </Tabs.Content>
                       
                       <Tabs.Content value="billing">
                          <div className="space-y-6">
                             <div className="flex items-center justify-between p-6 rounded-2xl bg-[var(--aptly-primary)] text-white shadow-xl shadow-[var(--aptly-primary)]/20">
                                <div>
                                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Current Plan</p>
                                   <h2 className="font-bold text-xl mt-1">Enterprise Studio Pro</h2>
                                </div>
                                <Badge variant="neutral" className="bg-white/20 border-white/20 text-white">ACTIVE</Badge>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ContentCard elevation={1} className="space-y-4">
                                   <h4 className="font-bold text-sm">Next Payment</h4>
                                   <p className="text-2xl font-bold">$499.00</p>
                                   <p className="text-xs text-[var(--aptly-text-muted)]">Automatic renewal on April 12, 2026</p>
                                   <Button variant="outline" size="sm" fullWidth>Manage Billing</Button>
                                </ContentCard>
                                <ContentCard elevation={1} className="space-y-4">
                                   <h4 className="font-bold text-sm">Compute Usage</h4>
                                   <div className="space-y-2">
                                      <div className="flex justify-between text-[10px] font-bold">
                                         <span>GPU THREADS</span>
                                         <span>84%</span>
                                      </div>
                                      <ProgressBar value={84} size="sm" />
                                   </div>
                                   <Button variant="solid" size="sm" fullWidth>Upgrade Tier</Button>
                                </ContentCard>
                             </div>
                          </div>
                       </Tabs.Content>
                    </Tabs>
                </ContentCard>
              </div>
            )}

            {/* LIVE CODE PREVIEW */}
            {showCode && (
               <div className="animate-in fade-in zoom-in-95 duration-300">
                  <ContentCard elevation={3} className="bg-[#1e1e1e] text-emerald-400 border-0 p-0 overflow-hidden font-mono text-sm shadow-2xl">
                     <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-white/5">
                        <span className="text-white/50 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                           <Code size={14} /> aptly-theme.config.ts
                        </span>
                        <Button variant="neutral" size="sm" className="text-white/40 hover:text-white" onClick={() => setShowCode(false)}>Close</Button>
                     </div>
                     <pre className="p-6 overflow-x-auto">
                        <code>{`export const studioTheme: AptlyThemeConfig = ${JSON.stringify(themeConfig, null, 2)};

// Usage in Root Layout
export default function Layout({ children }) {
  return (
    <ThemeProvider config={studioTheme}>
      {children}
    </ThemeProvider>
  );
}`}</code>
                     </pre>
                  </ContentCard>
               </div>
            )}

          </main>
        </div>

        {/* VISUAL CONFIGURATOR DRAWER */}
        <Drawer open={configPanelOpen} onOpenChange={setConfigPanelOpen}>
          <DrawerContent position="right">
            <DrawerHeader>
               <DrawerTitle>Studio Config</DrawerTitle>
               <DrawerDescription>Real-time theme manipulation</DrawerDescription>
            </DrawerHeader>

            <div className="flex-1 space-y-10 pb-10">
               {/* PRESETS SECTION */}
               <section>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--aptly-text-muted)] mb-4">Designer Presets</p>
                  <div className="grid grid-cols-1 gap-3">
                     {Object.keys(PRESETS).map(name => (
                        <button 
                           key={name}
                           onClick={() => applyPreset(name)}
                           className="flex items-center justify-between p-4 rounded-2xl bg-[var(--aptly-bg)] border border-[var(--aptly-border-light)] hover:border-[var(--aptly-primary)] transition-all group"
                        >
                           <span className="font-bold text-sm">{name}</span>
                           <div className="flex gap-1">
                              <div className="w-3 h-3 rounded-full" style={{backgroundColor: PRESETS[name].primary}} />
                              <div className="w-3 h-3 rounded-full opacity-50" style={{backgroundColor: PRESETS[name].surface}} />
                           </div>
                        </button>
                     ))}
                  </div>
               </section>

               {/* CORE TOKENS */}
               <section className="space-y-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--aptly-text-muted)]">Core Engine Tokens</p>
                  
                  <div className="space-y-4">
                     <div>
                        <p className="text-xs font-bold mb-2">Primary Accent</p>
                        <TextInput type="color" value={themeConfig.primary} onChange={e => setThemeConfig({...themeConfig, primary: e.target.value})} className="h-12 p-1 cursor-pointer bg-white" />
                     </div>
                     <div>
                        <p className="text-xs font-bold mb-2">Typography</p>
                        <select className="h-12 w-full rounded-[var(--aptly-radius)] border border-[var(--aptly-border)] bg-white px-3 text-sm focus:ring-2 focus:ring-[var(--aptly-border-focus)] outline-none" value={themeConfig.fontFamily} onChange={e => setThemeConfig({...themeConfig, fontFamily: e.target.value})}>
                           {fonts.map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                     </div>
                  </div>
               </section>

               {/* GEOMETRY & ARCHITECTURE */}
               <section className="space-y-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--aptly-text-muted)]">Geometry & Flow</p>
                  
                  <div className="space-y-6">
                     <div>
                        <p className="text-xs font-bold mb-3 flex justify-between">Density Scale <span className="text-[var(--aptly-primary)] font-mono uppercase">{themeConfig.density}</span></p>
                        <div className="grid grid-cols-3 gap-2">
                           {['compact', 'comfortable', 'spacious'].map(d => (
                              <Button key={d} variant={themeConfig.density === d ? 'solid' : 'outline'} size="sm" onClick={() => setThemeConfig({...themeConfig, density: d as any})} className="text-[10px] px-0">
                                 {d}
                              </Button>
                           ))}
                        </div>
                     </div>

                     <div>
                        <p className="text-xs font-bold mb-3 flex justify-between">Card Architecture <span className="text-[var(--aptly-primary)] font-mono uppercase">{themeConfig.cardStyle}</span></p>
                        <div className="grid grid-cols-3 gap-2">
                           {['solid', 'glass', 'flat'].map(s => (
                              <Button key={s} variant={themeConfig.cardStyle === s ? 'solid' : 'outline'} size="sm" onClick={() => setThemeConfig({...themeConfig, cardStyle: s as any})} className="text-[10px] px-0">
                                 {s}
                              </Button>
                           ))}
                        </div>
                     </div>
                  </div>
               </section>

               <section className="pt-6 border-t border-[var(--aptly-border-light)]">
                  <Button variant="solid" fullWidth onClick={handleExport} className="shadow-lg shadow-[var(--aptly-primary)]/20">
                     <Download size={18} className="mr-2" />
                     Export JSON Config
                  </Button>
               </section>
            </div>
          </DrawerContent>
        </Drawer>

        {/* TEST MODALS PORTAL */}
        <Modal open={!!modalVariant} onOpenChange={(open) => !open && setModalVariant(null)}>
          <ModalContent variant={modalVariant || 'standard'}>
             <ModalHeader>
                <ModalTitle>{modalVariant === 'alert' ? "Warning: Critical Action" : "Workspace Intelligence Settings"}</ModalTitle>
             </ModalHeader>
             {modalVariant === 'alert' ? (
                <div className="space-y-6">
                   <div className="flex gap-4 p-4 rounded-2xl bg-red-50 text-red-600 border border-red-100">
                      <AlertCircle size={24} className="shrink-0" />
                      <div>
                         <p className="font-bold text-sm">Destructive Action</p>
                         <p className="text-xs mt-1">This will permanently purge all hardware metrics from the studio database.</p>
                      </div>
                   </div>
                   <div className="flex gap-3 justify-end">
                      <Button variant="neutral" onClick={() => setModalVariant(null)}>Cancel</Button>
                      <Button className="bg-red-500 hover:bg-red-600 text-white border-0 shadow-lg shadow-red-500/20">Purge Data</Button>
                   </div>
                </div>
             ) : (
                <div className="space-y-6">
                   <Tabs variant="vertical" defaultValue="1">
                      <Tabs.List>
                        <Tabs.Trigger value="1">General Settings</Tabs.Trigger>
                        <Tabs.Trigger value="2">GPU Allocation</Tabs.Trigger>
                        <Tabs.Trigger value="3">API Keys</Tabs.Trigger>
                      </Tabs.List>
                      <Tabs.Content value="1">
                        <div className="space-y-4">
                          <TextInput label="Workspace ID" defaultValue="APTLY_STUDIO_V2" />
                          <TextInput label="Base URL" defaultValue="https://studio.aptly.design" />
                        </div>
                      </Tabs.Content>
                      <Tabs.Content value="2">
                        <div className="p-4 rounded-2xl bg-[var(--aptly-bg)] text-center space-y-3">
                          <Monitor size={32} className="mx-auto text-[var(--aptly-primary)]" />
                          <p className="font-bold">Hardware Acceleration Active</p>
                          <p className="text-xs text-[var(--aptly-text-muted)]">Using 100% of available GPU threads for interface rendering.</p>
                        </div>
                      </Tabs.Content>
                      <Tabs.Content value="3">
                        <div className="p-4 space-y-2">
                          <p className="text-xs font-bold text-[var(--aptly-text-muted)] uppercase">Live Production Key</p>
                          <code className="block p-3 bg-[var(--aptly-bg)] rounded-xl text-xs blur-[2px] hover:blur-0 transition-all cursor-help">
                             sk_test_51Mz...aptly_studio_0912
                          </code>
                        </div>
                      </Tabs.Content>
                   </Tabs>
                </div>
             )}
          </ModalContent>
        </Modal>

      </div>
    </ThemeProvider>
  );
}
