function to12Hours(date) {
  return date.getHours() % 12 || 12;
}

const date = new Date("October 24, 2023 23:35:00");
console.log(to12Hours(date));
