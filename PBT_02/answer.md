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

<!-- Trường hợp 1 -->
<input type="text" required value="">   <!-- User để trống --> 

- Hệ thống báo lỗi do người dùng chưa nhập

<!-- Trường hợp 2 -->
<input type="email" value="abc">        <!-- User gõ "abc" --

- Hệ thống báo lỗi vì type email, user chưa gõ @

<!-- Trường hợp 3 -->
<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->

- Hệ thống báo lỗi do user vượt quá giá trị tối đa 

<!-- Trường hợp 4 -->
<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" --

- Hệ thống báo lỗi do abc không thuộc pattern

<!-- Trường hợp 5 -->
<input type="password" minlength="8" value="123">  <!-- User gõ "123" -->

- Hệ thống hoạt động bình thường, không có lỗi gì