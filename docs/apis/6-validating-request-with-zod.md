# Introduction ZOD

Zod is a TypeScript-first schema declaration and validation library. I'm using the term "schema" to broadly refer to any data type, from a simple string to a complex nested object.

Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.

### Some other great aspects:

- Zero dependencies
- Works in Node.js and all modern browsers
- Tiny: 8kb minified + zipped
- Immutable: methods (e.g. .optional()) return a new instance
- Concise, chainable interface
- Functional approach: parse, don't validate
- Works with plain JavaScript too! You don't need to use TypeScript.

`npm i zod`

## Diff between parse() and safeParse() method

- difference is that a `parse` method throws an exception if there is a validation error
- but `safeParse` does not throw exception it just return an object that contain the result of validation

- Let first create schema in file

```tsx
import { z } from 'zod';
export const schema = z.object({
  name: z.string().min(3),
});
```

- Let use this schema to validate our body object

```tsx
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 404 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
```
