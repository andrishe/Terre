// let nom =
//   "Path = " +
//   "C:\\desktop\\Ariasse\\CodingAccelerator\\Epreuve\\Terre\\nomProgram.js";

// console.log(nom.split("\\").pop().split("/").pop());

const path = require("path");

const fileName = path.basename(
  "C:/desktop/Ariasse/CodingAccelerator/Epreuve/Terre/nomProgram.js"
);

console.log(fileName);
