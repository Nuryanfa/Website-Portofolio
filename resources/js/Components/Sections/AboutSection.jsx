import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/Components/SectionTitle';

export default function AboutSection() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300 relative"
        >
            <div className="container mx-auto max-w-6xl">
                <SectionTitle
                    title="Tentang Saya"
                    subtitle="Passionate developer yang selalu belajar teknologi baru"
                />
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Saya adalah seorang Full Stack Developer dengan pengalaman
                            dalam membangun aplikasi web modern. Saya passionate dalam
                            menciptakan web yang responsif dan cepat dengan code yang rapih dan bersih.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Dengan keahlian di Laravel, React, dan Tailwind CSS, saya
                            siap membantu mewujudkan ide Anda menjadi aplikasi web yang
                            powerful dan beautiful.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                                <span className="text-3xl">🎓</span>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Pendidikan</p>
                                    <p className="font-semibold text-gray-700 dark:text-gray-200">Teknik Informatika</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                                <span className="text-3xl">📍</span>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Lokasi</p>
                                    <p className="font-semibold text-gray-700 dark:text-gray-200">Kota Bandung, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden relative group">
                            <img
                                src={`${window.location.origin}/images/aboutme.jpg`}
                                alt="Muhamad Nur Yanfa"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            {/* Fallback emoji */}
                            <div 
                                className="w-full h-full hidden items-center justify-center text-white text-9xl bg-gray-800"
                            >
                                🚀
                            </div>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full border-4 border-blue-500/30 rounded-2xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
