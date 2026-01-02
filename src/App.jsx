import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  Terminal, Server, Database, Cpu, Globe, Mail, Github, Linkedin, ExternalLink,
  Code2, Layers, ChevronRight, Activity, Box, ShieldCheck, Zap, Coffee,
  CheckCircle2, Clock, Briefcase, Search, Rocket, HelpCircle, Quote
} from 'lucide-react';

// --- Theme & Data Constants ---
const COLORS = {
  bg: '#FFFFFF',
  surface: '#FAFAFA',
  border: '#E5E5E5',
  primary: '#000000',
  textPrimary: '#000000',
  textSecondary: '#404040',
  textTertiary: '#737373',
};

const PROJECTS = [
  {
    title: "FinTech Global Dashboard",
    description: "Enterprise-grade financial analytics platform processing real-time market data. Built for high concurrency and sub-millisecond latency.",
    tags: ["React", "Spring Boot", "Kafka", "Redis", "WebSockets"],
    github: "https://github.com/Shantanux0",
    demo: "#",
    featured: true
  },
  {
    title: "LuxeMarket Microservices",
    description: "Scalable e-commerce architecture decomposing monolithic logic into isolated services for inventory, payments, and user auth.",
    tags: ["Spring Cloud", "React", "Docker", "Kubernetes", "PostgreSQL"],
    github: "https://github.com/Shantanux0",
    demo: "#",
    featured: true
  },
  {
    title: "PrepEdge AI Platform",
    description: "Adaptive learning system integrating multiple AI models. specialized in high availability and fault-tolerant data pipelines.",
    tags: ["Java", "Spring Boot", "React", "OpenAI API", "MongoDB"],
    github: "https://github.com/Shantanux0",
    demo: "https://shantanu-kale.vercel.app",
    featured: false
  }
];

const SKILL_GROUPS = [
  {
    title: "Frontend Ecosystem",
    icon: <Globe size={20} />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend Infrastructure",
    icon: <Server size={20} />,
    skills: ["Node.js", "Java Spring", "Microservices", "PostgreSQL", "Redis"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Layers size={20} />,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD Pipelines", "Nginx"]
  }
];

const PROCESS_STEPS = [
  {
    title: "Discovery & Audit",
    description: "Deep dive into your system requirements, identifying bottlenecks and security risks.",
    icon: <Search size={24} />
  },
  {
    title: "Architectural Design",
    description: "Designing the schema, API endpoints, and service communication patterns for high scale.",
    icon: <Layers size={24} />
  },
  {
    title: "Agile Development",
    description: "Incremental coding with Spring Boot, ensuring clean code, robust security, and unit testing.",
    icon: <Code2 size={24} />
  },
  {
    title: "Testing & Deployment",
    description: "Stress testing and containerized deployment using Docker for a seamless production launch.",
    icon: <Rocket size={24} />
  }
];

const EXPERIENCE = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2023 – PRESENT",
    description: "Over 2 years of experience collaborating with diverse teams of developers from multiple countries. Delivering high-performance React frontends backed by scalable Spring/Node architectures."
  },
  {
    company: "D. Y. Patil College of Engineering",
    role: "B.E. Information Technology",
    period: "2022 – 2026",
    description: "Concurrent with freelance work. Focusing on Advanced Algorithms, Distributed Systems, and Enterprise Software Architecture. Dean's List for academic excellence."
  }
];

const FAQS = [
  {
    q: "How do you ensure backend security?",
    a: "I implement industry-standard protocols including JWT-based authentication, Spring Security filters, and email OTP verification for secure user access."
  },
  {
    q: "Can you migrate my existing monolithic app?",
    a: "Yes. I specialize in breaking down monoliths into scalable microservices using Spring Boot and efficient API gateways."
  },
  {
    q: "Do you handle third-party API integrations?",
    a: "Absolutely. I have extensive experience integrating AI models (GPT-4, Gemini) and payment/messaging gateways into existing backends."
  }
];

const SERVICES = [
  {
    title: "Custom API Development",
    description: "Designing scalable, secure, and well-documented RESTful APIs using Spring Boot and Jakarta.",
    icon: <Code2 size={24} />
  },
  {
    title: "Security & Auth Systems",
    description: "Implementing JWT, Spring Security, and OTP verification systems to protect sensitive data.",
    icon: <ShieldCheck size={24} />
  },
  {
    title: "Cloud & Microservices",
    icon: <Server size={24} />,
    description: "Architecting microservices with Docker and Kubernetes for zero-downtime scalability."
  }
];

const PRICING_PLANS = [
  {
    title: "Basic Build",
    price: "₹2,000",
    unit: "/project",
    description: "Simple static sites, landing pages, or bug fixes.",
    features: ["Responsive Design", "Single Page", "Code Review"]
  },
  {
    title: "Core Feature",
    price: "₹4,500",
    unit: "/project",
    description: "Dynamic components, API integrations, or dashboard modules.",
    features: ["React Component", "API Integration", "Database Setup"]
  },
  {
    title: "Full System",
    price: "₹7,000",
    unit: "/project",
    description: "Complete full-stack application with auth and database.",
    features: ["Auth System", "Admin Panel", "Deployment", "Spring Boot Backend"]
  }
];

const TESTIMONIALS = [
  {
    quote: "Great guy to work with. He fixed some complex bugs in our Spring Boot backend that were troubling us for weeks. Highly recommended.",
    author: "Aditya R.",
    role: "Backend Lead",
    location: "Bangalore, India"
  },
  {
    quote: "Hired Shantanu to build a React dashboard for my SaaS. He communicated well and delivered the project 2 days early. Clean code.",
    author: "Mark Thompson",
    role: "Founder, TechFlow",
    location: "Seattle, USA"
  },
  {
    quote: "Reliable freelancer. He optimized our database queries and set up the API structure for our agency's client. Good technical skills.",
    author: "Sanket Patil",
    role: "Tech Consultant",
    location: "Pune, India"
  }
];

// --- Components ---

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const BackgroundGrid = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, backgroundSize: '120px 120px' }} />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.03 }}
      transition={{ duration: 2 }}
      className="absolute inset-0"
      style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
    />
  </div>
);

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-black/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="font-mono font-bold text-black tracking-widest text-lg uppercase flex items-center gap-2">
        <div className="w-3 h-3 bg-black rounded-full animate-pulse" />
        Devshantanu
      </div>
      <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
        {['Services', 'Workflow', 'Work', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors relative group py-2">
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
      <div className="md:hidden p-2"><Activity size={20} /></div>
    </div>
  </nav>
);

const TerminalWindow = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'INITIALIZING_RUNTIME_ENVIRONMENT...' },
    { type: 'system', content: 'LOADING_MODULES: [JAVA, SPRING, KAFKA]' },
    { type: 'system', content: 'STATUS: OPERATIONAL' },
    { type: 'system', content: 'Type "help" to view available commands.' }
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';
      let type = 'system';

      switch (cmd) {
        case 'help':
          response = 'AVAILABLE COMMANDS: whoami, projects, skills, contact, clear';
          break;
        case 'whoami':
          response = 'USER: Shantanu Kale | ROLE: Full Stack Freelancer | STATUS: Accepting New Clients';
          document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'projects':
          response = 'LOADING WORK CLUSTERS...';
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'skills':
          response = 'STACK: React, Next.js, Node.js, Spring Boot, AWS.';
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'contact':
          response = 'OPENING COMMUNICATION CHANNELS...';
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case '':
          response = '';
          break;
        default:
          response = `ERROR: Command '${cmd}' not recognized. Type "help" for assistance.`;
          type = 'error';
      }

      const newHistory = [...history, { type: 'user', content: input }];
      if (response) {
        newHistory.push({ type, content: response });
      }
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full max-w-xl bg-neutral-950 rounded-xl overflow-hidden shadow-2xl font-mono text-xs border border-neutral-800"
    >
      <div className="bg-neutral-900 px-4 py-3 flex items-center gap-2 border-b border-neutral-800">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="ml-auto text-neutral-500 font-bold text-[10px] tracking-widest">BASH -- ZSH</div>
      </div>
      <div ref={scrollRef} className="p-6 h-64 overflow-y-auto space-y-2 text-neutral-300 font-medium">
        {history.map((entry, i) => (
          <div key={i} className={
            entry.type === 'system' ? 'text-green-500' :
              entry.type === 'error' ? 'text-red-500' :
                'text-neutral-300'
          }>
            <span className="opacity-50 mr-2">{entry.type === 'user' ? '$' : '>'}</span>
            {entry.content}
          </div>
        ))}
        <div className="flex items-center text-neutral-300">
          <span className="opacity-50 mr-2">$</span>
          <input
            className="bg-transparent border-none outline-none flex-1 text-neutral-300 placeholder-neutral-700"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type command..."
          />
        </div>
      </div>
    </motion.div>
  );
};

const SystemLog = () => {
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState({ cpu: 12, mem: 4.2, net: 120 });

  useEffect(() => {
    // Log interval
    const messages = [
      "INITIALIZING REACT KERNEL...",
      "LOADING ASSETS...",
      "CONNECTING TO API GATEWAY...",
      "OPTIMIZING DOM TREE...",
      "VERIFYING SECURITY CREDENTIALS...",
      "ESTABLISHING HANDSHAKE...",
      "RENDERING SHADERS...",
      "SYSTEM OPERATIONAL",
      "MONITORING NETWORK TRAFFIC...",
      "UPDATING VIEWPORT COORDINATES...",
      "GARBAGE COLLECTION STARTED...",
      "ALLOCATING MEMORY BLOCKS...",
      "SYNCING CLOUD STATE..."
    ];

    const logInterval = setInterval(() => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + "." + Math.floor(Math.random() * 999);

      setLogs(prev => {
        const newLogs = [...prev, `[${timestamp}] ${msg}`];
        if (newLogs.length > 7) newLogs.shift();
        return newLogs;
      });
    }, 1500);

    // Stats interval
    const statsInterval = setInterval(() => {
      setStats({
        cpu: Math.floor(Math.random() * 30) + 10,
        mem: (Math.random() * 2 + 3).toFixed(1),
        net: Math.floor(Math.random() * 100) + 50
      });
    }, 800);

    return () => {
      clearInterval(logInterval);
      clearInterval(statsInterval);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 border border-neutral-200 bg-white font-mono text-[10px] text-neutral-500 shadow-sm">
      <div className="flex border-b border-neutral-200 bg-neutral-50 px-4 py-2 justify-between items-center">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-bold tracking-widest uppercase">System Status: ONLINE</span>
          </div>
          <div className="hidden md:flex gap-4 text-neutral-400">
            <span>CPU: {stats.cpu}%</span>
            <span>MEM: {stats.mem}GB</span>
            <span>NET: {stats.net}ms</span>
          </div>
        </div>
        <div className="text-neutral-400">V.2.0.4</div>
      </div>

      <div className="p-4 h-40 overflow-hidden relative bg-neutral-50/50">
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-1 font-medium truncate"
          >
            <span className="text-neutral-300 mr-2">{'>'}</span>{log}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SectionHeading = ({ title, subtitle, centered = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`mb-24 ${centered ? 'text-center' : ''}`}
  >
    <h2 className="text-5xl md:text-6xl font-display font-bold text-black mb-6 tracking-tighter uppercase">{title}</h2>
    <div className={`h-1.5 w-24 bg-black mb-8 ${centered ? 'mx-auto' : ''}`} />
    <p className={`text-neutral-600 max-w-2xl text-xl font-light leading-relaxed ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
  </motion.div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black font-body selection:bg-black selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@700&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .outline-text { -webkit-text-stroke: 1.5px black; color: transparent; }
      `}</style>

      <ScrollProgress />
      <BackgroundGrid />
      <Nav />

      {/* Hero Section */}
      <section className="min-h-screen pt-40 flex items-center relative px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          <div className="space-y-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              System Online
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-7xl md:text-9xl font-display font-bold leading-[0.9] tracking-tighter"
              >
                DEV<br />
                <span className="outline-text text-transparent hover:text-black transition-colors duration-700">SHANTANU</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-neutral-600 max-w-lg font-light leading-relaxed border-l-2 border-black pl-6"
            >
              Full Stack Developer crafting high-converting web applications with React & Spring Boot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-6"
            >
              <a href="#work" className="group relative px-8 py-4 bg-black text-white font-bold uppercase tracking-widest text-xs overflow-hidden">
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">View Deployment</span>
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              </a>
              <a href="#contact" className="group px-8 py-4 border border-black text-black font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-300">
                Initiate Protocol
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-neutral-200 to-transparent rounded-full blur-3xl opacity-30" />
            <TerminalWindow />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="System Services" subtitle="Specialized engineering to resolve complex backend bottlenecks and build foundations for scale." />

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="p-10 bg-white border border-neutral-200 hover:border-black hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="mb-8 p-4 bg-neutral-50 w-fit rounded-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tight">{s.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed mb-8">{s.description}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                  <div className="h-px w-4 bg-current" /> Explore
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-40 bg-black text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter uppercase">Log History</h2>
            <div className="h-1 w-24 bg-white mb-8" />
          </motion.div>

          <div className="space-y-20">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-12 gap-10 border-t border-white/10 pt-10 group"
              >
                <div className="md:col-span-3">
                  <span className="font-mono text-sm tracking-[0.2em] text-neutral-500 group-hover:text-white transition-colors">{exp.period}</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-3xl font-display font-bold uppercase mb-2">{exp.company}</h3>
                  <h4 className="text-xl text-neutral-400 mb-6 flex items-center gap-2"><Briefcase size={18} /> {exp.role}</h4>
                  <p className="text-xl font-light text-neutral-500 max-w-3xl leading-relaxed group-hover:text-neutral-300 transition-colors">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-40 px-6 max-w-7xl mx-auto">
        <SectionHeading title="The Pipeline" subtitle="Structured engineering workflow guaranteeing code quality." centered />

        <div className="grid md:grid-cols-4 gap-12 relative mt-20">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-neutral-100 z-0" />
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 text-center group"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center mb-8 group-hover:border-black group-hover:scale-110 transition-all duration-300 shadow-xl shadow-neutral-100">
                <div className="text-neutral-400 group-hover:text-black transition-colors">{step.icon}</div>
              </div>
              <h3 className="font-display font-bold uppercase mb-4 text-lg">0{i + 1}. {step.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed px-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-40 bg-neutral-950 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tighter uppercase">Core Registry</h2>
            <div className="h-1 w-24 bg-white" />
          </div>

          <div className="grid md:grid-cols-3 gap-20">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx} className="space-y-10">
                <div className="flex items-center gap-4 border-b border-white/20 pb-4">
                  {group.icon}
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight">{group.title}</h3>
                </div>
                <div className="flex flex-col gap-6">
                  {group.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIdx * 0.05 }}
                      className="flex items-center justify-between group cursor-default"
                    >
                      <span className="font-mono text-neutral-400 group-hover:text-white transition-colors">{skill}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-green-500 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-40 px-6 max-w-7xl mx-auto">
        <SectionHeading title="Work Clusters" subtitle="Selected architectural implementations showcasing full-stack deployment." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`p-10 bg-white border border-neutral-200 flex flex-col hover:border-black hover:shadow-2xl transition-all duration-300 ${project.featured ? 'md:col-span-2 lg:col-span-1 border-black shadow-lg bg-neutral-50' : ''}`}
            >
              <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-4">
                <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-400">SYS_0{idx + 1}</span>
                {project.featured && <span className="text-[10px] font-bold bg-black text-white px-2 py-1 uppercase tracking-wider">Featured</span>}
              </div>

              <h3 className="text-3xl font-display font-bold mb-4 uppercase leading-none">{project.title}</h3>
              <p className="text-neutral-500 mb-8 flex-grow font-light leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono font-bold uppercase border border-neutral-200 px-3 py-1 text-neutral-600">{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-4 mt-auto">
                <a href={project.demo} className="text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-1">Live Demo <ExternalLink size={12} /></a>
                <a href={project.github} className="ml-auto text-neutral-400 hover:text-black transition-colors"><Github size={20} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 px-6 max-w-4xl mx-auto border-t border-neutral-200">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-display font-bold mb-4 uppercase">System Audit</h2>
          <p className="text-neutral-500">Frequently asked questions regarding architecture.</p>
        </div>
        <div className="grid gap-8">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-neutral-200 hover:border-black transition-colors bg-neutral-50"
            >
              <h4 className="font-display font-bold text-xl uppercase mb-4 flex items-start gap-3">
                <span className="text-neutral-300">Q.</span> {faq.q}
              </h4>
              <p className="font-light text-neutral-600 leading-relaxed pl-8 border-l border-neutral-300 text-lg">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-neutral-50 border-y border-neutral-200 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Client Consensus" subtitle="Verified feedback from global partners." centered />
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-neutral-200 bg-white hover:border-black transition-colors relative"
              >
                <Quote size={24} className="mb-4 text-neutral-300" />
                <p className="text-neutral-600 font-light leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-wide">{t.author}</h4>
                  <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest mt-1">{t.role}</p>
                  <div className="flex items-center gap-1 mt-2 text-[10px] font-bold text-neutral-300 uppercase tracking-widest">
                    <Globe size={10} /> {t.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <SectionHeading title="Deployment Costs" subtitle="Transparent resource allocation for your engineering needs." centered />
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 border border-neutral-200 bg-white hover:border-black transition-colors flex flex-col"
            >
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-display font-bold">{plan.price}</span>
                <span className="text-neutral-500 text-sm ml-2">{plan.unit}</span>
              </div>
              <p className="text-neutral-500 font-light mb-8 text-sm">{plan.description}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-mono text-neutral-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full py-3 border border-black text-center font-bold uppercase text-xs hover:bg-black hover:text-white transition-colors">
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6">
        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="py-32 border-[6px] border-black bg-white relative z-10"
          >
            <div className="mb-12">
              <Mail size={40} className="mx-auto mb-4" />
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase mb-6">Initialize</h2>
              <p className="text-xl text-neutral-500 font-light max-w-xl mx-auto">
                Ready to upgrade your infrastructure? Let's discuss architecture and deployment strategies.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8">
              <a
                href="mailto:kaleshantanu2260@gmail.com"
                className="px-12 py-5 bg-black text-white font-bold uppercase tracking-[0.3em] text-sm hover:scale-105 transition-transform duration-300 shadow-2xl"
              >
                Start Collaboration
              </a>
              <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-neutral-400">
                <a href="https://github.com/Shantanux0" className="hover:text-black transition-colors">Github</a>
                <a href="https://www.linkedin.com/in/shantanu-kale2260/" className="hover:text-black transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-black transition-colors">Twitter</a>
              </div>
            </div>
          </motion.div>

          {/* Decorative elements behind content */}
          <div className="absolute top-10 left-10 w-full h-full border-[6px] border-neutral-100 -z-0" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-200 bg-neutral-50 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            © 2026 Devshantanu. All Systems Nominal.
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            <span>Privacy Protocol</span>
            <span>Terms of Deployment</span>
          </div>
        </div>
        <SystemLog />
      </footer>
    </div>
  );
};

export default App;