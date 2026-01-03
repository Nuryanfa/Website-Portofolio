import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ auth, skill }) {
    const { data, setData, patch, processing, errors } = useForm({
        name: skill.name || '',
        icon: skill.icon || '',
        level: skill.level || 50,
        category: skill.category || 'Frontend',
        order: skill.order || 0,
        is_active: skill.is_active !== undefined ? skill.is_active : true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('admin.skills.update', skill.id));
    };

    const categories = [
        'Frontend',
        'Backend', 
        'Database',
        'Tools',
        'Design',
        'Other'
    ];

    const commonIcons = [
        '⚛️', '💚', '🎨', '📜', '📘', '🐘', '🟢', '🐍', '🐹', '💾', '🍃', '📦', '🐳', '📱', '🔌'
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Edit Skill: {skill.name}
                    </h2>
                    <Link
                        href={route('admin.skills.index')}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Back to Skills
                    </Link>
                </div>
            }
        >
            <Head title={`Edit ${skill.name}`} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {/* Preview */}
                            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Preview</h3>
                                <div className="bg-white dark:bg-gray-600 rounded-lg p-4 max-w-xs">
                                    <div className="text-center">
                                        <div className="text-4xl mb-2">{data.icon || '❓'}</div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                            {data.name || 'Skill Name'}
                                        </h4>
                                        <div className="w-full bg-gray-200 dark:bg-gray-500 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${data.level}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{data.level}%</p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Skill Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Skill Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    />
                                    {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
                                </div>

                                {/* Icon */}
                                <div>
                                    <label htmlFor="icon" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Icon (Emoji) *
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="icon"
                                            value={data.icon}
                                            onChange={(e) => setData('icon', e.target.value)}
                                            className="block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            maxLength="10"
                                            required
                                        />
                                        
                                        {/* Common Icons */}
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Common icons:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {commonIcons.map((icon, index) => (
                                                    <button
                                                        key={index}
                                                        type="button"
                                                        onClick={() => setData('icon', icon)}
                                                        className="text-2xl hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded"
                                                    >
                                                        {icon}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {errors.icon && <div className="text-red-600 text-sm mt-1">{errors.icon}</div>}
                                </div>

                                {/* Level */}
                                <div>
                                    <label htmlFor="level" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Skill Level: {data.level}%
                                    </label>
                                    <input
                                        type="range"
                                        id="level"
                                        min="0"
                                        max="100"
                                        step="5"
                                        value={data.level}
                                        onChange={(e) => setData('level', parseInt(e.target.value))}
                                        className="mt-1 block w-full"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        <span>Beginner (0%)</span>
                                        <span>Expert (100%)</span>
                                    </div>
                                    {errors.level && <div className="text-red-600 text-sm mt-1">{errors.level}</div>}
                                </div>

                                {/* Category */}
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    >
                                        {categories.map((category) => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category && <div className="text-red-600 text-sm mt-1">{errors.category}</div>}
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

                                {/* Active Checkbox */}
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
                                        href={route('admin.skills.index')}
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                                    >
                                        {processing ? 'Updating...' : 'Update Skill'}
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