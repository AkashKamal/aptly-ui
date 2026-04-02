import { useState, useEffect } from 'react';
import { 
  ThemeProvider, Button, ContentCard, TextInput, Badge, Avatar, Switch, 
  Sidebar, SidebarItem, Header, SearchBar, Profile,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter, 
  DataTable, ProgressBar, Slider, Tooltip 
} from 'aptly-ui';
import { 
  LayoutDashboard, Users, Download, Menu, 
  ArrowUpRight, Activity, Shield, TrendingUp, 
  CreditCard, Zap, Globe, HardDrive
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

// --- MOCK DATA ---
const revenueData = [
  { month: 'Jan', value: 45000 },
  { month: 'Feb', value: 52000 },
  { month: 'Mar', value: 48000 },
  { month: 'Apr', value: 61000 },
  { month: 'May', value: 55000 },
  { month: 'Jun', value: 67000 },
];

const customerData = [
  { id: 'C-1024', name: 'Stark Industries', status: 'Enterprise', MRR: '$12,400', usage: 88 },
  { id: 'C-1025', name: 'Wayne Enterprises', status: 'Scale', MRR: '$8,200', usage: 62 },
  { id: 'C-1026', name: 'OsCorp', status: 'Trial', MRR: '$0', usage: 15 },
];

const themeConfig = {
  "primary": "#8b5cf6",
  "surface": "#ffffff",
  "bg": "#f5f3ff",
  "text": "#1e1b4b",
  "radius": "24px",
  "fontFamily": "Outfit",
  "density": "compact",
  "cardStyle": "solid",
  "focusRingStyle": "subtle",
  "animationSpeed": "fluid"
};

export default function App() {
  const [activeScenario, setActiveScenario] = useState<'overview' | 'customers' | 'billing'>('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(78), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider config={themeConfig as any}>
      <div className="flex h-screen w-full overflow-hidden bg-[var(--aptly-bg)]">
        
        {/* APP SIDEBAR */}
        <Sidebar collapsed={sidebarCollapsed}>
          <div className="flex items-center overflow-hidden border-b border-[var(--aptly-border-light)]" style={{ height: 'var(--aptly-header-h)', padding: '0 var(--aptly-pad-lg)', gap: 'var(--aptly-pad-md)' }}>
            <div className="rounded-xl bg-[var(--aptly-primary)] flex items-center justify-center shadow-lg shadow-[var(--aptly-primary)]/20 shrink-0" style={{ width: 'calc(2rem * var(--aptly-scale))', height: 'calc(2rem * var(--aptly-scale))' }}>
               <Zap size={18} className="text-white" style={{ transform: 'scale(var(--aptly-font-scale))' }} />
            </div>
            {!sidebarCollapsed && <span className="font-bold tracking-tighter" style={{ fontSize: 'calc(1.125rem * var(--aptly-font-scale))' }}>Voltify</span>}
          </div>
          
          <div className="flex-1 py-4 space-y-1">
            <SidebarItem active={activeScenario === 'overview'} icon={<LayoutDashboard size={20} />} collapsed={sidebarCollapsed} onClick={() => setActiveScenario('overview')}>Overview</SidebarItem>
            <SidebarItem active={activeScenario === 'customers'} icon={<Users size={20} />} collapsed={sidebarCollapsed} onClick={() => setActiveScenario('customers')}>Customers</SidebarItem>
            <SidebarItem active={activeScenario === 'billing'} icon={<CreditCard size={20} />} collapsed={sidebarCollapsed} onClick={() => setActiveScenario('billing')}>Billing</SidebarItem>
            <SidebarItem icon={<Globe size={20} />} collapsed={sidebarCollapsed}>Infrastructure</SidebarItem>
            <SidebarItem icon={<Shield size={20} />} collapsed={sidebarCollapsed}>Security</SidebarItem>
          </div>

          <div className="border-t border-[var(--aptly-border-light)]" style={{ padding: 'var(--aptly-pad-md)' }}>
             <Button variant="ghost" size="sm" fullWidth onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="justify-start">
               <Menu size={18} className="mr-3" />
               {!sidebarCollapsed && "Toggle Sidebar"}
             </Button>
          </div>
        </Sidebar>

        {/* APP CORE VIEW */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          
          <Header className="bg-[var(--aptly-surface)]/80 backdrop-blur-md">
            <div className="flex-1 flex items-center min-w-0">
               <SearchBar placeholder="Jump to command..." shortcut="⌘J" inputSize="md" variant="solid" className="max-w-md" />
            </div>
            <div className="flex items-center shrink-0" style={{ gap: 'var(--aptly-pad-lg)' }}>
               <Tooltip content="Infrastructure Status" position="bottom">
                  <div className="flex items-center" style={{ gap: 'var(--aptly-pad-xs)' }}>
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="font-bold uppercase tracking-widest" style={{ fontSize: 'calc(10px * var(--aptly-font-scale))' }}>Healthy</span>
                  </div>
               </Tooltip>
               <Profile name="Marcus Stark" email="marcus@voltify.io" />
            </div>
          </Header>

          <main className="flex-1 overflow-y-auto" style={{ padding: 'var(--aptly-pad-xl)' }}>
            
            <div className="max-w-6xl mx-auto" style={{ gap: 'var(--aptly-pad-xl)', display: 'flex', flexDirection: 'column' }}>
               {/* OVERVIEW SCENARIO */}
               {activeScenario === 'overview' && (
               <div style={{ gap: 'var(--aptly-pad-xl)', display: 'flex', flexDirection: 'column' }} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="flex items-end justify-between">
                     <div>
                        <h1 className="font-bold tracking-tight" style={{ fontSize: 'calc(1.875rem * var(--aptly-font-scale))' }}>Executive Dashboard</h1>
                        <p className="text-[var(--aptly-text-secondary)]" style={{ fontSize: 'calc(0.875rem * var(--aptly-font-scale))' }}>Real-time revenue metrics.</p>
                     </div>
                     <Button variant="solid" onClick={() => setIsModalOpen(true)}>
                        <Download size={18} className="mr-2" />
                        Generate Report
                     </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--aptly-pad-lg)' }}>
                     <ContentCard elevation={1} interactive className="flex flex-col" style={{ gap: 'var(--aptly-pad-md)' }}>
                        <div className="flex justify-between items-start">
                           <div className="p-2 rounded-lg bg-[var(--aptly-primary)]/10 text-[var(--aptly-primary)]"><TrendingUp size={20} /></div>
                           <Badge variant="success" appearance="soft">+18.2%</Badge>
                        </div>
                        <div>
                           <p className="font-bold text-[var(--aptly-text-muted)] uppercase tracking-widest" style={{ fontSize: 'calc(10px * var(--aptly-font-scale))' }}>Active MRR</p>
                           <h2 className="font-bold" style={{ fontSize: 'calc(1.5rem * var(--aptly-font-scale))' }}>$1.42M</h2>
                        </div>
                     </ContentCard>
                     <ContentCard elevation={1} interactive className="flex flex-col" style={{ gap: 'var(--aptly-pad-md)' }}>
                        <div className="flex justify-between items-start">
                           <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500"><Activity size={20} /></div>
                           <Badge variant="warning" appearance="soft">Stable</Badge>
                        </div>
                        <div>
                           <p className="font-bold text-[var(--aptly-text-muted)] uppercase tracking-widest" style={{ fontSize: 'calc(10px * var(--aptly-font-scale))' }}>Uptime Score</p>
                           <h2 className="font-bold" style={{ fontSize: 'calc(1.5rem * var(--aptly-font-scale))' }}>99.98%</h2>
                        </div>
                     </ContentCard>
                     <ContentCard elevation={1} interactive className="flex flex-col" style={{ gap: 'var(--aptly-pad-md)' }}>
                        <div className="flex justify-between items-start">
                           <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500"><HardDrive size={20} /></div>
                           <Badge variant="primary" appearance="soft">78% Full</Badge>
                        </div>
                        <div>
                           <p className="font-bold text-[var(--aptly-text-muted)] uppercase tracking-widest" style={{ fontSize: 'calc(10px * var(--aptly-font-scale))' }}>Compute Load</p>
                           <h2 className="font-bold" style={{ fontSize: 'calc(1.5rem * var(--aptly-font-scale))' }}>4.2 PB</h2>
                        </div>
                     </ContentCard>
                  </div>

                  <ContentCard elevation={1} style={{ padding: '0' }}>
                     <div style={{ padding: 'var(--aptly-pad-lg)', borderBottom: '1px solid var(--aptly-border-light)' }}>
                        <h3 className="font-bold" style={{ fontSize: 'calc(1rem * var(--aptly-font-scale))' }}>Revenue Projection</h3>
                     </div>
                     <div style={{ height: 'calc(300px * var(--aptly-scale))', width: '100%', padding: 'var(--aptly-pad-lg)' }}>
                        <ResponsiveContainer width="100%" height="100%">
                           <AreaChart data={revenueData}>
                              <defs>
                                 <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--aptly-primary)" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="var(--aptly-primary)" stopOpacity={0}/>
                                 </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--aptly-border-light)" />
                              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: 'var(--aptly-text-muted)', fontSize: 10}} />
                              <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--aptly-text-muted)', fontSize: 10}} />
                              <RechartsTooltip 
                                 contentStyle={{ 
                                    backgroundColor: 'var(--aptly-surface)', 
                                    borderColor: 'var(--aptly-border)', 
                                    borderRadius: 'var(--aptly-radius)',
                                    boxShadow: 'var(--aptly-shadow-md)',
                                    fontSize: '12px'
                                 }} 
                              />
                              <Area type="monotone" dataKey="value" stroke="var(--aptly-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                           </AreaChart>
                        </ResponsiveContainer>
                     </div>
                  </ContentCard>
               </div>
               )}

               {/* CUSTOMERS SCENARIO */}
               {activeScenario === 'customers' && (
               <div style={{ gap: 'var(--aptly-pad-lg)', display: 'flex', flexDirection: 'column' }} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="flex items-center justify-between">
                     <h1 className="font-bold tracking-tight" style={{ fontSize: 'calc(1.875rem * var(--aptly-font-scale))' }}>Customer Portfolio</h1>
                     <div className="flex gap-2">
                        <Button variant="outline">Filters</Button>
                        <Button variant="solid">Export Data</Button>
                     </div>
                  </div>

                  <DataTable 
                     columns={[
                        { key: 'name', header: 'Client', render: (row: any) => (
                           <div className="flex items-center" style={{ gap: 'var(--aptly-pad-sm)' }}>
                              <Avatar fallback={row.name[0]} size="sm" />
                              <span className="font-bold">{row.name}</span>
                           </div>
                        )},
                        { key: 'status', header: 'Tier', render: (row: any) => (
                           <Badge variant={row.status === 'Enterprise' ? 'primary' : row.status === 'Scale' ? 'success' : 'neutral'} appearance="soft">
                              {row.status}
                           </Badge>
                        )},
                        { key: 'MRR', header: 'Monthly Revenue' },
                        { key: 'usage', header: 'Platform Load', render: (row: any) => (
                           <div className="flex items-center" style={{ gap: 'var(--aptly-pad-md)', width: '10rem' }}>
                              <ProgressBar value={row.usage} size="sm" />
                              <span className="font-bold" style={{ fontSize: '10px' }}>{row.usage}%</span>
                           </div>
                        )},
                        { key: 'actions', header: '', render: () => <Button variant="ghost" size="sm" shape="square"><ArrowUpRight size={16} /></Button> }
                     ]}
                     data={customerData}
                     striped
                  />
               </div>
               )}

               {/* BILLING SCENARIO */}
               {activeScenario === 'billing' && (
               <div className="max-w-4xl" style={{ gap: 'var(--aptly-pad-lg)', display: 'flex', flexDirection: 'column' }}>
                  <h1 className="font-bold tracking-tight" style={{ fontSize: 'calc(1.875rem * var(--aptly-font-scale))' }}>Subscription</h1>
                  
                  <ContentCard elevation={2}>
                     <Tabs defaultValue="tier" variant="underline">
                        <TabsList style={{ marginBottom: 'var(--aptly-pad-lg)' }}>
                           <TabsTrigger value="tier">Subscription Tier</TabsTrigger>
                           <TabsTrigger value="methods">Payment Methods</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="tier">
                           <div style={{ gap: 'var(--aptly-pad-lg)', display: 'flex', flexDirection: 'column' }}>
                              <div className="flex items-center justify-between p-6 rounded-3xl bg-[var(--aptly-primary)] text-white shadow-xl shadow-[var(--aptly-primary)]/20">
                                 <div>
                                    <p className="font-bold uppercase tracking-[0.2em] opacity-80" style={{ fontSize: '10px' }}>Current Plan</p>
                                    <h2 className="font-bold" style={{ fontSize: '1.5rem', marginTop: '4px' }}>Enterprise Turbo</h2>
                                 </div>
                                 <Badge className="bg-white/20 border-white/20 text-white">ACTIVE</Badge>
                              </div>
                              
                              <div className="grid grid-cols-2" style={{ gap: 'var(--aptly-pad-xl)' }}>
                                 <div className="flex flex-col" style={{ gap: 'var(--aptly-pad-md)' }}>
                                    <h4 className="font-bold">Resource Allocation</h4>
                                    <div className="flex flex-col" style={{ gap: 'var(--aptly-pad-xs)' }}>
                                       <div className="flex justify-between font-bold" style={{ fontSize: '10px' }}>
                                          <span>GPU Reserved</span>
                                          <span>{progress}%</span>
                                       </div>
                                       <Slider value={progress} />
                                    </div>
                                    <Switch defaultChecked label="Auto-scale nodes" />
                                 </div>
                                 <div className="flex flex-col" style={{ gap: 'var(--aptly-pad-md)' }}>
                                    <TextInput label="Workspace Alias" placeholder="voltify-primary" />
                                    <TextInput label="Billing Contact" defaultValue="finance@voltify.io" />
                                 </div>
                              </div>
                              
                              <div className="border-t border-[var(--aptly-border-light)] flex justify-end gap-3" style={{ paddingTop: 'var(--aptly-pad-lg)' }}>
                                 <Button variant="ghost">Cancel</Button>
                                 <Button variant="solid" className="px-10">Update Plan</Button>
                              </div>
                           </div>
                        </TabsContent>
                     </Tabs>
                  </ContentCard>
               </div>
               )}
            </div>

          </main>
        </div>

        {/* MODAL OVERLAY */}
        <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
           <ModalContent variant="standard">
              <ModalHeader>
                 <ModalTitle>Intelligence Report</ModalTitle>
                 <ModalDescription>
                    Gathering hardware acceleration metrics logs for all active clusters.
                 </ModalDescription>
              </ModalHeader>
              <div className="flex flex-col" style={{ gap: 'var(--aptly-pad-lg)' }}>
                 <div className="flex flex-col" style={{ gap: 'var(--aptly-pad-xs)' }}>
                    <div className="flex justify-between font-bold" style={{ fontSize: '10px' }}>
                       <span>Synthesizing Logs...</span>
                       <span>92%</span>
                    </div>
                    <ProgressBar value={92} size="sm" />
                 </div>
                 <ModalFooter style={{ marginTop: 'var(--aptly-pad-md)' }}>
                    <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Abort</Button>
                    <Button variant="solid" onClick={() => setIsModalOpen(false)}>Download PDF</Button>
                 </ModalFooter>
              </div>
           </ModalContent>
        </Modal>

      </div>
    </ThemeProvider>
  );
}
