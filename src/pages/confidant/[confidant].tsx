import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ConfidantInfo, Confidant } from "../../confidants";

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

export const getStaticProps = async ({ params }) => {
  return {
    props: params,
  };
};

const ConfidantDetails = () => {
  const router = useRouter();
  let { confidant: confidantName } = router.query;
  switch (typeof confidantName) {
    case "string":
      break;
    case "object":
      confidantName = confidantName[0];
    case "undefined":
      return null;
  }
  return (
    <>
      <Head>
        <title>{confidantName} - rNav</title>
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
