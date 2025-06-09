// src/app/api/data/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const data = await fs.readFile(
      path.join(process.cwd(), 'src', 'data', 'data.json'),
      'utf-8'
    );
    return NextResponse.json(JSON.parse(data));
  } catch { // void error
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const newData = await request.json();
    await fs.writeFile(
      path.join(process.cwd(), 'src', 'data', 'data.json'),
      JSON.stringify(newData, null, 2)
    );
    return NextResponse.json({ message: 'Data updated successfully' });
  } catch { // void error
    return NextResponse.json(
      { error: 'Failed to update data' },
      { status: 500 }
    );
  }
}