## Phần A: Kiểm tra đọc hiểu

## Câu A1:

1. 
```javascript

console.log(x);
var x = 5;

- Output: 5


//console.log(y);
let y = 10;

- Output : Báo lỗi

const z = 15;
z = 20;
console.log(z);

- Output : 15 và báo lỗi

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

- Output : [1, 2, 3, 4]

let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);

- Output :

Trong block : 2

Ngoài block : 1
```