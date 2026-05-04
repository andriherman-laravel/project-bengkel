document.addEventListener("DOMContentLoaded", function(){

/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/* =========================
   ACTIVE MENU ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if(window.scrollY >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const nav = document.querySelector(".navbar");
if(nav){
  window.addEventListener("scroll", function(){
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
}


/* =========================
   RIPPLE EFFECT MENU
========================= */
document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click', function(e){
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    circle.style.width = circle.style.height = size + "px";
    circle.style.left = e.clientX - rect.left - size / 2 + "px";
    circle.style.top = e.clientY - rect.top - size / 2 + "px";

    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});


/* =========================
   NAV INDICATOR
========================= */
const indicator = document.querySelector(".nav-indicator");

if(indicator){
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link=>{
    link.addEventListener("mouseenter", function(){
      const rect = this.getBoundingClientRect();
      const parentRect = this.parentElement.parentElement.getBoundingClientRect();

      indicator.style.width = rect.width + "px";
      indicator.style.left = (rect.left - parentRect.left) + "px";
    });
  });

  document.querySelector(".navbar-nav")?.addEventListener("mouseleave", ()=>{
    const active = document.querySelector(".nav-link.active");
    if(active){
      const rect = active.getBoundingClientRect();
      const parentRect = active.parentElement.parentElement.getBoundingClientRect();

      indicator.style.width = rect.width + "px";
      indicator.style.left = (rect.left - parentRect.left) + "px";
    }
  });
}


/* =========================
   COUNTER ANIMATION
========================= */
let count = 0;
let target = 500;
let speed = 20;
let started = false;

function animateCounter(){
  const el = document.getElementById("counter");
  if(!el) return;

  if(count < target){
    count++;
    el.innerText = count + "+";
    setTimeout(animateCounter, speed);
  }
}

window.addEventListener("scroll", function(){
  const el = document.getElementById("counter");
  if(!el) return;

  if(!started && el.getBoundingClientRect().top < window.innerHeight){
    animateCounter();
    started = true;
  }
});


/* =========================
   CHATBOT
========================= */
const chatBtn = document.getElementById("chatBtn");
const chatbot = document.getElementById("ai-chatbot");
const input = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

// toggle chat
if(chatBtn && chatbot){
  chatBtn.onclick = () => {
    chatbot.style.display =
      chatbot.style.display === "flex" ? "none" : "flex";
  };
}

// AI RESPON
function getBotReply(text){
  text = text.toLowerCase();

  if(text.includes("halo") || text.includes("hai")){
    return "Halo 👋 ada yang bisa kami bantu?";
  }

  if(text.includes("harga")){
    return "Harga tergantung kerusakan ya 😊 silakan kirim foto ke WhatsApp kami.";
  }

  if(text.includes("lokasi")){
    return "Kami berada di Sentul, Bogor 📍";
  }

  if(text.includes("jam")){
    return "Senin - Jumat: 09.00 - 17.00";
  }

  return "Silakan hubungi WhatsApp kami ya 😊 👉 https://wa.me/6285931971828";
}

// kirim chat
if(input && chatBody){
  input.addEventListener("keypress", function(e){
    if(e.key === "Enter" && input.value.trim() !== ""){

      let userText = input.value;

      chatBody.innerHTML += `<div class="user">${userText}</div>`;

      let reply = getBotReply(userText);

      setTimeout(()=>{
        chatBody.innerHTML += `<div class="bot">${reply}</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 500);

      input.value = "";
    }
  });
}


/* =========================
   SCROLL ANIMATION (OPTIONAL)
========================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.card-org').forEach(el => {
  observer.observe(el);
});

});