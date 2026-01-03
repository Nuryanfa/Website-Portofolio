import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'Inter', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            colors: {
                void: {
                    DEFAULT: '#0a0a12',
                    dark: '#050508',
                    light: '#141420',
                },
                neon: {
                    cyan: '#00f3ff',
                    purple: '#bc13fe',
                    blue: '#4d4dff',
                }
            },
            backgroundImage: {
                'void-gradient': 'linear-gradient(to bottom right, #0a0a12, #050508)',
                'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
            },
            keyframes: {
                fadeInUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(30px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideInLeft: {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(-50px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                slideInRight: {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(50px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                pulse: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.5" },
                },
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            animation: {
                "fade-in-up": "fadeInUp 0.8s ease-out forwards",
                "fade-in": "fadeIn 1s ease-out forwards",
                "slide-in-left": "slideInLeft 0.8s ease-out forwards",
                "slide-in-right": "slideInRight 0.8s ease-out forwards",
                "float": "float 3s ease-in-out infinite",
                "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "marquee": "marquee 25s linear infinite",
            },
        },
    },

    plugins: [forms],
};
