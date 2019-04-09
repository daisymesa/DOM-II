// Your code goes here

// 1. mouseover
const navItems = document.getElementsByClassName('nav-link');
navItems[0].addEventListener('mouseover', function (event) {
    event.target.style.color = "orange";
});
navItems[1].addEventListener('mouseover', function (event) {
    event.target.style.color = "orange";
});
navItems[2].addEventListener('mouseover', function (event) {
    event.target.style.color = "orange";
});
navItems[3].addEventListener('mouseover', function (event) {
    event.target.style.color = "orange";
});

// 2. keydown
window.addEventListener('keydown', function (event) {
    event.target.style.color = "orange";
});

// 3. keyup
window.addEventListener('keyup', function (event) {
    event.target.style.color = "black";
});

// 4. wheel
const firstHeader = document.querySelectorAll(".intro h2");
firstHeader[0].addEventListener('wheel', function (event) {
    event.target.style.color = "orange";
});

// 5. load
window.addEventListener('load', function (event) {
    console.log('page is fully loaded');
});

// 6. resize
window.addEventListener('resize', function (event) {
    console.log('page was resized');
});
// 7. scroll
window.addEventListener('scroll', function (event) {
    console.log('user has scrolled');
});

// 8. dblclick
navItems[0].addEventListener("focus", function (event) {
    event.target.style.color = "black";
});
navItems[1].addEventListener("focus", function (event) {
    event.target.style.color = "black";
});
navItems[2].addEventListener("focus", function (event) {
    event.target.style.color = "black";
});
navItems[3].addEventListener("focus", function (event) {
    event.target.style.color = "black";
});

// 9. click
const btn = document.getElementsByClassName("btn");
btn[0].addEventListener("click", function (event) {
    event.target.style.color = "black";
    event.target.style.backgroundColor = "gray";
});

btn[1].addEventListener("click", function (event) {
    event.target.style.color = "black";
    event.target.style.backgroundColor = "gray";
});
btn[2].addEventListener("click", function (event) {
    event.target.style.color = "black";
    event.target.style.backgroundColor = "gray";
});

// 10. mouseover
const footer = document.getElementsByTagName("footer");
footer[0].addEventListener("mouseover", function (event){
    event.target.style.backgroundColor = "lightyellow";
});


// Propagation
const mainContainer = document.querySelector('.main-content');
mainContainer.addEventListener('click', function(eventObject){
 console.log(`mainContainer fired!`); 
  eventObject.stopPropagation();
});

// Prevent Default
const header = document.getElementsByTagName("header");
header[0].addEventListener("refresh", function (event){
    console.log("Navigation will not refresh!");
    event.preventDefault();
});
