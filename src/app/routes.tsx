import { createBrowserRouter } from "react-router";
import App from './App'
import Layout from "@/app/Layout";
import Contact from "@/app/Pages/Contact";
import Home from "@/app/Pages/Home";


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
                }
            ]
        }
]
)