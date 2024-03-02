import { NextRequest, NextResponse } from 'next/server';
import { schema } from '../schema';
import prisma from '@/config/db';

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma?.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();

  // Validate body data
  const validation = schema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });

  // Check if user is exist or not
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  // If not exists
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  // If exits we update our database
  // id: specify where we update data
  // data: specify what we updated
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  // Check if user is exist or not
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  // If not exists
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  // If exists, delete the user
  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });

  return NextResponse.json({});
}
