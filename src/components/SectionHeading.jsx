import React from 'react';
import { motion } from 'framer-motion';

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

export default SectionHeading;
