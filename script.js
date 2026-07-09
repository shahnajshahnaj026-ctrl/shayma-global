// ===========================
// SHAYMA GLOBAL
// MAIN SCRIPT
// ===========================

const body = document.body;

const themeButton = document.getElementById("themeToggle");

// ---------------------------
// DARK / LIGHT MODE
// ---------------------------

let currentTheme = localStorage.getItem("theme");

if(currentTheme === "dark"){

body.classList.add("dark-mode");

themeButton.innerHTML="☀️";

}else{

themeButton.innerHTML="🌙";

}

themeButton.addEventListener("click",()=>{

body.classList.toggle("dark-mode");

if(body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

themeButton.innerHTML="☀️";

}else{

localStorage.setItem("theme","light");

themeButton.innerHTML="🌙";

}

});

// ---------------------------
// SMOOTH BUTTON EFFECT
// ---------------------------

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("mousedown",()=>{

button.style.transform="scale(.95)";

});

button.addEventListener("mouseup",()=>{

button.style.transform="scale(1)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

// ---------------------------
// SCROLL ANIMATION
// ---------------------------

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".feature-card,.offer-card,.faq-item,.stat-box").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s";

observer.observe(item);

});

// ---------------------------
// CONTACT FORM
// ---------------------------

const form=document.querySelector(".contact form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

// ---------------------------
// HERO BUTTONS
// ---------------------------

const startButton=document.querySelector(".start-btn");

if(startButton){

startButton.onclick=()=>{

window.location.href="#offers";

};

}

const learnButton=document.querySelector(".learn-btn");

if(learnButton){

learnButton.onclick=()=>{

window.location.href="#features";

};

}
// ===========================
// FAQ ACCORDION
// ===========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item)=>{

const answer=item.querySelector("p");

answer.style.display="none";

item.addEventListener("click",()=>{

faqItems.forEach((other)=>{

if(other!==item){

other.querySelector("p").style.display="none";

}

});

if(answer.style.display==="block"){

answer.style.display="none";

}else{

answer.style.display="block";

}

});

});

// ===========================
// NUMBER COUNTER
// ===========================

const counters=document.querySelectorAll(".stat-box h2");

const speed=60;

counters.forEach(counter=>{

const animate=()=>{

const target=counter.innerText.replace(/\D/g,"");

const value=+counter.getAttribute("data-count")||target;

let current=+counter.innerText.replace(/\D/g,"")||0;

const increment=Math.ceil(value/speed);

if(current<value){

current+=increment;

counter.innerText=current+"+";

setTimeout(animate,25);

}else{

counter.innerText=value+"+";

}

};

animate();

});

// ===========================
// BACK TO TOP
// ===========================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="backTop";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="20px";
topButton.style.bottom="90px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#0b7d3a";
topButton.style.color="#fff";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.fontSize="20px";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===========================
// LOADING EFFECT
// ===========================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .8s";
