// let racine = 6;
// console.log(Math.pow(racine, 1 / 2));

const racineCarre = (num) => {
  let number = num / 2;
  let number2;

  do {
    number2 = number;
    number = (number + num / number) / 2;
  } while (number2 !== number);
  return number;
};

console.log(racineCarre(9));
