var typed = new Typed('.typing' ,
{
    strings: ["Frontend Developer","Backend Developer", "Graphics Designer","Youtube Trainer"],
    typeSpeed:50,
    backSpeed: 150,
    loop:true

})


// circle skills


const circles = document.querySelectorAll('.circle');
circles.forEach(elem =>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0 ; i < dots ; i++){
          points += `<div class="points" style="--i:${i}; --rot:${rotate}deg;"></div>`;
          
    }
       elem.innerHTML = points;
})


// mixit Portfolio section
var mixer = mixitup('.portfolio-gallary');

// Active menu

let menuLi = document.querySelectorAll('header ul li a')
let section = document.querySelectorAll('section')

function activeMenue(){
    let len = section.length;
    while(--len && window.scrollY + 97< section[len].offsetTop){}

    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenue()

window.addEventListener("scroll", activeMenue);

// Sticky Navbar

const header = document.querySelector("header");
window.addEventListener("scroll", function () {

    header.classList.toggle("sticky",this.window.scrollY>50)
    
})

// Sticky Navbar

let menuIcon = document.querySelector("#menu-icon")

let nav = document.querySelector(".nav")

menuIcon.onclick =()=>{
    menuIcon.classList.toggle("bx-x");
    nav.classList.toggle("open");
}