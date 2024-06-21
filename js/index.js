document.addEventListener("DOMContentLoaded", function() {
    // Hoạt động ngoại khóa
    const detail = document.querySelector('.detail');
    const btn_left2 = document.querySelector('.btn_left_2');
    const btn_right2 = document.querySelector('.btn_right_2');
    const length2 = 3;
    let current2 = 0;

    const link = [
        "https://vku.udn.vn/tin-tuc-va-hoat-dong/trai-nghiem-vku-campus-tour-2024-co-hoi-rong-mo-dinh-huong-tuong-lai/",
        "https://vku.udn.vn/sv-tin-tuc-hoat-dong/doan-the-thao-sinh-vien-vku-tham-du-dai-hoi-the-thao-sinh-vien-dai-hoc-da-nang-lan-thu-xiii-2024-quyet-tam-cao-thang-loi-lon/",
        "https://vku.udn.vn/sv-tin-tuc-hoat-dong/khai-mac-hoi-trai-truyen-thong-sinh-vien-vku-2024-vku-khat-vong-vuon-xa/"
    ];

    const title = ["Trải nghiệm VKU Campus Tour 2024: Cơ hội rộng mở - Định hướng tương lai", 
                    "Đại hội thể thao Sinh viên Đại học Đà Nẵng", 
                    "Hội trại khát vọng vươn xa VKU"
                ];

    const describe = ["Trường Đại học Công nghệ Thông tin và Truyền thông Việt – Hàn (VKU), ĐHĐN đã tổ chức và đón gần 2.000 học sinh các trường Trung học phổ thông (THPT) trên địa bàn thành phố Đà Nẵng và các tỉnh Quảng Nam, Quảng Ngãi, Thừa Thiên Huế về tham gia Trải nghiệm VKU Campus tour 2024.",
    "Đại hội thể thao Sinh viên Đại học Đà Nẵng lần thứ XIII đã khai mạc vào ngày 12/04/2024 tại Trung tâm Thể thao ĐHĐN, với sự tham dự của PGS.TS. Huỳnh Công Pháp và hơn 150 vận động viên từ ĐHĐN và VKU. Đoàn thể thao sinh viên VKU tham gia 7 bộ môn với 114 vận động viên. Ngay sau đó, sẽ diễn ra trận bóng rổ Nam giữa VKU và Ngoại ngữ, cũng như bóng rổ Nữ giữa VKU và Sư phạm",
    "Chào mừng kỷ niệm 30 năm thành lập Đại học Đà Nẵng và 93 năm Ngày thành lập Đoàn Thanh niên Cộng sản Hồ Chí Minh (26/3/1931 – 26/3/2024). Đoàn Thanh niên Trường Đại học CNTT&TT Việt – Hàn tổ chức Hội trại truyền thống Sinh viên VKU 2024 với chủ đề: “VKU – Khát vọng vươn xa” trong Tháng Thanh niên (Tháng 3/2024)."
                ];

    const paragraph = document.querySelector('.t_1');
    const dcb = document.querySelector('.describe_text');

    function redirectToLink() {
        window.open(link[current2], '_blank');
    }

    detail.addEventListener('click', redirectToLink);

    function updateText() {
        paragraph.textContent = title[current2];
        dcb.textContent = describe[current2];

        const activeIndex = document.querySelector('.index.active_index');
        if (activeIndex) {
            activeIndex.classList.remove('active_index');
        }
        const nextIndex = document.querySelector('.index_' + current2);
        if (nextIndex) {
            nextIndex.classList.add('active_index');
        }
    }

    btn_right2.addEventListener('click', () => {
        current2 = (current2 + 1) % length2;
        updateText();
    });

    btn_left2.addEventListener('click', () => {
        current2 = (current2 - 1 + length2) % length2;
        updateText();
    });

    updateText();
});
