import React from 'react';

export default function LoadingSpinner({ 
    size = 'md', 
    color = 'blue', 
    text = null,
    overlay = false 
}) {
    const getSizeClasses = () => {
        switch (size) {
            case 'sm': return 'w-4 h-4';
            case 'md': return 'w-6 h-6';
            case 'lg': return 'w-8 h-8';
            case 'xl': return 'w-12 h-12';
            default: return 'w-6 h-6';
        }
    };

    const getColorClasses = () => {
        switch (color) {
            case 'blue': return 'text-blue-600';
            case 'green': return 'text-green-600';
            case 'red': return 'text-red-600';
            case 'yellow': return 'text-yellow-600';
            case 'purple': return 'text-purple-600';
            case 'white': return 'text-white';
            default: return 'text-blue-600';
        }
    };

    const spinner = (
        <div className="flex items-center justify-center">
            <div className="relative">
                {/* Outer ring */}
                <div className={`${getSizeClasses()} ${getColorClasses()} animate-spin`}>
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                        <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                        />
                        <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                </div>
                
                {/* Inner pulse */}
                <div className={`absolute inset-0 ${getSizeClasses()} ${getColorClasses()} animate-pulse opacity-50`}>
                    <div className="w-full h-full bg-current rounded-full" />
                </div>
            </div>
            
            {text && (
                <span className={`ml-3 text-sm font-medium ${getColorClasses()}`}>
                    {text}
                </span>
            )}
        </div>
    );

    if (overlay) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl">
                    {spinner}
                </div>
            </div>
        );
    }

    return spinner;
}

// Pulse dots variant
export function PulseDots({ color = 'blue' }) {
    const getColorClasses = () => {
        switch (color) {
            case 'blue': return 'bg-blue-600';
            case 'green': return 'bg-green-600';
            case 'red': return 'bg-red-600';
            case 'yellow': return 'bg-yellow-600';
            case 'purple': return 'bg-purple-600';
            case 'white': return 'bg-white';
            default: return 'bg-blue-600';
        }
    };

    return (
        <div className="flex space-x-1">
            <div className={`w-2 h-2 ${getColorClasses()} rounded-full animate-pulse`} style={{ animationDelay: '0ms' }} />
            <div className={`w-2 h-2 ${getColorClasses()} rounded-full animate-pulse`} style={{ animationDelay: '150ms' }} />
            <div className={`w-2 h-2 ${getColorClasses()} rounded-full animate-pulse`} style={{ animationDelay: '300ms' }} />
        </div>
    );
}

// Bouncing dots variant
export function BouncingDots({ color = 'blue' }) {
    const getColorClasses = () => {
        switch (color) {
            case 'blue': return 'bg-blue-600';
            case 'green': return 'bg-green-600';
            case 'red': return 'bg-red-600';
            case 'yellow': return 'bg-yellow-600';
            case 'purple': return 'bg-purple-600';
            case 'white': return 'bg-white';
            default: return 'bg-blue-600';
        }
    };

    return (
        <div className="flex space-x-1">
            <div className={`w-2 h-2 ${getColorClasses()} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }} />
            <div className={`w-2 h-2 ${getColorClasses()} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }} />
            <div className={`w-2 h-2 ${getColorClasses()} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }} />
        </div>
    );
}