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
