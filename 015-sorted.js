function sorted(number) {
  for (let i = 0; i < number.length - 1; i++) {
    if (number[i] > number[i + 1]) {
      return false;
    }
  }
  return true;
}

let number1 = [5, 32, 10];
let number2 = [10, 23, 45];

console.log(sorted(number1));
console.log(sorted(number2));
