<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SiteHealthTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the home page loads successfully.
     */
    public function test_home_page_loads(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /**
     * Test the contact endpoint handles requests.
     */
    public function test_contact_form_submission(): void
    {
        $response = $this->post('/contact', [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'message' => 'This is a test message.',
        ]);

        // Assuming it redirects back or returns success
        // Based on typical controller logic, usually a redirect
        $response->assertStatus(302); 
    }

    /**
     * Test admin dashboard redirects unauthenticated users.
     */
    public function test_admin_dashboard_redirects_unauthenticated(): void
    {
        $response = $this->get('/admin/dashboard');

        $response->assertStatus(302);
        $response->assertRedirect('/login');
    }
}
