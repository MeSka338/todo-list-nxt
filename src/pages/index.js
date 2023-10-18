import Head from "next/head";
import HomePage from "@/components/pages/HomePage";
import Animation from "@/components/pages/HomePage/Animation";
import { Provider } from "react-redux";
import store from "@/store";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </>
  );
}