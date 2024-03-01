# Introduction

There are three thing you must need to know about link

-1 Only downloads the content of target page
-2 pre-fetches links that are in the view ports: to see this first need to build our app n production, now run the app, you see in the user pages in network it pre-fetch, the link, Next doing this bcs its improve the performance.

- `users?sortOrder=name&rsc=7nnk`
- `users?sortOrder=email&rsc=7nnk`

- As we navigate in our application, next.js stores payload of our pages, in a cache onn the client, so when next time we go on that page next.js not go to make a request to the backend it gonna pull ot that page from its clients cache.
- to see this open network tab and see this, when we move back and forward no request send, only first time it send request, keep in mind this is only for one session, when you reload the page, cache os gone, means the client cache is cleared.

## Programmatic Navigation

- Some time we need to take the user to a new page as result of click a button or submitting a form this called programmatic navigation Ex.
  ` <Link href='/users/new'>New user</Link>`

```tsx
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
```
