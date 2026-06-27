# Brian Ngatia — Professional Tech Portfolio

A professional React/TanStack Start portfolio for showcasing full-stack, data science, and data engineering work.

## Included project showcases

1. Professional Tech Portfolio Website
2. Customer Churn Prediction
3. BudgetFlow — Personal Finance App

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Cloudflare

```bash
npx nitro deploy --prebuilt
```

## How to add or edit project links

Open:

```txt
src/lib/portfolio-data.ts
```

Each project has these editable fields:

```ts
repo: "https://github.com/yohbee/project-repo",
demo: "https://your-live-project-link.com",
```

- `repo` controls the **Code / GitHub** button.
- `demo` controls the **Open / Live Demo** button.
- The **Case Study** button is generated automatically from the project `slug`.

To add a new project later, copy one project object inside the `projects` array and change the title, slug, stack, problem, features, links, and results.

## Important

The old **Download Codebase** page/section has been removed. Recruiters now see professional project actions instead:

- Case Study
- Open / Live Demo
- Code / GitHub
