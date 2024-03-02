import { NextRequest, NextResponse } from 'next/server';
import { schema } from '../schema';

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: 'Loin' });
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });

  if (params.id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
  if (params.id > 10) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({});
}
