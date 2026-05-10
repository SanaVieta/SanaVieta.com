import { createBrowserRouter } from "react-router";
import Layout from "@/app/Layout";
import Contact from "@/app/Pages/Contact";
import Home from "@/app/Pages/Home";
import About from "@/app/Pages/About"

export const router = createBrowserRouter([
        {
            path: '/',
            Component: Layout,
            children: [
                {
                    index: true,
                    Component:Home
                },
                {
                    path: 'contact', Component: Contact
                },
                {
                    path: 'about', Component: About
                }
            ]
        }
]
)