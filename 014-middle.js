// let name = [10, 21, 2];
// let middle = (name.length - 1) / 2;
// console.log(name[middle]);

let numberA = Number(process.argv[2]);
let numberB = Number(process.argv[3]);
let numberC = Number(process.argv[4]);

function mid3(numberA, numberB, numberC) {
  let a = numberA - numberB;

  let b = numberB - numberC;
  let c = numberA - numberC;
  if (numberA === numberB || numberA === numberC || numberB === numberC) {
    return "Error";
  } else if (a * b > 0) return numberB;
  else if (a * c > 0) return numberC;
  else return numberA;
}

console.log(mid3(numberA, numberB, numberC));
