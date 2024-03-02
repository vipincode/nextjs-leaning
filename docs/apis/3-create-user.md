# Introduction

## Creating USER [POST]

- Now for create a user we send the request to user end point `http://localhost:3000/api/users` and include a `user object` in body of the request
- `POST` this handle to request

```tsx
export async function POST(request: NextRequest) {
  // First read body of the request
  const body = await request.json();
  // so what ever you send to body, you get in the response
  return NextResponse.json(body);
  // Now return a object from what we get from body
  // In real application once we read the body of request then we need to validate it
  // if the invalid return 400 error
  // Else return data, that we are created
  // so in postman if we pass an empty name, we see in response name is required
  if (!body.name) return NextResponse.json({ error: 'Name id required' }, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 }); // 201 mean created
}
```

- This function handle post request which are used to creating object
- Note that `request.json()` this method returns promise, so must have `async function
- Now if send the request in postman we get `200 OK` response
