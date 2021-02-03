import React from "react";
import Head from "next/head";
import Header from "./component/header";
import Forofor from "./component/Forofor"

export default function Rotom() {
    return (
      <div>
        <Head>
          <title>ROTOM | PIPTEK IME FTUI</title>
          <link rel="icon" href="/piptek.png" />
        </Head>
        <Header/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#060049" fill-opacity="0.7" d="M0,160L26.7,149.3C53.3,139,107,117,160,144C213.3,171,267,245,320,234.7C373.3,224,427,128,480,117.3C533.3,107,587,181,640,197.3C693.3,213,747,171,800,165.3C853.3,160,907,192,960,202.7C1013.3,213,1067,203,1120,192C1173.3,181,1227,171,1280,165.3C1333.3,160,1387,160,1413,160L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
        </svg>
        <Header/>
        <Forofor/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#060049" fill-opacity="0.7" d="M0,64L18.5,69.3C36.9,75,74,85,111,106.7C147.7,128,185,160,222,170.7C258.5,181,295,171,332,186.7C369.2,203,406,245,443,261.3C480,277,517,267,554,240C590.8,213,628,171,665,170.7C701.5,171,738,213,775,213.3C812.3,213,849,171,886,160C923.1,149,960,171,997,160C1033.8,149,1071,107,1108,80C1144.6,53,1182,43,1218,58.7C1255.4,75,1292,117,1329,117.3C1366.2,117,1403,75,1422,53.3L1440,32L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
        </svg>
      </div>
    );
  }