import Head from "next/head";
import React from "react";
import Banner from "../HomePage/Banner";
import Product from "../HomePage/Product";

const Layout = ({ children }: any) => {
  return (
    <div>
      <div>
        <Head>
          <title>{children ? children + " - ema-john" : "ema-john"}</title>
          <meta name="description" content="E-commerce Website" />
          <link rel="icon" href="/favicon.ico" />
          {/* <!-- JavaScript Bundle with Popper --> */}
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossOrigin="anonymous"
          ></script>
        </Head>
      </div>
      <div>
        <Banner></Banner>
        <Product></Product>
      </div>
    </div>
  );
};

export default Layout;
