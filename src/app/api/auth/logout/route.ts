import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // For JWT tokens, we don't need to invalidate them server-side
    // The client will remove the token from localStorage
    return NextResponse.json(
      { message: 'Logout successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 