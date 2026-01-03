<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        // Save to database
        Contact::create($validated);

        // Log the contact message
        Log::info('New contact message received', [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'subject' => $validated['subject'],
        ]);

        // Option 1: Send email (uncomment when email is configured)
        /*
        try {
            Mail::send('emails.contact', $validated, function ($message) use ($validated) {
                $message->to('your.email@example.com')
                    ->subject('New Contact: ' . $validated['subject'])
                    ->replyTo($validated['email'], $validated['name']);
            });
        } catch (\Exception $e) {
            Log::error('Failed to send contact email: ' . $e->getMessage());
        }
        */

        // Option 2: Send to Telegram/Discord/Slack webhook
        // $this->sendToWebhook($validated);

        return back()->with('success', 'Pesan berhasil dikirim!');
    }

    /**
     * Example: Send to webhook (Telegram, Discord, Slack, etc.)
     */
    private function sendToWebhook($data)
    {
        // Example for Discord webhook
        /*
        $webhookUrl = env('DISCORD_WEBHOOK_URL');
        
        Http::post($webhookUrl, [
            'content' => "**New Contact Message**\n" .
                        "**Name:** {$data['name']}\n" .
                        "**Email:** {$data['email']}\n" .
                        "**Subject:** {$data['subject']}\n" .
                        "**Message:**\n{$data['message']}"
        ]);
        */
    }
}
