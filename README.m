# Test Admin Starter

This is a **starter admin dashboard** built with **React, TypeScript, Tailwind CSS, React Router v7, and Vite**.  
You can clone this repo and start building your admin panel immediately.

---

## Quick Start

### 1️⃣ Clone the repository

Open your terminal and run:

git clone <your-repo-url>  
cd test-admin

### 2️⃣ Install dependencies

Run:

npm install  
# or  
yarn

### 3️⃣ Run the development server

Run:

npm run dev  
# or  
yarn dev

Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

---

## Project Features

- Collapsible sidebar layout (Optional)
- Routing with React Router v7 (`createBrowserRouter` + `<Outlet>`)  
- Active tab highlighting with `<NavLink>`  
- Tailwind CSS v4.1.17 with proper padding, margin, and responsive utilities  
- Radix UI components (Avatar, Dialog, Tooltip, Separator, Slot)  
- Lucide icons for modern iconography  
- Fully typed with TypeScript  
- ESLint configured for React + TypeScript  

---

## Folder Structure

src/  
├─ components/       # UI & Layout components (Sidebar, Avatar, etc.)  
├─ pages/            # Pages (Users, Transactions, Templates, Login, etc.)  
├─ Routes.tsx        # Router setup  
├─ App.tsx           # Layout with Sidebar + Outlet  
└─ index.tsx         # Entry point  

index.css            # Tailwind CSS imports  
package.json  
tsconfig.json  
vite.config.ts  

---

## Routing Notes

- The `/` path redirects automatically to `/users` or anything you want.  
- Sidebar links use `<NavLink>` → prevents full-page reload, only content inside `<Outlet>` changes.  
- You can add new pages under `src/pages` and routes in `Routes.tsx` as children of the layout route.  

---

## Available Scripts

| Script            | Description                                |  
| ----------------- | ------------------------------------------ |  
| `npm run dev`      | Start development server                   |  
| `npm run build`    | Build project for production               |  
| `npm run preview`  | Preview production build                   |  
| `npm run lint`     | Run ESLint on project                       |  

---

## Notes

- This is a **starter code base**. You can clone it and immediately start building your admin dashboard.  
- Tailwind CSS and Radix UI are preconfigured.  
- Uses React Router v7 with a layout route (`App.tsx`) and `<Outlet>` for page content.  
- Sidebar is collapsible and highlights the active tab automatically.  
- Designed for fast development — add pages, routes, and components easily.  

---

### License

This project is **private**. Free to use internally or as a starting point for your own admin projects.
