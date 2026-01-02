import React from 'react';
import { Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="font-mono font-bold text-black tracking-widest text-lg uppercase flex items-center gap-2">
                    <div className="w-3 h-3 bg-black rounded-full animate-pulse" />
                    Devshantanu
                </Link>
                <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    {['Services', 'Workflow', 'Work', 'Contact'].map((item) => {
                        const linkTarget = isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`;
                        // If it's a link to formatting like this, usually just /#section works but on HashRouter it can be tricky.
                        // Let's rely on standard anchor for scrolling on home page, and Link for pricing page.

                        if (isHome) {
                            return (
                                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors relative group py-2">
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
                                </a>
                            );
                        } else {
                            // On other pages, navigate to home then hash. 
                            // Note: HashRouter with Link to="/#hash" might not scroll automatically without extra handling.
                            // For now, pure link to /
                            return (
                                <Link key={item} to="/" className="hover:text-black transition-colors relative group py-2">
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
                                </Link>
                            )
                        }
                    })}
                    <Link to="/pricing" className="hover:text-black transition-colors relative group py-2 text-green-600">
                        Pricing
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full" />
                    </Link>
                </div>
                <div className="md:hidden p-2"><Activity size={20} /></div>
            </div>
        </nav>
    );
};

export default Nav;
