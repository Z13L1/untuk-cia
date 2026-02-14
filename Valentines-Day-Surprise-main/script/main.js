// Optimized particle creation
/*function createParticles() {
    const emojis = ['❤️', '🌎', '🌠', '💝', '🌟', '💞'];
    const container = document.body;
    let lastTime = 0;

    function animate(timestamp) {
        if (!lastTime || timestamp - lastTime >= 500) { // Reduced frequency
            const particle = document.createElement('div');
            particle.className = 'love-particle';
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = Math.random() * 3 + 3 + 's';
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 6000);
            lastTime = timestamp;
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}*/

function createParticles() {
  // Masukkan list nama file foto HP kamu di sini
  const photos = [
    "assets/foto1.jpeg",
    "assets/foto2.jpeg",
    "assets/foto3.jpeg",
    "assets/foto4.jpeg",
    "assets/foto5.jpeg",
    "assets/foto6.jpeg",
    "assets/foto7.jpeg",
    "assets/foto8.jpeg",
    "assets/foto9.jpeg",
    "assets/foto10.jpeg",
    "assets/foto11.jpeg",
    "assets/foto12.jpeg",
    "assets/foto13.jpeg",
    "assets/foto14.jpeg",
    "assets/foto15.jpeg",
    "assets/foto16.jpeg",
    "assets/foto17.jpeg",
    "assets/foto18.jpeg",
  ];

  const container = document.body;
  let lastTime = 0;

  function animate(timestamp) {
    // Munculkan foto setiap 1 detik agar tidak terlalu berat
    if (!lastTime || timestamp - lastTime >= 1000) {
      const img = document.createElement("img");
      img.className = "photo-particle";

      // Pilih foto random
      img.src = photos[Math.floor(Math.random() * photos.length)];

      // Posisi horizontal random
      img.style.left = Math.random() * 90 + "%";

      // Variasi ukuran (ada yang kecil 0.7x, ada yang besar 1.2x)
      const scale = Math.random() * 0.5 + 0.7;
      img.style.transform = `scale(${scale})`;

      // Durasi melayang random (antara 6 sampai 10 detik)
      img.style.animationDuration = Math.random() * 4 + 6 + "s";

      container.appendChild(img);

      // Hapus elemen setelah animasi selesai agar browser tidak berat
      setTimeout(() => img.remove(), 10000);
      lastTime = timestamp;
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

// Optimized message animation
let currentMessage = 0;
const messages = document.querySelectorAll(".message");
const finalQuestion = document.querySelector(".final-question");

function showNextMessage() {
  requestAnimationFrame(() => {
    if (currentMessage > 0) {
      messages[currentMessage - 1].classList.add("exit");
    }

    if (currentMessage < messages.length) {
      messages[currentMessage].classList.add("active");
      currentMessage++;
      setTimeout(showNextMessage, 3000);
    } else {
      finalQuestion.style.display = "block";
      finalQuestion.style.opacity = "1";
    }
  });
}

// Button interactions
document.querySelector(".yes-btn").addEventListener("click", function () {
  const celebration = document.querySelector(".celebration");
  celebration.style.display = "block";

  // Optimized heart burst
  requestAnimationFrame(() => {
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement("div");
      heart.className = "heart-burst";
      heart.textContent = "❤️";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = Math.random() * 100 + "%";
      heart.style.animationDelay = Math.random() * 0.5 + "s";
      celebration.appendChild(heart);
    }
  });

  finalQuestion.innerHTML =
    "<h2>❤️ I Love You more sayang... ❤️</h2>" +
    "<p style='margin-top: 15px; font-size: 1.2rem; line-height: 1.5;'>" +
    "Makasih ya sudah mau jadi Valentine-ku.<br>" +
    "Aku janji bakal terus jaga hati ini buat kamu.<br>" +
    "I love you more than words can say! 🥰" +
    "</p>" +
    "<div style='margin-top: 2rem; font-size: 3rem'>💞🌸✨</div>";
});

document.querySelector(".no-btn").addEventListener("mouseover", function () {
  requestAnimationFrame(() => {
    this.style.transform = `translate(${Math.random() * 200 - 100}px, 
            ${Math.random() * 200 - 100}px)
            rotate(${Math.random() * 360}deg)`;
    this.style.transition = "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)";
  });
});

// Initialize
createParticles();
setTimeout(showNextMessage, 1000);
