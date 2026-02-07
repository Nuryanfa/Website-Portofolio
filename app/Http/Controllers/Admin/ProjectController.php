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
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tags' => 'required|array',
            'link' => 'nullable|url',
            'image' => 'nullable|image|max:2048', // Validate as image file
            'order' => 'nullable|integer',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects', 'public');
            $validated['image'] = $path; // Store the path (e.g., projects/filename.jpg)
        }

        $project = Project::create($validated);

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
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tags' => 'required|array',
            'link' => 'nullable|url',
            'image' => 'nullable', // Allow string (existing path) or file (new upload)
            'order' => 'nullable|integer',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ]);

        // Handle Image Upload
        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($project->image && \Illuminate\Support\Facades\Storage::disk('public')->exists($project->image)) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($project->image);
            }

            $path = $request->file('image')->store('projects', 'public');
            $validated['image'] = $path;
        } else {
            // Keep existing image if no new file uploaded
            // If the frontend sends null or doesn't send 'image' when keeping existing, we don't overwrite it.
            // However, our frontend sends the existing string URL if not changed? 
            // Wait, standard file input doesn't allow setting value.
            // If user doesn't select a file, data.image is null (in React state initialization I set it to null or URL?)
            // In Edit.jsx I set: `image: null`. 
            // So if user doesn't touch it, it sends `null`.
            unset($validated['image']); // Don't update image column if no file uploaded
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
