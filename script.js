let humberger = document.querySelector(".humburger");
let navBar = document.querySelector(".navbar");

humberger.addEventListener("click", () => {
    humberger.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".right").forEach(n => n.addEventListener("click", () => {
    humberger.classList.remove("active");
    navBar.classList.remove("active");
}))









/*
let activePage = window.location.pathname;
let navLinks = document.querySelectorAll('nav a')

forEach( link => {
    if(link.href.includes('${activePage}')){
        console.log('${activePage}');
    }
})*/