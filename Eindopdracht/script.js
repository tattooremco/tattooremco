let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar ul li a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSidebar.style.width = "0px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "visible";

        toggleNavStatus = false;
    }
}

const bodyElement = document.body;

const changeHomeBackground = function () {
    bodyElement.classList.add("home-background");
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("purple-background");
    bodyElement.classList.remove("green-background");
    let toggleNavStatus = true;
    toggleNav();
}

const changeRedBackground = function () {
    bodyElement.classList.add("red-background");
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("purple-background");
    bodyElement.classList.remove("green-background");
    let toggleNavStatus = true;
    toggleNav();
}

const changeOrangeBackground = function () {
    bodyElement.classList.add("orange-background");
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("purple-background");
    bodyElement.classList.remove("green-background");
    let toggleNavStatus = true;
    toggleNav();
}

const changePurpleBackground = function () {
    bodyElement.classList.add("purple-background");
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("green-background");
    let toggleNavStatus = true;
    toggleNav();
}

const changeGreenBackground = function () {
    bodyElement.classList.add("green-background");
    bodyElement.classList.remove("home-background");
    bodyElement.classList.remove("red-background");
    bodyElement.classList.remove("orange-background");
    bodyElement.classList.remove("purple-background");
    let toggleNavStatus = true;
    toggleNav();
}