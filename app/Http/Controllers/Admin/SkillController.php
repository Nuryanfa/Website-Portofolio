<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillController extends Controller
{
    public function index()
    {
        $skills = Skill::ordered()->get();
        
        return Inertia::render('Admin/Skills/Index', [
            'skills' => $skills,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Skills/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'required|string|max:10',
            'level' => 'required|integer|min:0|max:100',
            'category' => 'nullable|string|max:255',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $skill = Skill::create($validated);

        return redirect()->route('admin.skills.index')
            ->with('success', "Skill '{$skill->name}' created successfully!");
    }

    public function edit(Skill $skill)
    {
        return Inertia::render('Admin/Skills/Edit', [
            'skill' => $skill,
        ]);
    }

    public function update(Request $request, Skill $skill)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'icon' => 'required|string|max:10',
            'level' => 'required|integer|min:0|max:100',
            'category' => 'nullable|string|max:255',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $skill->update($validated);

        return redirect()->route('admin.skills.index')
            ->with('success', "Skill '{$skill->name}' updated successfully!");
    }

    public function destroy(Skill $skill)
    {
        $name = $skill->name;
        $skill->delete();

        return redirect()->route('admin.skills.index')
            ->with('success', "Skill '{$name}' deleted successfully!");
    }
}
