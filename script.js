
// 💜 UNLOCK + MUSIC
function unlock() {
  document.getElementById("lockScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";

  const music = document.getElementById("bgMusic");
  music.volume = 0.5; // 🎵 medium-soft volume
  music.play();
}


// 💌 FULL LOVE LETTER (TYPEWRITER)
const message = `Happy 2nd Monthsary, my love loveee! 💖

It’s hard to believe that another month has already flown by since we started this beautiful journey together. Every day with you is a blessing, and I am so grateful that I get to call you mine. I still remember how everything began, how unexpected it all was, how perfect it felt, and how you became the answered prayer I never knew I needed.

This past month has been a mix of laughter, love, and, yes, a few misunderstandings. But through it all, I’ve come to realize just how much you mean to me, and how much I want to grow for you and with you. The challenges we faced have only made my love for you deeper and stronger. I know I have a lot of shortcomings, I can be immature and sensitive at times but I am trying every day to be better, not just for myself but for you, and for the future we are building together.

Thank you for your endless patience, for understanding me even when I don’t understand myself, and for always choosing me despite my flaws. Thank you for letting me be vulnerable, for listening to my fears, and for showing me what it means to truly love and be loved. You make everything feel lighter, brighter, and I am grateful for every moment, both the good times and the tough ones. They all remind me of how much I want this, how much I want us lovelove ko.

I promise to keep choosing you, to keep learning and growing with you, and to stand by your side no matter what. I look forward to more months, more years, and a lifetime of creating memories together, laughing, talking late into the night, and growing old with you my lovelove.

Happy 2nd monthsary to us, my love! Thank you for being my person, my peace, my forever, my lovelove, my forever, my asawa. I LOVE YOU SO MUCHIEEEEEEEEEE!! MWA!! 💜`;

let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("loveLetter").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 18);
  }
}

typeWriter();


// 💖 HEART ANIMATION
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 10;
    this.size = Math.random() * 12 + 6;
    this.speed = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.5;
  }

  draw() {
    ctx.fillStyle = `rgba(168, 85, 247, ${this.opacity})`;
    ctx.beginPath();

    let x = this.x;
    let y = this.y;
    let s = this.size;

    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - s/2, x - s, y - s/2, x - s, y);
    ctx.bezierCurveTo(x - s, y + s, x, y + s + s/2, x, y + s);
    ctx.bezierCurveTo(x, y + s + s/2, x + s, y + s, x + s, y);
    ctx.bezierCurveTo(x + s, y - s/2, x, y - s/2, x, y);

    ctx.fill();
  }

  update() {
    this.y -= this.speed;
    if (this.y < -20) {
      this.y = canvas.height + 20;
      this.x = Math.random() * canvas.width;
    }
  }
}

let hearts = [];
for (let i = 0; i < 40; i++) hearts.push(new Heart());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    h.update();
    h.draw();
  });
  requestAnimationFrame(animate);
}

animate();