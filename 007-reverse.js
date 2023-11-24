// const str = "Fais de ta vie un rêve et d'un rêve une réalité";
// const reversedString = str.split("").reduce((acc, char) => char + acc, "");
// console.log(reversedString);

const str = String(process.argv[2]);
let reversedString = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedString += str[i];
}
console.log(reversedString);
