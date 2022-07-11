import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../Component/Footer/Footer";
import Banner from "../Component/HomePage/Banner";
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
