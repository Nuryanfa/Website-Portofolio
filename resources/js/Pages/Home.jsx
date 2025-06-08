// resources/js/Pages/Home.jsx

import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Transition, Menu } from "@headlessui/react"; // Tambahkan Menu dari headlessui/react

export default function Home({ auth }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk mengontrol tampilan mobile menu (hamburger)

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Head title="Home" />

            {/* Navbar */}
            <nav className="bg-white shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Nama di Kiri */}
                    <div className="text-xl font-bold text-gray-800">
                        Nama Saya
                    </div>

                    {/* Tombol Navigasi di Tengah (Desktop) */}
                    {/* Tetap ada jika kamu ingin navigasi utama selalu terlihat di desktop */}
                    <div className="hidden md:flex space-x-6">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>

                    {/* Tombol Hamburger/Menu (Mobile) */}
                    <div className="md:hidden">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="text-gray-800 focus:outline-none focus:text-gray-600"
                            aria-label="Toggle navigation"
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

                    {/* Dropdown Menu di Kanan Atas (Desktop Only) */}
                    <Menu as="div" className="relative hidden md:block">
                        <div>
                            <Menu.Button className="flex items-center text-gray-800 hover:text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md py-2 px-3 transition duration-300 ease-in-out">
                                Menu
                                <svg
                                    className="ml-2 -mr-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Menu.Button>
                        </div>

                        <Transition
                            as={React.Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                <MenuItem href="#home">Home</MenuItem>
                                <MenuItem href="#projects">Projects</MenuItem>
                                <MenuItem href="#contact">Contact</MenuItem>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>

                {/* Mobile Menu/Tabs (Muncul saat Hamburger diklik) */}
                <Transition
                    show={isMobileMenuOpen} // Menggunakan state mobile menu
                    enter="transition ease-out duration-300 transform"
                    enterFrom="opacity-0 -translate-y-full"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-200 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-full"
                >
                    {(ref) => (
                        <div
                            ref={ref}
                            className="md:hidden mt-4 space-y-2 px-2 pb-3"
                        >
                            <NavLink
                                href="#home"
                                isMobile={true}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                href="#projects"
                                isMobile={true}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Projects
                            </NavLink>
                            <NavLink
                                href="#contact"
                                isMobile={true}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </NavLink>
                        </div>
                    )}
                </Transition>
            </nav>

            {/* Konten Halaman Utama */}
            <main className="flex-grow flex items-center justify-center p-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
                        Selamat Datang di Portofolio Saya
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 animate-fade-in-up delay-200">
                        Website Project 1 ..!!
                    </p>
                </div>
            </main>

            {/* Footer (Opsional) */}
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>
                    &copy; {new Date().getFullYear()} Muhamad Nur Yanfa. All
                    rights reserved.
                </p>
            </footer>
        </div>
    );
}

// Komponen NavLink untuk reusabilitas dan gaya yang konsisten
const NavLink = ({ href, children, isMobile = false, onClick }) => {
    const baseClasses =
        "text-gray-800 hover:text-blue-600 font-medium transition duration-300 ease-in-out";
    const mobileClasses =
        "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50";

    return (
        <a
            href={href}
            className={isMobile ? mobileClasses : baseClasses}
            onClick={onClick}
        >
            {children}
        </a>
    );
};

// Komponen MenuItem untuk dropdown (menggunakan Headless UI)
const MenuItem = ({ href, children }) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <a
                    href={href}
                    className={`${
                        active ? "bg-gray-100 text-blue-600" : "text-gray-900"
                    } block px-4 py-2 text-sm`}
                >
                    {children}
                </a>
            )}
        </Menu.Item>
    );
};
