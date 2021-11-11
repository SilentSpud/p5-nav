import fs from "fs";
// starting data
import { Personas as inData } from "../src/data/Personas.mjs";
const fileName = "personas";
const newData = [];

// loop here
for (const entry of inData) {
  const newEntry = {};
  delete newEntry.elems;
  newData.push(newEntry);
}

// (un)comment these 2 as needed
//console.log(newData);
fs.writeFileSync(`data/${fileName}.json`, JSON.stringify(newData));
