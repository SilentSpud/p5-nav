import React from "react";
import Head from "next/head";
import { Negotiations } from "../../data";
import { parseQuestions } from "../../negotiation";

const NegotiationInfo = () => (
  <>
    <Head>
      <title>Negotiation - rNav</title>
    </Head>
    <div className="questionlist">{parseQuestions(Negotiations)}</div>;
  </>
);
export default NegotiationInfo;
