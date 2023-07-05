# Full-Stack E-Commerce + Dashboard & CMS: Nextjs 13 App Router, React, Tailwind, Prisma, MySQL

![](https://res.cloudinary.com/dhcedk2iy/image/upload/v1688548820/store-demo_u84qd1.png)

For Demo, use [Stripe Testing Cards](https://stripe.com/docs/testing)

Live Demo: [Store](https://ecommerce-store-eight-ashy.vercel.app/)

Live Demo: [Dashboard](https://ecommerce-admin-hazel.vercel.app/7f240395-413a-4a38-9537-53a9eded7422)

Visit Dashboard Repo: [Dashboard](https://github.com/tarek-elmasri/ecommerce-admin)

## Key Features

- Admin dashboard is serving as CMS, Admin and API.
- Create and multiple stores them within single Dashboard.
- Authentication with [Clerk](https://clerk.com).
- Integration with [Stripe](https://stripe.com) payments and webhooks.
- Image uploads with [Cloudinary](https://cloudinary.com).
- Styles with [Shadcn UI](https://ui.shadcn.com).
- Utilize latest Nextjs 13 App Router.

## Prerequisites

Node v14.x

Setting up you [Admin Dashboard](https://github.com/tarek-elmasri/ecommerce-admin) first.

## Getting Started

### Install Packages

```bash
git clone git@github.com:tarek-elmasri/ecommerce-store.git

cd ecommerce-store

npm install
```

### Obtain Store API URL

- Login to your [Dashboard](https://github.com/tarek-elmasri/ecommerce-admin).
- Create a store.
- From Setting Tab, copy your store API URL.

### Setup .env file

```bash
NEXT_PUBLIC_API_URL=<STORE_API_URL>

```

### Start App

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
