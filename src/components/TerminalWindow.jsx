import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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

export default TerminalWindow;
