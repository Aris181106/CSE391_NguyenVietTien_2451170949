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