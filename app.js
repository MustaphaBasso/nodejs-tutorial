// const { readFile, writeFile } = require('fs');

// console.log('start');
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second - result;
//   })
// })

console.log("stream example");

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    const text = fs.readFileSync("./content/big.txt", "utf8");
    res.end(text);
  })
  .listen(3000);
