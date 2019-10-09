var clicksLeft = 0;
var clicksRight = 0;

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function facebook() {
    newUrl = "https://www.facebook.com/VRClubSDSU";
    document.location.href = newUrl;
}

function github() {
    newUrl = "https://github.com/SDSU-VR-Club";
    document.location.href = newUrl;
}

$(document).ready(function () {

    $(".hamburger").click(function navOpen() {
        window.alert(4);
        $(".nav-links").toggleClass("open");
    });

    $(".rightarrow").click(function click_right_arrow() {
        ++clicksLeft;
        if (clicksLeft % 2 == 1) {
            $(".right").hide();
            $(".right").css("width", "0%");
            $(".left").css("transition", ".5s");
            $(".left").css("width", "100%");
            $(".leftSide").css("transition", ".5s");
            $(".leftSide").toggleClass("leftarrow");
            $(".leftSide").toggleClass("rightarrow");
        }
        else {
            $(".right").css("transition", ".5s");
            $(".right").css("opacity", "0.0");
            $(".right").show();
            $(".left").css("transition", ".5s");
            $(".left").css("width", "50%");
            $(".right").css("width", "50%");
            $(".right").css("opacity", "1.0");
            $(".leftSide").toggleClass("rightarrow");
            $(".leftSide").toggleClass("leftarrow");
        }
    });

    $(".leftarrow").click(function click_right_arrow() {
        ++clicksRight;
        if (clicksRight % 2 == 1) {
            $(".left").hide();
            $(".left").css("width", "0%");
            $(".right").css("transition", ".5s");
            $(".right").css("width", "100%");
            $(".rightSide").css("transition", ".5s");
            $(".rightSide").toggleClass("leftarrow");
            $(".rightSide").toggleClass("rightarrow");
        }
        else {
            $(".left").css("transition", ".5s");
            $(".left").css("opacity", "0.0");
            $(".left").show();
            $(".right").css("transition", ".5s");
            $(".right").css("width", "50%");
            $(".left").css("width", "50%");
            $(".left").css("opacity", "1.0");
            $(".rightSide").toggleClass("rightarrow");
            $(".rightSide").toggleClass("leftarrow");
        }
    });

});