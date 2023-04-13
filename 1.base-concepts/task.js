"use strict";
function solveEquation(a, b, c) {
  let dscr = Math.pow(b, 2) - 4 * a * c;
  let arr = [];

  let dscr_2 = (-b + Math.sqrt(dscr)) / (2 * a);
  let dscr_3 = (-b - Math.sqrt(dscr)) / (2 * a);

  if (dscr < 0) {
    return arr;
  } else if (dscr === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(dscr)) / (2 * a));
    arr.push((-b - Math.sqrt(dscr)) / (2 * a));
  }
  return arr;
}
solveEquation(1, 3, 8);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  for (let arg of arguments) {
    if (typeof arg === "string") {
      arg = Number(arg);
      if (!arg) {
        return false;
      }
    } else if (typeof arg !== "number") {
      return false;
    }
  }

  percent = percent / 100;
  let body = amount - contribution;
  let p = percent / 12;
  let payment = body * (p + p / ((1 + p) ** countMonths - 1));
  let totalAmount = payment * countMonths;

  return Number(totalAmount.toFixed(2));
}
