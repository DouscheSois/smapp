import Head from "next/head";
import Image from "next/image";
import { getProviders, getSession, useSession } from "next-auth/react";

// Components
import Sidebar from "../components/Sidebar.js";
import Feed from "../components/Feed.js";
import Widgets from "../components/Widgets.js";
import Modal from "../components/Modal.js";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Head>
        <title>Smapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-blue-500 min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets />
        <Modal />
      </main>
    </div>
  );
};
// Can you put this in another file?
export async function getServerSideProps(context) {
  const trendingResults = await fetch(
    "https://jsonkeeper.com/b/NKEV"
  ).then((res) => res.json());
  const followResults = await fetch(
    "https://jsonkeeper.com/b/WWMJ"
  ).then((res) => res.json());

  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}

export default Home;
