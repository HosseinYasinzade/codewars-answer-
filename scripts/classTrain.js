// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// const bonusTime = (salary, bonus) =>
//   bonus === true ? `£${salary * 10}` : `£${salary}`;

// console.log(bonusTime(10000, true));

// ==================================================================

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

const abbrevName = (name) =>
  name
    .split(" ")
    .map((item) => item[0].toUpperCase())
    .join(".");

console.log(abbrevName("Hossein Yasinzadeh"));
