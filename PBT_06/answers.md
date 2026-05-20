## Phần A: Đọc hiểu

## Câu A1

| Kích thước | < 768px | 768px - 991px | >= 992px |
|------------|---------|---------------|----------|
| Số cột | 1 cột | 2 cột | 4 cột |
| Box layout | 4 box trên 1 cột | 2 box trên 1 cột | 4 box trên 1 cột |

- Nguồn tham chiếu: tuan_4_css_frameworks/bootstrap/02_grid_system/02_grid_system.md - 3. ⚙️ Core Technical Truth

## Câu A2

1. class d-none d-md-block d-none sẽ ẩn hoàn toàn còn d-md-block sẽ ẩn trên tablet và hiện trên mobile

2. 

- mt-3 : margin-top với khoảng cách 1rem(16px)

- px-4 : padding theo trục x(trục ngang) 1 khoảng là 1.5rem(24px)

- mb-auto: margin-bottom auto

- py-5 : padding theo trục y(trục dọc) 1 khoảng là 3rem(48px)

- mr-2: margin-right với khoảng cách 0.5rem(8px)

3. 

- .container, .container-fluid, .container-md: 

- .container hiện class container tùy theo các breakpoint khác nhau

- .container-fluid là class container chiếm cả hàng,

- .container-md là hiện class container full width với cái breakpoint < 768px, >= 768px hoạt động như bình thường

- Nguồn tham chiếu: tuan_4_css_frameworks/bootstrap/02_grid_system/02_grid_system.md - 2.🌐 Big Picture — Grid System hoạt động thế nào? + tuan_4_css_frameworks/bootstrap/04_utilities/04_utilities.md - 3. ⚙️ Core Technical Truth

## Phần C : Phân tích

## Câu C1: 

1. Muốn đổi màu xanh mặc định $primary sang `#E63946`, ta dùng css custom của mình. Ví dụ:

- `<button class="btn btn-primary" type="button"></button>` đây là màu primary của bootstrap

- Dùng css:

```
.btn btn-primary{
    color = `#E63946`;    
}
```

- Cách này chỉ đổi được màu trên layout của bản thân, còn $primary trong bootstrap màu không thay đổi

2. Để tạo ra 1 navbar bằng css, ta cần:

- HTML:

```
    <header>
        <logo>
            <img src="images/logo.png" alt="logo">
        </logo>
        <nav>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
        </nav>
        <div class="registering">
            <a href="#">Login</a>
            <a href="#">Register</a>
        </div>
    </header>
```

- CSS:

```
    *{
    box-sizing: border-box;
}
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
nav a{
    text-decoration: none;
}
nav{
    justify-content: center;
    display: flex;
    gap: 20px;
}
.registering{
    display: flex;
    gap: 20px;
}
.registering a{
    text-decoration: none;
}
logo img{
    height: 60px;
}
```

- Để tạo 1 card: 

- HTML:

```
    <div class="card">
        <img src="images/product1.png" alt="Kinh van hoa">
        Sách - Kính vạn hoa
       <strong>70.000đ</strong> 
        <button>Mua</button>
    </div>
```

- CSS: 

```
.card{
    flex: 0 0 calc(25% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid;
}
.card img{
    height: 350px;
}
.card button{
    margin-top: auto ;
}
```

- Nên dùng Bootstrap khi cần sử dụng các card, navbar có sẵn, không nên sử dụng khi cần căn chỉnh vị trí theo ý muốn của bản thân(cần dùng custom css)