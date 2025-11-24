import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import TransactionsPage from "./pages/TransactionsPage";
import TemplatesPage from "./pages/TemplatesPage";
import App from "./App";

const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />, // <-- layout route with sidebar
    children: [
      { index: true, element: <Navigate to="/users" replace /> },
      { path: "/users", element: <UsersPage /> },
      { path: "/transactions", element: <TransactionsPage /> },
      { path: "/templates", element: <TemplatesPage /> },
    ],
  },

  // pages WITHOUT sidebar:
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default pageRoutes;
