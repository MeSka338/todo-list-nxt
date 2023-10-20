import Head from "next/head";
import HomePage from "@/components/pages/HomePage";
import Animation from "@/components/pages/HomePage/Animation";
import { Provider } from "react-redux";
import store from "@/store";
export default function Home() {
  return (
    <>
      <Head>
        <title>TODO APP</title>
        <meta name="description" content="App to organize your life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="icons/main-icon.svg" />
      </Head>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </>
  );
}
