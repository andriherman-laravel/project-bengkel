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

/// TOGGLE CHAT
document.getElementById("chatBtn").onclick = function(){
  let box = document.getElementById("ai-chatbot");
  box.style.display = (box.style.display === "block") ? "none" : "block";
};

function getBotReply(text){
  text = text.toLowerCase();

  // ================= SCORE SYSTEM =================
  let score = {
    mesin: 0,
    aki: 0,
    rem: 0,
    ac: 0,
    oli: 0,
    kaki: 0,
    transmisi: 0,
    body: 0
  };

  // ================= MESIN =================
  if(text.match(/(getar|brebet|mesin|tidak stabil|tarikan lemah)/)) score.mesin += 2;
  if(text.match(/(mobil.*mati|tidak nyala|starter|susah hidup)/)) score.mesin += 3;
  if(text.match(/(overheat|panas mesin)/)) score.mesin += 3;

  // ================= AKI / LISTRIK =================
  if(text.match(/(aki|lampu redup|starter lemah|kelistrikan)/)) score.aki += 3;

  // ================= REM =================
  if(text.match(/(rem|blong|tidak pakem|bunyi rem|keras)/)) score.rem += 3;

  // ================= AC =================
  if(text.match(/(ac|tidak dingin|hembusan lemah|bau ac)/)) score.ac += 3;

  // ================= OLI =================
  if(text.match(/(oli|ganti oli|oli hitam|oli habis)/)) score.oli += 2;

  // ================= KAKI-KAKI =================
  if(text.match(/(setir|getar bawah|shockbreaker|bunyi bawah)/)) score.kaki += 3;

  // ================= TRANSMISI =================
  if(text.match(/(transmisi|matic|kopling|gigi susah|pindah gigi)/)) score.transmisi += 3;

  // ================= BODY REPAIR =================
  if(text.match(/(penyok|baret|lecet|cat rusak|cat mengelupas)/)) score.body += 3;
  if(text.match(/(tabrakan|tabrak|kecelakaan|benturan)/)) score.body += 4;
  if(text.match(/(bumper|pintu|kap|spion|bagasi)/)) score.body += 2;
  if(text.match(/(karat|berkarat)/)) score.body += 3;

  // ================= AMBIL SCORE TERBESAR =================
  let max = Object.keys(score).reduce((a,b) => score[a] > score[b] ? a : b);

  if(score[max] === 0){
    return "🔧 Mohon jelaskan lebih detail gejala kendaraan Anda (contoh: mobil getar saat jalan, AC tidak dingin, rem bunyi).";
  }

  // ================= DIAGNOSA MESIN =================
  if(max === "mesin"){
    return "🔧 DIAGNOSA MESIN:\nKemungkinan masalah pada pembakaran, engine mounting, atau sistem bahan bakar.\n💡 Saran: cek busi, injektor, dan throttle body di bengkel.";
  }

  // ================= DIAGNOSA AKI =================
  if(max === "aki"){
    return "⚡ DIAGNOSA LISTRIK:\nAki lemah atau sistem pengisian tidak optimal (alternator).\n💡 Saran: cek tegangan aki dan dinamo.";
  }

  // ================= DIAGNOSA REM =================
  if(max === "rem"){
    return "🛑 DIAGNOSA REM:\nKampas rem aus atau minyak rem berkurang.\n💡 Saran: segera servis rem demi keselamatan.";
  }

  // ================= DIAGNOSA AC =================
  if(max === "ac"){
    return "❄️ DIAGNOSA AC:\nKemungkinan freon habis atau kompresor melemah.\n💡 Saran: servis AC & isi ulang freon.";
  }

  // ================= DIAGNOSA OLI =================
  if(max === "oli"){
    return "🛢️ DIAGNOSA OLI:\nOli mesin perlu diganti atau volume kurang.\n💡 Saran: ganti oli secara rutin setiap 5.000–10.000 km.";
  }

  // ================= DIAGNOSA KAKI-KAKI =================
  if(max === "kaki"){
    return "🚗 DIAGNOSA KAKI-KAKI:\nShockbreaker atau tie rod kemungkinan aus.\n💡 Saran: lakukan spooring & balancing.";
  }

  // ================= DIAGNOSA TRANSMISI =================
  if(max === "transmisi"){
    return "⚙️ DIAGNOSA TRANSMISI:\nKampas kopling aus atau oli transmisi bermasalah.\n💡 Saran: cek sistem transmisi di bengkel.";
  }

  // ================= DIAGNOSA BODY REPAIR =================
  if(max === "body"){
    return "🚗 DIAGNOSA BODY REPAIR:\nTerjadi kerusakan pada bodi kendaraan (penyok, baret, atau benturan).\n💡 Saran: lakukan perbaikan panel, repaint, atau dent repair di body repair.";
  }

  // ================= DEFAULT =================
  return "🔧 Kami belum bisa mendiagnosa pasti.\nSilakan jelaskan lebih detail gejala kendaraan Anda (contoh: 'mobil getar saat jalan').";
}

// ================= CHAT SYSTEM =================
function sendMessage(){
  let input = document.getElementById("userInput");
  let text = input.value;

  if(text.trim() === "") return;

  let chatBody = document.getElementById("chatBody");

  // user message
  chatBody.innerHTML += `<div class="user">${text}</div>`;

  // bot reply
  let reply = getBotReply(text);
  chatBody.innerHTML += `<div class="bot">${reply}</div>`;

  input.value = "";

  chatBody.scrollTop = chatBody.scrollHeight;
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