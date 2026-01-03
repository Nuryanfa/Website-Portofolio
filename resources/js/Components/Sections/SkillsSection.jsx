import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/Components/SectionTitle';
import SkillCard from '@/Components/SkillCard';

export default function SkillsSection({ skills }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section
            id="skills"
            className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300"
        >
            <div className="container mx-auto max-w-6xl">
                <SectionTitle
                    title="Skills & Expertise"
                    subtitle="Teknologi dan tools yang saya kuasai"
                />
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <SkillCard {...skill} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Category or Marquee could go here */}
            </div>
        </section>
    );
}
