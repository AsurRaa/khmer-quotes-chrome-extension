const datas = require("../src/data/sample-data.json");
const fs = require("fs");

let newData = datas.map((data) => {
  return {
    quoteNameEN: data.quote,
    quoteNameKH: data.quote,
    author: data.author,
    hi: "hi",
  };
});

console.log(newData);
