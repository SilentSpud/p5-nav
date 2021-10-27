"use strict";
// This file uses a "revolving door"-esque system to generate confidant data from various source html files using a mock DOM
// With this, you can build code for one entry and test it against the entire database before writing
// Bear in mind, the html files were edited heavily beforehand to be easier to work with
import {
  JSDOM
} from "jsdom";
import fs from "fs";
const confidants = JSON.parse(fs.readFileSync(`data/confidant.json`));
// Edit as needed
const breakAtOne = true;
const writeDataToFile = false;

// Useful functions
const parsechild = (elem) => ((elem.children.length > 0) ? elem.children[0].innerHTML : elem.innerHTML).trim();
const parseNum = (str) => isNaN(parseFloat(str)) ? str : parseFloat(str);
const testNum = (str) => !isNaN(parseFloat(str));
const allCodes = {
  story: true,
  courage: 1,
  charm: 1,
  proficiency: 1,
  trueEnding: true,
  courage: 1,
  kindness: 1,
  date: "0/00",
  knowledge: 1
};
const parseBr = (elem) => (elem.children.length > 0 && elem.children[0].tagName == "BR") ? elem.innerHTML.trim().replace(/<br>\n/g, "") : elem.innerHTML.trim();
const testRank = (rankNum) => (/^([1-9](\.5)?|MAX(\(ROMANCE\))?)$/g).test(rankNum)
const attrs = {
  rankNum: "data-rank",
  romance: "data-romance",
  question: "data-question",
  points: "data-points",
  bad: "data-bad",
  end: "data-end"
}

const parseTable = (table) => {
  let questionList = {};
  let rows = table.children[0].children;
  for (let row of rows) {
    let question = row.getAttribute(attrs.question);
    let rowAnswers = {};
    for (let cell of row.children) {
      if (cell.innerHTML==="") continue;
      let answer = {}
      if (cell.getAttribute(attrs.points)) answer.points = parseNum(cell.getAttribute(attrs.points));
      if (cell.getAttribute(attrs.romance)) answer.romance = true;
      if (cell.getAttribute(attrs.bad)) answer.bad = true;
      if (cell.getAttribute(attrs.end)) answer.end = true;
      rowAnswers[cell.innerHTML] = answer;
    }

    questionList[question] = rowAnswers;
  }
  return questionList;
}
let confidantList = {};
for (let name in confidants) {
  // Setup needed variables
  const oldConfidant = confidants[name];
  const siteDom = new JSDOM(fs.readFileSync(oldConfidant.link, 'utf8').toString());
  const window = siteDom.window;
  const document = window.document;
  // Setup end

  let rankList = {}
  let rankElems = document.body.children;
  for (let rankEl of rankElems) {
    let rankNum = parseNum(rankEl.getAttribute(attrs.rankNum));
    let rank = {};
    if (rankEl.getAttribute(attrs.romance)) rank.romance = true;

    for (let rankComp of rankEl.children) {
      if (rankComp.tagName == "TABLE") {
        if (rank.meta) {
          let oldMeta = rank.meta;
          rank = parseTable(rankComp);
          rank.meta = oldMeta;
        } else {
          rank = parseTable(rankComp);
        }
      } else if (rankComp.tagName == "CODE") {
        rank.meta = rank.meta || {};
        rank.meta.requirements = JSON.parse(rankComp.innerHTML);
      } else if (rankComp.tagName == "P") {
        rank.meta = rank.meta || {};
        rank.meta.unlock = rankComp.innerHTML;
      } else {
        console.error(`Confidant ${name}: Unknown Element: ${rankComp.tagName}`);
        continue;
      }
    }

    rankList[rankNum] = rank;
  }



  // modify structure as needed
  let newConfidant = {
    character: oldConfidant.character,
    link: oldConfidant.link,
    card: oldConfidant.card,
    header: oldConfidant.header,
    benefits: oldConfidant.benefits,
    questions: oldConfidant.questions
  }
  confidantList[name] = newConfidant;
  // stop after first for initial testing
  if (breakAtOne && !writeDataToFile) break;
}
if (writeDataToFile) fs.writeFileSync(`data/confidant.json`, JSON.stringify(confidantList));
