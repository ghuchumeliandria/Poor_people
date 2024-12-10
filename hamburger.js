const hamburger = document.getElementById("hamburger")
const line1  = document.getElementById("line1")
const line2  = document.getElementById("line2")
const line3  = document.getElementById("line3")
hamburger.addEventListener("click" , () =>{
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
    hamburger.classList.toggle("active")
    line1.classList.toggle("rotate1")
    line2.classList.toggle("rotate2")
    line3.classList.toggle("rotate3")
})