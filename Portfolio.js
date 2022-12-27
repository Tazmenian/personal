/*let activePage = window.location.pathname;
let navLinks = document.querySelectorAll('nav a')

forEach( link => {
    if(link.href.includes('${activePage}')){
        console.log('${activePage}');
    }
})*/





let index = 0;

change(index);




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


function change(i){
  index += i;

  let images = document.getElementsByClassName("image");

  let dots = document.getElementsByClassName("dot");

  for(i = 0;i < images.length;i++)images[i].style.display = "none";

  for(i = 0;i < dots.length;i++)dots[i].className = dots[i].className.replace
  (" act", "");

  if(index > images.length - 1)
    index = 0;

  if(index < 0)
    index = images.length - 1;

  images[index].style.display = "block";
  dots[index].className += " act";

}