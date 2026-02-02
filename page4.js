const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

const seekBar = document.getElementById("seekBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

const continueBtn = document.getElementById("continueBtn");

const cards = [
  { title: "Dil Ka Jo Haal Hai", desc: "Here's to making this year unforgettable 🌟" },
  { title: "Birthday Moments", desc: "Smile, glow & celebrate 💗" },
  { title: "Gulaabo Vibes", desc: "A day made just for you 🌹" }
];

let idx = 0;

window.addEventListener("load", () => {
  audio.volume = 1;
  audio.play().then(() => playBtn.textContent="❚❚").catch(()=> playBtn.textContent="▶");
});

playBtn.addEventListener("click", () => {
  if(audio.paused){ audio.play(); playBtn.textContent="❚❚"; }
  else { audio.pause(); playBtn.textContent="▶"; }
});

function formatTime(sec){
  sec = Math.floor(sec || 0);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2,"0")}`;
}

audio.addEventListener("loadedmetadata", () => durationEl.textContent = formatTime(audio.duration));

audio.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(audio.currentTime);
  if(audio.duration) seekBar.value = (audio.currentTime / audio.duration) * 100;
});

seekBar.addEventListener("input", () => {
  if(!audio.duration) return;
  audio.currentTime = (Number(seekBar.value)/100) * audio.duration;
});

document.getElementById("prevBtn").addEventListener("click", () => { idx=(idx-1+cards.length)%cards.length; });
document.getElementById("nextBtn").addEventListener("click", () => { idx=(idx+1)%cards.length; });

continueBtn.addEventListener("click", () => window.location.href="page5.html");
