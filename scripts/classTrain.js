// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// const bonusTime = (salary, bonus) =>
//   bonus === true ? `£${salary * 10}` : `£${salary}`;

// console.log(bonusTime(10000, true));

// ==================================================================

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// const abbrevName = (name) =>
//   name
//     .split(" ")
//     .map((item) => item[0].toUpperCase())
//     .join(".");

// console.log(abbrevName("Hossein Yasinzadeh"));

// =================================================================

// https://www.codewars.com/kata/5bb904724c47249b10000131
// const points = (games) => {
//   return games
//     .map((el) => el.split(":").map(Number))
//     .reduce((acc, el) => {
//       if (el[0] > el[1]) {
//         return acc + 3;
//       } else if (el[0] === el[1]) {
//         return acc + 1;
//       } else {
//         return acc;
//       }
//     }, 0);
// };

// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// );

// =========================================================================

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

const stringToArray = (string) => string.split(" ");

console.log(stringToArray("hossei java script"));
