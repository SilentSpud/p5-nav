import React from "react";
import Head from "next/head";
import { Negotiations } from "../../data";
import { parseQuestions } from "../../negotiation";

export const getStaticProps = async ({}) => {
  return {
    props: { questions: Negotiations },
  };
};
const NegotiationInfo = ({ questions }) => (
  <>
    <Head>
      <title>Negotiation - rNav</title>
    </Head>
    <div className="questionlist">{parseQuestions(questions)}</div>;
  </>
);
export default NegotiationInfo;
