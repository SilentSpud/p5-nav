import React from "react";
import Head from "next/head";
import { Negotiations } from "../../data";
import { parseQuestions } from "../../negotiation";

const questions = parseQuestions(Negotiations);
const NegotiationInfo = () => (
  <>
    <Head>
      <title>Negotiation - rNav</title>
    </Head>
    <div className="questionlist">{questions}</div>;
  </>
);
export default NegotiationInfo;
