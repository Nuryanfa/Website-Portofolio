import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    // Auto redirect to admin dashboard
    window.location.href = route('admin.dashboard');
    
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-4">Welcome to Portfolio Admin!</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Redirecting to admin dashboard...
                                </p>
                                
                                <div className="space-y-4">
                                    <Link
                                        href={route('admin.dashboard')}
                                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                                        </svg>
                                        Go to Admin Dashboard
                                    </Link>
                                    
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        <p>Or use these quick links:</p>
                                        <div className="flex justify-center gap-4 mt-2">
                                            <Link href={route('admin.projects.index')} className="text-blue-600 hover:text-blue-800">
                                                Manage Projects
                                            </Link>
                                            <Link href={route('admin.skills.index')} className="text-blue-600 hover:text-blue-800">
                                                Manage Skills
                                            </Link>
                                            <Link href={route('admin.contacts.index')} className="text-blue-600 hover:text-blue-800">
                                                View Messages
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
