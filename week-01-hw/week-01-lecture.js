

const pizza = 15.678;
const bred = 123.965;
const water = 90.2345;


const maxPrize = Math.max(pizza,bred,water);
console.log(maxPrize, "max prize");

const minPrize = Math.min(pizza,bred,water);
console.log(minPrize, "min prize");

const fullPrize = pizza + bred + water;
console.log(fullPrize, "full prize");

const wholeFullPrize = Math.floor(fullPrize);
console.log(wholeFullPrize, "whole min prize");

const roundFullPrize = Math.round(fullPrize / 100) * 100;
console.log(roundFullPrize, "round 100");

const floorFullPrize = Math.floor(fullPrize);
const booleanFloorFullPrize = false;
console.log(booleanFloorFullPrize, "even or odd");

const cash = 500;
const surrender = cash - fullPrize;
console.log(surrender, "surrender");

const averagePrize = fullPrize / 2;
const floorAveragePrize = Math.floor(averagePrize * 100) / 100;
console.log(floorAveragePrize, "average prize");




const randomPercent = 1 - 0.5 + Math.random() * (100 - 1 + 1);
const floorPercent = Math.round(randomPercent);


const fullPrizeFloor = Math.floor(fullPrize * 100) / 100;
const saleValue = (fullPrizeFloor / 100) * floorPercent;
const floorSaleValue = Math.floor(saleValue * 100) / 100;


const prize = fullPrizeFloor - floorSaleValue;
const floorPrize = Math.floor(prize * 100) / 100;
console.log(floorPrize, "prize");

const benefit = floorPrize / 2;
const floorBenefit = Math.floor(benefit * 100) / 100;
console.log(floorBenefit, "benefit")








