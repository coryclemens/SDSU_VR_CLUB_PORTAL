const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const unityA = document.querySelector(".unity-tutorial");
var clicks = 0;

//event for hamburger click
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

//onclick() for facebook link, navigates user to SDSU VR Facebook
function facebook() {
    newUrl = "https://www.facebook.com/VRClubSDSU";
    document.location.href = newUrl;
}

//onlcick() for github link, navigates user to SDSU VR github
function github() {
    newUrl = "https://github.com/SDSU-VR-Club";
    document.location.href = newUrl;
}

function discord() {
    newUrl = "https://discord.gg/MjSXgfh";
    document.location.href = newUrl;
}

//onclick() for displaying optional Unity instructions
function displayUnity() {

    if (clicks % 2 != 0) {
        //remove elements that were added on even click count
        var children = document.querySelectorAll(".remove");
        var p = document.getElementById("container2");
        p.removeChild(children[0]);
        p.removeChild(children[1]);
        p.removeChild(children[2]);
        p.removeChild(children[3]);
        ++clicks;
    }
    else {
        //html to add to DOM element
        var html1 = "<div><h3 style=\"text-align: center;\">Downloading Unity Hub</h3><p>Unity Hub is a desktop application that will help with managing all of your Unity Versions, as well as all of your Unity Projects. This will help you maintain different versions of Unity should you need a specific version for a collaborative project. You can also access Unity-driven tutorials from here.</p></br><a href=\"https://store.unity.com/download?ref=personal\" class=\"btn\">Unity Hub Download</a></div><a href=\"https://store.unity.com/download?ref=personal\"><img src=\"../assets/screenshots/Unitydownload.PNG\" alt=\"download\" style=\"width: 100%; height: 70%;\"></a>";
        var html2 = "<img src=\"../assets/screenshots/addinstallsunity.PNG\" alt=\"download\"style=\"width: 100%;\"><div><h3 style = \"text-align: center;\">Adding Installs to Unity Hub</h3><p>To add and download the latest version of Unity3D, navigate to the 'Installs' tab, and then choose to 'Add' an install.</p></br>";
        var html3 = "<div><h3 style=\"text-align: center;\">Selecting Unity Version</h3><p>Here we can select the version of Unity that we want to install. It is most likely a safe bet to download the latest stable version. </p></br></div><img src=\"../assets/screenshots/addunity.PNG\" alt=\"download\" style=\"width: 100%; height: 120%;\">";
        var html4 = "<img src=\"../assets/screenshots/addunityaddons.PNG\" alt=\"download\"style=\"width: 100%;\"><div><h3 style = \"text-align: center;\">Adding Modules to Unity</h3><p>Unless there is specific, different reasons you would like to use Unity for, we can keep this as is, and can choose 'Done' to continue.</p></br>";

        //get elements to work with
        var p = document.getElementById("container2");
        var newEl1 = document.createElement("section");
        var newEl2 = document.createElement("section");
        var newEl3 = document.createElement("section");
        var newEl4 = document.createElement("section");
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

        //adding 3rd
        newEl3.classList.add("card");
        newEl3.classList.add("remove");
        newEl3.setAttribute("data-aos", "fade-right");
        newEl3.innerHTML = html3;
        p.appendChild(newEl3);

        //adding 4th
        newEl4.classList.add("card");
        newEl4.classList.add("remove");
        newEl4.setAttribute("data-aos", "fade-right");
        newEl4.innerHTML = html4;
        p.appendChild(newEl4);

        ++clicks;
    }


}