import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { Wind, Shield, Cpu, TrendingUp, Target, Users, DollarSign, Zap, Eye, Radio, GitBranch, Award, ChevronRight, ArrowRight, Menu, X, Check, AlertTriangle, Layers, Activity, Globe, Flame, Factory, Building2, TreePine, Send, Play, ChevronDown, Sparkles, Brain } from 'lucide-react';

const WindParticles = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 25 + 15,
        speed: Math.random() * 1.5 + 0.5,
        angle: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.25 + 0.1
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.length * Math.cos(p.angle), p.y + p.length * Math.sin(p.angle));
        ctx.strokeStyle = `rgba(6, 182, 212, ${p.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        const endX = p.x + p.length * Math.cos(p.angle);
        const endY = p.y + p.length * Math.sin(p.angle);
        ctx.beginPath();
        ctx.arc(endX, endY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity + 0.15})`;
        ctx.fill();
        p.x += p.speed * Math.cos(p.angle);
        p.y += p.speed * Math.sin(p.angle) + Math.sin(Date.now() / 2000 + p.x / 100) * 0.2;
        if (p.x > canvas.width + 40) { p.x = -40; p.y = Math.random() * canvas.height; }
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.6 }} />;
};

const AnimatedCounter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start * 10) / 10); }
    }, 25);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count}{suffix}</span>;
};

const predictionData = [
  { time: '0.0s', predicted: 100, observed: 100 },
  { time: '1.0s', predicted: 115, observed: 108 },
  { time: '2.0s', predicted: 134, observed: 125 },
  { time: '3.0s', predicted: 156, observed: 148 },
  { time: '4.0s', predicted: 181, observed: 175 },
  { time: '5.0s', predicted: 198, observed: 192 },
  { time: '6.0s', predicted: 215, observed: 210 },
  { time: '7.5s', predicted: 222, observed: 218 },
];

const marketData = [
  { year: '2024', tam: 4.2, sam: 1.8, som: 0.12 },
  { year: '2025', tam: 4.8, sam: 2.1, som: 0.35 },
  { year: '2026', tam: 5.5, sam: 2.5, som: 0.8 },
  { year: '2027', tam: 6.3, sam: 3.0, som: 1.5 },
  { year: '2028', tam: 7.2, sam: 3.6, som: 2.4 },
];

export default function EnviroScanWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', interest: '', message: '' });
  
  const navItems = [
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'technology', label: 'Technology' },
    { id: 'traction', label: 'Traction' },
    { id: 'market', label: 'Market' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];
  
  const faqs = [
    { q: 'How is this different from camera AI?', a: 'Camera AI systems detect fires after visual confirmation. EnviroScan uses wind-field sensing and physics-informed AI to predict spread before visual cues appear, working even in smoke, fog, or darkness.' },
    { q: 'Why wind data?', a: 'Wind is the dominant driver of rapid wildfire spread. By measuring real-time local wind vectors, we capture the causal mechanism of propagation rather than just symptoms.' },
    { q: 'What does physics-informed mean?', a: 'Our AI embeds Navier-Stokes equations directly into learning, ensuring predictions obey conservation laws. This prevents physically impossible outputs common in pure ML models.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 15px rgba(6,182,212,0.3); } 50% { box-shadow: 0 0 30px rgba(6,182,212,0.5); } }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulseGlow 2.5s ease-in-out infinite; }
        .glass { background: rgba(15,23,42,0.75); backdrop-filter: blur(16px); border: 1px solid rgba(6,182,212,0.1); }
        .gradient-text { background: linear-gradient(135deg,#06b6d4,#22d3ee,#67e8f9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-gradient { background: radial-gradient(ellipse at 30% 20%,rgba(6,182,212,0.12) 0%,transparent 50%), radial-gradient(ellipse at 70% 80%,rgba(251,146,60,0.08) 0%,transparent 50%), linear-gradient(180deg,#0f172a 0%,#020617 100%); }
        .btn-primary { background: linear-gradient(135deg,#0891b2,#06b6d4); box-shadow: 0 4px 16px rgba(6,182,212,0.35); transition: all 0.3s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(6,182,212,0.45); }
        .card-hover { transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px -12px rgba(6,182,212,0.2); }
        .grid-pattern { background-image: linear-gradient(rgba(6,182,212,0.025) 1px,transparent 1px), linear-gradient(90deg,rgba(6,182,212,0.025) 1px,transparent 1px); background-size: 50px 50px; }
      `}</style>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center animate-pulse-glow">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">EnviroScan<span className="text-cyan-400">Dynamics</span></span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map(item => (
                <a key={item.id} href={`#${item.id}`} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">{item.label}</a>
              ))}
              <button className="btn-primary px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2">
                Request Pilot <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-slate-800 px-4 py-3 space-y-3">
            {navItems.map(item => (
              <a key={item.id} href={`#${item.id}`} className="block text-slate-300 hover:text-cyan-400 text-sm" onClick={() => setMobileMenuOpen(false)}>{item.label}</a>
            ))}
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        <WindParticles />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Conrad Challenge 2025 Innovation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Capture the Unseen</span><br />
                <span className="text-white">for Predictive</span><br />
                <span className="text-white">Ecosystem Protection</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                Multimodal environmental monitoring AI that combines real-time wind-field sensing with physics-informed neural networks to predict wildfire and pollutant spread <span className="text-cyan-400 font-semibold">before they escalate</span>.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
                  Request a Pilot <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#technology" className="px-6 py-3 rounded-xl font-semibold border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-900/50 transition-all flex items-center gap-2">
                  <Play className="w-4 h-4 text-cyan-400" /> View Technology
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                <div>
                  <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-bold text-lg">Predictive</span>
                  </div>
                  <p className="text-xs text-slate-500">Forward-looking forecasts</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                    <Eye className="w-4 h-4" />
                    <span className="font-bold text-lg">Vision-Free</span>
                  </div>
                  <p className="text-xs text-slate-500">Works under smoke & fog</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                    <Shield className="w-4 h-4" />
                    <span className="font-bold text-lg">Physics-AI</span>
                  </div>
                  <p className="text-xs text-slate-500">Navier-Stokes constrained</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/15 to-orange-500/15 rounded-2xl blur-2xl opacity-50 animate-float" />
              <div className="relative glass rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400 font-mono">LIVE PREDICTION</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Active
                  </span>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={predictionData}>
                    <defs>
                      <linearGradient id="predGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="time" stroke="#64748b" fontSize={10} />
                    <YAxis stroke="#64748b" fontSize={10} />
                    <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', fontSize: '12px' }} />
                    <Area type="monotone" dataKey="predicted" stroke="#06b6d4" fill="url(#predGrad)" strokeWidth={2} />
                    <Line type="monotone" dataKey="observed" stroke="#f97316" strokeWidth={2} dot={{ fill: '#f97316', r: 3 }} />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Predicted</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> Observed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-600" />
        </div>
      </section>
      
      {/* Problem Section */}
      <section id="problem" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Why Current Systems Fail</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Existing environmental monitoring relies on reactive detection — seeing the fire after it starts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Eye, title: 'Vision Dependent', desc: 'Cameras fail under smoke and fog', color: 'text-red-400', bg: 'bg-red-500/10' },
              { icon: AlertTriangle, title: 'Reactive Only', desc: 'Detection after visual confirmation', color: 'text-amber-400', bg: 'bg-amber-500/10' },
              { icon: Radio, title: 'Sparse Data', desc: 'Limited spatial coverage', color: 'text-orange-400', bg: 'bg-orange-500/10' },
              { icon: Brain, title: 'No Physics', desc: 'Impossible ML predictions', color: 'text-rose-400', bg: 'bg-rose-500/10' },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-5 card-hover">
                <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-3`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl p-6 md:p-8 border border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Flame className="w-12 h-12 text-amber-500 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">The Cost of Delayed Detection</h3>
                <p className="text-slate-400">
                  Delayed detection translates into <span className="text-amber-400 font-semibold">massive losses</span>. 
                  Climate change is intensifying wildfire frequency — the need for <span className="text-cyan-400 font-semibold">predictive tools</span> has never been greater.
                </p>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="text-4xl font-bold text-amber-400"><AnimatedCounter end={1} suffix="M+" /></div>
                <p className="text-xs text-slate-500 mt-1">acres burned annually</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section id="solution" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">The Solution</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Prediction, Not Detection</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              EnviroScan shifts environmental monitoring from reactive observation to proactive forecasting.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 md:p-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Sense', desc: 'Distributed wind sensor array', icon: Radio, color: '#22d3ee' },
                { step: '02', title: 'Fuse', desc: 'Multimodal data pipeline', icon: Layers, color: '#2dd4bf' },
                { step: '03', title: 'Predict', desc: 'Physics-informed AI', icon: Brain, color: '#34d399' },
                { step: '04', title: 'Alert', desc: 'Real-time forecasts', icon: Zap, color: '#fbbf24' },
              ].map((item, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-3" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <span className="font-mono text-xs text-slate-500">STEP {item.step}</span>
                  <h3 className="font-bold text-lg mt-0.5 mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                  {i < 3 && <ChevronRight className="hidden md:block absolute top-7 -right-2 w-4 h-4 text-slate-700" />}
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Diffusion', desc: 'Models substance spread through random molecular motion', icon: Activity },
              { title: 'Convection', desc: 'Captures wind-driven transport — the dominant spread factor', icon: Wind },
              { title: 'Conservation', desc: 'Ensures mass, momentum, and energy are preserved', icon: Shield },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-5 card-hover border border-cyan-500/10 hover:border-cyan-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-slate-400 text-sm">
            Unified under <span className="font-mono text-cyan-400 font-semibold">Navier-Stokes equations</span> — the governing laws of fluid dynamics
          </p>
        </div>
      </section>
      
      {/* Technology Section */}
      <section id="technology" className="py-24 bg-slate-900/50 relative">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">Technology</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">How It Works</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Custom hardware combined with physics-informed AI for predictive accuracy under sparse data.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Radio className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-bold text-xl">Wind Sensor Array</h3>
              </div>
              <div className="aspect-video bg-slate-800/50 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
                <div className="text-center p-6">
                  <div className="w-24 h-24 mx-auto rounded-full border-2 border-dashed border-cyan-500/30 flex items-center justify-center relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    {[0, 72, 144, 216, 288].map((deg, i) => (
                      <div key={i} className="absolute w-6 h-6 rounded-md bg-slate-700 border border-cyan-500/30 flex items-center justify-center"
                        style={{ transform: `rotate(${deg}deg) translateX(38px) rotate(-${deg}deg)` }}>
                        <Wind className="w-3 h-3 text-cyan-400" />
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-slate-400">5 radial sensors for 360° vector capture</p>
                </div>
              </div>
              <div className="space-y-2">
                {['Miniature fan-magnet assembly', 'Magnetic angle sensor', 'Low-power microcontroller', 'Wireless transmission', 'Lightweight deployment'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-bold text-xl">Physics-Informed Neural Network</h3>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 mb-5 font-mono text-sm">
                <div className="text-slate-500 text-xs mb-1">// Total Loss Function</div>
                <div className="text-cyan-400">
                  <span className="text-white">L</span><span className="text-slate-500">_total</span> = 
                  <span className="text-emerald-400"> L_data</span> + 
                  <span className="text-amber-400"> λ₁·L_physics</span> + 
                  <span className="text-rose-400"> λ₂·L_boundary</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Data Loss', desc: 'Minimizes error vs sensor observations', color: '#34d399' },
                  { label: 'Physics Loss', desc: 'Enforces Navier-Stokes equations', color: '#fbbf24' },
                  { label: 'Boundary Loss', desc: 'Maintains boundary constraints', color: '#fb7185' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5" style={{ background: item.color }} />
                    <div>
                      <span className="font-semibold text-sm">{item.label}</span>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <p className="text-xs text-cyan-300">
                  <strong>Key Advantage:</strong> Physics constraints ensure physically plausible predictions even with sparse sensor data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Traction Section */}
      <section id="traction" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">Traction</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Validated & Progressing</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From concept to integrated prototype with measurable performance metrics.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: 7.5, unit: 's', label: 'Prediction Horizon' },
              { value: 16, unit: '', label: 'Sensors Deployed' },
              { value: 121.6, unit: '%', label: 'Area Expansion' },
              { value: 34.6, unit: '%', label: 'MAPE (Improving)' },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-5 text-center card-hover">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                  <AnimatedCounter end={item.value} suffix={item.unit} />
                </div>
                <p className="font-medium mt-1 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl p-6 mb-12">
            <h3 className="font-bold text-lg mb-5 text-center">Product & Validation</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-800/50 rounded-xl p-4 flex flex-col">
                <h4 className="font-semibold text-sm mb-3 text-cyan-400">Product Hardware</h4>
                <div className="flex-1 flex items-center justify-center">
                  <img src="/product-1.jpg" alt="Product Hardware" className="w-full h-full object-contain rounded-lg" style={{maxHeight: '400px'}} />
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 flex flex-col">
                <h4 className="font-semibold text-sm mb-3 text-cyan-400">Sensor Array</h4>
                <div className="flex-1 flex items-center justify-center">
                  <img src="/product-2.jpg" alt="Sensor Array" className="w-full h-full object-contain rounded-lg" style={{maxHeight: '400px'}} />
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-sm mb-3 text-cyan-400 text-center">Demo Video</h4>
              <video src="/product-demo.mp4" className="w-full rounded-lg max-w-4xl mx-auto" controls autoPlay loop muted playsInline />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-4">
                <h4 className="font-semibold text-sm mb-3 text-cyan-400">Concentration Surface Animation</h4>
                <img src="/concentration_surface_animation.gif" alt="Concentration Surface Animation" className="w-full rounded-lg" />
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <h4 className="font-semibold text-sm mb-3 text-cyan-400">Water Physics Prediction</h4>
                <img src="/water-physics-prediction.gif" alt="Water Physics Prediction" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-5 text-center">Product Roadmap</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { phase: 'Phase 1', title: 'Pilot Deployment', timeline: '2025', items: ['1 high-risk region', 'Government partner', 'Performance validation'] },
                { phase: 'Phase 2', title: 'Multi-Site', timeline: '2026', items: ['3-5 regions', 'Refined economics', 'Sensor expansion'] },
                { phase: 'Phase 3', title: 'Platform Scale', timeline: '2027+', items: ['National deployment', 'New hazard types', 'International'] },
              ].map((item, i) => (
                <div key={i} className={`p-5 rounded-xl ${i === 0 ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-slate-800/30 border border-slate-700'}`}>
                  <span className="text-xs font-mono text-cyan-400">{item.phase}</span>
                  <h4 className="font-bold text-lg mt-0.5 mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 mb-3">{item.timeline}</p>
                  <ul className="space-y-1.5">
                    {item.items.map((li, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-slate-300">
                        <ChevronRight className="w-3 h-3 text-cyan-500" />{li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Market Section */}
      <section id="market" className="py-24 bg-slate-900/50 relative">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">Market</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Commercial Opportunity</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Multi-billion dollar market driven by climate change and regulatory pressure.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-5">Market Opportunity ($B)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="year" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} />
                  <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '6px', fontSize: '12px' }} />
                  <Bar dataKey="tam" name="TAM" fill="#0e7490" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="sam" name="SAM" fill="#06b6d4" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="som" name="SOM" fill="#22d3ee" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-3 text-xs">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-cyan-800" /> TAM</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-cyan-500" /> SAM</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-cyan-300" /> SOM</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Target Segments</h3>
              {[
                { icon: Building2, title: 'Government Agencies', desc: 'Wildfire management, EPA, emergency services', primary: true },
                { icon: Factory, title: 'Industrial Operators', desc: 'Chemical plants, refineries, emissions', primary: false },
                { icon: TreePine, title: 'Environmental Protection', desc: 'Air quality, conservation orgs', primary: false },
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-xl flex items-start gap-3 ${item.primary ? 'bg-cyan-500/10 border border-cyan-500/30' : 'glass'}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.primary ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                    <item.icon className={`w-5 h-5 ${item.primary ? 'text-cyan-400' : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                  {item.primary && <span className="ml-auto text-xs font-mono text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded">PRIMARY</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Cpu, title: 'Software License', price: '$25K–$60K', period: '/year', highlight: true },
              { icon: Radio, title: 'Hardware', price: '$180–$300', period: '/unit', highlight: false },
              { icon: Users, title: 'Services', price: 'Custom', period: 'support', highlight: false },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-6 text-center card-hover ${item.highlight ? 'bg-gradient-to-b from-cyan-500/15 to-transparent border border-cyan-500/30' : 'glass'}`}>
                {item.highlight && <span className="inline-block text-xs font-mono text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded-full mb-3">CORE REVENUE</span>}
                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 ${item.highlight ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                  <item.icon className={`w-6 h-6 ${item.highlight ? 'text-cyan-400' : 'text-slate-400'}`} />
                </div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <div className="text-2xl font-bold text-cyan-400">{item.price}</div>
                <p className="text-xs text-slate-500">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Mission-Driven Founders</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Formed around predicting and preventing California wildfire destruction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {[
              { name: 'Eileen Ruan', role: 'CEO', focus: 'Business & Strategy', skills: ['Market Analysis', 'Business Strategy', 'Partnerships'] },
              { name: 'Bingyi Wei', role: 'CTO', focus: 'Hardware & AI Systems', skills: ['PCB Design', 'Deep Learning', 'Physics-Informed ML'] },
            ].map((member, i) => (
              <div key={i} className="glass rounded-2xl p-6 card-hover">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-slate-800 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="font-bold text-xl mb-0.5">{member.name}</h3>
                <p className="text-cyan-400 font-medium text-sm mb-1">{member.role}</p>
                <p className="text-slate-400 text-sm mb-4">{member.focus}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto text-center">
            <Flame className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">
              Both team members are motivated by direct exposure to wildfire risks and commitment to translating technical innovation into real-world impact: <span className="text-cyan-400 font-semibold">"Capture the Unseen for predictive ecosystem protection."</span>
            </p>
          </div>
        </div>
      </section>
      
      {/* Funding Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">Funding</span>
            <h2 className="text-2xl font-bold mt-2">Investment Roadmap</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { round: 'Angel / Pre-Seed', amount: '$750K', milestone: 'Outdoor pilot with government partner', status: 'current' },
              { round: 'Series A', amount: '$3–5M', milestone: 'Multi-site deployment', status: 'planned' },
              { round: 'Series B', amount: 'Scale', milestone: 'National & international', status: 'planned' },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-5 ${item.status === 'current' ? 'bg-gradient-to-b from-cyan-500/15 to-transparent border-2 border-cyan-500/50' : 'glass border border-slate-700'}`}>
                {item.status === 'current' && <span className="text-xs font-mono text-cyan-400 mb-1 block">CURRENT RAISE</span>}
                <h3 className="font-bold mb-0.5">{item.round}</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{item.amount}</div>
                <p className="text-xs text-slate-400">{item.milestone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">FAQ</span>
            <h2 className="text-2xl font-bold mt-2">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-xl overflow-hidden">
                <button className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-slate-800/30 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                  <span className="font-semibold text-sm">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && (
                  <div className="px-5 pb-3.5 text-slate-400 text-sm">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Partner With Us</h2>
            <p className="text-lg text-slate-400">
              Seeking pilot partners in high-risk regions. Let's discuss how EnviroScan Dynamics can help.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 md:p-8">
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will be in touch soon.'); }}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input type="text" className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-sm"
                    placeholder="Your name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input type="email" className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-sm"
                    placeholder="you@org.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Organization</label>
                <input type="text" className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-sm"
                  placeholder="Your organization" value={formData.organization} onChange={(e) => setFormData({...formData, organization: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">I'm interested in...</label>
                <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-sm"
                  value={formData.interest} onChange={(e) => setFormData({...formData, interest: e.target.value})}>
                  <option value="">Select an option</option>
                  <option value="pilot">Pilot Deployment</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors resize-none text-sm"
                  rows={3} placeholder="Tell us about your use case..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
              </div>
              <button type="submit" className="w-full btn-primary py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                <Wind className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm">EnviroScan<span className="text-cyan-400">Dynamics</span></span>
            </div>
            <p className="text-xs text-slate-500">© 2025 EnviroScan Dynamics. Capture the Unseen for Predictive Ecosystem Protection.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
