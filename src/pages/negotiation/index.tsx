import React from "react";
import Head from "next/head";
import { Negotiations } from "../../data";
import { QuestionList } from "../../negotiation";

const NegotiationInfo = () => (
  <>
    <Head>
      <title>Negotiation - rNav</title>
      <meta property="og:title" content="Negotiation - royal Navigator" />
      <meta property="og:description" content="Negotiation questions and answers" />
    </Head>
    <div className="questionlist">
      <QuestionList questions={Negotiations} />
    </div>
  </>
);
export default NegotiationInfo;
