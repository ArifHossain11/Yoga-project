import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import Instructors from "../pages/Instructors/Instructors";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

import Classes from "../pages/classes/Classes";
import ErrorPage from "../pages/error/ErrorPage";

import PrivetRoute from "./Privet/PrivetRoute";

import SingleClass from "../pages/classes/SingleClass";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "instructors",
                element: <Instructors />
            },
            {
                path: "classes",
                element: <Classes />
            },
            {
                path: "class/:id",
                element: <SingleClass/>,
                loader: ({ params }) => fetch(`http://localhost:5000/class/${params.id}`),
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <PrivetRoute><Dashboard /></PrivetRoute>
            },

           
           
        ]
    }
])