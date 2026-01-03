<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing skills to prevent duplicates
        Skill::truncate();
        
        $skills = [
            // Frontend
            ['name' => 'React', 'icon' => '⚛️', 'level' => 90, 'category' => 'Frontend', 'order' => 1],
            ['name' => 'Vue.js', 'icon' => '💚', 'level' => 85, 'category' => 'Frontend', 'order' => 2],
            ['name' => 'Tailwind CSS', 'icon' => '🎨', 'level' => 92, 'category' => 'Frontend', 'order' => 3],
            ['name' => 'JavaScript', 'icon' => '📜', 'level' => 88, 'category' => 'Frontend', 'order' => 4],
            ['name' => 'TypeScript', 'icon' => '📘', 'level' => 80, 'category' => 'Frontend', 'order' => 5],
            
            // Backend
            ['name' => 'Laravel', 'icon' => '🐘', 'level' => 88, 'category' => 'Backend', 'order' => 6],
            ['name' => 'Node.js', 'icon' => '🟢', 'level' => 75, 'category' => 'Backend', 'order' => 7],
            ['name' => 'PHP', 'icon' => '🐘', 'level' => 85, 'category' => 'Backend', 'order' => 8],
            ['name' => 'Python', 'icon' => '🐍', 'level' => 70, 'category' => 'Backend', 'order' => 9],
            ['name' => 'Golang', 'icon' => '🐹', 'level' => 65, 'category' => 'Backend', 'order' => 10],
            
            // Database
            ['name' => 'MySQL', 'icon' => '💾', 'level' => 80, 'category' => 'Database', 'order' => 11],
            ['name' => 'PostgreSQL', 'icon' => '🐘', 'level' => 75, 'category' => 'Database', 'order' => 12],
            ['name' => 'MongoDB', 'icon' => '🍃', 'level' => 70, 'category' => 'Database', 'order' => 13],
            
            // Tools & Others
            ['name' => 'Git', 'icon' => '📦', 'level' => 85, 'category' => 'Tools', 'order' => 14],
            ['name' => 'Docker', 'icon' => '🐳', 'level' => 65, 'category' => 'Tools', 'order' => 15],
            ['name' => 'Responsive Design', 'icon' => '📱', 'level' => 92, 'category' => 'Design', 'order' => 16],
            ['name' => 'REST API', 'icon' => '🔌', 'level' => 88, 'category' => 'Backend', 'order' => 17],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
