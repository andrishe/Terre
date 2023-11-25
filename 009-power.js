let number = Number(process.argv[2]);
let power = Number(process.argv[3]);

if (power === 0) {
  console.log("zero raised to any non-zero power is 0");
} else {
  console.log(number ** power);
}
