# intro

This pic all route path

- How t defile create folder `products` inside this create a slug like this `[...slug]`
- products>[...slug]>page.tsx

```tsx
import React from 'react';

interface Props {
  params: { slug: string[] };
}

export default function ProductPage({ params: { slug } }: Props) {
  return <div>Product page: {slug}</div>;
}
```

- URL: `http://localhost:3000/products/grocery/milk`
- output: Product page: grocerymilk

## Note

- if you write only this URL: `http://localhost:3000/products` you get a `404` error page not found.
- To handle this you need to wrap the [...slug] in double square bracket, like this [[...slug]]
- products>[[...slug]]>page.tsx, After doing this error is gone and you get the, product page.
- Noe you able to access all route like

- `http://localhost:3000/products/grocery`
- output: Product page: grocery

- `http://localhost:3000/products/grocery/milk`
- output: Product page: grocerymilk
