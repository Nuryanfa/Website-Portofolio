<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::latest()->paginate(20);
        
        return Inertia::render('Admin/Contacts/Index', [
            'contacts' => $contacts,
        ]);
    }

    public function show(Contact $contact)
    {
        // Mark as read when viewed
        if (!$contact->is_read) {
            $contact->update(['is_read' => true]);
        }

        return Inertia::render('Admin/Contacts/Show', [
            'contact' => $contact,
        ]);
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()->route('admin.contacts.index')
            ->with('success', 'Contact deleted successfully!');
    }

    public function markAsRead(Contact $contact)
    {
        $contact->update(['is_read' => true]);

        return back()->with('success', 'Contact marked as read!');
    }

    public function markAsUnread(Contact $contact)
    {
        $contact->update(['is_read' => false]);

        return back()->with('success', 'Contact marked as unread!');
    }
}
