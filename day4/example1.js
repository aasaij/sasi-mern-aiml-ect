// let principal = 10000;
// let rate = 12;
// let years = 5;
let principal = Number(prompt("Principal Amount :"));
let rate = Number(prompt("Rate of Interest :"));
let years = Number(prompt("Number of years :"));
// Calculate compound interest10000
let interest = principal * (1 + rate / 100) ** years;
interest = Math.round(interest);
// console.log(`Compound Interest : ${interest}`);

document.write(`<h1>Compound Interest : ${interest}</h1>`);
