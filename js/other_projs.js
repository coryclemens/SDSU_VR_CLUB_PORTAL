const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
var unity = document.querySelector('.unity');
var landing = document.querySelector('.landing');
var h1 = document.querySelector('.landing h1');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});


function facebook(){
    newUrl = "https://www.facebook.com/VRClubSDSU";
    document.location.href = newUrl;
}

function github(){
    newUrl = "https://github.com/SDSU-VR-Club";
    document.location.href = newUrl;
}