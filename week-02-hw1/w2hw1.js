//4



function taxOnMyWage() {
    const wage = 1000;
    const tax = 18;
    const dapTax = 1.5;
    const fullTax = tax + dapTax;
    const taxWage = wage / 100 * fullTax;
    const cleanWage = wage - taxWage;
    console.log("task 4", cleanWage);
}

taxOnMyWage();



//8

function getRandomPassword() {
    let passStr = ""
    let pass = "";
    let numLength = 8;
    for (let i = 1; i <= numLength; i++) {
        const x = Math.floor((Math.random() * 9) + 1);
        pass += x;
    }
    console.log("task 8", pass);
}
getRandomPassword();