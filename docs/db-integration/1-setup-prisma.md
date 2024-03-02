# Introduction

## Prisma Setup

- First install these packages
- `npm install prisma --save-dev`
- run `npx prisma` now can see commands, that we can use
- `npx prisma init`
- `npm install @prisma/client @next-auth/prisma-adapter` [use this when use save user data automatic by adapter]
- `create schema` then -
- `npx prisma migrate dev` or `npx prisma db push` use sync with database [when we make change in model must run these migration, so model sync with our db]
- `npx prisma migrate dev --name migration name` else you can use this
- `db push` is only for mongodb and some other rum after schema created
- `npx prisma generate` use after db change
- `npx prisma format` use to format database
- `npx prisma studio` use to see database entry

## Connection string

- lets search in google `prisma connection string`
- And now select your connection string
- Ans setup .env
- And change the provider `mysql`

## Define data models

To understand model let search in google `primsa model` or visit this link
[Models](https://www.prisma.io/docs/orm/prisma-schema/data-model/models)
[Data Modeling](https://www.prisma.io/docs/orm/overview/introduction/data-modeling)

## Mapping

[Mapping Reference](https://www.prisma.io/docs/orm/prisma-schema/data-model/database-mapping)

## Prisma Client

To working with data base we have need to prisma client

- For creating clint search in google `prisma nextjs prismaclient`
  [Prisma Client](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices)
