import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-300"
        >
            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Muhamad Nur Yanfa
                        </span>
                    </h1>
                    
                    <div className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto h-20">
                        I'm a{" "}
                        <TypeAnimation
                            sequence={[
                                'Fullstack Developer',
                                2000,
                                'Laravel Enthusiast',
                                2000,
                                'React Developer',
                                2000,
                                'Problem Solver',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="font-bold text-blue-600 dark:text-blue-400"
                            repeat={Infinity}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full font-bold shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

                {/* Floating 3D-like Element - Simplified CSS Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 relative"
                >
                    <div className="animate-float text-8xl md:text-9xl filter drop-shadow-2xl cursor-pointer hover:rotate-12 transition-transform duration-300">
                        👨‍💻
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
