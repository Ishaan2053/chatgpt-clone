<img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="alt text" title="image Title" height="100" align="right"/>
<h1 align="center">ClonedGPT</h1> 
<p align="center">A ChatGPT clone that works just like the real deal!</p>

---

## Getting Started

- Clone this repository on your local machine

- add the following `.env.local` file to your root directory: -
```
GOOGLE_ID=
GOOGLE_SECRET=
OPENAI_API_KEY=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
FIREBASE_SERVICE_ACCOUNT_KEY=
```

- Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
