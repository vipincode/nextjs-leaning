'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function NewUserPage() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push('/users')}
        className='btn btn-primary'
      >
        Create
      </button>
    </div>
  );
}
