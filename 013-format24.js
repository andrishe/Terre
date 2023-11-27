// const date = new Date();

// console.log(
//   date.toLocaleString("fr-FR", {
//     hour12: false,
//   })
// );
// function to24Hours(hours) {
//   let date = new Date(`2000-01-01T${hours}`);
//   let hours24 = date.getHours();

//   return hours24;
// }

// let inputHours = Number(process.argv[2]);

// console.log(to24Hours(inputHours));

function to24Hours(hours) {
  let [hourStr, minuteStr] = hours.split(":");
  let hour = parseInt(hourStr, 10);
  let minute = parseInt(minuteStr, 10);

  if (hour < 12 && hours.toLowerCase().includes("pm")) {
    hour += 12;
  }

  return (
    hour.toString().padStart(2, "0") + ":" + minute.toString().padStart(2, "0")
  );
}

let inputHours = process.argv[2];

console.log(to24Hours(inputHours));
