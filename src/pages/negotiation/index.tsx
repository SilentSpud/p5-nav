import React from "react";
import Head from "next/head";
import { Negotiations } from "../../data";
import { QuestionList } from "../../negotiation";

const NegotiationInfo = () => (
  <>
    <Head>
      <title>Negotiation - rNav</title>
    </Head>
    <div className="questionlist">
      <QuestionList questions={Negotiations} />
    </div>
  </>
);
export default NegotiationInfo;
