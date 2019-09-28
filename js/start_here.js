const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const unityA = document.querySelector(".unity-tutorial");
var clicks = 0;

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

function displayUnity(){
        
    if(clicks%2 != 0)
    {
        //remove elements that were added on even click count
        var children = document.querySelectorAll(".remove");
        var p = document.getElementById("container2");
        p.removeChild(children[0]);
        p.removeChild(children[1]);
        ++clicks;
    }
    else
    {
        window.alert(clicks);
        //html to add to DOM element
        var html1 = "<div><h3>Downloading Visual Studio 2019</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor vel in enim dolorum, a, ea quae expedita sequi assumenda adipisci omnis. Eaque fugiat asperiores libero temporibus repellendus, eius quo.</p></br><a href=\"#\" class=\"btn\">Create Account</a></div><a href=\"https://visualstudio.microsoft.com/downloads/\"><img src=\"../assets/screenshots/VS_Download.svg\" alt=\"download\"></a>";
        var html2 = "<a href=\"https://visualstudio.microsoft.com/downloads/\"><img src=\"../assets/screenshots/VS_Download.svg\" alt=\"download\"></a><div><h3 style = \"text-align: center;\">Downloading Visual Studio 2019</h3><p>In order to get started developing scripts for gaming engines, it is important to download an IDE that can edit these script files for you. Visual Studio 2019 makes this as seamless as possible, and will even download Unity for you, shown later.</p></br><a href=\"#\" class=\"btn\">Download Here</a></div>";

        //get elements to work with
        var p = document.getElementById("container2");
        var newEl1 = document.createElement("section");
        var newEl2 = document.createElement("section");
        var unityBar = document.getElementsByClassName("unity-tutorial");

        //adding first card to html
        newEl1.classList.add("card");
        newEl1.classList.add("remove")
        newEl1.setAttribute("data-aos", "fade-left");
        newEl1.innerHTML = html1;
        p.appendChild(newEl1);

        //adding second element
        newEl2.classList.add("card");
        newEl2.classList.add("remove");
        newEl2.setAttribute("data-aos", "fade-right");
        newEl2.innerHTML = html2;
        p.appendChild(newEl2);
        ++clicks;
        window.alert(clicks);
    }

    
}