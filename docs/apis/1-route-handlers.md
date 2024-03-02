# Introduction

For creating `api`, first create a folder inside `app` folder

- Let say we say crate api for users so like pages we create a folder `app>api>users>route.ts`
- now we can access our api like this `localhost:3000/users` of course you can add GET, POST method for testing.
- Now in this [users/route.ts] we can create one or more route handlers.
- A route handler is a function that handle a `HTTP` request
- Now HTTP request have various method they can be
- GET - getting data
- POST - for creating data
- PUT - for updating data etc.

### TypeScript Warning:

- If you use a lower TypeScript version, you can use `NextResponse.json()` for typed responses instead.

```tsx
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'Vipin Singh' },
    { id: 2, name: 'Ajay Singh' },
  ]);
}
```

- `Response.json()` is only valid from TypeScript 5.2.

```tsx
export function GET(request: Request) {
  return Response.json([
    { id: 1, name: 'Vipin Singh' },
    { id: 2, name: 'Ajay Singh' },
  ]);
}
```

### Caching

- Route Handlers are cached by default when using the `GET` method with the Response object.
- So to prevent caching we add `request: NextRequest` in route handlers
