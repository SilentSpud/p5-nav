"use strict";
// This file uses a "revolving door"-esque system to generate confidant data from various source html files using a mock DOM
// With this, you can build code for one entry and test it against the entire database before writing
import { JSDOM } from "jsdom";
import fs from "fs";
//const QuestionList = JSON.parse(fs.readFileSync(`data/negotiation.json`));
//const breakAtOne = false;
const writeDataToFile = true;

// Useful functions
const parseNum = (str) => isNaN(parseFloat(str)) ? str : parseFloat(str);
//const ShadowAnswer = {  };
const { document } = (new JSDOM(fs.readFileSync(`data/negotiation.html`).toString())).window;
let questionList = {};


for (let elem of document.body.children) {
  let rows = elem.children[0].children;
  let shadowQuestion = rows[0].children[0].innerHTML;
  let shadowAnswers = [];
  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    let answer = {
      text: row.children[0].innerHTML,
      gloomy: parseNum(row.children[1].innerHTML),
      irritable: parseNum(row.children[2].innerHTML),
      timid: parseNum(row.children[3].innerHTML),
      upbeat: parseNum(row.children[4].innerHTML)
    };

  shadowAnswers.push(answer);
  }
  questionList[shadowQuestion] = shadowAnswers;
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
  if (breakAtOne && !writeDataToFile) break;
}*/
if (writeDataToFile) fs.writeFileSync(`data/negotiation.json`, JSON.stringify(questionList));
