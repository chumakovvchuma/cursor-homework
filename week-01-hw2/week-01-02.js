
  let numN = parseInt(prompt("number N")),
    numM = parseInt(prompt("number M"));
while (isNaN(numN)) {
    numN = parseInt(prompt("number N"), 10);
}
while (isNaN(numM)) {
    numM = parseInt(prompt("number M"), 10);
} 
let sum = 0,
    question = confirm("consider paired numbers?");
if(question) {
    for (let i = numN; i < numM +1; i++) {
        sum += i;
    }
} else if (question == false && (numN % 2 == 0)) {
    for (let i = numN + 1; i < numM +1; i += 2) {
    sum += i;
    }
} else {
    for (let i = numN; i < numM +1; i += 2) {
    sum += i;
    }
}
document.write(`
number N - ${numN} </br>
number M - ${numM} </br>
sum - ${sum} </br>
`);


  







