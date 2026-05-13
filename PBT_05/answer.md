## Phần A: Kiểm tra đọc hiểu

## Câu A1:

1. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

- name = viewport, độ dài content = độ dài thiết bị (chiều ngang), tỉ lệ: 1.0

- Nếu thiếu dòng này, Iphone sẽ hiển thị độ dài như desktop, làm chữ bé lại

- Mobile-first là viết CSS cho mobile trước, còn Desktop-first là viết CSS cho desktop trước

- Ví dụ:

``
.container{
    display: block;
    padding: 10px
}
@media(max-width : 768px){
    .container{
        display: flex;
        padding: 20px;
    }
}
``

``
.container{
    display: flex;
    padding: 20px
}
@media(max-width : 768px){
    .container{
        display: block;
        padding: 10px;
    }
}
``

- Mobile-first được khuyên dùng là vì mobile-first sẽ giúp dev không cần phải CSS cho mobile (phần lớn developers đều sử dụng desktop)

- Nguồn tham chiếu: tuan_3_css_advanced/13_creating_responsive_layouts.md - 3. ⚙️ Core Technical Truth


## Câu A2

Breakpoint chuẩn dành cho các thiết bị khác nhau:

- Mobile : 576px, các thiết bị như iphone SE, điện thoại nhỏ, lưới sản phẩm nên hiển thị 2-3 cột

- Mobile L : 576px, các thiết bị như iphone Plus, điện thoại ngang, lưới sản phẩm nên hiển thị 2-3 cột

- Tablet : 768px, các thiết bị như Ipad dọc, tablet, lưới sản phẩm nên hiển thị 3-4 cột

- Desktop: 992px, dành cho các laptop nhỏ, lưới sản phẩm nên hiển thị 4-5 cột

- Desktop L: 1200px, dành cho các desktop, laptop lớn, lưới sản phẩm nên hiển thị 4-5 cột

- Desktop XL: 1400px, dành cho màn hình 4K ultrawide, lưới sản phẩm nên hiển thị 4-5 cột

- Nguồn tham chiếu: tuan_3_css_advanced/13_creating_responsive_layouts.md - 3. ⚙️ Core Technical Truth