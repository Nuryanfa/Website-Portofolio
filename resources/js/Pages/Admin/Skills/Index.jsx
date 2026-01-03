import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ConfirmDialog from '@/Components/ConfirmDialog';

export default function Index({ auth, skills }) {
    const [deleteDialog, setDeleteDialog] = useState({ show: false, skill: null });

    const handleDeleteClick = (skill) => {
        setDeleteDialog({ show: true, skill });
    };

    const handleDeleteConfirm = () => {
        if (deleteDialog.skill) {
            router.delete(route('admin.skills.destroy', deleteDialog.skill.id), {
                preserveScroll: true,
                onSuccess: () => {
                    setDeleteDialog({ show: false, skill: null });
                },
                onError: () => {
                    setDeleteDialog({ show: false, skill: null });
                }
            });
        }
    };

    const handleDeleteCancel = () => {
        setDeleteDialog({ show: false, skill: null });
    };

    const toggleActive = (skill) => {
        router.patch(route('admin.skills.update', skill.id), {
            ...skill,
            is_active: !skill.is_active,
        }, {
            preserveScroll: true,
        });
    };

    const groupedSkills = skills.reduce((acc, skill) => {
        const category = skill.category || 'Other';
        if (!acc[category]) acc[category] = [];
        acc[category].push(skill);
        return acc;
    }, {});

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Manage Skills
                    </h2>
                    <Link
                        href={route('admin.skills.create')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add New Skill
                    </Link>
                </div>
            }
        >
            <Head title="Manage Skills" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {skills.length === 0 ? (
                                <div className="text-center py-8">
                                    <div className="text-6xl mb-4">⚡</div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        No skills yet
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        Get started by adding your first skill.
                                    </p>
                                    <Link
                                        href={route('admin.skills.create')}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Add Skill
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                                        <div key={category}>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                                {category}
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                                {categorySkills.map((skill) => (
                                                    <div
                                                        key={skill.id}
                                                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
                                                    >
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-2xl">{skill.icon}</span>
                                                                <span className="font-medium text-gray-900 dark:text-white">
                                                                    {skill.name}
                                                                </span>
                                                            </div>
                                                            <button
                                                                onClick={() => toggleActive(skill)}
                                                                className={`px-2 py-1 text-xs rounded-full ${
                                                                    skill.is_active
                                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                                }`}
                                                            >
                                                                {skill.is_active ? 'Active' : 'Inactive'}
                                                            </button>
                                                        </div>
                                                        
                                                        <div className="mb-3">
                                                            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                                                                <span>Level</span>
                                                                <span>{skill.level}%</span>
                                                            </div>
                                                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                                                <div
                                                                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                                                                    style={{ width: `${skill.level}%` }}
                                                                ></div>
                                                            </div>
                                                        </div>

                                                        <div className="flex justify-between items-center text-sm">
                                                            <span className="text-gray-500 dark:text-gray-400">
                                                                Order: {skill.order}
                                                            </span>
                                                            <div className="flex gap-2">
                                                                <Link
                                                                    href={route('admin.skills.edit', skill.id)}
                                                                    className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400"
                                                                >
                                                                    Edit
                                                                </Link>
                                                                <button
                                                                    onClick={() => handleDeleteClick(skill)}
                                                                    className="text-red-600 hover:text-red-900 dark:text-red-400 transition-colors duration-200"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            <ConfirmDialog
                show={deleteDialog.show}
                title="Delete Skill"
                message={`Are you sure you want to delete "${deleteDialog.skill?.name}"? This action cannot be undone.`}
                confirmText="Delete Skill"
                cancelText="Cancel"
                onConfirm={handleDeleteConfirm}
                onCancel={handleDeleteCancel}
                type="danger"
            />
        </AuthenticatedLayout>
    );
}