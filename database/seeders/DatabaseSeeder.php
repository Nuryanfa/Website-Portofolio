<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@portfolio.com',
            'password' => bcrypt('mhmdyan@123'), // Change this in production!
        ]);

        // Seed projects and skills
        $this->call([
            ProjectSeeder::class,
            SkillSeeder::class,
        ]);
    }
}
