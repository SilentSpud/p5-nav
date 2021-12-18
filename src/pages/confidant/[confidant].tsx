import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ConfidantInfo, Confidant } from "../../confidants";
import { getConfidant, Confidant as GameConfidant, StoryConfidant } from "../../data";
import { ParsedUrlQuery } from "querystring";
import { Error404, toCamel } from "..";

const confidants = [
  "chariot",
  "councillor",
  "death",
  "devil",
  "emperor",
  "empress",
  "faith",
  "fortune",
  "hanged",
  "hermit",
  "hierophant",
  "justice",
  "lovers",
  "moon",
  "priestess",
  "star",
  "sun",
  "temperance",
  "tower",
];
export const getStaticPaths = async () => ({
  paths: confidants.map((confidant) => ({
    params: { confidant },
  })),
  fallback: false,
});

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
  const { character } = confidantInfo;
  return (
    <>
      <Head>
        <title>{toCamel(confidantName)} - rNav</title>
        <meta property="og:title" content={`${toCamel(confidantName)} - royal Navigator`} />
        <meta property="og:description" content={`Character: ${character}`} />
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
