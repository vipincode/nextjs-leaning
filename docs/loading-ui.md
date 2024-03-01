# Introduction

In react 18 we have new feature called suspense that we can use to show fallback ui while a component being rendered.

```tsx
import React, { Suspense } from 'react';
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
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
}
```

## Streaming

- While data is loading we think search engine bots not see our data, and not see the list of users, but this is not correct bcs this is what the client, will initially see so the server generate this page and send to the client but it does not close the connection so it does no terminate the request, response lifecycle it will wait for the user table component render and then it will send additional data to the client, this is called streaming

## Loading file

- This will render when page is render,
- You can create it at root level, at folder level
