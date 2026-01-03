import React from 'react';
import { motion } from 'framer-motion';

export default function SkillsSection({ skills }) {
    // Duplicate skills to create seamless loop
    const doubledSkills = [...skills, ...skills];

    return (
        <div className="w-full overflow-hidden mask-linear-gradient">
            <div className="flex gap-8 w-max animate-marquee">
                {doubledSkills.map((skill, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ scale: 1.1, color: '#00f3ff' }}
                        className="flex flex-col items-center justify-center min-w-[100px] p-4 bg-white/5 border border-white/5 rounded-xl transition-colors cursor-pointer"
                    >
                        <div className="text-3xl mb-2">{skill.icon}</div>
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest whitespace-nowrap">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
