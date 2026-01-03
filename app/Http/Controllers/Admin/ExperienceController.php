<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experience::ordered()->get();
        return Inertia::render('Admin/Experiences/Index', ['experiences' => $experiences]);
    }

    public function create()
    {
        return Inertia::render('Admin/Experiences/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'company' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'year' => 'required|string|max:255',
            'is_active' => 'boolean',
            'order' => 'nullable|integer',
        ]);

        Experience::create($validated);

        return redirect()->route('admin.experiences.index')->with('success', 'Experience created successfully.');
    }

    public function edit(Experience $experience)
    {
        return Inertia::render('Admin/Experiences/Edit', ['experience' => $experience]);
    }

    public function update(Request $request, Experience $experience)
    {
        $validated = $request->validate([
            'company' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'year' => 'required|string|max:255',
            'is_active' => 'boolean',
            'order' => 'nullable|integer',
        ]);

        $experience->update($validated);

        return redirect()->route('admin.experiences.index')->with('success', 'Experience updated successfully.');
    }

    public function destroy(Experience $experience)
    {
        $experience->delete();
        return redirect()->route('admin.experiences.index')->with('success', 'Experience deleted successfully.');
    }
}
