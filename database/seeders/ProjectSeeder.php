<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing projects to prevent duplicates
        Project::truncate();
        
        $projects = [
            [
                'title' => 'E-Commerce Platform',
                'description' => 'Platform e-commerce modern dengan fitur lengkap, payment gateway, dan admin dashboard.',
                'tags' => ['Laravel', 'React', 'Tailwind', 'MySQL'],
                'link' => 'https://github.com/yourusername/ecommerce',
                'order' => 1,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'title' => 'Task Management App',
                'description' => 'Aplikasi manajemen tugas dengan real-time collaboration dan notifikasi.',
                'tags' => ['React', 'Node.js', 'MongoDB', 'Socket.io'],
                'link' => 'https://github.com/yourusername/taskmanager',
                'order' => 2,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'title' => 'Portfolio Website',
                'description' => 'Website portfolio interaktif dengan animasi smooth dan responsive design.',
                'tags' => ['React', 'Tailwind', 'Inertia', 'Laravel'],
                'link' => 'https://github.com/yourusername/portfolio',
                'order' => 3,
                'is_featured' => false,
                'is_active' => true,
            ],
            [
                'title' => 'Blog Platform',
                'description' => 'Platform blog dengan markdown editor, categories, tags, dan comment system.',
                'tags' => ['Laravel', 'Vue.js', 'Tailwind'],
                'link' => 'https://github.com/yourusername/blog',
                'order' => 4,
                'is_featured' => false,
                'is_active' => true,
            ],
            [
                'title' => 'Weather App',
                'description' => 'Aplikasi cuaca dengan data real-time dari OpenWeather API.',
                'tags' => ['React', 'API', 'Tailwind'],
                'link' => 'https://github.com/yourusername/weather',
                'order' => 5,
                'is_featured' => false,
                'is_active' => true,
            ],
            [
                'title' => 'Chat Application',
                'description' => 'Real-time chat application dengan private & group messaging.',
                'tags' => ['Node.js', 'Socket.io', 'React', 'MongoDB'],
                'link' => 'https://github.com/yourusername/chat',
                'order' => 6,
                'is_featured' => true,
                'is_active' => true,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
