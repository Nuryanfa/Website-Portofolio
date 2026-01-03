import React from 'react';
import SectionTitle from '@/Components/SectionTitle';

export default function ExperienceSection() {
    // Data dummy untuk experience, bisa dipindah ke database nantinya
    const experiences = [
        {
            year: '2023 - Present',
            title: 'Full Stack Developer',
            company: 'Freelance',
            description: 'Membangun aplikasi web custom untuk berbagai klien menggunakan Laravel, React, dan Tailwind CSS.',
        },
        {
            year: '2020 - 2024',
            title: 'Mahasiswa Teknik Informatika',
            company: 'Universitas',
            description: 'Aktif dalam organisasi kemahasiswaan dan menyelesaikan project-project akademik dengan hasil memuaskan.',
        },
    ];

    return (
        <section
            id="experience"
            className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        >
            <div className="container mx-auto max-w-4xl">
                <SectionTitle
                    title="Experience"
                    subtitle="Perjalanan karir dan pendidikan saya"
                />
                
                <div className="relative border-l-4 border-blue-500/30 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            {/* Dot Indicator */}
                            <div className="absolute -left-[11px] top-2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                            
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                                    {exp.year}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                                    {exp.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">
                                    {exp.company}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
