import React, { useState } from 'react';
import { 
  ThemeProvider, Button, ContentCard, TextInput, Badge, Avatar, Switch, 
  Sidebar, SidebarItem, Header, SearchBar, Profile, Skeleton,
  Tabs, Modal, Drawer, DataTable, Checkbox, ProgressBar, Slider, Tooltip, AptlyThemeConfig
} from '../src';
import { LayoutDashboard, Users, Settings as SettingsIcon, Bell, Download, Menu, FileText, ArrowUpRight, HelpCircle, Server, Activity, Shield } from 'lucide-react';

export default function App() {
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

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalVariant, setModalVariant] = useState<'standard'|'alert'|'fullscreen' | null>(null);
  const [drawerPos, setDrawerPos] = useState<'right'|'left'|'bottom' | null>(null);
  const [progress, setProgress] = useState(30);

  // Simulate progress
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => p >= 100 ? 0 : p + 5);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(themeConfig, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aptly-theme.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const fonts = ['Inter', 'Space Grotesk', 'Outfit', 'Playfair Display', 'Plus Jakarta Sans', 'Roboto Mono', 'Lora'];

  const dataColumns = [
    { key: 'id', header: 'Invoice' },
    { key: 'status', header: 'Status', render: (row: any) => <Badge variant={row.status === 'Paid' ? 'success' : 'warning'} appearance="soft">{row.status}</Badge> },
    { key: 'client', header: 'Client', render: (row: any) => (
      <div className="flex items-center gap-2">
         <Avatar size="sm" fallback={row.client} />
         <span className="font-medium">{row.client}</span>
      </div>
    )},
    { key: 'amount', header: 'Amount' },
    { key: 'actions', header: '', render: () => <Button variant="ghost" size="sm">View</Button> }
  ];

  const tableData = [
    { id: 'INV-4921', status: 'Paid', client: 'Acme Corp', amount: '$4,200.00' },
    { id: 'INV-4922', status: 'Pending', client: 'Globex Inc', amount: '$1,850.50' },
    { id: 'INV-4923', status: 'Paid', client: 'Soylent Ltd', amount: '$900.00' },
  ];

  return (
    <ThemeProvider config={themeConfig}>
      
      <div className="flex h-screen w-full bg-[var(--aptly-bg)] text-[var(--aptly-text)] overflow-hidden transition-colors duration-500">
        
        <Sidebar collapsed={sidebarCollapsed} className="z-10 shadow-[var(--aptly-shadow-md)]">
          <div className="flex items-center justify-center h-16 border-b border-[var(--aptly-border-light)] shrink-0">
            <span className="font-bold tracking-tighter text-lg select-none">
              {sidebarCollapsed ? "A" : "Aptly."}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <SidebarItem active icon={<LayoutDashboard size={20} />} collapsed={sidebarCollapsed}>Overview</SidebarItem>
            <SidebarItem icon={<Server size={20} />} collapsed={sidebarCollapsed}>Infrastructure</SidebarItem>
            <SidebarItem icon={<Activity size={20} />} collapsed={sidebarCollapsed}>Metrics</SidebarItem>
            <SidebarItem icon={<Shield size={20} />} collapsed={sidebarCollapsed}>Security</SidebarItem>
          </div>
        </Sidebar>

        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative">
          
          <Header>
            <div className="flex items-center gap-4 w-full">
              <Button variant="ghost" size="sm" shape="square" onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="px-2">
                <Menu size={20} />
              </Button>
              <div className="max-w-md w-full ml-4">
                <SearchBar placeholder="Global search... (Try variations)" iconPosition="left" shortcut="⌘K" inputSize="lg" variant="solid" />
              </div>
            </div>
            
            <div className="flex items-center gap-4 shrink-0 px-4">
               <Tooltip content="Notifications (3 unread)" position="bottom">
                 <button className="relative text-[var(--aptly-text-secondary)] hover:text-[var(--aptly-text)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[var(--aptly-border-focus)]">
                    <Bell size={20} />
                    <span className="absolute 1 top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-[var(--aptly-surface)]"></span>
                 </button>
               </Tooltip>
               <div className="h-6 w-px bg-[var(--aptly-border-light)] mx-1"></div>
               <Profile name="Alicia Jones" email="alicia@acmecorp.com" />
            </div>
          </Header>

          <main className="flex-1 overflow-y-auto px-4 md:px-8 py-8 space-y-8 scroll-smooth pb-32">
            
            {/* The Visual Configurator Engine */}
            <section className="mb-12">
               <ContentCard elevation={3} className="relative overflow-visible border-[var(--aptly-primary)]">
                  <div className="absolute top-0 right-0 p-6 flex flex-col items-end pointer-events-none z-10">
                     <Badge variant="primary" appearance="solid" className="shadow-[var(--aptly-shadow-md)] pointer-events-auto">Visual Configurator v2</Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2 tracking-tight">Hyper-Elegant Tuning</h2>
                      <p className="text-[var(--aptly-text-secondary)] mb-6 text-sm max-w-md">
                        Adjust these advanced tokens. Notice how the entire UI instantly transforms geometry, padding (density), glassmorphism, and hardware-accelerated speeds.
                      </p>
                      
                      <Button variant="solid" onClick={handleExport} className="w-full md:w-auto mt-4 px-8 shadow-[var(--aptly-shadow-md)]">
                        <Download size={18} className="mr-2" />
                        Export Theme Json
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aptly-text-muted)] mb-2">Accent</p>
                        <TextInput type="color" value={themeConfig.primary} onChange={e => setThemeConfig({...themeConfig, primary: e.target.value})} className="h-[42px] p-1 cursor-pointer"/>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aptly-text-muted)] mb-2">Typography</p>
                        <select className="h-[42px] w-full rounded-[var(--aptly-radius)] border border-[var(--aptly-border)] bg-transparent px-3 text-sm focus:ring-2 focus:ring-[var(--aptly-border-focus)] outline-none" value={themeConfig.fontFamily} onChange={e => setThemeConfig({...themeConfig, fontFamily: e.target.value})}>
                           {fonts.map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                      </div>
                      
                      {/* Advanced Toggles */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aptly-text-muted)] mb-2">Density (Padding)</p>
                        <select className="h-[42px] w-full rounded-[var(--aptly-radius)] border border-[var(--aptly-border)] bg-transparent px-3 text-sm focus:ring-2 focus:ring-[var(--aptly-border-focus)] outline-none" value={themeConfig.density} onChange={e => setThemeConfig({...themeConfig, density: e.target.value as any})}>
                           <option value="compact">Compact</option>
                           <option value="comfortable">Comfortable</option>
                           <option value="spacious">Spacious</option>
                        </select>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aptly-text-muted)] mb-2">Card Architecture</p>
                        <select className="h-[42px] w-full rounded-[var(--aptly-radius)] border border-[var(--aptly-border)] bg-transparent px-3 text-sm focus:ring-2 focus:ring-[var(--aptly-border-focus)] outline-none" value={themeConfig.cardStyle} onChange={e => setThemeConfig({...themeConfig, cardStyle: e.target.value as any})}>
                           <option value="solid">Solid 3D</option>
                           <option value="glass">Frosted Glass</option>
                           <option value="flat">Flat Bordered</option>
                        </select>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aptly-text-muted)] mb-2">Animation Speed</p>
                        <select className="h-[42px] w-full rounded-[var(--aptly-radius)] border border-[var(--aptly-border)] bg-transparent px-3 text-sm focus:ring-2 focus:ring-[var(--aptly-border-focus)] outline-none" value={themeConfig.animationSpeed} onChange={e => setThemeConfig({...themeConfig, animationSpeed: e.target.value as any})}>
                           <option value="instant">Instant (0ms)</option>
                           <option value="fast">Fast (150ms)</option>
                           <option value="fluid">Fluid Spring (400ms)</option>
                        </select>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aptly-text-muted)] mb-2">Focus & Rings</p>
                        <select className="h-[42px] w-full rounded-[var(--aptly-radius)] border border-[var(--aptly-border)] bg-transparent px-3 text-sm focus:ring-2 focus:ring-[var(--aptly-border-focus)] outline-none" value={themeConfig.focusRingStyle} onChange={e => setThemeConfig({...themeConfig, focusRingStyle: e.target.value as any})}>
                           <option value="none">Hidden</option>
                           <option value="subtle">Subtle</option>
                           <option value="bold">Bold & Thick</option>
                        </select>
                      </div>

                    </div>
                  </div>
               </ContentCard>
            </section>

            {/* Huge Template Dashboard */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
               
               {/* Left Column (Main App UI) */}
               <div className="xl:col-span-2 space-y-8">
                  
                  <ContentCard elevation={1}>
                     <Tabs 
                       variant="underline" 
                       tabs={[
                         { 
                           id: 'data', 
                           label: 'Data Grid View', 
                           content: (
                             <div className="space-y-6 pt-4">
                               <div className="flex items-center gap-4 justify-between">
                                 <h3 className="font-semibold text-lg">Invoices</h3>
                                 <div className="flex gap-2">
                                  <Tooltip content="Launch Filter Drawer" position="left">
                                    <Button variant="outline" size="sm" onClick={() => setDrawerPos('right')}>Filters</Button>
                                  </Tooltip>
                                 </div>
                               </div>
                               <DataTable columns={dataColumns} data={tableData} striped density={themeConfig.density} />
                               
                               <div className="pt-4 border-t border-[var(--aptly-border-light)] flex items-center justify-between">
                                  <span className="text-sm text-[var(--aptly-text-muted)]">Showing 3 results</span>
                                  <div className="flex gap-2 w-48">
                                     <ProgressBar value={progress} size="sm" />
                                  </div>
                               </div>
                             </div>
                           )
                         },
                         { 
                           id: 'forms', 
                           label: 'Form Controls & Inputs', 
                           content: (
                             <div className="space-y-8 pt-4">
                                <div className="grid grid-cols-2 gap-8">
                                   <div className="space-y-4">
                                      <h4 className="text-sm font-semibold text-[var(--aptly-text-secondary)] uppercase tracking-wider">Toggles</h4>
                                      <Checkbox label="Enable Fast Sync" variant="check" inputSize="md" defaultChecked />
                                      <Checkbox label="Radio selection mode" variant="dot" inputSize="md" />
                                      <Switch label="Background Processing" checked readOnly/>
                                   </div>
                                   <div className="space-y-8">
                                      <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-medium">
                                          <span>Resource Allocation</span>
                                          <span>{progress}%</span>
                                        </div>
                                        <Slider size="md" value={progress} readOnly />
                                      </div>
                                      
                                      <div className="space-y-4">
                                         <h4 className="text-sm font-semibold text-[var(--aptly-text-secondary)] uppercase tracking-wider">Button Variations</h4>
                                         <div className="flex flex-wrap gap-2">
                                            <Button variant="solid" shape="pill">Pill Solid</Button>
                                            <Button variant="glass" shape="default">Glass Variant</Button>
                                            <Button variant="outline" shape="square">Square</Button>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                           )
                         }
                       ]}
                     />
                  </ContentCard>
               </div>

               {/* Right Column (Widget Stack) */}
               <div className="space-y-8">
                  
                  <ContentCard elevation={2} className="space-y-6">
                     <h3 className="text-lg font-medium tracking-tight border-b border-[var(--aptly-border-light)] pb-4">Overlays & Modals</h3>
                     <p className="text-sm text-[var(--aptly-text-secondary)] mb-4">
                        Test the hardware-accelerated entrance animations and Glassmorphic layered blurs.
                     </p>
                     
                     <div className="flex flex-col gap-3">
                        <Button variant="outline" fullWidth onClick={() => setModalVariant('alert')}>Launch Alert Modal</Button>
                        <Button variant="solid" fullWidth onClick={() => setModalVariant('standard')}>Standard Dialog</Button>
                        <Button variant="glass" fullWidth onClick={() => setDrawerPos('bottom')}>Bottom Drawer Sheet</Button>
                        <Button variant="ghost" fullWidth onClick={() => setDrawerPos('left')}>Left Side Navigation</Button>
                     </div>
                  </ContentCard>

                  <ContentCard elevation={1} className="flex flex-col items-center justify-center py-12 text-center">
                     <div className="relative mb-6">
                        <ProgressBar variant="circular" value={progress} size="lg" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <Activity size={24} className="text-[var(--aptly-primary)] animate-pulse" />
                        </div>
                     </div>
                     <h3 className="font-semibold">System Health</h3>
                     <p className="text-sm text-[var(--aptly-text-muted)] max-w-[200px] mt-2">All sub-systems are operating at optimal hardware speeds.</p>
                  </ContentCard>

               </div>

            </div>
          </main>
        </div>
      </div>

      {/* Portaled Modals & Drawers */}
      <Modal isOpen={!!modalVariant} onClose={() => setModalVariant(null)} title={modalVariant === 'alert' ? "Warning" : "Workspace Settings"} variant={modalVariant || 'standard'}>
         {modalVariant === 'alert' ? (
            <div className="space-y-4">
               <p className="text-sm text-[var(--aptly-text-secondary)]">Are you absolutely sure you want to perform this action? This drops the database.</p>
               <div className="flex gap-3 justify-end mt-6">
                  <Button variant="ghost" onClick={() => setModalVariant(null)}>Cancel</Button>
                  <Button className="bg-red-500 hover:bg-red-600 text-white border-0">Delete Everything</Button>
               </div>
            </div>
         ) : (
            <Tabs 
               variant="vertical" 
               tabs={[
                 { id: '1', label: 'General', content: <div className="p-4 space-y-4"><TextInput label="Workspace Name" /><TextInput label="Slug" /></div> },
                 { id: '2', label: 'Billing', content: <div className="p-4"><p>Plan: Enterprise</p></div> },
                 { id: '3', label: 'Members', content: <div className="p-4"><Profile name="User" email="user@x.com" /></div> }
               ]}
            />
         )}
      </Modal>

      <Drawer isOpen={!!drawerPos} onClose={() => setDrawerPos(null)} position={drawerPos || 'right'}>
         <div className="flex flex-col h-full space-y-6">
            <h2 className="text-xl font-semibold border-b border-[var(--aptly-border-light)] pb-4">Drawer Content</h2>
            <p className="text-[var(--aptly-text-secondary)] flex-1">This elegant drawer slides in perfectly via hardware accelerated CSS. Try interacting with background components!</p>
            <Button variant="solid" fullWidth onClick={() => setDrawerPos(null)}>Close Shelf</Button>
         </div>
      </Drawer>

    </ThemeProvider>
  );
}
