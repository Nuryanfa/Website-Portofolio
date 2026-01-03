import React from 'react';

export default function AboutSection() {
    return (
        <div className="h-full flex flex-col justify-between">
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Backend Engineer based in Bandung. I specialize in building high-performance server-side logic, scalable database architectures, and secure RESTful APIs.
            </p>
            
            <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-xl">🎓</span>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-mono">Education</p>
                        <p className="font-semibold text-white text-sm">Informatics Engineering</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-xl">📍</span>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-mono">Location</p>
                        <p className="font-semibold text-white text-sm">Bandung, ID</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
