import { useSession, getProviders, getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

// Components
import Sidebar from "../components/Sidebar.js";
import Feed from "../components/Feed.js";
import Widgets from "../components/Widgets.js";
import Modal from "../components/Modal.js";
import Login from "../components/Login.js";

const Home = ({ trendingResults, followResults, providers }) => {
  const { data: session } = useSession();

  if (!session) return <Login providers={providers} />;

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

export async function getServerSideProps(context) {
  const trendingResults = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  const followResults = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
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
