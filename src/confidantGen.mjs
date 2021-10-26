"use strict";
// This file uses a "revolving door"-esque system to generate confidant data from various source html files using a mock DOM
// With this, you can build code for one entry and test it against the entire database before writing
import { JSDOM } from "jsdom";
import fs from "fs";
const confidants = JSON.parse(fs.readFileSync(`data/confidant.json`));
// Edit as needed
const breakAtOne = false;
const writeDataToFile = false;

// Useful functions
const parsechild = (elem) => ((elem.children.length > 0) ? elem.children[0].innerHTML : elem.innerHTML).trim();
const parseNum = (str) => isNaN(parseFloat(str)) ? str : parseFloat(str);
const testNum = (str) => !isNaN(parseFloat(str));
const parseBr = (elem) => (elem.children.length > 0 && elem.children[0].tagName == "BR") ? elem.innerHTML.trim().replace(/<br>\n/g, "") : elem.innerHTML.trim();
const testRank = (rankNum) => (/^([1-9](\.5)?|MAX(\(ROMANCE\))?)$/g).test(rankNum)
const parseRank = (rankVal) => {
  if (testNum(rankVal)) {
    return parseNum(rankVal);
  }
  if (rankVal === "MAX") {
    return "Max";
  }
  if (rankVal === "MAX(ROMANCE)") {
    return "Max (Romance)";
  }
  return false;
}
const runTests = (name, rawRank, inPair) => {
  if (inPair)  {
    console.log(`Confidant: ${name}, ${rawRank} | Pairing: ${!inPair ? 'Passed' : 'Failed' }`);
    return false;
  }
  if (!testRank(rawRank)) {
    console.log(`Confidant: ${name}, ${rawRank} | Basic: ${testRank(rawRank) ? 'Passed' : 'Failed' }`);
    return false;
  }
  let rank = parseRank(rawRank)
  if (!rank) {
    console.log(`Confidant: ${name}, ${rawRank} | Complex: ${!!rank ? 'Passed' : 'Failed' }`);
    return false;
  }
  return rank;
}

let confidantList = {};
for (let name in confidants) {
  // Setup needed variables
  const oldConfidant = confidants[name];
  const siteDom = new JSDOM(fs.readFileSync(oldConfidant.link, 'utf8').toString());
  const window = siteDom.window;
  const document = window.document;
  // Setup end

  let elems = document.querySelectorAll("main > article > div > table, main > article > div > h2 > strong, main > article > div > p > em");
  let ranks = {};
  let curRank;
  let inPair = false;
  for (let el of elems) {
    if (el.tagName === "STRONG") {
      let RankText = parseBr(el);
      if (RankText == "Benefits:") continue;
      let rank = runTests(name, RankText.slice(5), inPair);
      if (!rank) continue;
      inPair = true;
      curRank = rank;
    } else if (el.tagName === "TABLE") {
      // Skip benefits tables
      if (el.children.length > 0 && el.children[0].children.length > 0 && el.children[0].children[0].children.length > 0 && el.children[0].children[0].children[0].innerHTML == "<strong>Rank</strong>") continue;
      if (!inPair)  {
        console.log(`Confidant: ${name}, Table | Pairing: ${inPair ? 'Passed' : 'Failed' } | First Cell: "${el.children[0].children[0].children[0].innerHTML}"`);
        continue;
      }
      inPair = false;
      //console.log(`Table`);
    } else if (el.tagName === "EM") {
      if (!inPair)  {
        console.log(`Confidant: ${name}, Paragraph | Pairing: ${inPair ? 'Passed' : 'Failed' }`);
        continue;
      }
      //console.log(`Table`);
    } else {
      console.log(`Confidant: ${name}, Unknown | Tag: ${el.tagName}`);
      continue;
    }
  }
  if (inPair)  {
    console.log(`Confidant: ${name}, end | Pairing: ${!inPair ? 'Passed' : 'Failed' }`);
    continue;
  }

  // modify structure as needed
  let newConfidant = {
    character: oldConfidant.character,
    link: oldConfidant.link,
    card: oldConfidant.card,
    header: oldConfidant.header,
    benefits: oldConfidant.benefits
  }
  confidantList[name] = newConfidant;
  // stop after first for initial testing
  if (breakAtOne && !writeDataToFile) break;
}
//console.log(confidantList);
if (writeDataToFile) fs.writeFileSync(`data/confidant.json`, JSON.stringify(confidantList));
