const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
if(menuToggle){menuToggle.addEventListener("click",()=>navLinks.classList.toggle("show"))}
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("show")));
document.getElementById("year").textContent=new Date().getFullYear();
