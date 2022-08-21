let day = prompt ("make your choice - one day of the week");
const plantNeedsWater = (day) => (day === "Wednesday") ? true : false;

let result=plantNeedsWater(day);
console.log(result);