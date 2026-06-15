import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Uploadresume from "../pages/Uploadresume";
import Analysis from "../pages/Analysis";
import Profile from "../pages/Profile";
import Notfound from "../pages/NotFound";
import ProtectedRoute from "../routes/ProtectedRoute";
import History from "../pages/History";
import HistoryReport from "../pages/HistoryReport";
import GuestRoute from "../routes/GuestRoute";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Notfound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: "/login",
    element: (
      <GuestRoute>
        <Login />
      </GuestRoute>
    ),
  },

  {
    path: "/register",
    element: (
      <GuestRoute>
        <Register />
      </GuestRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <GuestRoute>
        <ForgotPassword />
      </GuestRoute>
    ),
  },
  {
    path: "/reset-password/:token",
    element: (
      <GuestRoute>
        <ResetPassword />
      </GuestRoute>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "upload",
        element: <Uploadresume />,
      },
      {
        path: "analysis",
        element: <Analysis />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "history/:id",
        element: <HistoryReport />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
export default Router;
