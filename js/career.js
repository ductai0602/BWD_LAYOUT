let sections = document.querySelectorAll('img');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
        //Nếu muốn lặp lại hiệu ứng animation thì dùng cái này
        else{
            sec.classList.remove('show-animate');
        }
    })
}
