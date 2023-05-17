This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Node version

node v16

## Set up dependencies

First, install dependencies:

```bash
npm install
```

## Set up env

Second, create .env file at root level and add below:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3004
NEXT_PUBLIC_ENTRY_LEVEL_URL=https://api.entrylevel.net
```

## Run development

Finally, run the development server:

```bash
npm run dev
```

App will run on http://localhost:3004

## Notes

- Antd design is used for this project. Main reason is to quickly build the components search and UI layout for cards.
  Trade-offs are many other Antd components are not in used and install it made codebase heavier.
- Responsive is maintained with support from Antd Row and Col - derived from CSS grid layout.
- Preprocessor SCSS or libraries like styled-component, tailwindCSS are not installed. Instead, only pure CSS and styled in-line are used
  Trade-offs: not the most convenient way to work on CSS nowadays but it is good enough for this small project. And it made the build lighter.
