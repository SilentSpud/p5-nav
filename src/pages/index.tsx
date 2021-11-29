import React from "react";

import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>royal Navigator</title>
        <meta name="theme-color" content="#DC3545" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Royal Navigator</h1>
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
};

export default Home;
