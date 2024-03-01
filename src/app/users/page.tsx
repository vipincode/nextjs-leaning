import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string };
}

export default async function UsersPage({ searchParams: { sortOrder } }: Props) {
  return (
    <div>
      <h1 className='text-xl'>Users</h1>
      <Link href='/users/new'>New user</Link>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
}
