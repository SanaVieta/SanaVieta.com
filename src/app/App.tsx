import { RouterProvider} from "react-router";
import {router} from "@/app/routes";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F8F1]">
     <RouterProvider router={router} />
    </div>
  );
}
