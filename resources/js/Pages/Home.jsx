import React from "react";
import { Head } from "@inertiajs/react";
// Layouts
import Navbar from "@/Components/Navbar";
import ScrollToTop from "@/Components/ScrollToTop";
// Sections
import HeroSection from "@/Components/Sections/HeroSection";
import AboutSection from "@/Components/Sections/AboutSection";
import SkillsSection from "@/Components/Sections/SkillsSection";
import ProjectsSection from "@/Components/Sections/ProjectsSection";
import ExperienceSection from "@/Components/Sections/ExperienceSection";
import ContactSection from "@/Components/Sections/ContactSection";
// Hooks
import useDarkMode from "@/Hooks/useDarkMode";

export default function Home({ auth, projects, skills }) {
    const [darkMode, toggleDarkMode] = useDarkMode();

    return (
        <>
            <Head title="Muhamad Nur Yanfa" />
            
            <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900`}>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

                <main className="overflow-hidden">
                    <HeroSection />
                    <AboutSection />
                    <ExperienceSection />
                    <SkillsSection skills={skills} />
                    <ProjectsSection projects={projects} />
                    <ContactSection />
                </main>

                <Footer />
                <ScrollToTop />
            </div>
        </>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 border-t border-gray-800">
            <div className="container mx-auto text-center">
                <p className="text-gray-400 dark:text-gray-500">
                    &copy; {new Date().getFullYear()} Muhamad Nur Yanfa. All
                    rights reserved.
                </p>
                <p className="text-gray-500 dark:text-gray-600 mt-2 text-sm">
                    Built with Laravel, React, Tailwind CSS & Framer Motion
                </p>
            </div>
        </footer>
    );
}
