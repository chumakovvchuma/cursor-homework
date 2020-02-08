

//1
let numberNAnswer = prompt("write N");

let intNumberN = parseInt(numberNAnswer);
console.log(intNumberN);


//2
if ((intNumberN ^ 0) === intNumberN){
    console.log(true);
} else {
    console.log(false);
};


//3
let numberMAnswer = prompt("write M");
let intNumberM = parseInt(numberMAnswer);
console.log(intNumberM);

//4
if ((intNumberM ^ 0) === intNumberM){
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
            console.log("fuck", i)
        } else {
            console.log("this even +", i)
            sumA += i;

        };

    } else {
        console.log("false answer");
        sumA += i;
    };


  }
  console.log("m", sumA);




  // let sumB = 0;
// for (let m = 1; m <= intNumberN; m++) {
//     if (confirmNumber = true) {
//         if (m % 2 == 0) {
//         } else {
//             sumB += m;
//         }

//     } else {
//         sumB += m;
//     }


//   }

//   let allSum = sumA + sumB;
//   console.log("full sum", allSum);

  




