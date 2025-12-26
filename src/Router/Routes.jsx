import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Layout from "@/pages/Layout/Layout";
import LeadershipPage from "@/pages/Leadership/Leadership";
import JoinUsPage from "@/pages/JoinUs/JoinUs";
import Contact from "@/pages/Contact/Contact";
import AdminLogin from "@/pages/Admin/Login";
import AdminLayout from "@/pages/Admin/Layout/AdminLayout";
import Dashboard from "@/pages/Admin/Dashboard/Dashboard";
import Applications from "@/pages/Admin/Applications/Applications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/leadership",
        element: <LeadershipPage />
      },
      {
        path: "/join-us",
        element: <JoinUsPage />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
  },
  // Admin Routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "applications",
        element: <Applications />,
      },
      {
        path: "members",
        element: <div className="text-white">Members (Coming Soon)</div>,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
]);
