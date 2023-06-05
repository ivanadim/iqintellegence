const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#navList");
let isHamburgerActive = false;
let isDropdownOpen = false;

function toggleHamburger() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    isHamburgerActive = !isHamburgerActive;
}

function toggleDropdown() {
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.display = isDropdownOpen ? "none" : "block";
    isDropdownOpen = !isDropdownOpen;
}

hamburger.addEventListener("click", toggleHamburger);

document.addEventListener("click", (event) => {
    event.stopPropagation();
    const width = event.view.innerWidth;
    if (event.target.id === "arrowDownIcon" && width <= 1090) {
        toggleDropdown();
    }
});


// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector("#navList");

// let isHamburgerActive = false;

// function activeteHamburger(isActive) {
//     if (isActive) {
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//         isHamburgerActive = false
//     }
//     else {
//         hamburger.classList.add("active");
//         navMenu.classList.add("active");
//         isHamburgerActive = true
//     }

// }

// hamburger.addEventListener("click", (event) => {
//     const width = event.view.innerWidth;
//     activeteHamburger(isHamburgerActive)
// });


// let isDropdownOpen = false;
// document.addEventListener("click", (event) => {
//     event.stopPropagation()
//     // console.log("clicked")
//     // console.log(event.target)
//     // console.log(event)

//     const width = event.view.innerWidth;
//     if (event.target.id === "arrowDownIcon" && width <= 520) {

//         if (isDropdownOpen) {
//             const dropdown = document.querySelector(".dropdown")
//             dropdown.style.display = "none"
//             isDropdownOpen = false;
//         }
//         else {
//             console.log(event.view.innerWidth)
//             const dropdown = document.querySelector(".dropdown")
//             dropdown.style.display = "block"
//             isDropdownOpen = true;
//         }

//     }
// });

//read more about us
function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "+";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "-";
        moreText.style.display = "inline";
    }
}


