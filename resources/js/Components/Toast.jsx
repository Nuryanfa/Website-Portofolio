import React, { useState, useEffect } from 'react';

export default function Toast({ message, type = 'success', show, onClose, duration = 5000 }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            setIsLeaving(false);
            
            // Auto hide after duration
            const timer = setTimeout(() => {
                handleClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [show, duration]);

    const handleClose = () => {
        setIsLeaving(true);
        setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 300); // Match animation duration
    };

    if (!show && !isVisible) return null;

    const getToastStyles = () => {
        const baseStyles = "fixed top-4 right-4 z-50 max-w-sm w-full shadow-lg rounded-lg pointer-events-auto overflow-hidden transform transition-all duration-300 ease-in-out";
        
        const typeStyles = {
            success: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
            error: "bg-gradient-to-r from-red-500 to-rose-500 text-white",
            warning: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
            info: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
        };

        const animationStyles = isLeaving 
            ? "translate-x-full opacity-0 scale-95" 
            : "translate-x-0 opacity-100 scale-100";

        return `${baseStyles} ${typeStyles[type]} ${animationStyles}`;
    };

    const getIcon = () => {
        const iconStyles = "w-6 h-6 flex-shrink-0";
        
        switch (type) {
            case 'success':
                return (
                    <svg className={iconStyles} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                );
            case 'error':
                return (
                    <svg className={iconStyles} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                );
            case 'warning':
                return (
                    <svg className={iconStyles} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                );
            case 'info':
                return (
                    <svg className={iconStyles} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className={getToastStyles()}>
            {/* Progress bar */}
            <div className="absolute top-0 left-0 h-1 bg-white bg-opacity-30 animate-progress" 
                 style={{ 
                     animation: `progress ${duration}ms linear forwards`,
                     animationPlayState: isLeaving ? 'paused' : 'running'
                 }} 
            />
            
            {/* Content */}
            <div className="p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        {getIcon()}
                    </div>
                    <div className="ml-3 w-0 flex-1">
                        <p className="text-sm font-medium">
                            {message}
                        </p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                        <button
                            onClick={handleClose}
                            className="inline-flex text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-1 -mr-1 w-3 h-3 bg-white bg-opacity-20 rounded-full animate-ping" />
            <div className="absolute bottom-0 left-0 -mb-1 -ml-1 w-2 h-2 bg-white bg-opacity-30 rounded-full animate-pulse" />
        </div>
    );
}

// Add custom CSS for progress animation (only if not already added)
if (typeof window !== 'undefined' && !document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
        @keyframes progress {
            from { width: 100%; }
            to { width: 0%; }
        }
    `;
    document.head.appendChild(style);
}