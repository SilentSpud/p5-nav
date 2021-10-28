"use strict";
// This file uses a "revolving door"-esque system to generate confidant data from various source html files using a mock DOM
// With this, you can build code for one entry and test it against the entire database before writing
import { JSDOM } from "jsdom";
import fs from "fs";
//const QuestionList = JSON.parse(fs.readFileSync(`data/negotiation.json`));
const breakAtOne = true;
const writeDataToFile = true;

// Useful functions
const parseNum = (str) => isNaN(parseFloat(str)) ? str : parseFloat(str);
//const ShadowAnswer = {  };
const { document } = (new JSDOM(fs.readFileSync(`data/negotiation.html`).toString())).window;
const ansList = ["text", "gloomy", "irritable", "timid", "upbeat"];
let questionList = {};

for (let elem of document.body.children) {
  let rows = elem.children[0].children;
  let shadowQuestion = rows[0].children[0].innerHTML;
  let shadowAnswers = [];
  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    let answer = {
      text: row.children[0].innerHTML,
    };
    for (let ii = 1; ii < row.children.length; ii++) {
      let cell = row.children[ii];
      let cellName = ansList[ii];
      let rate = parseNum(row.children[ii].innerHTML);
      if (cell.getAttribute("data-unconfirmed")) {
        answer[cellName] = { rate: rate, unconfirmed: true }
      } else {
        answer[cellName] = rate;
      }
    }
    

  shadowAnswers.push(answer);
  }
  questionList[shadowQuestion] = shadowAnswers;
  if (breakAtOne && !writeDataToFile) break;
}
/* 
for (let question of QuestionList) {
  // Setup needed variables
  const oldQuestion = questionList[question];
  // Setup end
  console.log(question);


  // modify structure as needed
  let newQuestion = {
  }
  questionList.push(newQuestion);
  // stop after first for initial testing
}*/
if (writeDataToFile) fs.writeFileSync(`data/negotiation.json`, JSON.stringify(questionList));
