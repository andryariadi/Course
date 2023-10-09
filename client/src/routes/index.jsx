import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import KelasPage from "../views/KelasPage";
import TestimoniPage from "../views/Testimoni";
import FaqPage from "../views/FaqPage";
import SyaratPage from "../views/SyaratPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/kelas",
    element: <KelasPage />,
  },
  {
    path: "/testimoni",
    element: <TestimoniPage />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "/syarat",
    element: <SyaratPage />,
  },
]);

export default router;
