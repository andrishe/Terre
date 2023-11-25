// let racine = 6;
// console.log(Math.pow(racine, 1 / 2));

let num = Number(process.argv[2]);
const racineCarre = (num) => {
  let number = num / 2;
  let number2;

  if (num === 0) {
    console.log("the square root of 0 does not exist");
  }

  do {
    number2 = number;
    number = (number + num / number) / 2;
  } while (number2 !== number);
  return number;
};

console.log(racineCarre(num));
