import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx", // Pastikan baris ini ada untuk scan file JSX
    ],

    theme: {
        extend: {
            // Tambahkan animasi kustom di sini
            keyframes: {
                fadeInUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(20px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                "fade-in-up": "fadeInUp 0.6s ease-out forwards",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
