import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'src', 'database', 'db.json');

function getDB() {
  const data = fs.readFileSync(DB_PATH, 'utf8');
  return JSON.parse(data);
}

function saveDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');
    const db = getDB();

    if (role) {
      const pool = db.questions[role] || db.questions.frontend;
      return NextResponse.json(pool);
    }

    return NextResponse.json(db.interviews);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const db = getDB();
    
    const newInterview = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...body
    };
    
    db.interviews.push(newInterview);
    saveDB(db);
    
    return NextResponse.json(newInterview, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save interview' }, { status: 500 });
  }
}
