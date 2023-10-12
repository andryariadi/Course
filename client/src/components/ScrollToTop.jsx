import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Atur scroll ke atas halaman
  }, [pathname]); // Jalankan efek setiap kali rute berubah

  return null; // ScrollToTop tidak merender elemen apa pun
}

export default ScrollToTop;
