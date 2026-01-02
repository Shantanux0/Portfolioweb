import React, { useState } from 'react';
import { Mail, ArrowRight, AlertCircle, MapPin, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import SystemLog from './SystemLog';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tier: 'Select Tier...',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Project Inquiry: ${formData.tier} - ${formData.name}`);
        const body = encodeURIComponent(
            `Name/Org: ${formData.name}\n` +
            `Contact Email: ${formData.email}\n` +
            `Selected Tier: ${formData.tier}\n\n` +
            `Project Details:\n${formData.message}`
        );

        window.location.href = `mailto:kaleshantanu2260@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <footer className="bg-neutral-50">
            {/* Contact Form Section */}
            <section id="contact" className="py-40 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="border-[3px] border-black bg-white p-8 md:p-16 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                    >
                        <div className="grid lg:grid-cols-2 gap-20">
                            {/* Left Column: Context */}
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-6xl font-display font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                                        Initialize <br /> Protocol
                                    </h2>
                                    <p className="text-xl text-neutral-600 font-light leading-relaxed max-w-md border-l-2 border-black pl-6">
                                        Ready to deploy? Let's configure your project parameters and execute the build.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center border border-black group-hover:bg-white group-hover:text-black transition-colors">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">Direct Line</div>
                                            <a href="mailto:kaleshantanu2260@gmail.com" className="text-lg font-bold hover:underline">kaleshantanu2260@gmail.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center border border-black group-hover:bg-white group-hover:text-black transition-colors">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">Base of Operations</div>
                                            <p className="text-lg font-bold">Pune, MH (Remote Available)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Interactive Form */}
                            <div className="bg-neutral-50 p-8 border border-neutral-200">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Identity</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Name / Org"
                                                className="w-full bg-white border border-neutral-300 p-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Contact</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                className="w-full bg-white border border-neutral-300 p-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Module Selection</label>
                                        <select
                                            name="tier"
                                            value={formData.tier}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-neutral-300 p-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all appearance-none cursor-pointer"
                                        >
                                            <option>Select Tier...</option>
                                            <option>Basic Frontend (₹1,999)</option>
                                            <option>Full Stack MVP (₹4,999)</option>
                                            <option>Pro AI & Commerce (₹8,999)</option>
                                            <option>Enterprise Custom</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Brief</label>
                                        <textarea
                                            rows="3"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Project requirements..."
                                            className="w-full bg-white border border-neutral-300 p-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="flex gap-3 p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs items-start">
                                        <AlertCircle size={16} className="shrink-0 mt-0.5" />
                                        <p className="leading-relaxed">
                                            <strong>Notice:</strong> High demand. A ₹1,000 reservation fee applies for blocking development slots.
                                        </p>
                                    </div>

                                    <button type="submit" className="w-full py-4 bg-black text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group">
                                        Transmit Inquiry <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* System Log Section */}
            <section className="bg-white py-20 border-t border-neutral-200">
                <div className="max-w-4xl mx-auto px-6">
                    <SystemLog />
                </div>
            </section>

            {/* Final Footer Bar */}
            <div className="bg-white border-t border-neutral-200 py-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xl font-display font-bold tracking-tighter">
                        DEV<span className="text-neutral-400">SHANTANU</span>
                    </div>

                    <div className="text-neutral-500 text-sm font-mono">
                        © {new Date().getFullYear()} Shantanu Kale. All Rights Reserved.
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/Shantanux0" className="text-neutral-400 hover:text-black transition-colors" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/shantanu-kale2260/" className="text-neutral-400 hover:text-black transition-colors" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
