let alpha = "abcdefghijklmnopqrstuvwxyz";
let alphaIndex = process.argv[2]
  ? alpha.indexOf(process.argv[2])
  : alpha.indexOf("a");
let alphabet = "";

for (let i = alphaIndex; i < alpha.length; i++) {
  alphabet += alpha[i] + "\n";
}

console.log(alphabet);
