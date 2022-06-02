import Head from "next/head";
import Image from "next/image";

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

export default Home;
