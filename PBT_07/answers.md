## Phần A: Kiểm tra đọc hiểu

## Câu A1:

1. 
```javascript
// Đoạn 1
console.log(x);
var x = 5;

// Đoạn 2
console.log(y);
let y = 10;

// Đoạn 3
const z = 15;
z = 20;
console.log(z);

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
```

- Dự đoán output đoạn 1: 5

- Output thực tế đoạn 1: undefined -> Do var khai báo sau console.log

- Dụ đoán output đoạn 2: Báo lỗi

- Output thực tế đoạn 2: Báo lỗi -> Do let khai báo sau console.log

- Dụ đoán output đoạn 3: Báo lỗi

- Output thực tế đoạn 3: Báo lỗi -> Do const là giá trị không đổi

- Dự đoán output đoạn 4 : [1, 2, 3, 4]

- Output thực tế đoạn 4 : [1, 2, 3, 4] -> Do push là thêm vào cuối array

- Dự đoán output đoạn 5 : Trong block: 2, Ngoài block: 1

- Output thực tế đoạn 5 : Trong block: 2, Ngoài block: 1 

- Nguồn tham chiếu: tuan_4_javascript_basics/02_getting_started.md + 3. ⚙️ Core Technical Truth