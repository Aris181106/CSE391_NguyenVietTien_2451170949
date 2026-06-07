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

## Câu A4:

```javascript
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);  -> Iphone 16,  25990000, 8, Titan
console.log(specs);  -> Báo lỗi

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);            -> 23990000
console.log(updated.sale);             -> `true`
console.log(product.price);            -> Vẫn là 25990000

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);        -> 8 vì product.specs.ram không bị thay đổi
```


## Phần C: Suy luận

## Câu C1

```javascript
// TRƯỚC (ugly code):
function processOrders(orders) {
    var result = [];
    for (var i = 0; i < orders.length; i++) {
        if (orders[i].status === "completed") {
            if (orders[i].total > 100000) {
                var item = {};
                item.id = orders[i].id;
                item.customer = orders[i].customer;
                item.total = orders[i].total;
                item.discount = orders[i].total * 0.1;
                item.finalTotal = orders[i].total - item.discount;
                result.push(item);
            }
        }
    }
    // Sort by finalTotal descending
    for (var j = 0; j < result.length; j++) {
        for (var k = j + 1; k < result.length; k++) {
            if (result[j].finalTotal < result[k].finalTotal) {
                var temp = result[j];
                result[j] = result[k];
                result[k] = temp;
            }
        }
    }
    return result;
}
```

```javascript
// SAU (Refactored Codes):

function processOrders(orders) {
    return orders
        .filter(order => order.status === "completed" && order.total > 100000)
        .map(order => {
            const discount = order.total * 0.1;
            return {
                id: order.id,
                customer: order.customer,
                total: order.total,
                discount: discount,
                finalTotal: order.total - discount
            };
        })
        
        .sort((a, b) => b.finalTotal - a.finalTotal);
}

```

## Câu C2

```javascript
const miniArray = {
    map(arr, fn) {
        const ketqua = [];
        for(let n = 0; n < arr.length; n++){
            ketqua.push(fn(arr[n], n, arr));
        }
        return ketqua;
    },
    filter(arr, fn) {
        const ketqua = [];
        for(let n = 0; n < arr.length; n++){
            if(fn(arr[n], n, arr)){
                ketqua.push(arr[n]);
            }
        }
        return ketqua;
    },
    reduce(arr, fn, initialValue) {
        let ketqua = initialValue;
        for(let n = 0; n < arr.length; n++){
            ketqua = fn(ketqua, arr[n], n, initialValue);
        }
        return ketqua;
    }
};
```