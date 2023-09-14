import Head from "next/head";
import HomePage from "./component/Layout/HomePage/HomePage";

export default function Home() {
  return (
    <main>
      <Head>
        <title>AI Services</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Head>

      <HomePage />
    </main>
  );
}
