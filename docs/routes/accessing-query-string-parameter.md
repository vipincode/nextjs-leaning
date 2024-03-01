# Intro

-Note Query string is a way to pass State on server
`http://localhost:3000/products?sortOrder=name`

Look this url this have a query string in url `?sortOrder=name`

- So for accessing the query string we need to create a type in interface,, note our url have only one query string so we pass only one type in interface if we have more we create accordingly

```tsx
interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
```

- So lets see how we can access, this in our page,
- We can further destructure our code like this
  `{ params: { slug }, searchParams: { sortOrder } }: Props`

EX:

```tsx
import React from 'react';

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

export default function ProductPage({ params: { slug }, searchParams: { sortOrder } }: Props) {
  return (
    <div>
      Product page: {slug} {sortOrder}
    </div>
  );
}
```

## Sorting

For quickly sorting we can use various library I use this one
[Fast Sort](https://www.npmjs.com/package/fast-sort)
`npm i fast-sort`

- Important: Keep in mind, for data, you can not access the queryString in components, its only work inside pages, so you must access queryString inside page and then pass inside components.
- Must access the queryString inside page and pass to the components, not in components it will not work inside components
- So lets see steps

### Step 1 define queryString inside Table

```tsx
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
```

## Step 2 Access data.

```tsx
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
```
