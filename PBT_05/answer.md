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

## Câu A3

- Chiểu rộng màn hình: 375px -> .container width: 355px

- Chiều rộng màn hình: 600px -> .container width: 520px

- Chiều rộng màn hình: 800px -> .container width: 700px

- Chiều rộng màn hình: 1000px -> .container width: 940px

- Chiều rộng màn hình: 1400px -> .container width: 1120px

- Nguồn tham chiếu: tuan_2_css_core/11_box_model.md - 3. ⚙️ Core Technical Truth

## Câu A4

1. Variables - Sửa 1 chỗ trong CSS -> Tất cả tự đổi: Thay vì phải đặt giá trị nhiều lần cho các thuộc tính thì chỉ cần dùng Variables

- Ví dụ: Thay vì

``
.btn-primary {
    background: #7c3aed; 
    color: white;
    border-radius: 6px;
}
``

- Thì ta có Variables:

``
$color-primary: #7c3aed;
$radius-sm: 6px
.btn-primary {
    background: $color-primary;     
    color: white;
    border-radius: $radius-sm;
}
``

- Dùng để tái sử dụng thuộc tính cho các nút có chức năng giống nhau trong website

2. Nesting - Viết CSS lồng nhau 

- Ví dụ nesting:

``
.navbar {
    background: #1a202c;
    padding: $space-4;
    display: flex;
    align-items: center;
    justify-content: space-between;

    // & = tham chiếu đến selector cha (.navbar)
    &__logo {
        color: white;
        font-size: $font-size-lg;
        font-weight: 700;
        text-decoration: none;
    }
}
``

- CSS sẽ hiểu là logo nằm trong navbar(.navbar__logo) với các thuộc tính của logo như color: white, font-weight: 700

3. @mixin và @include: mixin sẽ hoạt động như 1 hàm, có thể đặt thuộc tính và sử dụng nhiều lần trong code, còn @include là phương thức để gọi hàm mixins đó

- Ví dụ:

``
@mixins abc{
    display: flex;
    justify-content: center;
    align-items: center;
} 
.box{
    @include abc;
}

- Khi đó, css sẽ hiểu như sau:

``
.box{
    display: flex;
    justify-content: center;
    align-items: center;
}