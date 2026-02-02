const grid = document.getElementById("balloonGrid");
const poppedCountEl = document.getElementById("poppedCount");
const miniMsg = document.getElementById("miniMsg");
const nextBtn = document.getElementById("nextBtn");

const popup = document.getElementById("popup");
const okBtn = document.getElementById("okBtn");

let popped = 0;

document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "page2.html";
});

nextBtn.addEventListener("click", () => {
  window.location.href = "page4.html";
});

okBtn.addEventListener("click", () => {
  window.location.href = "page4.html";
});

function confettiBurst(){
  for(let i=0;i<20;i++){
    const c = document.createElement("div");
    c.style.position="absolute";
    c.style.width="10px";
    c.style.height="10px";
    c.style.borderRadius="3px";
    c.style.left = (Math.random()*100) + "%";
    c.style.top = "-10px";
    c.style.background = `hsl(${Math.random()*360}, 90%, 70%)`;
    c.style.opacity="0.95";
    c.style.zIndex="10";
    grid.appendChild(c);

    const fall = c.animate([
      { transform:`translateY(0px) rotate(0deg)` , opacity:1 },
      { transform:`translateY(380px) rotate(${Math.random()*720}deg)` , opacity:0.2 }
    ], { duration: 900 + Math.random()*600, easing:"ease-out", fill:"forwards" });

    fall.onfinish = () => c.remove();
  }
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".balloon");
  if(!btn || btn.classList.contains("popped")) return;

  btn.classList.add("popped");
  btn.textContent = "💥";

  const msg = btn.getAttribute("data-msg") || "Yay! 🎉";
  miniMsg.textContent = msg;

  confettiBurst();

  popped++;
  poppedCountEl.textContent = popped;

  if(popped >= 6){
    nextBtn.disabled = false;
    nextBtn.textContent = "Unlocked ✅ Next ➜";

    setTimeout(() => {
      popup.style.display = "flex";
    }, 500);
  }
});
