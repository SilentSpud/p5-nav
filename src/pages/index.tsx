import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Error from "next/error";

export const Error404 = () => <Error statusCode={404} />;
export const toCamel = (text: string) =>
  text
    .split(" ")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");

const Home: NextPage = () => (
  <>
    <Head>
      <title>royal Navigator</title>
      <meta property="og:title" content="royal Navigator" />
      <meta property="og:description" content="Multi-purpose information tool for Persona 5 Royal" />
      <meta property="twitter:label1" content="Status" />
      <meta property="twitter:data1" content="In Development" />
    </Head>

    <main>
      <h1>royal Navigator</h1>
      <p>An information tool for Persona 5 Royal</p>

      <p>This site uses data from the following sources:</p>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/aqiu384/megaten-fusion-tool">
            Megaten Fusion Tool
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/chinhodado/persona5_calculator">
            Persona 5 Calculator
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://megamitensei.fandom.com/wiki/Megami_Tensei_Wiki">
            Megami Tensei Wiki
          </a>
        </li>
      </ul>
    </main>
  </>
);

export default Home;
