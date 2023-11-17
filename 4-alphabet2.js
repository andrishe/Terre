let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabet = "";

for (let i = 13; i < alpha.length; i++) {
  alphabet += alpha[i] + "\n";
}

console.log(alphabet.toLocaleLowerCase());
