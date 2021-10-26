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
const writeDataToFile = true;

// Useful functions
const parsechild = (elem) => ((elem.children.length > 0) ? elem.children[0].innerHTML : elem.innerHTML).trim();
const parseNum = (str) => isNaN(parseFloat(str)) ? str : parseFloat(str);
const testNum = (str) => !isNaN(parseFloat(str));
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

const parseRow = (row) => {
  const x = 5;
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
    let rank = {
      questions: {}
    };
    if (rankEl.getAttribute(attrs.romance)) rank.romance = true;

    for (let rankComp of rankEl.children) {
      if (rankComp.tagName == "TABLE") {
        let rows = rankComp.children[0].children;
        for (let row of rows) {
          let rowAnswers = [];
          for (let cell of row.children) {
            let answer = {
              text: cell.innerHTML
            }
            if (cell.getAttribute(attrs.points)) answer.points = parseNum(cell.getAttribute(attrs.points));
            if (cell.getAttribute(attrs.romance)) answer.romance = true;
            if (cell.getAttribute(attrs.bad)) answer.bad = true;
            if (cell.getAttribute(attrs.end)) answer.end = true;
            rowAnswers.push(rowAnswers);
          }

          rank.questions[row.getAttribute(attrs.question)] = rowAnswers;
        }
      }
    }

    console.log(rank);
    rankList[rankNum] = rank;
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
