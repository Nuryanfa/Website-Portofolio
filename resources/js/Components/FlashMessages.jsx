import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import Toast from './Toast';

export default function FlashMessages() {
    const page = usePage();
    const flash = page?.props?.flash || {};
    const [toasts, setToasts] = useState([]);
    const [nextId, setNextId] = useState(1);

    useEffect(() => {
        // Handle success messages
        if (flash?.success) {
            addToast(flash.success, 'success');
        }
        
        // Handle error messages
        if (flash?.error) {
            addToast(flash.error, 'error');
        }
        
        // Handle warning messages
        if (flash?.warning) {
            addToast(flash.warning, 'warning');
        }
        
        // Handle info messages
        if (flash?.info) {
            addToast(flash.info, 'info');
        }
    }, [flash]);

    const addToast = (message, type) => {
        const id = nextId;
        setNextId(prev => prev + 1);
        
        const newToast = {
            id,
            message,
            type,
            show: true
        };
        
        setToasts(prev => [...prev, newToast]);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    return (
        <div className="toast-container">
            {toasts.map((toast, index) => (
                <div 
                    key={toast.id} 
                    style={{ 
                        position: 'fixed',
                        top: `${16 + (index * 80)}px`, // Stack toasts
                        right: '16px',
                        zIndex: 9999 + index
                    }}
                >
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        show={toast.show}
                        onClose={() => removeToast(toast.id)}
                        duration={5000}
                    />
                </div>
            ))}
        </div>
    );
}