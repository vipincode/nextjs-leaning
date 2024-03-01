# Intro

A dynamic route is a route with parameter

- Create a folder with `[id]` name could be anything, this is a route parameter
- And access id in page like the bellow
- This approach work only for pages, not for components.
- You grab id as page level and pass it as prop on component level.

url: `http://localhost:3000/users/1`

```tsx
import React from 'react';

interface Props {
  params: { id: string };
}
export default function UserDetailPage({ params: { id } }: Props) {
  return <div>UserDetailPage</div>;
}
```

url: `http://localhost:3000/users/1/photo/2`

- this have two id in interface

```tsx
interface Props {
  params: { id: number; photoId: number };
}

export default function PhotoDetailPage({ params: { id, photoId } }: Props) {
  return (
    <div>
      PhotoDetailPage:{id}, {photoId}
    </div>
  );
}
```
