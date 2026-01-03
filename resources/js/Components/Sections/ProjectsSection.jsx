import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectsSection({ projects }) {
    if (!projects || projects.length === 0) return null;

    return (
        <div className="space-y-32">
            {projects.map((project, index) => (
                <div 
                    key={index} 
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                >
                    {/* Visual Side (Thumbnail) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-3/5"
                    >
                         <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:border-gray-500/50 transition-all duration-500 bg-gray-900">
                            {/* macOS Header */}
                            <div className="h-8 bg-gray-800/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                <div className="mx-auto font-mono text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">localhost:8000</div>
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-void-dark to-black flex items-center justify-center p-10 group-hover:scale-[1.02] transition-transform duration-700">
                                <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity">
                                    <span className="text-6xl block mb-4">🖥️</span>
                                    <p className="font-mono text-xs">PROJECT_SCREENSHOT_{index + 1}.png</p>
                                </div>
                            </div>
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 pointer-events-none"></div>
                         </div>
                    </motion.div>

                    {/* Text Side (Details) */}
                    <div className="w-full md:w-2/5 p-4 text-center md:text-left">
                        <div className="mb-4">
                            <span className="font-mono text-neon-cyan text-xs tracking-widest uppercase mb-2 block">Project 0{index + 1}</span>
                            <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                        </div>
                        
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
                             {project.tags && project.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 text-xs font-mono text-white bg-white/5 rounded-full border border-white/10">
                                    {tag}
                                </span>
                            ))}
                            {!project.tags && (
                                <>
                                    <span className="px-3 py-1 text-xs font-mono text-white bg-white/5 rounded-full border border-white/10">React</span>
                                    <span className="px-3 py-1 text-xs font-mono text-white bg-white/5 rounded-full border border-white/10">Laravel</span>
                                </>
                            )}
                        </div>

                        <a href="#" className="inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors border-b border-neon-cyan/30 hover:border-white pb-1">
                            <span>View Case Study</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
