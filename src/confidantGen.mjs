// This file uses a revolving door system to edit confidant data.
import { JSDOM } from "jsdom";
import fs from "fs";
const confidants = JSON.parse(fs.readFileSync(`data/confidant.json`));
// When enabled, confidant data is written to file
const writeDataToFile = false;

// Useful functions
const testChild = (elem) => ((elem.children.length > 0) ? elem.children[0].innerHTML : elem.innerHTML).trim();
const testNum = (str) => isNaN(parseInt(str)) ? str : parseInt(str);
const testBr = (elem) => (elem.children.length > 0 && elem.children[0].tagName == "BR") ? elem.innerHTML.trim().replace(/<br>\n/g, "") : elem.innerHTML.trim();
const testRank = (rankNum) => (/([1-9]|MAX|ROYAL)/g).test(rankNum)

let confidantList = {};
for (let name in confidants) {
  // Setup needed variables
  let confidant = confidants[name];
  let site = fs.readFileSync(confidant.link, 'utf8');
  let siteDom = new JSDOM(site);
  let window = siteDom.window;
  let document = window.document;
  // Setup done


  // modify structure as needed
  let newConfidant = {
    character: confidant.character,
    link: confidant.link,
    card: confidant.card,
    header: confidant.header,
    benefits: confidant.benefits
  }
  confidantList[name] = newConfidant;
  // stop after first for testing
  //if (!writeDataToFile) break;
}
//console.log(confidantList);
if (writeDataToFile) fs.writeFileSync(`data/confidant.json`, JSON.stringify(confidantList));
