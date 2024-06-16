// Lấy phần tử nút
var mybutton = document.getElementById("backToTopBtn");

// Hiển thị nút khi cuộn xuống 20px từ đầu trang
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Khi người dùng nhấp vào nút, cuộn lên đầu trang
mybutton.onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    document.body.scrollTop = 0; // Đối với Safari
    document.documentElement.scrollTop = 0; // Đối với Chrome, Firefox, IE và Opera
}
