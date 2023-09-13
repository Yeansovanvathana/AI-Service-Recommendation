import TopScreen from "./component/TopScreen";
import Navbar from "./component/Navbar";
import Categories from "./component/Categories";
import Card from "./component/Card";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

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
    <main>
      <Head>
        <title>AI Services</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Head>

      <Navbar isTopOfPage={isTopOfPage} />

      <TopScreen />

      <Categories />

      <div className="mt-5">
        <Card />
      </div>

      <Footer />
    </main>
  );
}
