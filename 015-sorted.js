const numbers = process.argv[2];

function sorted(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (isNaN(numbers[i]) || isNaN(numbers[i + 1])) {
      return "Error: Non-numeric element found";
    } else if (numbers[i] > numbers[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(sorted(numbers));

// let number1 = [5, 32, 10];
// let number2 = [10, 23, 45];
