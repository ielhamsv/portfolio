var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const menu = document.getElementById("header2")
const  close = document.getElementById("close")
const sidebar=document.getElementById("sidebar")

menu.addEventListener("click", function (){
    menu.style.display="none"
    sidebar.style.width="130px"
})
close.addEventListener("click", function (){
    menu.style.display="block"
    sidebar.style.width="0"
})