import React, { useState } from 'react';
import { Activity, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const navItems = ['Services', 'Workflow', 'Work', 'Contact'];

    const toggleMenu = () => setIsOpen(!isOpen);

    const renderLink = (item, mobile = false) => {
        const Tag = isHome ? 'a' : Link;
        const to = isHome ? undefined : `/#${item.toLowerCase()}`;
        const href = isHome ? `#${item.toLowerCase()}` : undefined;

        return (
            <Tag
                key={item}
                to={to}
                href={href}
                onClick={() => mobile && setIsOpen(false)}
                className={`${mobile ? 'text-4xl text-black' : 'hover:text-black'} font-bold uppercase tracking-[0.2em] transition-colors relative group py-2`}
            >
                {item}
                {!mobile && <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />}
            </Tag>
        );
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" onClick={() => setIsOpen(false)} className="font-mono font-bold text-black tracking-widest text-lg uppercase flex items-center gap-2 z-50">
                    <div className="w-3 h-3 bg-black rounded-full animate-pulse" />
                    Devshantanu
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-[11px] text-neutral-500 items-center">
                    {navItems.map(item => renderLink(item))}
                    <Link to="/pricing" className="hover:text-black transition-colors relative group py-2 text-green-600 font-bold uppercase tracking-[0.2em]">
                        Pricing
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 z-50 text-black hover:bg-neutral-100 transition-colors rounded-lg"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden p-6"
                    >
                        <div className="flex flex-col items-center gap-8 pt-20">
                            {navItems.map(item => renderLink(item, true))}
                            <Link
                                to="/pricing"
                                onClick={() => setIsOpen(false)}
                                className="text-4xl text-green-600 font-bold uppercase tracking-[0.2em]"
                            >
                                Pricing
                            </Link>
                        </div>

                        <div className="mt-auto pb-12 w-full flex flex-col items-center gap-6">
                            <div className="h-px w-24 bg-neutral-200" />
                            <div className="flex gap-8 text-neutral-400">
                                <Activity size={24} />
                                <div className="text-xs font-mono uppercase tracking-widest">System Online</div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Nav;
