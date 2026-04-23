# Phần A: Kiểm tra đọc hiểu

## Câu A1:

1. Khi nhập https://shopee.vn vào trình duyệt và nhấn Enter, các bước xảy ra là:

B1: Laptop tra cứu địa chỉ IP ( DNS Lookup)

B2: Laptop kết nối tới server của Shopee

B3: Trình duyệt gửi HTTP Request tới server của Shopee

B4: Server Shopee xử lý HTTP Request

B5: Server gửi HTTP Response

**Nguồn tham chiếu: tuan_1_html5/01_introduction_html_universe.md + Cuộc hành trinh xuyên đại dương + 1.1. Kiến trúc Client-Server — "Nhà hàng Online"

2. Trong DevTools của Chrome, tab Network cho thấy các thông tin như: Name, status, type, initiator, size và time

## Câu A2:

- Trang này bị đánh giá SEO thấp là do lạm dụng quá nhiều thẻ `<div>`

- Những lỗi semantic trong code:
1. `<div class="header">` sửa lại thành `<header>`
2. `<div class="menu">` sửa lại thành `<nav>`
3. `<div class="main">` sửa thành `<main>`
4. `<div class="footer">` sửa thành `<footer>`

code sau khi sửa:
```
<header>
    <div class="logo">ShopTLU</div>
    <nav>
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </nav>
</header>
<main>
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <div class="image"><img src="iphone.jpg"></div>
    </div>
</main>
<footer>© 2026 ShopTLU</footer>
```
**Nguồn tham chiếu: tuan_1_html5/04_visible_part_html.md + Semantic HTML5 — "Thẻ có ý nghĩa"

## Câu A3:

- Kết quả hiển thị của đoạn code là:

Hộp 1

Text A Text B

Hộp 2 

Text C Text D

Hộp 3

-> Tại vì thẻ `<div>` là block nên chiếm cả dòng, còn thẻ `<span>` là inline nên chỉ chiếm nội dung và có thể nằm cạnh nhau

**Nguồn tham chiếu: tuan_1_html5/04_visible_part_html.md + Block vs Inline — Hai loại element cơ bản

## Câu A4:

- Sự khác nhau giữa `<thead>`, `<tbody>` và `<tfoot>` là `<thead>` có vai trò là header và là tiêu đề của cột, `<tbody>` có vai trò là body và là dữ liệu chính của bảng còn `<tfoot>` là footer và có vai trò tổng kết bảng

- Các lý do không nên dùng table để tạo layout trang web:

## Câu B3:

Lỗi 1 : Dòng 1 - Khai báo DOCTYPE không hợp lệ - Sửa thành `<!DOCTYPE html>`

Lỗi 2 : Dòng 2 - Lỗi thiếu thẻ đóng cho thẻ `<html>`- Bổ sung `</html>` ở cưối code

Lỗi 3 : Dòng 2 - Thiếu thuộc tính ngôn ngữ - Bổ sung `<html lang="vi">`

Lỗi 4 : Dòng 4 - Lỗi thiếu thẻ đóng cho thẻ `<title>` - Bổ sung `</title>` ở sau chữ Trang web

Lỗi 5 : Dòng 5 - Lỗi khai báo charset chưa chuẩn - Sửa thành `<meta charset="UTF-8">`

Lỗi 6 : Dòng 8 - Lỗi sai thẻ đóng cho thẻ `<h1>` - Sửa thẻ đóng thành `</h1>`

Lỗi 7 : Dòng 12 - Lỗi sai giá trị thuộc tính href - Sửa thành `<a href="#home">Trang chủ</a>` `

Lỗi 8 : Dòng 20 - Lỗi thiếu dấu ngoặc kép cho `<img src>` - Sửa thành `<img src = "iphone.jpg">`

Lỗi 9 : Dòng 22 - Thẻ `<p>` và `<b>` sai thứ tự - Sửa thành `<p>`....`<b>`....`</b>`.....`</p>`

Lỗi 10 : Dòng 27 - `<table>` thiếu `<thead>` và `<tbody>` - Thêm `<thead>` và `<tbody>`

Lỗi 11 : Dòng 40 - Lỗi có hai thẻ main - Sửa bằng cách cho nội dung của thẻ main thứ 2 vào thẻ main đầu tiên

Lỗi 12 : Dòng 45 - Lỗi thiếu thẻ đóng cho thẻ `<p>` - Bổ sung `</p>` ở sau Copyright 2026

## Câu B4

3. Action : /tim-kiem, type : text

## Câu C1

