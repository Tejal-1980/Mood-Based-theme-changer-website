
//heartFall and music //
const bgMusic = new
  Audio("kornevmusic-upbeat-happy-corporate-487426.mp3");

let heartInterval = null
const createHeart = () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = "❤️";
  document.body.appendChild(heart);
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  setTimeout(() => {
    heart.remove();
  }, 5000);

}
function toggleEffect() {
  if (heartInterval === null) {
    heartInterval = setInterval(createHeart, 250);
    bgMusic.play();
  }
  else {
    clearInterval(heartInterval);
    heartInterval = null;
    bgMusic.pause();
    bgMusic.currentTime = 0;

  }
}
document.querySelectorAll(".moodBtn").forEach(btn => {
  btn.addEventListener("click", toggleEffect);
}); 