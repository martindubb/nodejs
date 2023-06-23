const f = require("fs");
const p = require("./package.json");

let content = f.readFileSync("./testdatei.txt", "utf-8");
// geht auch so
// let content = f.readFileSync("./testdatei.txt", options={encoding:"utf-8"});

console.log(content);

console.log("die aktuelle version ist: " + p.version);
console.log("das start script ist hat command: " + p.scripts.start);