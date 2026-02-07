<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::ordered()->get();
        
        return Inertia::render('Admin/Projects/Index', [
            'projects' => $projects,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Projects/Create');
    }

    public function store(Request $request)
    {
        \Illuminate\Support\Facades\Log::info('Project Create Request:', $request->all());

        $rules = [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tags' => 'required|array',
            'link' => 'nullable|url',
            // 'image' => 'nullable|image|max:2048', // Removed loose validation
            'order' => 'nullable|integer',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ];

        // If a file is uploaded, validate it strictly
        if ($request->hasFile('image')) {
            $rules['image'] = 'image|max:2048';
        } else {
            $rules['image'] = 'nullable';
        }

        $validated = $request->validate($rules);

        if ($request->hasFile('image')) {
            \Illuminate\Support\Facades\Log::info('Processing create file upload...');
            $path = $request->file('image')->store('projects', 'public');
            $validated['image'] = $path;
            \Illuminate\Support\Facades\Log::info('File stored at: ' . $path);
        }

        $project = Project::create($validated);
        \Illuminate\Support\Facades\Log::info('Project created: ' . $project->id);

        return redirect()->route('admin.projects.index')
            ->with('success', "Project '{$project->title}' created successfully!");
    }

    public function edit(Project $project)
    {
        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project,
        ]);
    }

    public function update(Request $request, Project $project)
    {
        \Illuminate\Support\Facades\Log::info('Project Update Request:', $request->all());
        \Illuminate\Support\Facades\Log::info('Has File: ' . ($request->hasFile('image') ? 'Yes' : 'No'));

        $rules = [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tags' => 'required|array',
            'link' => 'nullable|url',
            // 'image' => 'nullable', // Removed loose validation
            'order' => 'nullable|integer',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ];

        // If a file is uploaded, validate it strictly
        if ($request->hasFile('image')) {
            $rules['image'] = 'image|max:2048';
        } else {
            $rules['image'] = 'nullable';
        }

        $validated = $request->validate($rules);

        // Handle Image Upload
        if ($request->hasFile('image')) {
            \Illuminate\Support\Facades\Log::info('Processing file upload...');
            // Delete old image if exists
            if ($project->image && \Illuminate\Support\Facades\Storage::disk('public')->exists($project->image)) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($project->image);
            }

            $path = $request->file('image')->store('projects', 'public');
            $validated['image'] = $path;
            
            \Illuminate\Support\Facades\Log::info('File stored at: ' . $path);
        } else {
            // Keep existing image if no new file uploaded
            unset($validated['image']);
            \Illuminate\Support\Facades\Log::info('No file uploaded, keeping existing image.');
        }

        $project->update($validated);

        return redirect()->route('admin.projects.index')
            ->with('success', "Project '{$project->title}' updated successfully!");
    }

    public function destroy(Project $project)
    {
        $title = $project->title;
        $project->delete();

        return redirect()->route('admin.projects.index')
            ->with('success', "Project '{$title}' deleted successfully!");
    }
}
