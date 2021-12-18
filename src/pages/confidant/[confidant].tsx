import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ConfidantInfo, Confidant } from "../../confidants";
import { getConfidant, Confidant as GameConfidant, StoryConfidant } from "../../data";
import { ParsedUrlQuery } from "querystring";
import { Error404, toCamel } from "..";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { confidant: "chariot" } },
      { params: { confidant: "councillor" } },
      { params: { confidant: "death" } },
      { params: { confidant: "devil" } },
      { params: { confidant: "emperor" } },
      { params: { confidant: "empress" } },
      { params: { confidant: "faith" } },
      { params: { confidant: "fortune" } },
      { params: { confidant: "hanged" } },
      { params: { confidant: "hermit" } },
      { params: { confidant: "hierophant" } },
      { params: { confidant: "justice" } },
      { params: { confidant: "lovers" } },
      { params: { confidant: "moon" } },
      { params: { confidant: "priestess" } },
      { params: { confidant: "star" } },
      { params: { confidant: "sun" } },
      { params: { confidant: "temperance" } },
      { params: { confidant: "tower" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params: props }) => {
  return {
    props,
  };
};

const loadRouter = ({ confidant }: ParsedUrlQuery) => {
  let name = confidant;
  if (typeof name !== "string") return undefined;
  return name as string;
};

const ConfidantDetails = ({ confidant }: { confidant?: string }) => {
  const router = useRouter();
  let confidantName = confidant ? confidant : loadRouter(router.query);
  if (!confidantName) return <Error404 />;
  const confidantInfo = getConfidant(confidantName) as GameConfidant | StoryConfidant;
  return (
    <>
      <Head>
        <title>{toCamel(confidantName)} - rNav</title>
        <meta property="og:title" content={`${toCamel(confidantName)} - royal Navigator`} />
        <meta property="twitter:label1" content="Character" />
        <meta property="twitter:data1" content={confidantInfo.character} />
      </Head>
      <Confidant confidant={confidantName}>
        <ConfidantInfo.intro />
        <ConfidantInfo.benefits />
        <ConfidantInfo.answers />
      </Confidant>
    </>
  );
};

export default ConfidantDetails;
