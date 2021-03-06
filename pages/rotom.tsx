import React from "react";
import Head from "next/head";
import Header from "./component/header"
import BannerRotom from "./component/RotomComponents/BannerRotom";
import ContentRotom from "./component/RotomComponents/ContentRotom";

export default function Rotom() {
    return (
      <div>
        <Head>
          <title>ROTOM | PIPTEK IME FTUI</title>
          <link rel="apple-touch-icon" href="/sos/piptek.png" />
          <link rel="icon" href="/sos/piptek.png" />
        </Head>
        <Header/>
        <BannerRotom/>
        <ContentRotom/>
      </div>
    );
  }