import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';

interface Props {
  sortOrder: string;
}

export default async function UserTable({ sortOrder }: Props) {
  // server always cache the page, for static site generation,
  // if want to see reflection need to be revalidate {'cache: 'no-store'}
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } });
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: Users[] = await result.json();

  const sortedUsers = sort(users).asc(sortOrder === 'email' ? (user) => user.email : (user) => user.name);

  return (
    <div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
              <Link href='/users/?sortOrder=name'>Name</Link>
            </th>
            <th>
              <Link href='/users/?sortOrder=email'>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
