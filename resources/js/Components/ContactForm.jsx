import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                setShowSuccess(true);
                reset();
                setTimeout(() => setShowSuccess(false), 5000);
                setIsSubmitting(false);
            },
            onError: () => {
                setIsSubmitting(false);
            },
        });
    };

    return (
        <div className="max-w-2xl mx-auto">
            {showSuccess && (
                <div className="mb-6 p-4 bg-green-500 text-white rounded-lg animate-fade-in">
                    <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-semibold">Pesan berhasil dikirim! Saya akan segera menghubungi Anda.</span>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${
                            errors.name ? 'border-red-500' : 'border-white/20'
                        } rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all`}
                        placeholder="Jane Doe"
                        required
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-300">{errors.name}</p>
                    )}
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${
                            errors.email ? 'border-red-500' : 'border-white/20'
                        } rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all`}
                        placeholder="janedoe@example.com"
                        required
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-300">{errors.email}</p>
                    )}
                </div>

                {/* Subject Input */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                        Subjek
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={data.subject}
                        onChange={(e) => setData('subject', e.target.value)}
                        className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${
                            errors.subject ? 'border-red-500' : 'border-white/20'
                        } rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all`}
                        placeholder="Project Collaboration"
                        required
                    />
                    {errors.subject && (
                        <p className="mt-1 text-sm text-red-300">{errors.subject}</p>
                    )}
                </div>

                {/* Message Textarea */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Pesan
                    </label>
                    <textarea
                        id="message"
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                        rows={5}
                        className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${
                            errors.message ? 'border-red-500' : 'border-white/20'
                        } rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none`}
                        placeholder=""
                        required
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-300">{errors.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing || isSubmitting}
                    className="w-full px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                    {processing || isSubmitting ? (
                        <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Mengirim...
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Kirim Pesan
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
