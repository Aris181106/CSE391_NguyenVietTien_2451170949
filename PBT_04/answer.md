## Phần A: Kiểm tra đọc hiểu

## Câu A1

1.position    |   2.Vẫn chiếm chỗ trong flow? |          3.Tham chiếu vị trí        |   4.Cuộn theo trang   |         5.Use case         |

1.static      |             2.Có              |          3.Vị trí mặc định          |        4.Có           |         5.Mặc định         |

1.relative    |             2.Có              |          3.Vị trí mặc định          |        4.Có           |    5.Anchor cho absolute   |

1.absolute    |            2.Không            |    3.Bám vào cha relative gần nhất  |        4.Có           |      5.Badge, dropdown     |

1.fixed       |            2.Không            |          3.Bám vào viewport         |       4.Không         |      5.Chat button         |

1.sticky      |             2.Có              |    3.Bám vào viewport (khi dính)    |       4.Không         |          5.Navbar          |

- nearest position ancestor là phần tử cha có position gần nhất
- absolute tham chiếu body và parent khi chúng có position khác static

- Nguồn tham chiếu : tuan_2_css_core/12_css_positioning.md - 2. 🌐 Big Picture — 5 giá trị Position + 3. ⚙️ Core Technical Truth

## Câu A2

- Trường hợp 1: 4 items sẽ nằm ngang trên 1 hàng với tỉ lệ bằng nhau

- Trường hợp 2: 6 items sẽ nằm trên 3 hàng, mỗi hàng gồm 2 items

- Trường hợp 3: 3 items sẽ nằm trên cùng 1 hàng, 1 item ở đầu, 1 item ở giữa, 1 item ở cuối, các item cách đều nhau

- Trường hợp 4: 3 items sẽ nằm trên cùng 1 hàng, item đầu chiếm 200px, item thứ hai chiếm 1 frame, item thứ ba chiếm 200px, mỗi item cách nhau 1 khoảng là 20px

- Trường hợp 5: 7 items sẽ nằm trên 3 hàng, với 2 hàng đầu mỗi hàng chứa 3 items chiếm 1fr, cách nhau 10px và hàng cuối chỉ còn 1 item cuối cùng

- Nguồn tham chiếu: tuan_2_css_core/11_box_model.md - 2. 🌐 Big Picture — Mọi element HTML là một "hộp" + 3. ⚙️ Core Technical Truth

## Câu C1

1. Với navigation bar ngang thì nên dùng flexbox vì flexbox sẽ hiện các đề mục theo chiều ngang(phù hợp với navigation bar)

2. Với lưới ảnh instagram(3 cột đều nhau, số ảnh không biết trước) thì dùng grid vì grid chia ảnh đều nhau dễ hơn flexbox

3. Với layout blog, nên dùng grid vì có thể dễ chia hơn: grid-template-columns: 1fr 2fr; với 1fr cho sidebar và 2fr cho main content

4. Footer với 4 cột thông tin nên dùng grid vì chia tỉ lệ dễ hơn với grid-template-columns: 1fr 1fr 1fr 1fr;

5. Card sản phẩm nên dùng cả grid và flex, grid dùng để chia các cột sản phẩm (nhiều sản phẩm trên cùng 1 hàng ở layout) còn flex dùng để cố định vị trí của các thành phần trong card(như là giá, text mô tả, nút mua)

