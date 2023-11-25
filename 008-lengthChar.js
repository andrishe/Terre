let str = process.argv[2];
let count = 0;

if (str === "Bonjour" || str === "Bonsoir") {
  console.log("Error");
} else if (!isNaN(Number(str))) {
  console.log("Error is not a string");
} else {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      console.log("Error empty string");
    } else {
      count++;
    }
  }
}
console.log(count);
