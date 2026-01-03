import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    return (
        <div className="relative h-full flex flex-col justify-center items-center text-center p-6 z-10">
            {/* Background Decorations (Constrained to Card) */}
            <div className="absolute top-[-50%] left-[-20%] w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <div className="mb-8 relative inline-block group">
                     {/* Orbital Ring 1 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-neon-cyan/30 animate-[spin_10s_linear_infinite]" />
                     {/* Orbital Ring 2 (Counter Spin) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-neon-purple/20 animate-[spin_15s_linear_infinite_reverse]" />
                    
                    <div className="relative p-2 rounded-full bg-void-dark border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                        <img 
                            src={`${window.location.origin}/images/aboutme.jpg`} 
                            alt="Profile"
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover filter brightness-110 contrast-110"
                            onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Nur+Yanfa&background=0D8ABC&color=fff"; }}
                        />
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl">
                    MUHAMAD NUR YANFA
                </h1>
                
                <div className="text-xl md:text-2xl text-gray-400 mb-10 font-mono h-8 flex items-center justify-center gap-3">
                    <span className="opacity-50 text-neon-purple">&lt;</span>
                    <div className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 rounded text-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.1)]">
                        <TypeAnimation
                            sequence={[
                                'Backend_Engineer',
                                2000,
                                'Laravel_Expert',
                                2000,
                                'System_Architect',
                                2000,
                                'API_Specialist',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <span className="opacity-50">/&gt;</span>
                </div>

                <p className="text-gray-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                    Architecting robust, scalable server-side systems and efficient APIs from the void.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan rounded-full font-mono text-sm hover:bg-neon-cyan hover:text-void-dark hover:shadow-[0_0_20px_rgba(0,243,255,0.7)] transition-all"
                    >
                        View_Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-white/5 border border-white/10 text-white rounded-full font-mono text-sm hover:bg-white/10 transition-all"
                    >
                        Contact_Me
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
}
