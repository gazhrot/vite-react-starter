# React + Vite + TypeScript Boilerplate (2026 Edition) 🚀

A modern, ultra-lightweight, and blazing-fast boilerplate designed to kickstart PoCs or production-ready applications in the blink of an eye. Say goodbye to configuration hell—everything is fully aligned with the latest versions and standards of the ecosystem.

## 🛠️ Tech Stack

* **React 19 & Vite**: Raw performance, instant startup times, and seamless Hot Module Replacement (HMR).
* **TypeScript**: Strict, typed, and modern (free of deprecated options like `baseUrl`).
* **Tailwind CSS v4**: 100% CSS-based configuration via `@import`, faster and lighter than ever.
* **Shadcn/ui (Vega Preset)**: Accessible, beautiful, and copy-pasteable components injected directly into your source code.
* **React Router v7**: Ready to handle your application's routing and navigation out of the box.
* **ESLint v10 & Stylistic (No Prettier)**: Clean code standardized according to **React Airbnb** guidelines, without Prettier's overhead or formatting conflicts.

---

## 📦 Project Structure

```text
├── .vscode/               # Recommended configuration for VS Code
├── src/
│   ├── components/        # Your global components
│   │   └── ui/            # Components injected by Shadcn (e.g., Button)
│   ├── lib/
│   │   └── utils.ts       # 'cn' helper function to merge Tailwind classes cleanly
│   ├── assets/            # Static assets (images, SVGs, etc.)
│   ├── App.tsx            # Root component
│   ├── index.css          # Global styles + Tailwind v4 import
│   └── main.tsx           # Application entry point
├── components.json        # Shadcn CLI configuration file
├── eslint.config.js       # ESLint Flat Config + Airbnb rules setup
├── tsconfig.app.json      # TypeScript configuration for the app (with @/* path alias)
└── vite.config.ts         # Vite configuration with native path alias resolution

```

---

## Quick Start

### 1. Clone the repository & Install dependencies

```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME
npm install

```

### 2. Launch the development server

```bash
npm run dev

```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the app running.

### 3. Check the production build

```bash
npm run build

```

---

### 🔄 Changing the Shadcn Preset / Theme

This boilerplate comes pre-configured with the **Vega** preset. If you want to switch to another preset (like *Default*, *New York*, etc.) or change the base color:

1. Run the initialization command again:
```bash
   npx shadcn@latest init

```

2. When prompted: `A components.json file already exists. Would you like to overwrite it?`, type **`yes`**.
3. Select your preferred component library and the new preset you want to use.

The CLI will automatically update your `components.json` and refresh your `src/index.css` variables without breaking your existing folder structure!

---

## Adding Shadcn Components

The project is pre-configured with the `@/` path alias pointing directly to the `src/` folder. To add a new UI component, just use the Shadcn CLI:

```bash
npx shadcn@latest add <component-name>

```

*Example: `npx shadcn@latest add dialog*`

---

## Code Quality (Linting)

This boilerplate embeds the core rules of the **React Airbnb** style guide (PascalCase for components, strict ban on array indexes as JSX keys, self-closing tags for empty elements, etc.).

To run the linter and audit your code:

```bash
npm run lint

```

---

## Notes for Windows Users

If you are developing on Windows and encounter permission errors (`EPERM`) or blocked script warnings in PowerShell when running the Shadcn CLI, make sure to:

1. Move your project folder outside of `Documents` (e.g., use a dedicated folder like `C:\dev\`).
2. Run your commands bypassing the execution policy if needed:
`powershell -ExecutionPolicy Bypass -Command "npx shadcn@latest ..."`

---

## Author

* **Axel Bruneaux** - [@gazhrot](https://github.com/gazhrot)

Feel free to star ⭐ the repository if this boilerplate helped you!
