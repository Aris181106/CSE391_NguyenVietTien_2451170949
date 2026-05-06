## Phần A: Kiểm tra đọc hiểu

## Câu A1:

- Inline CSS: `<h1 style="color: #2563eb; font-size: 32px;">Tiêu đề</h1>`

- Ưu điểm: Nhanh, tiện
- Nhược điểm: Khó bảo trì
- Nên sử dụng khi muốn test giao diện

- Internal CSS (trong thẻ style):
```
<head>
    <style>
        h1 { color: #2563eb; font-size: 32px; }
    </style>
</head>
```

- Ưu điểm: Áp dụng cho nhiều thuộc tính trong 1 trang
- Nhược điểm: Khó tái sử dụng
- Nên sử dụng khi website có 1 trang duy nhất 

- External CSS (tách ra file riêng):
```
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
- Ưu điểm: Dễ bảo trì, có thể tái sử dụng
- Nhược điểm: Sai liên kết sẽ không chạy
- Khuyến khích nên sử dụng cách này

- Nếu cả 3 cách dùng CSS đồng thời áp dụng thì cái được viết sau cùng sẽ thắng vì HTML sẽ duyệt từ trên xuống, càng ở dưới càng có quyền hạn cao

## Câu A2

1. `<h1>` chọn `<h1>ShopTLU</h1>`
2. .price chọn `<p class="price">25.990.000đ</p>` và `<p class="price">45.990.000đ</p>`
3. `<#app header>` chọn `<header class="top-bar dark">`
4. `nav a:first-child` chọn `<a href="/" class="active">Home</a>`
5. `.product.featured h2` chọn `<h2>iPhone 16</h2>` và `<h2>MacBook Pro</h2>`
6. `article > p` chọn `<p>Mô tả sản phẩm...</p>`
7. `a[href="/"]` chọn 
```
<a href="/" class="active">Home</a>
<a href="/products">Products</a>
<a href="/about">About</a>
```
8. `.top-bar.dark h1` chọn `<h1>ShopTLU</h1>`

## Câu A3: 
- Trường hợp 1: Chiều rộng hiển thị: 450px , không gian chiếm trên trang(tính chiều rộng): 470px
- Trường hợp 2: Chiều rộng hiển thị: 400px, kích thước content thực tế: 350px, không gian chiếm trên trang: 420px
- Trường hợp 3: Khoảng cách giữa box-a và box-b: 40px, không phải 65px vì Margin dọc giữa 2 block element GỘPLẠI = lấy cái LỚN HƠN

## Câu A4:

1. Rule A -> Specificity score : 1
   Rule B -> Specificity score : 10
   Rule C -> Specificity score : 100
   Rule D -> Specificity score : 11
2. Element sẽ có màu đỏ do Specificity score của rule C cao nhất
3. Nếu thêm `<p class="price" id="main-price" style="color: orange;">` thì element sẽ có màu cam do Specificity score của style cao hơn
4. Nếu Rule A thêm !important, element có màu đỏ vì !important có Specificity score cao nhất

- Nguồn tham chiếu: tuan_2_css_core/09_css_selectors.md - 3. ⚙️ Core Technical Truth - Specificity — "Ai thắng khi xung đột?"

## Phần B : Thực hành code

## Câu B2

- Hộp 1 (content-box): chiều rộng thực tế = 349.6 px (đo từ DevTools) 
- Hộp 2 (border-box): chiều rộng thực tế = 300 px (đo từ DevTools)
- Giải thích sự khác biệt: Do content-box là hành vi HTML4/CSS2 cũ — width chỉ apply cho content area. Padding và border "phình ra ngoài" thêm vào.

## Câu B3

`* {color: brown;}`                          /* Specificity: 0,0,0 */

p { color: green; }                          /* Specificity: 0,0,1 */

.text { color: blue; }                      /* Specificity: 0,1,0 */

p:hover {color: black;}                     /* Specificity: 0,1,0 */

p:focus {color: darkcyan;}                  /* Specificity: 0,1,0 */

p.text {color: red;}                        /* Specificity: 0,1,1 */

#demo {color: yellow;}                      /* Specificity: 1,0,0 */

#demo.text {color: pink;}                   /* Specificity: 1,1,0 */

`<p id="demo" class="text highlight" style="color: aqua;">Hello World</p>`  /* Specificity: 1000+ */

!important : Specificity vô hạn

- Element cuối cùng sẽ hiển thị màu của !important vì !important có specificity score cao nhất

- Thay đổi thứ tự trong CSS File thì kết quả cũng không đổi do CSS ưu tiên specificity score chứ không phải vị trí

