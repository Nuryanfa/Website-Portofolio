import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ auth, project }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PATCH',
        title: project.title || '',
        description: project.description || '',
        image: null, // File object or null
        tags: project.tags || [],
        link: project.link || '',
        order: project.order || 0,
        is_featured: project.is_featured || false,
        is_active: project.is_active !== undefined ? project.is_active : true,
    });

    const [tagInput, setTagInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.projects.update', project.id), {
            forceFormData: true,
        });
    };

    const addTag = () => {
        if (tagInput.trim() && !data.tags.includes(tagInput.trim())) {
            setData('tags', [...data.tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove) => {
        setData('tags', data.tags.filter(tag => tag !== tagToRemove));
    };

    const handleTagKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Edit Project: {project.title}
                    </h2>
                    <Link
                        href={route('admin.projects.index')}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Back to Projects
                    </Link>
                </div>
            }
        >
            <Head title={`Edit ${project.title}`} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            {/* Preview */}
                            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Preview</h3>
                                <div className="bg-white dark:bg-gray-600 rounded-lg shadow-md overflow-hidden max-w-sm">
                                    <div className="relative h-32 bg-gradient-to-br from-blue-500 to-purple-600">
                                        {(data.image || project.image) ? (
                                            <img
                                                src={
                                                    data.image instanceof File 
                                                        ? URL.createObjectURL(data.image) 
                                                        : (project.image ? `/storage/${project.image}` : '')
                                                }
                                                alt={data.title}
                                                className="w-full h-full object-cover object-top"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                        ) : null}
                                        <div 
                                            className={`w-full h-full flex items-center justify-center text-white text-4xl ${(data.image || project.image) ? 'hidden' : 'flex'}`}
                                        >
                                            🚀
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h4 className="font-bold text-gray-900 dark:text-white">{data.title || 'Project Title'}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                                            {data.description || 'Project description...'}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            {data.tags.slice(0, 3).map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Title */}
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Project Title *
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    />
                                    {errors.title && <div className="text-red-600 text-sm mt-1">{errors.title}</div>}
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
                                        className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                    />
                                    {errors.description && <div className="text-red-600 text-sm mt-1">{errors.description}</div>}
                                </div>

                                {/* Image Upload */}
                                <div>
                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Project Image
                                    </label>
                                    <input
                                        type="file"
                                        id="image"
                                        accept="image/*"
                                        onChange={(e) => setData('image', e.target.files[0])}
                                        className="mt-1 block w-full text-sm text-gray-500
                                            file:mr-4 file:py-2 file:px-4
                                            file:rounded-full file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-blue-50 file:text-blue-700
                                            hover:file:bg-blue-100
                                            dark:file:bg-gray-700 dark:file:text-gray-300"
                                    />
                                    {errors.image && <div className="text-red-600 text-sm mt-1">{errors.image}</div>}
                                </div>

                                {/* Tags */}
                                <div>
                                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Technologies *
                                    </label>
                                    <div className="mt-1 flex gap-2">
                                        <input
                                            type="text"
                                            value={tagInput}
                                            onChange={(e) => setTagInput(e.target.value)}
                                            onKeyPress={handleTagKeyPress}
                                            className="flex-1 rounded-md border-gray-300 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            placeholder="Add technology..."
                                        />
                                        <button
                                            type="button"
                                            onClick={addTag}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Add
                                        </button>
                                    </div>
                                    
                                    {/* Display Tags */}
                                    {data.tags.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {data.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                                                >
                                                    {tag}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeTag(tag)}
                                                        className="ml-2 text-blue-400 hover:text-blue-600"
                                                    >
                                                        ×
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    {errors.tags && <div className="text-red-600 text-sm mt-1">{errors.tags}</div>}
                                </div>

                                {/* Project Link */}
                                <div>
                                    <label htmlFor="link" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Project Link
                                    </label>
                                    <input
                                        type="url"
                                        id="link"
                                        value={data.link}
                                        onChange={(e) => setData('link', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    {errors.link && <div className="text-red-600 text-sm mt-1">{errors.link}</div>}
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
                                        className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    {errors.order && <div className="text-red-600 text-sm mt-1">{errors.order}</div>}
                                </div>

                                {/* Checkboxes */}
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <input
                                            id="is_featured"
                                            type="checkbox"
                                            checked={data.is_featured}
                                            onChange={(e) => setData('is_featured', e.target.checked)}
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="is_featured" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                            Featured Project
                                        </label>
                                    </div>

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
                                </div>

                                {/* Submit Buttons */}
                                <div className="flex justify-end gap-4">
                                    <Link
                                        href={route('admin.projects.index')}
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 flex items-center gap-2"
                                    >
                                        {processing ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Updating...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Update Project
                                            </>
                                        )}
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