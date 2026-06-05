const randomNumber = Math.floor(Math.random() * 100) + 1;


let turn = 0;
let maxTurn = 7;
let NumberTried = [];
while(turn < maxTurn){
    let input = prompt("Nhập số từ 1-100:");
    let guess = Number(input);
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert("Hay nhap so hop le!");
        continue;
    }
    if(NumberTried.includes(guess)){
        alert("So nay da doan truoc do roi");
        continue;
    }
    NumberTried.push(guess);
    turn++;
    if(guess === randomNumber){
        alert("Da doan dung sau ${turn} lan")
    }   
    else if(guess < randomNumber){
        alert("So can doan cao hon");
    }
    else{
        alert("So can doan thap hon");
    }
    if(turn === maxTurn){
        alert(`Het luot! So can tim la ${randomNumber}`)
    }
}