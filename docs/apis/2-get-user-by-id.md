# Introduction

## Get USER GET[id]

To get a single object we pass an id to the url like this
`http://localhost:3000/api/users/2`

- So first create a folder inside `users/[id]/route.ts `
- So how we can get id `{ params }: { params: { id: string } }` like this
- Now here you can write logic.

```tsx
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return NextResponse.json('hi');
}
```

- You ca also try this way

```tsx
interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  return NextResponse.json('hi');
}
```

- So in actual we fetch data from db,
- if data is not found return 404
- else return data
