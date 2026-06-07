## Phần A: Kiểm tra đọc hiểu

## Câu A2:

```javascript
// Đoạn 1:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());  // ???
console.log(c.increment());  // ???
console.log(c.increment());  // ???
console.log(c.decrement());  // ???
console.log(c.getCount());   // ???

// Đoạn 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
// Output sau 200ms: ???
```

- Output đoạn 1: 2

- Output đoạn 2: var : 3, let : 0, let : 1, let : 2 

- var và let cho ra 2 kết quả khác nhau bởi vì var chỉ tạo 1 biến dùng chung nên sẽ in ra 1 kết quả