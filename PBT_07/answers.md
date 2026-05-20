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

## Câu A2:

```javascript
console.log(typeof null);      
console.log(typeof undefined);         
console.log(typeof NaN);              
console.log("5" + 3);                
console.log("5" - 3);                 
console.log("5" * "3");             
console.log(true + true);         
console.log([] + []);              
console.log([] + {});              
console.log({} + []);              
```

- Dự đoán output console.log(typeof null); là: object

- Output thực tế console.log(typeof null); là: object

- Dự đoán output console.log(typeof undefined); undefined

- Output thực tế console.log(typeof undefined); undefined

- Dự đoán output console.log(typeof NaN); number
 
- Output thực tế console.log(typeof NaN); number

- Dự đoán output console.log("5" + 3); 53

- Output thực tế console.log("5" + 3); 53

- Dự đoán output console.log("5" - 3); 2

- Output thực tế console.log("5" - 3); 2

- Dự đoán output console.log("5" * "3"); 15

- Output thực tế console.log("5" * "3"); 15
 
- Dự đoán output console.log(true + true); true

- Output thực tế console.log(true + true); true

- Dự đoán output console.log([] + []);

- Output thực tế console.log([] + []); rỗng

- Dự đoán output console.log([] + {});

- Output thực tế console.log([] + {}); [object Object]

- Dự đoán output console.log({} + []);

- Output thực tế console.log({} + []); [object Object]

- "5" + 3 có kết quả khác "5" - 3 là vì trong phép cộng sẽ ưu tiên string nếu có toán hạng là 1 string còn phép trừ chỉ áp dụng cho number nên sẽ convert sang number

- Nguồn tham chiếu: tuan_4_javascript_basics/03_data_types_variables.md - 3. ⚙️ Core Technical Truth

## Câu A3:

```javascript
console.log(5 == "5");              
console.log(5 === "5");             
console.log(null == undefined);      
console.log(null === undefined);     
console.log(NaN == NaN);         
console.log(0 == false);            
console.log(0 === false);          
console.log("" == false);       
```

- Dự đoán output console.log(5 == "5"); true

- Output thực tế console.log(5 == "5"); true

- Dự đoán output console.log(5 === "5"); false

- Output thực tế console.log(5 === "5"); false

- Dự đoán output console.log(null == undefined); true

- Output thực tế console.log(null == undefined); true

- Dự đoán output console.log(null === undefined); false

- Output thực tế console.log(null === undefined); false

- Dự đoán output console.log(NaN == NaN); true

- Output thực tế console.log(NaN == NaN); false

- Dự đoán output console.log(0 == false); true

- Output thực tế console.log(0 == false); true

- Dự đoán output console.log(0 === false); false

- Output thực tế console.log(0 === false); false

- Dự đoán output console.log("" == false); true

- Output thực tế console.log("" == false); true

- Từ giờ trở đi, nên sử dụng `===` vì trong JavaScript, `===` là Strict equality(so sánh chặt chẽ), sẽ không tự chuyển type như `==`(Loose Equality)

- Nguồn tham chiếu: tuan_4_javascript_basics/02_getting_started.md - 3. ⚙️ Core Technical Truth