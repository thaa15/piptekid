import { Flex } from "@chakra-ui/core";

import Head from "next/head";
import React from "react";
import Header from "./component/header";

import HomeFix from "./component/Home";
import Pengertian from "./component/Pengertian";
import Vismis from "./component/Vismis";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PIPTEK IME FTUI</title>
        <link rel="apple-touch-icon" href="/sos/piptek.png" />
          <link rel="icon" href="/sos/piptek.png" />
      </Head>
      <Header/>
      <HomeFix />
      <Pengertian />
      <Vismis />
    </div>
  );
}
