import { NextRequest, NextResponse } from 'next/server';
import { schema } from './schema';
import prisma from '@/config/db';

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({});
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });

  // Check is email already exits
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  // If exist
  if (user) return NextResponse.json({ error: 'User already exists' }, { status: 400 });

  // If email not exist create a new record
  const neUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(neUser, { status: 201 });
}
