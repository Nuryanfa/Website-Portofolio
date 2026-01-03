import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import ScrollToTop from "@/Components/ScrollToTop";

// Components
import HeroSection from "@/Components/Sections/HeroSection";
// Re-using sections directly, will modify them to be "floating"
import AboutSection from "@/Components/Sections/AboutSection";
import SkillsSection from "@/Components/Sections/SkillsSection";
import ProjectsSection from "@/Components/Sections/ProjectsSection";
import ExperienceSection from "@/Components/Sections/ExperienceSection";
import ContactSection from "@/Components/Sections/ContactSection";

export default function Home({ auth, projects, skills, experiences }) {
    return (
        <>
            <Head title="Muhamad Nur Yanfa - Void Architect" />
            
            <div className={`min-h-screen font-sans selection:bg-neon-cyan selection:text-void-dark overflow-x-hidden`}>
                <Navbar /> 

                <main className="relative container mx-auto px-4 pt-32 pb-24 flex flex-col items-center">
                    {/* The Constellation Line (Central Axis) */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent transform -translate-x-1/2 hidden md:block"></div>

                    {/* 1. Hero / Center Stage */}
                    <section id="home" className="relative w-full max-w-4xl mb-32 z-10 scroll-mt-28">
                        <HeroSection />
                    </section>

                    {/* 2. Tech Stack (Floating Orbit) */}
                    <section id="skills" className="relative w-full max-w-5xl mb-32 z-10 scroll-mt-28">
                         {/* Centered Title */}
                        <div className="text-center mb-12">
                             <h2 className="text-2xl font-mono text-neon-purple tracking-widest uppercase">
                                // Tech_Stack_v2.0
                            </h2>
                        </div>
                        <div className="bg-void-dark/30 backdrop-blur-sm p-8 rounded-full border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                             <SkillsSection skills={skills} />
                        </div>
                    </section>
                    
                    {/* 3. Featured Projects (Z-Pattern) */}
                    <section id="projects" className="relative w-full max-w-6xl mb-32 z-10 scroll-mt-28">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Selected Works</h2>
                            <p className="font-mono text-neon-cyan text-sm">Case Studies & Experiments</p>
                        </div>
                        <ProjectsSection projects={projects} />
                    </section>

                    {/* 4. Experience (Timeline) - TEMPORARILY HIDDEN
                    <section id="experience" className="relative w-full max-w-4xl mb-32 z-10 scroll-mt-28">
                         <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Experience Log</h2>
                        </div>
                        <ExperienceSection experiences={experiences} />
                    </section>
                    */}
             
                    {/* 5. About (Story) */}
                    <section id="about" className="relative w-full max-w-3xl mb-32 z-10 text-center scroll-mt-28">
                         <div className="bg-gradient-to-br from-white/5 to-transparent p-12 rounded-3xl border border-white/10 backdrop-blur-md">
                             <h2 className="text-2xl font-bold text-white mb-8">// About_Me.exe</h2>
                             <AboutSection />
                         </div>
                    </section>

                    {/* 6. Contact (Final Node) */}
                    <section id="contact" className="relative w-full max-w-2xl z-10 pb-20 scroll-mt-28">
                         <div className="text-center mb-10">
                            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                                INITIALIZE_UPLINK
                            </h2>
                        </div>
                        <ContactSection />
                    </section>

                </main>

                <TerminalFooter />
                <ScrollToTop />
            </div>
        </>
    );
}

function TerminalFooter() {
    return (
        <footer className="relative border-t border-white/5 bg-black/40 py-12 backdrop-blur-xl">
            <div className="container mx-auto px-4 text-center font-mono text-sm text-gray-500">
                <p>&gt; System status: Optimal</p>
                <p>&gt; Copyright (c) {new Date().getFullYear()} Muhamad Nur Yanfa.</p>
                <p className="mt-4 text-xs opacity-50">Crafted in the Void</p>
            </div>
        </footer>
    );
}
