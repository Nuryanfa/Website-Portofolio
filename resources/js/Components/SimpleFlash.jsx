import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';

export default function SimpleFlash() {
    const [message, setMessage] = useState(null);
    const [type, setType] = useState('success');
    
    try {
        const page = usePage();
        const flash = page?.props?.flash;
        
        useEffect(() => {
            if (flash?.success) {
                setMessage(flash.success);
                setType('success');
                setTimeout(() => setMessage(null), 5000);
            } else if (flash?.error) {
                setMessage(flash.error);
                setType('error');
                setTimeout(() => setMessage(null), 5000);
            }
        }, [flash]);
    } catch (error) {
        console.log('Flash message error:', error);
        return null;
    }

    if (!message) return null;

    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    return (
        <div className={`fixed top-4 right-4 z-50 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg max-w-sm`}>
            <div className="flex items-center justify-between">
                <span>{message}</span>
                <button 
                    onClick={() => setMessage(null)}
                    className="ml-4 text-white hover:text-gray-200"
                >
                    ×
                </button>
            </div>
        </div>
    );
}