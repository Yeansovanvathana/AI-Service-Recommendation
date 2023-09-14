import "@/styles/globals.css";
import MainLayout from "./component/MainLayout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </RecoilRoot>
  );
}
