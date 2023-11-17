const str = "Fais de ta vie un rêve et d'un rêve une réalité";
const reversedString = str.split("").reduce((acc, char) => char + acc, "");
console.log(reversedString);
