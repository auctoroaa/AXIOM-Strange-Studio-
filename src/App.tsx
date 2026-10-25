import { useEffect, useState, type ReactNode } from "react";
import { loadOiosWorkflows, type OiosApiState } from "./api/oios-client";
import {
  Activity, AlertTriangle, ArrowDownRight, ArrowRight, ArrowUpRight,
  BookOpen, Box, BrainCircuit, CheckCircle2, ChevronDown, CircleDot,
  Clock3, Cpu, GitBranch, Layers3, Menu, Orbit,
  PanelRight, Radio, Search, ShieldCheck, Sparkles, Workflow, X,
} from "lucide-react";
import { demoEvents, demoTruth, demoWorkflow, type TruthKind } from "./domain/demo-state";

const navItems = [
  { label: "Observatory", icon: Orbit },
  { label: "Agent Mind", icon: BrainCircuit },
  { label: "Memory City", icon: BookOpen },
  { label: "Workshop", icon: Workflow },
  { label: "Transparent Machine", icon: Cpu },
  { label: "Delivery Harbor", icon: Box },
];

const truthTone: Record<TruthKind, string> = {
  Fact: "fact", Assumption: "assumption", Prediction: "prediction", Simulation: "simulation",
};

function App() {
  const [activeNav, setActiveNav] = useState("Observatory");
  const [showInspector, setShowInspector] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(demoEvents[0].id);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [runtime, setRuntime] = useState<OiosApiState>({ connected: false, workflows: [], message: "Checking OIOS API connection…" });

  useEffect(() => {
    let active = true;
    void loadOiosWorkflows().then((state) => { if (active) setRuntime(state); });
    return () => { active = false; };
  }, []);
  const selected = demoEvents.find((event) => event.id === selectedEvent) ?? demoEvents[0];

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileNav ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><Orbit size={22} strokeWidth={1.7} /></div>
          <div><strong>STRANGE STUDIO</strong><span>OBSERVABLE INTELLIGENCE</span></div>
          <button className="icon-button mobile-close" aria-label="Close navigation" onClick={() => setMobileNav(false)}><X size={18} /></button>
        </div>
        <div className="workspace-label">WORKSPACE <ChevronDown size={13} /></div>
        <div className="workspace-card"><div className="workspace-avatar">S</div><div><strong>Strange Studio</strong><span>Local environment</span></div><CircleDot size={13} className="muted-icon" /></div>
        <div className="nav-caption">INTELLIGENCE SYSTEM</div>
        <nav aria-label="Main navigation">
          {navItems.map(({ label, icon: Icon }) => (
            <button key={label} className={`nav-item ${activeNav === label ? "nav-active" : ""}`} onClick={() => { setActiveNav(label); setMobileNav(false); }}>
              <Icon size={17} strokeWidth={1.8} /><span>{label}</span>{label === "Observatory" && <span className="nav-live-dot" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-rule" />
          <div className="system-label"><span className="status-dot" /> DEMO ENVIRONMENT</div>
          <p>Local fixture data. No live agents or external integrations connected.</p>
          <button className="profile-row" onClick={() => setShowInspector(true)}><div className="profile-avatar">O</div><span><strong>Operator</strong><small>Workspace inspector</small></span><PanelRight size={15} /></button>
        </div>
      </aside>

      {mobileNav && <button className="mobile-scrim" aria-label="Close navigation overlay" onClick={() => setMobileNav(false)} />}

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumbs"><button className="mobile-menu icon-button" aria-label="Open navigation" onClick={() => setMobileNav(true)}><Menu size={19} /></button><span>Workspace</span><span className="crumb-slash">/</span><strong>{activeNav}</strong></div>
          <div className="top-actions">
            <span className="environment-pill"><span /> SIMULATION</span>
            <button className="icon-button search-trigger" aria-label="Search" onClick={() => setSearchOpen((v) => !v)}><Search size={17} /></button>
            <button className="help-button" onClick={() => setShowInspector(true)}>Inspect system <ArrowUpRight size={14} /></button>
          </div>
        </header>

        {searchOpen && <div className="search-panel"><Search size={17} /><input autoFocus placeholder="Search events, components, evidence…" aria-label="Search system" /><button className="icon-button" aria-label="Close search" onClick={() => setSearchOpen(false)}><X size={16} /></button></div>}

        <div className="page-content">
          <section className="page-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> SYSTEM OVERVIEW <span className="eyebrow-divider">/</span> 25 OCT 2026</div><h1>Observatory<span className="heading-period">.</span></h1><p className="page-subtitle">See what the system knows, what it is doing, and what happens next.</p></div>
            <button className="secondary-button" onClick={() => setShowInspector(true)}><PanelRight size={15} /> Open inspector</button>
          </section>

          <section className="demo-notice" aria-label="Prototype status">
            <div className="notice-icon"><AlertTriangle size={16} /></div><div><strong>Prototype environment</strong><span>All activity shown is local demonstration data. Live providers, agents, and infrastructure are not connected.</span></div><span className="notice-tag">NOT LIVE</span>
          </section>

          <section className={`runtime-connection ${runtime.connected ? "runtime-connected" : "runtime-offline"}`} aria-live="polite" aria-label="OIOS runtime connection">
            <div className="runtime-status-dot" />
            <div className="runtime-copy"><strong>{runtime.connected ? "OIOS runtime connected" : "OIOS runtime not connected"}</strong><span>{runtime.message}</span></div>
            <div className="runtime-count"><strong>{runtime.workflows.length.toString().padStart(2, "0")}</strong><span>API workflows</span></div>
          </section>

          <section className="metrics-grid" aria-label="System summary">
            <Metric label="Active workflows" value="01" note="1 local fixture" icon={<Workflow size={17} />} trend="In demonstration" />
            <Metric label="Observable events" value="04" note="Recorded fixture events" icon={<Activity size={17} />} trend="Local history" />
            <Metric label="Evidence records" value="04" note="Across 4 truth classes" icon={<ShieldCheck size={17} />} trend="Illustrative" />
            <Metric label="Live connections" value="00" note="No providers connected" icon={<Radio size={17} />} trend="Not configured" />
          </section>

          <div className="section-heading"><div><span className="section-kicker">01 / EXECUTION</span><h2>Intelligence railway</h2></div><span className="section-meta"><span className="small-live-dot" /> LOCAL WORKFLOW</span></div>
          <section className="railway-card">
            <div className="railway-top"><div><div className="card-eyebrow">WORKFLOW TRACE <span className="trace-id">WF-DEMO-001</span></div><h3>Build a website</h3><p>Illustrative request lifecycle from intake to verified delivery.</p></div><button className="text-button" onClick={() => setShowInspector(true)}>View trace <ArrowRight size={14} /></button></div>
            <div className="railway-track">
              {demoWorkflow.map((step, i) => <div className={`rail-stop ${step.status.toLowerCase()}`} key={step.label}>
                <div className="rail-node">{step.status === "Complete" ? <CheckCircle2 size={17} /> : step.status === "Working" ? <span className="node-pulse" /> : <span className="node-inner" />}</div>
                {i < demoWorkflow.length - 1 && <div className={`rail-line ${step.status === "Complete" ? "line-complete" : ""}`} />}
                <span className="rail-label">{step.label}</span><span className="rail-status">{step.status === "Working" ? "SIMULATED" : step.status.toUpperCase()}</span>
              </div>)}
            </div>
            <div className="railway-foot"><span><span className="foot-dot dot-green" /> Completed stage</span><span><span className="foot-dot dot-amber" /> Illustrative active state</span><span><span className="foot-dot dot-muted" /> Not yet reached</span><span className="foot-end">Delivery remains gated by verification.</span></div>
          </section>

          <div className="content-grid">
            <section className="panel activity-panel">
              <div className="panel-heading"><div><span className="section-kicker">02 / EVENT STREAM</span><h2>Recent activity</h2></div><button className="icon-button" aria-label="Inspect event stream" onClick={() => setShowInspector(true)}><ArrowUpRight size={16} /></button></div>
              <div className="event-list">{demoEvents.map((event) => <button className={`event-row ${selectedEvent === event.id ? "event-selected" : ""}`} key={event.id} onClick={() => { setSelectedEvent(event.id); setShowInspector(true); }}>
                <span className={`event-marker marker-${event.status}`}>{event.status === "verified" ? <CheckCircle2 size={14} /> : event.status === "warning" ? <AlertTriangle size={14} /> : <CircleDot size={14} />}</span>
                <span className="event-copy"><strong>{event.title}</strong><small>{event.detail}</small></span><span className="event-time">{event.time}</span><ArrowUpRight size={13} className="event-arrow" />
              </button>)}</div>
              <div className="panel-footer"><span><Clock3 size={13} /> Fixture timestamps</span><span>4 events recorded</span></div>
            </section>

            <section className="panel truth-panel">
              <div className="panel-heading"><div><span className="section-kicker">03 / EVIDENCE & CERTAINTY</span><h2>Truth system</h2></div><span className="tiny-icon"><GitBranch size={16} /></span></div>
              <p className="panel-intro">Separate observed facts from interpretation and simulated state.</p>
              <div className="truth-list">{demoTruth.map((record) => <div className="truth-row" key={record.kind}><span className={`truth-badge ${truthTone[record.kind]}`}>{record.kind}</span><div><strong>{record.title}</strong><p>{record.detail}</p></div></div>)}</div>
              <div className="panel-footer"><span><ShieldCheck size={13} /> Provenance-aware by design</span><button className="footer-link" onClick={() => setShowInspector(true)}>Inspect <ArrowRight size={12} /></button></div>
            </section>
          </div>

          <div className="section-heading district-heading"><div><span className="section-kicker">04 / SYSTEM TOPOLOGY</span><h2>Observable districts</h2></div><span className="section-meta">THREE SYNCHRONIZED VIEWS</span></div>
          <section className="district-grid">
            <District icon={<BrainCircuit size={18} />} number="01" title="Agent Mind" subtitle="Memory · Planning · Verification" description="A transparent view of goals, decisions, retrieval, and tool selection." state="ARCHITECTURE VIEW" onClick={() => setActiveNav("Agent Mind")} />
            <District icon={<BookOpen size={18} />} number="02" title="Memory City" subtitle="Library · Archive · Knowledge routes" description="A navigable knowledge landscape grounded in source records and relationships." state="ARCHITECTURE VIEW" onClick={() => setActiveNav("Memory City")} />
            <District icon={<Layers3 size={18} />} number="03" title="Transparent Machine" subtitle="Compute · Models · APIs" description="An inspectable infrastructure map with unknown and unavailable states preserved." state="ARCHITECTURE VIEW" onClick={() => setActiveNav("Transparent Machine")} />
          </section>

          <footer className="page-footer"><div className="footer-brand"><Orbit size={15} /> STRANGE STUDIO <span>·</span> OIOS</div><span>SEE. THINK. BUILD.</span><span>Architecture prototype · v0.1.0</span></footer>
        </div>
      </main>

      {showInspector && <div className="inspector-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setShowInspector(false); }}>
        <aside className="inspector" aria-label="System inspector">
          <div className="inspector-header"><div><span className="section-kicker">INSPECTION MODE</span><h2>System inspector</h2></div><button className="icon-button" aria-label="Close inspector" onClick={() => setShowInspector(false)}><X size={18} /></button></div>
          <div className="inspector-warning"><AlertTriangle size={16} /><span>Demo data only. This panel does not inspect a live runtime.</span></div>
          <div className="inspector-section"><span className="inspector-label">SELECTED EVENT</span><h3>{selected.title}</h3><p>{selected.detail}</p></div>
          <div className="inspector-section"><span className="inspector-label">EVENT METADATA</span><InspectorRow label="Event ID" value={selected.id} /><InspectorRow label="Timestamp" value={selected.time} /><InspectorRow label="Source" value="local-demo-fixture" /><InspectorRow label="Environment" value="simulation" /><InspectorRow label="External effects" value="none" /></div>
          <div className="inspector-section"><span className="inspector-label">SYSTEM CONTRACT</span><div className="contract-row"><CheckCircle2 size={15} /><span>Simulation status is disclosed</span></div><div className="contract-row"><CheckCircle2 size={15} /><span>Truth classes remain distinct</span></div><div className="contract-row pending-contract"><Clock3 size={15} /><span>Live event ingestion not implemented</span></div><div className="contract-row pending-contract"><Clock3 size={15} /><span>Persistent event history not implemented</span></div></div>
          <button className="secondary-button inspector-close" onClick={() => setShowInspector(false)}>Close inspector</button>
        </aside>
      </div>}
    </div>
  );
}

function Metric({ label, value, note, icon, trend }: { label: string; value: string; note: string; icon: ReactNode; trend: string }) {
  return <article className="metric-card"><div className="metric-top"><span>{label}</span><span className="metric-icon">{icon}</span></div><div className="metric-value">{value}</div><div className="metric-bottom"><span>{note}</span><span className="metric-trend">{trend}</span></div></article>;
}

function District({ icon, number, title, subtitle, description, state, onClick }: { icon: React.ReactNode; number: string; title: string; subtitle: string; description: string; state: string; onClick: () => void }) {
  return <button className="district-card" onClick={onClick}><div className="district-top"><span className="district-icon">{icon}</span><span className="district-number">{number}</span></div><h3>{title}</h3><span className="district-subtitle">{subtitle}</span><p>{description}</p><div className="district-bottom"><span><Sparkles size={12} /> {state}</span><ArrowDownRight size={16} /></div></button>;
}

function InspectorRow({ label, value }: { label: string; value: string }) {
  return <div className="inspector-row"><span>{label}</span><code>{value}</code></div>;
}

export default App;
