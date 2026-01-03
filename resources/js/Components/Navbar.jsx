import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        // { href: "#experience", label: "Experience" }, // Hidden
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-void-dark/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <a
                        href="#home"
                        className="text-2xl font-bold text-gradient hover:scale-105 transition-transform"
                    >
                        Portfolio
                    </a>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-100 hover:text-white font-bold tracking-wide transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(0,243,255,0.8)]"></span>
                            </a>
                        ))}
                        

                        
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-100 hover:text-neon-cyan focus:outline-none transition-colors"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                <Transition
                    show={isMobileMenuOpen}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-4"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-4"
                >
                    <div className="md:hidden pb-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3 text-gray-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-bold tracking-wide"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </Transition>
            </div>
        </nav>
    );
}
