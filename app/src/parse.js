import rules from './assets/rules.txt';
import { useState, useEffect } from 'react';

let chapterData = [];
let subchapterData = [];
let rulesData = [];
let allData = [];

function addRules(i, j) {
  let res = [];
  for (var k = 0; k < rulesData.length; k++) {
    let subchapterNum = allData[i].subchapters[j].subchapter.substr(0, 3);
    if (rulesData[k].substr(0, 3).match(subchapterNum)) {
      let num = /([^\s]+)/g; //everything until first whitespace (for rule description lines)
      let e = num.exec(rulesData[k]);
      let ruleNum = e[0];
      let text = / ([\s\S]*)$/g; //greps everything after the first whitespace
      let value = text.exec(rulesData[k]);
      res.push({ rule: ruleNum, content: value });
    }
  }
  return res;
}

function addSubchapters(i) {
  let chapterNum = allData[i].chapter.substr(0, 1);
  for (var j = 0; j < subchapterData.length; j++) {
    if (subchapterData[j].substr(0, 1).match(chapterNum)) {
      let rules = [];
      allData[i].subchapters.push({ subchapter: subchapterData[j], rules });
    }
  }
}

function sortData(line) {
  let contentsNum = /^\d\./g; //first hit of a single digit number followed by period (for TOC)
  let subRule = /([0-9]+[.])+[0-9]+/g; //subrule (additional int after '.' in rule num)
  if (line.substr(0, 2).match(contentsNum) && !chapterData.DOD) {
    chapterData.push(line);
  }
  if (!isNaN(line.substr(0, 4)) && !chapterData.DOD) {
    subchapterData.push(line);
  }
  if (line.substr(0, 5).match(subRule) && chapterData.DOD) {
    rulesData.push(line);
  }
}

function ProcessData(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i] !== '') {
      if (data[i] === 'Credits') {
        chapterData.DOD = true;
      }
      if (data[i] === 'Abandon') {
        for (var j = 0; j < chapterData.length; j++) {
          let subchapters = [];
          allData.push({ chapter: chapterData[j], subchapters });
          addSubchapters(j);
          for (var k = 0; k < allData[j].subchapters.length; k++) {
            allData[j].subchapters[k].rules = addRules(j, k);
          }
        }
        break;
      }
      sortData(data[i]);
    }
  }
  return [allData, rulesData];
}

function Parse() {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(rules);
    const content = await response.text();
    const lines = content.split('\n');
    setData(lines);
  }

  useEffect(() => {
    getData();
  }, []);
  return data;
}

export { Parse, ProcessData };
