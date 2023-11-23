// let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let alpha = process.argv[2].toLowerCase();
let alphabet = "";

for (let i = 0; i < alpha.length; i++) {
  alphabet += alpha[i] + "\n";
}

console.log(alphabet);
