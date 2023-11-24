let number1 = Number(process.argv[2]);
let number2 = Number(process.argv[3]);
if (number2 === 0) {
  console.log("Error is not possible to divide by 0");
} else if (number1 < number2) {
  console.log("Error number1 is inferior to number2");
} else {
  console.log(`Result:${number1 / number2}`);
  console.log(`Rest: ${number1 % number2}`);
}
