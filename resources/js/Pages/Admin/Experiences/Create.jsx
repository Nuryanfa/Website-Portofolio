import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        company: '',
        title: '',
        description: '',
        year: '',
        order: 0,
        is_active: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.experiences.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Add New Experience
                    </h2>
                    <Link
                        href={route('admin.experiences.index')}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Back to List
                    </Link>
                </div>
            }
        >
            <Head title="Create Experience" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Company */}
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Company / Organization *
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        value={data.company}
                                        onChange={(e) => setData('company', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    />
                                    {errors.company && <div className="text-red-600 text-sm mt-1">{errors.company}</div>}
                                </div>

                                {/* Title */}
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Job Title *
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    />
                                    {errors.title && <div className="text-red-600 text-sm mt-1">{errors.title}</div>}
                                </div>

                                {/* Year */}
                                <div>
                                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Period (e.g., "2023 - Present") *
                                    </label>
                                    <input
                                        type="text"
                                        id="year"
                                        value={data.year}
                                        onChange={(e) => setData('year', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    />
                                    {errors.year && <div className="text-red-600 text-sm mt-1">{errors.year}</div>}
                                </div>

                                {/* Description */}
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Description *
                                    </label>
                                    <textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    />
                                    {errors.description && <div className="text-red-600 text-sm mt-1">{errors.description}</div>}
                                </div>

                                {/* Order */}
                                <div>
                                    <label htmlFor="order" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Display Order
                                    </label>
                                    <input
                                        type="number"
                                        id="order"
                                        value={data.order}
                                        onChange={(e) => setData('order', parseInt(e.target.value) || 0)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    {errors.order && <div className="text-red-600 text-sm mt-1">{errors.order}</div>}
                                </div>

                                {/* Active */}
                                <div className="flex items-center">
                                    <input
                                        id="is_active"
                                        type="checkbox"
                                        checked={data.is_active}
                                        onChange={(e) => setData('is_active', e.target.checked)}
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                        Active (show on portfolio)
                                    </label>
                                </div>

                                {/* Submit Buttons */}
                                <div className="flex justify-end gap-4">
                                    <Link
                                        href={route('admin.experiences.index')}
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg disabled:opacity-50 transition-colors"
                                    >
                                        {processing ? 'Saving...' : 'Create Experience'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
