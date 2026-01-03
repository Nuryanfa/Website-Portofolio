import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function TestDashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Test Dashboard</h2>}
        >
            <Head title="Test Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-2xl font-bold mb-4">Admin Dashboard Working!</h3>
                            <p className="mb-4">If you can see this, the basic dashboard is working.</p>
                            
                            <div className="space-y-4">
                                <a 
                                    href="/admin/projects" 
                                    className="block bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
                                >
                                    Manage Projects
                                </a>
                                <a 
                                    href="/admin/skills" 
                                    className="block bg-green-500 text-white p-4 rounded hover:bg-green-600"
                                >
                                    Manage Skills
                                </a>
                                <a 
                                    href="/admin/contacts" 
                                    className="block bg-purple-500 text-white p-4 rounded hover:bg-purple-600"
                                >
                                    View Messages
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}