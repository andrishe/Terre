// function to12Hours(date) {
//   return date.getHours() % 12 || 12;
// }

// console.log(to12Hours(date));

function to12Hours(date) {
  return date.getHours() % 12 || 12;
}
let inputHours = process.argv[2];

let dateInputHours = new Date();
dateInputHours.setHours(inputHours);

console.log(to12Hours(dateInputHours));
