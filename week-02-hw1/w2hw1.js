


let wage = 1000;
let tax = 18;

const taxOnMyWage = function(wage, tax) {
  const dapTax = 1.5;
  while (isNaN(wage)) {
    wage = parseInt(prompt("Your wage"), 10);
  }
  while (isNaN(tax)) {
    tax = parseInt(prompt("tax your wage"), 10);
  }

    const fullTax = tax + dapTax;
    const taxWage = wage / 100 * fullTax;
    const result = wage - taxWage; 
    const res = result.toFixed();
    return res;
}
document.writeln(`wage out tax - ${taxOnMyWage()} <br>`);



//8
let numLength = 2;
const getRandomPassword = function(numLength){
    let pass = "";

    while (isNaN(numLength)) {
      numLength = parseInt(prompt("Length your password"), 10);
    }

    for (let i = 1; i <= numLength; i++) {
        const x = Math.floor((Math.random() * 9) + 1);
        pass += x;
    }
    return pass;
  }
document.writeln(`your pass - ${getRandomPassword()} <br>`);




let min = 1;
let max = 9;
const randomMinMax = (min, max) => {
  while (isNaN(min)) {
    min = parseInt(prompt("write num min(for rand)"), 10);
  }
  while (isNaN(max)) {
    max = parseInt(prompt("write num max(for rand)"), 10);
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.writeln(`min-max random - ${randomMinMax()} <br>`);


let nameUpperCase = "";
const nameUpper = (nameUpperCase) => {
nameUpperCase = prompt("your name with up first latter");
let arrName = nameUpperCase.split("");
let completeName = "";
const bigWord = arrName[0];
completeName += bigWord.toUpperCase();
for (let index = 1; index < arrName.length; index++) {
  let word = arrName[index].toLowerCase();
  completeName += word;
}
return completeName;
}
document.writeln(`Your name - ${nameUpper()} <br>`);

let words = "";
let deleteWord = "";
const deleteWords = (words, deleteWord) => {
words = prompt("word for delete letter");
deleteWord = prompt("letter");
let arrNameWords = words.split("");
let completeNameWords = "";
for (let index = 0; index < arrNameWords.length; index++) {
  let wordDelete = arrNameWords[index];
  if (deleteWord != wordDelete) {
     completeNameWords += wordDelete;
  }
}
return completeNameWords;
}
document.writeln(`delete letter in word - ${deleteWords()} <br>`);

let wordsForCount = "";
let countWord = "";
const volumeWordsInt = (wordsForCount, countWord) => {

  wordsForCount = prompt("слово");
countWord = prompt(" - буква").toLowerCase();

let arrVolumeWords = wordsForCount.split("");
let newWord = "";

for (let index = 0; index < arrVolumeWords.length; index++) {
 let lowerWordsValue = arrVolumeWords[index].toLowerCase();
 newWord += lowerWordsValue;
}
let normalizeWord = newWord.split("");
const yourWord = normalizeWord.filter(something => something != countWord);

let numThisWord = wordsForCount.length - yourWord.length;
return numThisWord.toFixed();
}
document.writeln(`letter nun - ${volumeWordsInt()} <br>`);



