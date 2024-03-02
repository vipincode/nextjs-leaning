import { NextRequest, NextResponse } from 'next/server';
import { productSchema } from './schema';
import prisma from '@/config/db';

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany({});
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });

  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(product, { status: 201 });
}
