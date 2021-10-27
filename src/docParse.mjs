"use strict";
// This file uses a "revolving door"-esque system to generate confidant data from various source html files using a mock DOM
// With this, you can build code for one entry and test it against the entire database before writing
import { JSDOM } from "jsdom";
import fs from "fs";
const QuestionList = JSON.parse(fs.readFileSync(`data/negotiation.json`));
const breakAtOne = false;
const writeDataToFile = false;

// Useful functions
const parseNum = (str) => isNaN(parseFloat(str)) ? str : parseFloat(str);
const { document } = (new JSDOM(fs.readFileSync(`data/negotiation.html`).toString())).window;
let questionList = [];



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
