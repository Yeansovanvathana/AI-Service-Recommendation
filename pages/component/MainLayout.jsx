import { useRouter } from "next/router";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import { useEffect, useState } from "react";

function MainLayout({ children }) {
  const router = useRouter();
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  let active = false;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar isTopOfPage={isTopOfPage} buttonActive={active} />
        <div className="flex-grow">
          <div className="h-full">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
