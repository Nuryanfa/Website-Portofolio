import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ConfirmDialog from '@/Components/ConfirmDialog';

export default function Index({ auth, experiences }) {
    const [deleteDialog, setDeleteDialog] = useState({ show: false, experience: null });

    const handleDeleteClick = (experience) => {
        setDeleteDialog({ show: true, experience });
    };

    const handleDeleteConfirm = () => {
        if (deleteDialog.experience) {
            router.delete(route('admin.experiences.destroy', deleteDialog.experience.id), {
                preserveScroll: true,
                onSuccess: () => {
                    setDeleteDialog({ show: false, experience: null });
                },
                onError: () => {
                    setDeleteDialog({ show: false, experience: null });
                }
            });
        }
    };

    const handleDeleteCancel = () => {
        setDeleteDialog({ show: false, experience: null });
    };

    const toggleActive = (experience) => {
        router.patch(route('admin.experiences.update', experience.id), {
            ...experience,
            is_active: !experience.is_active,
        }, {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Manage Experiences
                    </h2>
                    <Link
                        href={route('admin.experiences.create')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add New Experience
                    </Link>
                </div>
            }
        >
            <Head title="Manage Experiences" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {experiences.length === 0 ? (
                                <div className="text-center py-8">
                                    <div className="text-6xl mb-4">💼</div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        No experiences yet
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        Add your work history.
                                    </p>
                                    <Link
                                        href={route('admin.experiences.create')}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Create Experience
                                    </Link>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Company / Title
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Period
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Order
                                                </th>
                                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                            {experiences.map((experience) => (
                                                <tr key={experience.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                            {experience.company}
                                                        </div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            {experience.title}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                        {experience.year}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                         <button
                                                                onClick={() => toggleActive(experience)}
                                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                                    experience.is_active
                                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                                }`}
                                                            >
                                                                {experience.is_active ? 'Active' : 'Inactive'}
                                                            </button>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                                        {experience.order}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <div className="flex justify-end gap-2">
                                                            <Link
                                                                href={route('admin.experiences.edit', experience.id)}
                                                                className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <button
                                                                onClick={() => handleDeleteClick(experience)}
                                                                className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ConfirmDialog
                show={deleteDialog.show}
                title="Delete Experience"
                message={`Are you sure you want to delete "${deleteDialog.experience?.title} at ${deleteDialog.experience?.company}"? This action cannot be undone.`}
                confirmText="Delete Experience"
                cancelText="Cancel"
                onConfirm={handleDeleteConfirm}
                onCancel={handleDeleteCancel}
                type="danger"
            />
        </AuthenticatedLayout>
    );
}
