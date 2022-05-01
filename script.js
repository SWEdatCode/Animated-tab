let menuItems = document.querySelectorAll(".menu .list .item");
let menuIndicator = document.querySelector(".menu .indicator");

for(let i=0;1<menuItems.length;i++){
    menuItems[i].addEventListener("click", function(){
    document.querySelector(".menu .list .active").classList.remove("active");
    menuItems[i].classList.add("active");
    document.body.style.background = menuItems[i].getAttribute("color");
    menuIndicator.style.background = menuItems[i].getAttribute("color");
    menuIndicator.style.left = `calc(${(i*20)+20}px + ${i*50}px)`;
});
}
