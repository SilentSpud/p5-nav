"use strict";
// This file uses a "revolving door"-esque system to generate confidant data from various source html files using a mock DOM
// With this, you can build code for one entry and test it against the entire database before writing
import { JSDOM } from "jsdom";
import fs from "fs";
const confidants = JSON.parse(fs.readFileSync(`data/confidant.json`));
const breakAtOne = false;
const writeDataToFile = false;

// Useful functions
const parseNum = (str) => isNaN(parseFloat(str)) ? str : parseFloat(str);

const parseTable = (table) => {
  let questionList = {};
  let rows = table.children[0].children;
  for (let row of rows) {
    let question = row.getAttribute("data-question");
    let rowAnswers = {};
    for (let cell of row.children) {
      if (cell.innerHTML==="") continue;
      let answer = {}
      if (cell.getAttribute("data-points")) answer.points = parseNum(cell.getAttribute("data-points"));
      if (cell.getAttribute("data-romance")) answer.romance = true;
      if (cell.getAttribute("data-bad")) answer.bad = true;
      if (cell.getAttribute("data-end")) answer.end = true;
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
  const siteDom = new JSDOM(fs.readFileSync(`data/confidants/${name}.html`, 'utf8').toString());
  const window = siteDom.window;
  const document = window.document;
  // Setup end

  let rankList = {}
  let rankElems = document.body.children;
  for (let rankEl of rankElems) {
    let rankNum = parseNum(rankEl.getAttribute("data-rank"));
    let rank = {};
    if (rankEl.getAttribute("data-romance")) {
      rank.meta = {};
      rank.meta.romance = true;
    }

    for (let rankComp of rankEl.children) {
      if (rankComp.tagName == "TABLE") {
        Object.assign(rank, parseTable(rankComp));
      } else if (rankComp.tagName == "CODE") {
        rank.meta = rank.meta || {};
        rank.meta.requirements = JSON.parse(rankComp.innerHTML);
      } else if (rankComp.tagName == "P") {
        rank.meta = rank.meta || {};
        rank.meta.unlock = rankComp.innerHTML;
      }
    }

    rankList[rankNum] = rank;
  }



  // modify structure as needed
  let newConfidant = {
    character: oldConfidant.character,
    benefits: oldConfidant.benefits,
    questions: rankList
  }
  confidantList[name] = newConfidant;
  // stop after first for initial testing
  if (breakAtOne && !writeDataToFile) break;
}
if (writeDataToFile) fs.writeFileSync(`data/confidant.json`, JSON.stringify(confidantList));
