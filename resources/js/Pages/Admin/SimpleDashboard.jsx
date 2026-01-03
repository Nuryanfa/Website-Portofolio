import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function SimpleDashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-4">Welcome to Admin Dashboard!</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8">
                                    Manage your portfolio content from here.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Manage Projects */}
                                    <Link
                                        href={route('admin.projects.index')}
                                        className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg transition-colors"
                                    >
                                        <div className="text-4xl mb-2">📁</div>
                                        <h4 className="text-lg font-semibold">Manage Projects</h4>
                                        <p className="text-sm opacity-90">Add, edit, delete projects</p>
                                    </Link>

                                    {/* Manage Skills */}
                                    <Link
                                        href={route('admin.skills.index')}
                                        className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-lg transition-colors"
                                    >
                                        <div className="text-4xl mb-2">⚡</div>
                                        <h4 className="text-lg font-semibold">Manage Skills</h4>
                                        <p className="text-sm opacity-90">Update your skills</p>
                                    </Link>

                                    {/* View Messages */}
                                    <Link
                                        href={route('admin.contacts.index')}
                                        className="bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-lg transition-colors"
                                    >
                                        <div className="text-4xl mb-2">💬</div>
                                        <h4 className="text-lg font-semibold">View Messages</h4>
                                        <p className="text-sm opacity-90">Read contact messages</p>
                                    </Link>
                                </div>

                                <div className="mt-8">
                                    <a
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        View Portfolio
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}