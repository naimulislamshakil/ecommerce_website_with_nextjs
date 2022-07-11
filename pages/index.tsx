import type { NextPage } from "next";
import Footer from "../Component/Footer/Footer";
import Layout from "../Component/Layout/Layout";
import Navbar from "../Component/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Layout>{"Home Page"}</Layout>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
