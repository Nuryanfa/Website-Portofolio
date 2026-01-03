import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/Components/SectionTitle';
import ProjectCard from '@/Components/ProjectCard';

export default function ProjectsSection({ projects }) {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300"
        >
            <div className="container mx-auto max-w-6xl">
                <SectionTitle
                    title="Selected Projects"
                    subtitle="Beberapa project unggulan yang telah saya kerjakan"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
