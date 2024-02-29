import React from 'react';
import UserTable from './UserTable';

interface Props {
  searchParams: { sortOrder: string };
}

export default async function UsersPage({ searchParams: { sortOrder } }: Props) {
  return (
    <div>
      <h1 className='text-xl'>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
}
