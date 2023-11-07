import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
// import ScroolToTop from "./ScrollTotTop";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
