import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ConfirmDialog from '@/Components/ConfirmDialog';

export default function Index({ auth, projects }) {
    const [deleteDialog, setDeleteDialog] = useState({ show: false, project: null });

    const handleDeleteClick = (project) => {
        setDeleteDialog({ show: true, project });
    };

    const handleDeleteConfirm = () => {
        if (deleteDialog.project) {
            router.delete(route('admin.projects.destroy', deleteDialog.project.id), {
                preserveScroll: true,
                onSuccess: () => {
                    setDeleteDialog({ show: false, project: null });
                },
                onError: () => {
                    setDeleteDialog({ show: false, project: null });
                }
            });
        }
    };

    const handleDeleteCancel = () => {
        setDeleteDialog({ show: false, project: null });
    };

    const toggleFeatured = (project) => {
        router.patch(route('admin.projects.update', project.id), {
            ...project,
            is_featured: !project.is_featured,
        }, {
            preserveScroll: true,
        });
    };

    const toggleActive = (project) => {
        router.patch(route('admin.projects.update', project.id), {
            ...project,
            is_active: !project.is_active,
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
                        Manage Projects
                    </h2>
                    <Link
                        href={route('admin.projects.create')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add New Project
                    </Link>
                </div>
            }
        >
            <Head title="Manage Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {projects.length === 0 ? (
                                <div className="text-center py-8">
                                    <div className="text-6xl mb-4">📁</div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        No projects yet
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        Get started by creating your first project.
                                    </p>
                                    <Link
                                        href={route('admin.projects.create')}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Create Project
                                    </Link>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Project
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Technologies
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
                                            {projects.map((project) => (
                                                <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-12 w-12">
                                                                {project.image ? (
                                                                    <img
                                                                        className="h-12 w-12 rounded-lg object-cover"
                                                                        src={project.image_url || project.image}
                                                                        alt={project.title}
                                                                        onError={(e) => {
                                                                            e.target.style.display = 'none';
                                                                            e.target.nextSibling.style.display = 'flex';
                                                                        }}
                                                                    />
                                                                ) : null}
                                                                <div 
                                                                    className={`h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl ${project.image ? 'hidden' : 'flex'}`}
                                                                >
                                                                    🚀
                                                                </div>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                    {project.title}
                                                                </div>
                                                                <div className="text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate">
                                                                    {project.description}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex flex-wrap gap-1">
                                                            {project.tags.slice(0, 3).map((tag, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                            {project.tags.length > 3 && (
                                                                <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                                                                    +{project.tags.length - 3}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex flex-col gap-1">
                                                            <button
                                                                onClick={() => toggleActive(project)}
                                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                                    project.is_active
                                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                                }`}
                                                            >
                                                                {project.is_active ? 'Active' : 'Inactive'}
                                                            </button>
                                                            {project.is_featured && (
                                                                <button
                                                                    onClick={() => toggleFeatured(project)}
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                                                >
                                                                    ⭐ Featured
                                                                </button>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                                        {project.order}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <div className="flex justify-end gap-2">
                                                            <Link
                                                                href={route('admin.projects.edit', project.id)}
                                                                className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                                                            >
                                                                Edit
                                                            </Link>
                                                            <button
                                                                onClick={() => toggleFeatured(project)}
                                                                className="text-yellow-600 hover:text-yellow-900 dark:text-yellow-400 dark:hover:text-yellow-300"
                                                            >
                                                                {project.is_featured ? 'Unfeature' : 'Feature'}
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteClick(project)}
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

            {/* Delete Confirmation Dialog */}
            <ConfirmDialog
                show={deleteDialog.show}
                title="Delete Project"
                message={`Are you sure you want to delete "${deleteDialog.project?.title}"? This action cannot be undone.`}
                confirmText="Delete Project"
                cancelText="Cancel"
                onConfirm={handleDeleteConfirm}
                onCancel={handleDeleteCancel}
                type="danger"
            />
        </AuthenticatedLayout>
    );
}