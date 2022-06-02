import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";

import Sidebar from "../components/Sidebar.js";
import Feed from "../components/Feed.js";
import Widgets from "../components/Widgets.js";
import Modal from "../components/Modal.js";

const Nav = styled.div`
  background-color: black;
  min-height: 100vh;
  color: white;
  display: flex;
  max-width: 1500px;
  mx-auto;
`;

const Home = () => {
  return (
    <div className="center">
      <Head>
        <title>Smapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav>
          <Sidebar />
          <Feed />
          <Widgets />
          <Modal />
        </Nav>
      </main>
    </div>
  );
};

export default Home;
