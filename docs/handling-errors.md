# Introduction

- if a page is not found next show not found page, but we create as our need.
- create a `not-found.tsx` page, at root level or folder level as you want.
- Here we have if userId is greater than 10, it show page does not exist
- Keep in mind not found page exist at root level, but we ca create it folder level.
- `app>loading.tsx`

```tsx
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: { id: number };
}
export default function UserDetailPage({ params: { id } }: Props) {
  if (id > 10) notFound();
  return <div>UserDetailPage {id}</div>;
}
```

- Go to `users>[id]>loading.tsx` crate this file. so this page is render if given user does not exist.

## Handling unexpected errors

- `http://localhost:3000/users` users page if fetching fails so see error in browser like this
- `Error: sortedUsers.map is not a function` and where the error happen
- `src\app\users\UserTable.tsx (32:23) @ map`, this all happen at development side
- in the production site it give us a generic message, `Application error: a server side exception happen, but can customize this.
- so we first create `error.tsx` file at root level, and this page render any page give unexpected error.
- Note this component is a client component

```tsx
'use client';
import React from 'react';

export default function ErrorPage() {
  return <div>An unexpected error has occurred. </div>;
}
```

- `app>error.tsx` so this file catch error for any route, in application

## Note

- we error pages or error files at different level of application routes
- we can create custom pages for specific route of our application
- `users>error.tsx` this means this file catch error for any routes inside the users folder.
- But most of cases we don&apos;t need to add error page at folder level
- keep in mind error file does not catch the error if happen inside `app>rootLayout.tsx`, for catching error in this file wee need to add another file called `app>global-error.tsx`

## How to catch error and give user to retry

```tsx
'use client';
import React from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: Props) {
  console.log('Error', error);
  return (
    <>
      <div>An unexpected error has occurred. </div>
      <button
        className='btn'
        onClick={() => reset()} // This is why we this component as client component.
      >
        Retry
      </button>
    </>
  );
}
```
