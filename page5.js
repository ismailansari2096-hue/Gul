const sealBtn = document.getElementById("sealBtn");
const againBtn = document.getElementById("againBtn");
const sealed = document.getElementById("sealed");
const okBtn = document.getElementById("okBtn");

sealBtn.addEventListener("click", () => sealed.style.display="flex");
okBtn.addEventListener("click", () => sealed.style.display="none");
againBtn.addEventListener("click", () => window.location.href="index.html");
