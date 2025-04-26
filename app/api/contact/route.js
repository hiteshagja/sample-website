import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    // Validate the data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create the data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    // Create the contacts file if it doesn't exist
    const contactsFile = path.join(dataDir, 'contacts.json');
    if (!fs.existsSync(contactsFile)) {
      fs.writeFileSync(contactsFile, JSON.stringify([]));
    }

    // Read existing contacts
    const contacts = JSON.parse(fs.readFileSync(contactsFile, 'utf8'));

    // Add new contact
    const newContact = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    };

    contacts.push(newContact);

    // Write back to file
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
} 