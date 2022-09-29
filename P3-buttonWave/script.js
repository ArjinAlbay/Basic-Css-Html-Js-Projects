let wave = document.querySelector(".btn");

wave.addEventListener("mouseover", (event) => {
  let x = event.clientX - wave.offsetLeft;
  let y = event.clientY - wave.offsetTop;

  wave.style.setProperty(`--xPos`, x + `px`);
  wave.style.setProperty(`--yPos`, y + `px`);
});
