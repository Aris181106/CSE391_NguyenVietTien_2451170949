## Phần A: Kiểm tra đọc hiểu

## Câu A1:

1. type="email" → Ô nhập text, tự kiểm tra có @ → Dùng cho form đăng ký

2. type = "text" -> Ô nhập text, tự kiểm tra minlength, maxlength, pattern -> Dùng để nhập thông tin

3. type = "password" -> Ô nhập text ẩn ký tự, tự kiểm tra minlength và pattern -> Dùng để nhập mật khẩu

4. type = "number" -> Ô nhập số có nút tăng giảm, tự kiểm tra min, max và step -> Dùng để nhập số lượng

5. type = "tel" -> Ô nhập số gồm bàn phím số, kiểm tra pattern -> Dùng để nhập số điện thoại

6. type = "date" -> Ô nhập ngày, tự kiểm tra min, max -> Dùng để nhập/chọn ngày

7. type = "time" -> Ô nhập thời gian, tự kiểm tra min, max -> Dùng để chọn/nhập thời gian

8. type = "color" -> Ô chọn màu, tự kiểm tra min, max -> Cho người dùng chon màu

9. type = "checkbox" -> Ô chọn có/không, yêu cầu phải được tích -> Dùng để làm khảo sát

10. type = "radio" -> Ô chọn 1 trong nhiều đáp án, yêu cầu phải được tích -> Dùng để làm khảo sát

## Câu A2:

Trường hợp 1
<input type="text" required value="">   

- Hệ thống báo lỗi do người dùng chưa nhập

Trường hợp 2
<input type="email" value="abc">        

- Hệ thống báo lỗi vì type email, user chưa gõ @

Trường hợp 3
<input type="number" min="1" max="10" value="15"> 

- Hệ thống báo lỗi do user vượt quá giá trị tối đa 

Trường hợp 4
<input type="text" pattern="[0-9]{10}" value="abc123"> 

- Hệ thống báo lỗi do abc không thuộc pattern

Trường hợp 5
<input type="password" minlength="8" value="123">  

- Hệ thống hoạt động bình thường, không có lỗi gì

## Câu A3

1. `<label for="email">` quan trong cho screen reader bởi vì screen reader sẽ đọc email edit text, giúp người dùng biết ô này để nhập gì

2. Dùng `<fieldset>` + `<legend>` khi nhập các thông tin có liên quan đến nhau

Ví dụ: 
```
        <fieldset>
    <legend>Thông tin giao hàng</legend>
    <label for="street">Đường:</label>
    <input type="text" id="street" name="street">
        </fieldset>
```
3. `<aria-label>` dùng để mô tả icon nút, ví dụ trong phần accessibility, `<aria-label>` giúp screen reader hiểu được icon 🛒 là gửi đơn hàng

- Không dùng `<aria-label>` khi đã có `<label>` vì sẽ bị lặp

## Câu A4

1. Thuộc tính loading="lazy" trên thẻ `<img>` dùng để tải ảnh khi user scroll đến và làm cho trang web load nhanh hơn và không dùng cho ảnh đầu tiên (logo) mà user thấy.

2. Cần dùng nhiều `<source>` trong thẻ `<video>` là để tránh việc có 1 `<source>` duy nhất bị lỗi thì còn có 1 `<source>` khác thay thế

- 3 format video phổ biến:

+ webm
+ mp4
+ ogg

3. Thuộc tính alt trên `<img>` dùng để hiển thị thông tin khi ảnh gặp lỗi

- alt cho ảnh iphone 16: `<img src="" alt="Iphone 16">`
- alt cho ảnh trang trí: `<img src="" alt="Hình ảnh minh họa">`
- alt cho ảnh biểu đồ doanh thu Q1/2026: `<img src="" alt="Doanh thu quý 1">`

## Câu A5

- Dùng cách 1 khi ảnh không cần mô tả, cách 2 dùng khi ảnh cần mô tả
- Trong thực tế, cách 1 được sử dụng để làm thumbnail còn cách 2 dùng khi cần mô tả về 1 sản phẩm

## Phần C: Phân tích và suy luận

## Câu C1:

Lỗi 1: Dòng 2 — Input "Tên" không có `<label for="...">`, vi phạm accessibility
Sửa: `<label for="name">Tên:</label> <input type="text" id="name" name="name" required>`

Lỗi 2: Dòng 4 - Input type="email" không có `<label for =""....>` vi phạm accessibility
Sửa: `<label for="email">Email:</label> <input type ="email" id = "email" name = "email"required>`

Lỗi 3: Dòng 6 - Input type="password" không có `<label for = "...">` vi phạm accessibility

Sửa: `<label for="password">Password:</label> <input type ="password" id = "password" name = "password" required>`

Lỗi 4: Dòng 7: Input type="password" không có `<label for = "...">` vi phạm accessibility

Sửa: `<label for="repassword">Password:</label> <input type ="password" id = "repassword" name = "repassword" required>`

Lỗi 5: Dòng 9: Input "Phone không có `<label for="...">`, vi phạm accessibility
Sửa: `<label for="tel">Số điện thoại:</label> <input type="tel" id="tel" name="tel" required>`

Lỗi 6: Dòng 11: `<select>` không có `<label for="...">`, vi phạm accessibility
Sửa : `<label for="city">Thành phố:</label> <select id = "city"></select required>`

Lỗi 7 : Dòng 16: `<label>` không có for, `<input type = "....." id, name>`
Sửa: `<label for = "terms">Điều khoản:</label> <input type = "checkbox" id = "terms" name = "terms" required>`

Lỗi 8 : Dòng 20: Cuối form nên là button để gửi
Sửa: `<button type="submit">Gửi</button>`

## Câu C2
        <input type = "text" id="account" name="account" pattern="[A-Za-z0-9]{3-20}" placeholder="Tên tài khoản">
1. `<input type = "text" pattern = "[0-9]{12}" placeholder = "Số CCCD/CMND>`

    `<input type = "text pattern = "[0-9]{10,15}" placeholder = "Số tài khoản>`

2. HTML5 validation không đủ an toàn cho ứng dụng ngân hàng vì HTML5 có thể dễ dàng bị vô hiệu hóa khi người dùng chỉ cần mở DevTools và xóa đi các thuộc tính như required và pattern dễ dàng

3. 3 loại validation mà HTML5 validation không thể làm:
- Kiểm tra dữ liệu trùng lặp: HTML5 không thể tự truy cập vào database
- Kiểm tra sự hợp lý giữa các ô nhập vì HTML5 chỉ kiểm tra từng ô độc lập
- Kiểm tra điều kiện : HTML5 không thể thay đổi thuộc tính theo thời gian thực

4. Các rủi ro khi chỉ validate ở frontend mà không validate ở backend:
- Bị tấn công, phá hoại dữ liệu: Chỉ cần mở DevTools thì hacker có thể chèn mã độc, xóa dữ liệu
- Gian lận giao dịch: Hacker có thể can thiệp vào các gói tin gửi đi để làm thay đổi các giá trị của nó (đặc biệt là với những giao dịch chuyển tiền)