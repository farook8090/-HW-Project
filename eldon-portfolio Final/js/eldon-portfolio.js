// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var myHeader = document.getElementById("header1");

// Get the offset position of the navbar
var sticky = myHeader.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        myHeader.classList.add("style")
    } else {
        myHeader.classList.remove("style");
    }
}

// For Changing background.
var body = document.querySelector('body');
var toggle = document.getElementById('toggle');

toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}


// Hamburger

function openNav() {
    document.getElementById("hamburger").style.right = "0px";
}

function closeNav() {
    document.getElementById("hamburger").style.right = "-422px";
}