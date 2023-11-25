let num = Number(process.argv[2]);

function numPrime(num) {
  if (num <= 1) {
    return `${num} is not a prime number`;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
}

console.log(numPrime(num));
