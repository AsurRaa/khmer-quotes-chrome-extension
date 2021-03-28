const data = require("../src/data/sample-data.json");

let newData = data.map((data) => {
  return {
    quoteNameEN: data.quote,
    quoteNameKH: data.quote,
    author: data.author,
    hi: "hi",
  };
});

console.log(newData);
