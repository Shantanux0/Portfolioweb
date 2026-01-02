import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
            "ALLOCATING MEMORY BLOCKS..."
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

export default SystemLog;
