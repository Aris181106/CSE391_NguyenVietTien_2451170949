## Phần A: Kiểm tra đọc hiểu

## Câu A1

Position      |   Vẫn chiếm chỗ trong flow?  |          Tham chiếu vị trí        |   Cuộn theo trang   |         Use case         |

Static        |              Có              |          Vị trí mặc định          |       Có            |         Mặc định         |

Relative      |              Có              |          Vị trí mặc định          |       Có            |    Anchor cho absolute   |

Absolute      |             Không            |    Bám vào cha relative gần nhất  |       Có            |      Badge, dropdown     |

fixed         |             Không            |          Bám vào viewport         |       Không         |      Chat button         |

sticky        |              Có              |    Bám vào viewport (khi dính)    |       Không         |          Navbar          |

- nearest position ancestor là phần tử cha có position gần nhất
- absolute tham chiếu body và parent khi chúng có position khác static

- Nguồn tham chiếu : tuan_2_css_core/12_css_positioning.md - 2. 🌐 Big Picture — 5 giá trị Position + 3. ⚙️ Core Technical Truth