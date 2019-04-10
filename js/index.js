// Your code goes here

// 1. mouseover
const navItems = document.getElementsByClassName('nav-link');
navItems[0].addEventListener('mouseover', (event) => {
    event.target.style.color = "orange";
});
navItems[1].addEventListener('mouseover', (event) => {
    event.target.style.color = "orange";
});
navItems[2].addEventListener('mouseover', (event) => {
    event.target.style.color = "orange";
});
navItems[3].addEventListener('mouseover', (event) => {
    event.target.style.color = "orange";
});

// 2. keydown
window.addEventListener('keydown', (event) => {
    event.target.style.color = "orange";
});

// 3. keyup
window.addEventListener('keyup', (event) => {
    event.target.style.color = "black";
});

// 4. wheel
const firstHeader = document.querySelectorAll(".intro h2");
firstHeader[0].addEventListener('wheel', (event) => {
    event.target.style.color = "orange";
});

// 5. load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

// 6. resize
window.addEventListener('resize', (event) => {
    console.log('page was resized');
});
// 7. scroll
window.addEventListener('scroll', (event) => {
    console.log('user has scrolled');
});

// 8. focus
navItems[0].addEventListener("focus", (event) => {
    event.target.style.color = "black";
});
navItems[1].addEventListener("focus", (event) => {
    event.target.style.color = "black";
});
navItems[2].addEventListener("focus", (event) => {
    event.target.style.color = "black";
});
navItems[3].addEventListener("focus", (event) => {
    event.target.style.color = "black";
});

// 9. click
const btn = document.getElementsByClassName("btn");
btn[0].addEventListener("click", (event) => {
    event.target.style.color = "black";
    event.target.style.backgroundColor = "gray";
});

btn[1].addEventListener("click", (event) => {
    event.target.style.color = "black";
    event.target.style.backgroundColor = "gray";
});
btn[2].addEventListener("click", (event) => {
    event.target.style.color = "black";
    event.target.style.backgroundColor = "gray";
});

// 10. mouseover
const footer = document.getElementsByTagName("footer");
footer[0].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "orange";
});

// 11. auxClick
const pTags = document.getElementsByTagName("p");
pTags[0].addEventListener("auxclick", (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "orange";
});


// Propagation

const mainNavigation = document.querySelector('.main-navigation');
mainNavigation.addEventListener('click', (event) => {
  eventObject.stopPropagation();
});

// Prevent Default
const header = document.getElementsByTagName("header");
header[0].addEventListener("refresh", (event) => {
    event.preventDefault();
});
