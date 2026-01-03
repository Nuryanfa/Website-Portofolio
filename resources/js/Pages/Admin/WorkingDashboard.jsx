import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function WorkingDashboard({ auth, stats = {} }) {
    // Safe stats with defaults
    const safeStats = {
        total_projects: stats.total_projects || 0,
        active_projects: stats.active_projects || 0,
        total_skills: stats.total_skills || 0,
        total_contacts: stats.total_contacts || 0,
        unread_contacts: stats.unread_contacts || 0,
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Back to Portfolio */}
                    <div className="mb-6">
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Portfolio
                        </a>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* Total Projects */}
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Projects</p>
                                        <p className="text-3xl font-bold text-gray-900 dark:text-white">{safeStats.total_projects}</p>
                                    </div>
                                    <div className="text-4xl">🚀</div>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                    {safeStats.active_projects} active
                                </p>
                            </div>
                        </div>

                        {/* Total Skills */}
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Skills</p>
                                        <p className="text-3xl font-bold text-gray-900 dark:text-white">{safeStats.total_skills}</p>
                                    </div>
                                    <div className="text-4xl">⚡</div>
                                </div>
                            </div>
                        </div>

                        {/* Total Contacts */}
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Messages</p>
                                        <p className="text-3xl font-bold text-gray-900 dark:text-white">{safeStats.total_contacts}</p>
                                    </div>
                                    <div className="text-4xl">📧</div>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                    {safeStats.unread_contacts} unread
                                </p>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-blue-500 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-white">
                                <p className="text-sm opacity-90">Quick Actions</p>
                                <div className="mt-4 space-y-2">
                                    <Link
                                        href={route('admin.projects.create')}
                                        className="block text-sm hover:underline"
                                    >
                                        + New Project
                                    </Link>
                                    <Link
                                        href={route('admin.skills.create')}
                                        className="block text-sm hover:underline"
                                    >
                                        + New Skill
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Manage Projects */}
                        <Link
                            href={route('admin.projects.index')}
                            className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-5xl">📁</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Manage Projects</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">View, edit, and delete projects</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Manage Skills */}
                        <Link
                            href={route('admin.skills.index')}
                            className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-5xl">🎯</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Manage Skills</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Update your skill levels</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* View Messages */}
                        <Link
                            href={route('admin.contacts.index')}
                            className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-5xl relative">
                                        💬
                                        {safeStats.unread_contacts > 0 && (
                                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                {safeStats.unread_contacts}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">View Messages</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Read contact messages</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}