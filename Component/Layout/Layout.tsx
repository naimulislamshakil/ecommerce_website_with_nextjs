import Head from "next/head";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <div>
      <div>
        <Head>
          <title>{children ? children + " - Amazon" : "Amazon"}</title>
          <meta name="description" content="E-commerce Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <h2>nfbvbjndbnvm</h2>
    </div>
  );
};

export default Layout;
