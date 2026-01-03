import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceSection({ experiences = [] }) {
    // Fallback if no experiences provided
    const displayExperiences = experiences.length > 0 ? experiences : [
        {
            year: 'Now',
            title: 'No Data',
            company: 'Admin Panel',
            description: 'Please add experiences in the admin dashboard.',
        }
    ];

    return (
        <div className="relative space-y-24">
            {displayExperiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full`}>
                    
                    {/* Empty half for alignment */}
                    <div className="hidden md:block w-5/12"></div>
                    
                    {/* Center Node on the Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-void-dark border-2 border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.5)] z-20">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    {/* Content Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
                    >
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-neon-purple/50 transition-colors duration-300">
                             <span className="inline-block px-3 py-1 mb-2 text-xs font-mono text-neon-cyan bg-neon-cyan/10 rounded-full border border-neon-cyan/20">
                                {exp.year}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                            <p className="text-sm text-neon-purple mb-4 font-mono">{exp.company}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    );
}
