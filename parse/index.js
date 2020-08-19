const datas = require("../src/data/sample-data.json");

let newData = datas.map((data) => {
  return {
    quoteNameEN: data.quote,
    quoteNameKH: data.quote,
    author: data.author,
    hi: "hi",
  };
});

console.log(newData);
