import { createBrowserRouter } from "react-router";
import Layout from "@/app/Layout";
import Contact from "@/app/Pages/Contact";
import Home from "@/app/Pages/Home";
import About from "@/app/Pages/About"
import Product from "@/app/Pages/Product";

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
                },
                {
                    path: 'product', Component: Product
                }
            ]
        }
]
)