import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
  try {
    await connectDB();

    // Fetch all users, excluding password field for security
    const users = await User.find({}, { password: 0 }).sort({ createdAt: -1 });

    // Transform the data to include proper user IDs
    const usersResponse = users.map(user => ({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));

    return NextResponse.json(
      {
        message: 'Users fetched successfully',
        users: usersResponse,
        count: usersResponse.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fetch users error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 