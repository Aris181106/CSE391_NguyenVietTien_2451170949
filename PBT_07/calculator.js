function calculate(num1, operator, num2){
    if(operator === "/" && num2 === 0){
        return "Khong chia duoc";
    }
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "Khong hop le!";
    }
    if(operator === "+"){
        return num1 + num2;
    }
    else if(operator === "-"){
        return num1 - num2;
    }
    else if(operator === "*"){
        return num1 * num2;
    }
    else if(operator === "/"){
        return num1 / num2;
    }
    else if(operator === "%"){
        return num1 % num2;
    }
    else if(operator === "**"){
        return num1 ** num2;
    }
    else{
        return "Khong co phep tinh nay!";
    }
}