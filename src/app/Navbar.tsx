import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className='flex gap-6 bg-slate-200 px-4 py-3'>
      <Link href='/'>Next.js</Link>
      <Link href='/users'>Users</Link>
    </div>
  );
}
