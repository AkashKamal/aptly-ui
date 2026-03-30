import React, { useState } from 'react';
import { 
  ThemeProvider, Button, ContentCard, TextInput, Badge, Avatar, Switch, 
  Sidebar, SidebarItem, Header, SearchBar, Profile, Skeleton
} from '../src';
import { LayoutDashboard, Users, Settings as SettingsIcon, Bell, Download, Menu, FileText, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [themeConfig, setThemeConfig] = useState({
    primary: '#111827',
    surface: '#FFFFFF',
    bg: '#F9FAFB',
    text: '#111827',
    radius: '16px',
    fontFamily: 'Inter',
  });

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading skeletons
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

  return (
    <ThemeProvider config={themeConfig}>
      {/* 
        This is a full AppShell layout demonstrating how a client application 
        would use the Header and Sidebar.
      */}
      <div className="flex h-screen w-full bg-[var(--aptly-bg)] text-[var(--aptly-text)] overflow-hidden transition-colors duration-500">
        
        <Sidebar collapsed={sidebarCollapsed} className="z-10 shadow-[var(--aptly-shadow-md)]">
          <div className="flex items-center justify-center h-16 border-b border-[var(--aptly-border-light)] shrink-0">
            <span className="font-bold tracking-tighter text-lg select-none">
              {sidebarCollapsed ? "A" : "Aptly."}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <SidebarItem active icon={<LayoutDashboard size={20} />} collapsed={sidebarCollapsed}>Dashboard</SidebarItem>
            <SidebarItem icon={<Users size={20} />} collapsed={sidebarCollapsed}>Team Members</SidebarItem>
            <SidebarItem icon={<FileText size={20} />} collapsed={sidebarCollapsed}>Invoices</SidebarItem>
            <SidebarItem icon={<SettingsIcon size={20} />} collapsed={sidebarCollapsed}>Preferences</SidebarItem>
          </div>
          
          <div className="p-4 border-t border-[var(--aptly-border-light)] bg-[var(--aptly-bg)] m-2 rounded-[var(--aptly-radius-sm)]">
            {!sidebarCollapsed ? (
               <div className="text-center">
                 <p className="text-xs font-semibold text-[var(--aptly-text-secondary)] mb-2 uppercase tracking-widest">Storage</p>
                 <div className="w-full bg-[var(--aptly-border-light)] h-1.5 rounded-full overflow-hidden mb-1">
                   <div className="bg-[var(--aptly-primary)] h-full w-3/4"></div>
                 </div>
                 <p className="text-[10px] text-[var(--aptly-text-muted)]">75% Used</p>
               </div>
            ) : (
                <div className="w-full h-1.5 bg-[var(--aptly-primary)] rounded-full border border-[var(--aptly-surface)] opacity-80 shadow-inner"></div>
            )}
          </div>
        </Sidebar>

        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative">
          
          <Header>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="px-2 hidden md:flex">
                <Menu size={20} />
              </Button>
              <SearchBar placeholder="Search globally..." iconPosition="left" shortcut="⌘K" className="hidden sm:flex max-w-xs" />
            </div>
            
            <div className="flex items-center gap-4">
               <button className="relative text-[var(--aptly-text-secondary)] hover:text-[var(--aptly-text)] transition-colors">
                  <Bell size={20} />
                  <span className="absolute 1 top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-[var(--aptly-surface)]"></span>
               </button>
               <div className="h-6 w-px bg-[var(--aptly-border-light)] mx-2"></div>
               <Profile name="Alicia Jones" email="alicia@acmecorp.com" />
            </div>
          </Header>

          <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth pb-32">
            
            {/* The Visual Configurator Engine */}
            <section>
               <ContentCard elevation={2} className="relative overflow-visible border-[var(--aptly-primary)] shadow-[var(--aptly-shadow-lg)]">
                  <div className="absolute top-0 right-0 p-6 flex flex-col items-end pointer-events-none">
                     <Badge variant="primary" appearance="solid" className="shadow-[var(--aptly-shadow-md)] pointer-events-auto">Visual Configurator</Badge>
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-1">Global Theme Configurator</h2>
                  <p className="text-[var(--aptly-text-secondary)] mb-8 text-sm max-w-xl">
                    Adjust the live elements here. Notice how the AppShell (Sidebar, Header) and all sub-components transition natively. Export exactly what you see for AI agent ingestion.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aptly-text-muted)] mb-2">Accent Color</p>
                      <TextInput 
                        type="color" 
                        value={themeConfig.primary} 
                        onChange={e => setThemeConfig({...themeConfig, primary: e.target.value})} 
                        className="h-12 cursor-pointer p-1"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aptly-text-muted)] mb-2">Organic Radius</p>
                      <TextInput 
                        value={themeConfig.radius} 
                        onChange={e => setThemeConfig({...themeConfig, radius: e.target.value})} 
                        placeholder="e.g. 12px, 2rem"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--aptly-text-muted)] mb-2">Typography Setup</p>
                      <select 
                         className="flex h-12 w-full rounded-[var(--aptly-radius)] border border-[var(--aptly-border)] bg-transparent px-4 text-[15px] text-[var(--aptly-text)] transition-all duration-[var(--aptly-transition)] focus-visible:outline-none focus:ring-[2px] focus:ring-[var(--aptly-border-focus)] font-medium"
                         value={themeConfig.fontFamily}
                         onChange={e => setThemeConfig({...themeConfig, fontFamily: e.target.value})}
                      >
                         {fonts.map(f => <option key={f} value={f}>{f}</option>)}
                      </select>
                    </div>
                  </div>

                  <Button variant="solid" onClick={handleExport} className="w-full md:w-auto shadow-[var(--aptly-shadow-md)]">
                    <Download size={18} className="mr-2" />
                    Export aptly-theme.json
                  </Button>
               </ContentCard>
            </section>

            {/* Application Templates / Dashboards */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
               
               {/* Left Column (Main Content) */}
               <div className="xl:col-span-2 space-y-8">
                  
                  {/* Status Blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <ContentCard elevation={1} interactive className="p-6">
                        {loading ? (
                           <div className="space-y-3">
                              <Skeleton variant="circular" />
                              <Skeleton variant="text" />
                              <Skeleton variant="text" className="w-1/2" />
                           </div>
                        ) : (
                           <div className="flex flex-col gap-2">
                              <Badge variant="success" className="w-max">Revenue Up</Badge>
                              <h3 className="text-4xl font-semibold tracking-tighter mt-2">$24,942 <span className="text-lg text-[var(--aptly-text-muted)] font-normal">.00</span></h3>
                              <p className="text-sm text-[var(--aptly-text-muted)]">+12.5% from last month</p>
                           </div>
                        )}
                     </ContentCard>

                     <ContentCard elevation={1} interactive className="p-6">
                        {loading ? (
                           <div className="space-y-3">
                              <Skeleton variant="circular" />
                              <Skeleton variant="text" />
                              <Skeleton variant="text" className="w-1/2" />
                           </div>
                        ) : (
                           <div className="flex flex-col gap-2">
                              <Badge variant="warning" className="w-max">Pending Invoices</Badge>
                              <h3 className="text-4xl font-semibold tracking-tighter mt-2">142</h3>
                              <p className="text-sm text-[var(--aptly-text-muted)]">Requires manual review</p>
                           </div>
                        )}
                     </ContentCard>
                  </div>

                  {/* Complex Form Template */}
                  <ContentCard elevation={1} className="space-y-6">
                     <div className="flex justify-between items-center border-b border-[var(--aptly-border-light)] pb-4 mb-2">
                        <h3 className="text-xl font-medium tracking-tight">Create Workspace</h3>
                        <Button variant="ghost" size="sm">Cancel</Button>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextInput label="Company Name" placeholder="Acme Logistics LLC" className="col-span-2" />
                        <TextInput label="Primary Administrator" placeholder="jane@acme.com" />
                        <TextInput label="Internal Reference ID" placeholder="Optional" />
                     </div>

                     <div className="pt-4 space-y-5">
                        <h4 className="text-sm font-semibold text-[var(--aptly-text-secondary)] uppercase tracking-wider">Features Enablement</h4>
                        <ContentCard className="!p-4 bg-[var(--aptly-bg)] border-none shadow-none flex flex-col gap-4">
                           <Switch label="Sync Customer Data Pipeline" checked readOnly/>
                           <Switch label="Enable Real-Time Webhooks" />
                           <Switch label="Multi-Region DB Splitting (Enterprise Only)" disabled />
                        </ContentCard>
                     </div>

                     <div className="pt-6 border-t border-[var(--aptly-border-light)] flex justify-end gap-3">
                        <Button variant="outline">Save Template</Button>
                        <Button variant="solid">Provision Workspace <ArrowUpRight size={16} className="ml-1" /></Button>
                     </div>
                  </ContentCard>
               </div>

               {/* Right Column (Sidebar Widgets) */}
               <div className="space-y-8">
                  
                  {/* Team Members List */}
                  <ContentCard elevation={1} className="space-y-6">
                     <h3 className="text-lg font-medium tracking-tight border-b border-[var(--aptly-border-light)] pb-4">Recent Actives</h3>
                     
                     {loading ? (
                        <div className="space-y-5">
                           <div className="flex gap-4 items-center"><Skeleton variant="circular" className="h-10 w-10 shrink-0" /><Skeleton variant="text" className="w-full" /></div>
                           <div className="flex gap-4 items-center"><Skeleton variant="circular" className="h-10 w-10 shrink-0" /><Skeleton variant="text" className="w-full" /></div>
                           <div className="flex gap-4 items-center"><Skeleton variant="circular" className="h-10 w-10 shrink-0" /><Skeleton variant="text" className="w-2/3" /></div>
                        </div>
                     ) : (
                        <div className="space-y-5">
                           <div className="flex justify-between items-center group cursor-pointer p-2 -mx-2 rounded-[var(--aptly-radius-sm)] hover:bg-[var(--aptly-bg)] transition-colors">
                              <div className="flex items-center gap-3">
                                 <Avatar fallback="MI" size="md" />
                                 <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Mark Iles</span>
                                    <span className="text-xs text-[var(--aptly-text-muted)]">admin@example.com</span>
                                 </div>
                              </div>
                              <Badge variant="primary" appearance="soft" className="scale-90">Admin</Badge>
                           </div>
                           
                           <div className="flex justify-between items-center group cursor-pointer p-2 -mx-2 rounded-[var(--aptly-radius-sm)] hover:bg-[var(--aptly-bg)] transition-colors">
                              <div className="flex items-center gap-3">
                                 <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="md" />
                                 <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Sarah Jenkins</span>
                                    <span className="text-xs text-[var(--aptly-text-muted)]">sarah.j@acme.com</span>
                                 </div>
                              </div>
                              <Badge variant="neutral" appearance="soft" className="scale-90">Viewer</Badge>
                           </div>

                           <div className="flex justify-between items-center group cursor-pointer p-2 -mx-2 rounded-[var(--aptly-radius-sm)] hover:bg-[var(--aptly-bg)] transition-colors opacity-75">
                              <div className="flex items-center gap-3">
                                 <Avatar fallback="BW" size="md" />
                                 <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Bruce Wayne</span>
                                    <span className="text-xs text-[var(--aptly-text-muted)]">Pending invite</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     )}
                     
                     <Button variant="outline" className="w-full text-xs" size="sm">Invite new user</Button>
                  </ContentCard>

               </div>

            </div>

          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
