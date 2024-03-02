# Introduction

## Delete USER [DELETE]

This handlers handle the delete request

```tsx
export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
  // In real application first we fetch the data from database
  // If user not found, return 404
  // Delete user from the database
  // return 200 response
}
```

```tsx
export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) return NextResponse.json({ error: 'Name id required' }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
```
