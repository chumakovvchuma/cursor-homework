

//1
let numberNAnswer = prompt("write N");
let intNumberN = parseInt(numberNAnswer);
let typeN = typeof intNumberN;
console.log(typeN);

//2
if ((intNumberN ^ 0 && typeN === number) === intNumberN){
    console.log(true);
} else {
    console.log(false);
};


//3
let numberMAnswer = prompt("write M");
let intNumberM = parseInt(numberMAnswer);
let typeM = typeof intNumberM;

//4
if ((intNumberM ^ 0 && typeM === number) === intNumberM){
    console.log(true);
} else {
    console.log(false);
};

//5
let confirmNumber = confirm("dont need even int?");


let sumA = 0;
for (let i = intNumberN; i <= intNumberM; i++) {
    if (confirmNumber = true) {
        if (i % 2 == 0) {
            sumA += 0;
        } else {
            sumA += i;
        };
    } else {
        sumA += i;
    };

  }
  console.log("sum int", sumA);




  







