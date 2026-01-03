<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Experience;
use App\Models\Contact;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        try {
            $stats = [
                'total_projects' => Project::count(),
                'active_projects' => Project::active()->count(),
                'total_skills' => Skill::count(),
                'total_experiences' => Experience::count(),
                'active_experiences' => Experience::active()->count(),
                'total_contacts' => Contact::count(),
                'unread_contacts' => Contact::where('is_read', false)->count(),
            ];

            return Inertia::render('Admin/WorkingDashboard', [
                'stats' => $stats,
            ]);
        } catch (\Exception $e) {
            // Log error and use simple dashboard
            \Log::error('Dashboard error: ' . $e->getMessage());
            return Inertia::render('Admin/TestDashboard');
        }
    }
}
