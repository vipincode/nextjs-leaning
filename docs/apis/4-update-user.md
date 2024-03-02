# Introduction

## Updating USER [PUT] or [PATCH]

- We use `PUT` to replacing an object and `PATCH` for updating one or more property
- Now to update a user we should send the request to the end point that represent an individual user
  `http://localhost:3000/api/users/1` like this
- so we send a request to this end point and include a user object in the body of the request

```tsx
export function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  // Validate the request body
  // if invalid, return 404 bad request
  // fetch the user with given id
  // if user does not exist return, 404 error, not found
  // update the user, in database
  // return updated user
}
```

- So let see full code

```tsx
import { NextRequest, NextResponse } from 'next/server';

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: 'Loin' });
}

export async function PUT(request: NextRequest, { params }: { params: { id: number } }) {
  const body = await request.json();

  if (!body.name) return NextResponse.json({ error: 'Name is required' }, { status: 404 });

  if (params.id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}
```
