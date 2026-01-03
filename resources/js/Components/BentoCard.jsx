import React from 'react';
import { motion } from 'framer-motion';

export default function BentoCard({ children, className = "", title, icon }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`
                group relative overflow-hidden rounded-3xl
                bg-white/5 backdrop-blur-2xl
                shadow-2xl transition-all duration-500
                hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]
                ${className}
            `}
        >
            {/* Gradient Border Hack */}
            <div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 group-hover:from-neon-cyan/50 group-hover:to-neon-purple/50 transition-colors duration-500 -z-10 h-full w-full"></div>
            
            {/* Inner Glow Hack (Top Highlight) */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Content Container */}
            <div className="relative h-full bg-void-dark/20 rounded-[23px] overflow-hidden">
                {/* Glossy gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Header if title is provided */}
                {(title || icon) && (
                    <div className="flex items-center gap-3 p-6 pb-2 mb-2 border-b border-white/5">
                        {icon && <span className="text-2xl filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{icon}</span>}
                        {title && (
                            <h3 className="text-sm font-bold font-mono tracking-widest text-gray-400 uppercase group-hover:text-neon-cyan transition-colors">
                                {title}
                            </h3>
                        )}
                    </div>
                )}

                {/* Main Content */}
                <div className="p-6 pt-2 h-full">
                    {children}
                </div>
            </div>
        </motion.div>
    );
}
