import FaqComponent from "../components/Faq";
import { useEffect } from "react";

export default function FaqPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FaqComponent />
    </>
  );
}
