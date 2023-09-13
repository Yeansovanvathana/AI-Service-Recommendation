import TopScreen from "./component/TopScreen";
import Categories from "./component/Categories";
import Card from "./component/Card";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>AI Services</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Head>

      <TopScreen />

      <Categories />

      <Card />
    </main>
  );
}
