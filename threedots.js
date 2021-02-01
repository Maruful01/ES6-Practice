const age1 = [12, 13, 10, 16];
const age2 = [15, 20, 22, 19];
const age3 = [30, 25, 28];
const allAges = age1.concat (age2).concat(age3);
const allAges2 = [...age1, ...age2, "baby 7", ...age3];

console.log (allAges2);

const businessMan = 800;
const mp = 360;
const chairman = 150;
const maxMoney = Math.max (businessMan, mp, chairman);
console.log (maxMoney);

const takaPoisa = [900, 1000, 1100];
const maxTaka = Math.max (...takaPoisa);
console.log (maxTaka);node threedots.js
