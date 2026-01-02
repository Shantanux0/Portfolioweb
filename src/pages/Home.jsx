import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
    Code2, Layers, Rocket, Search, Briefcase, ExternalLink, Github, Globe, Quote, ShieldCheck, Server
} from 'lucide-react';

import TerminalWindow from '../components/TerminalWindow';
import SectionHeading from '../components/SectionHeading';
import Footer from '../components/Footer';

// Data Arrays
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

const Home = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Handle scrolling for paths like /services, /work, /workflow, /contact
        const sectionId = pathname.replace('/', '');
        if (sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                // Short delay to ensure component is rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [pathname]);

    return (
        <>
            {/* Hero Section */}
            <section className="min-h-screen pt-24 md:pt-40 flex items-center relative px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center w-full">
                    <div className="space-y-8 md:space-y-10 relative z-10">
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

                        <div className="space-y-1">
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl md:text-9xl font-display font-bold leading-[0.9] tracking-tighter"
                            >
                                DEV<br />
                                <span className="outline-text text-transparent hover:text-black transition-colors duration-700">SHANTANU</span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-2xl text-neutral-600 max-w-lg font-light leading-relaxed border-l-2 border-black pl-6"
                        >
                            Full Stack Developer crafting high-converting web applications with React & Spring Boot.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap gap-4 md:gap-6 pt-6"
                        >
                            <a href="/#/work" className="group relative px-6 md:px-8 py-3 md:py-4 bg-black text-white font-bold uppercase tracking-widest text-[10px] md:text-xs overflow-hidden text-center">
                                <span className="relative z-10 group-hover:text-black transition-colors duration-300">View Deployment</span>
                                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                            </a>
                            <a href="/#/contact" className="group px-6 md:px-8 py-3 md:py-4 border border-black text-black font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-black hover:text-white transition-all duration-300 text-center">
                                Initiate Protocol
                            </a>
                        </motion.div>
                    </div>

                    <div className="relative pb-12 lg:pb-0">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-neutral-200 to-transparent rounded-full blur-3xl opacity-30" />
                        <TerminalWindow />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 md:py-40 px-6 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading title="System Services" subtitle="Specialized engineering to resolve complex backend bottlenecks and build foundations for scale." />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {SERVICES.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className="p-8 md:p-10 bg-white border border-neutral-200 hover:border-black hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="mb-6 md:mb-8 p-4 bg-neutral-50 w-fit rounded-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl md:text-2xl font-display font-bold mb-4 uppercase tracking-tight">{s.title}</h3>
                                <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed mb-8">{s.description}</p>
                                <a href="/#/contact" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors cursor-pointer">
                                    <div className="h-px w-4 bg-current" /> Explore
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-24 md:py-40 bg-black text-white px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-16 md:mb-24"
                    >
                        <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tighter uppercase">Log History</h2>
                        <div className="h-1 w-24 bg-white mb-8" />
                    </motion.div>

                    <div className="space-y-12 md:space-y-20">
                        {EXPERIENCE.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="grid md:grid-cols-12 gap-6 md:gap-10 border-t border-white/10 pt-10 group"
                            >
                                <div className="md:col-span-3">
                                    <span className="font-mono text-sm tracking-[0.2em] text-neutral-500 group-hover:text-white transition-colors">{exp.period}</span>
                                </div>
                                <div className="md:col-span-9">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold uppercase mb-2">{exp.company}</h3>
                                    <h4 className="text-lg md:text-xl text-neutral-400 mb-4 md:mb-6 flex items-center gap-2"><Briefcase size={18} /> {exp.role}</h4>
                                    <p className="text-lg md:text-xl font-light text-neutral-500 max-w-3xl leading-relaxed group-hover:text-neutral-300 transition-colors">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section id="workflow" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
                <SectionHeading title="The Pipeline" subtitle="Structured engineering workflow guaranteeing code quality." centered />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative mt-16 md:mt-20">
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
                            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center mb-6 md:mb-8 group-hover:border-black group-hover:scale-110 transition-all duration-300 shadow-xl shadow-neutral-100">
                                <div className="text-neutral-400 group-hover:text-black transition-colors">{step.icon}</div>
                            </div>
                            <h3 className="font-display font-bold uppercase mb-4 text-base md:text-lg">0{i + 1}. {step.title}</h3>
                            <p className="text-xs md:text-sm text-neutral-500 leading-relaxed px-2">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-24 md:py-40 bg-neutral-950 text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 md:mb-24">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter uppercase">Core Registry</h2>
                        <div className="h-1 w-24 bg-white" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
                        {SKILL_GROUPS.map((group, idx) => (
                            <div key={idx} className="space-y-8 md:space-y-10">
                                <div className="flex items-center gap-4 border-b border-white/20 pb-4">
                                    {group.icon}
                                    <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight">{group.title}</h3>
                                </div>
                                <div className="flex flex-col gap-4 md:gap-6">
                                    {group.skills.map((skill, sIdx) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: sIdx * 0.05 }}
                                            className="flex items-center justify-between group cursor-default"
                                        >
                                            <span className="font-mono text-sm md:text-base text-neutral-400 group-hover:text-white transition-colors">{skill}</span>
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
            <section id="work" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
                <SectionHeading title="Work Clusters" subtitle="Selected architectural implementations showcasing full-stack deployment." />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`p-8 md:p-10 bg-white border border-neutral-200 flex flex-col hover:border-black hover:shadow-2xl transition-all duration-300 ${project.featured ? 'md:col-span-2 lg:col-span-1 border-black shadow-lg bg-neutral-50' : ''}`}
                        >
                            <div className="mb-6 md:mb-8 flex items-center justify-between border-b border-neutral-200 pb-4">
                                <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-400">SYS_0{idx + 1}</span>
                                {project.featured && <span className="text-[10px] font-bold bg-black text-white px-2 py-1 uppercase tracking-wider">Featured</span>}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 uppercase leading-none">{project.title}</h3>
                            <p className="text-sm md:text-base text-neutral-500 mb-8 flex-grow font-light leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono font-bold uppercase border border-neutral-200 px-3 py-1 text-neutral-600">{tag}</span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 pt-4 mt-auto">
                                <a href={project.demo} className="text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-1">Live <span className="hidden sm:inline">Demo</span> <ExternalLink size={12} /></a>
                                <a href={project.github} className="ml-auto text-neutral-400 hover:text-black transition-colors"><Github size={20} /></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 md:py-40 px-6 max-w-4xl mx-auto border-t border-neutral-200">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 uppercase">System Audit</h2>
                    <p className="text-sm md:text-base text-neutral-500">Frequently asked questions regarding architecture.</p>
                </div>
                <div className="grid gap-6 md:gap-8">
                    {FAQS.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 md:p-8 border border-neutral-200 hover:border-black transition-colors bg-neutral-50"
                        >
                            <h4 className="font-display font-bold text-lg md:text-xl uppercase mb-4 flex items-start gap-3">
                                <span className="text-neutral-300">Q.</span> {faq.q}
                            </h4>
                            <p className="font-light text-neutral-600 leading-relaxed pl-6 md:pl-8 border-l border-neutral-300 text-base md:text-lg">
                                {faq.a}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 md:py-32 bg-neutral-50 border-y border-neutral-200 px-6">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading title="Client Consensus" subtitle="Verified feedback from global partners." centered />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {TESTIMONIALS.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 md:p-8 border border-neutral-200 bg-white hover:border-black transition-colors relative"
                            >
                                <Quote size={20} className="mb-4 text-neutral-300" />
                                <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-6 italic">"{t.quote}"</p>
                                <div>
                                    <h4 className="font-bold uppercase text-xs md:text-sm tracking-wide">{t.author}</h4>
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

            {/* Pricing Section CTA */}
            <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto bg-neutral-50 border-y border-neutral-200">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6 md:mb-8">Deployment Costs</h2>
                    <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl mx-auto mb-10 md:mb-12">
                        Transparent resource allocation. Choose a module or configure custom requirements.
                    </p>
                    <a href="#/pricing" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-black text-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:scale-105 transition-transform shadow-2xl">
                        View Rate Card
                    </a>
                </div>
            </section>

            {/* Footer / Contact */}
            <Footer />
        </>
    );
};

export default Home;
