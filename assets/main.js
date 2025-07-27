// main.js Trinity Installer Web

document.addEventListener('DOMContentLoaded', function() {
  // Animation d'apparition du bouton
  const btn = document.querySelector('.btn');
  if (btn) {
    btn.style.opacity = 0;
    setTimeout(() => {
      btn.style.transition = "opacity 1s";
      btn.style.opacity = 1;
    }, 400);
  }

  // Lancement vidéo de fond après interaction utilisateur (anti-autoplay block)
  const bgvideo = document.getElementById('bgvideo');
  if (bgvideo) {
    // Essaye de lancer la vidéo immédiatement (si autorisé)
    bgvideo.play().catch(() => {});
    // Si bloqué, attend une interaction
    const playBgVideo = () => {
      bgvideo.play().catch(() => {});
      window.removeEventListener('click', playBgVideo);
      window.removeEventListener('keydown', playBgVideo);
    };
    window.addEventListener('click', playBgVideo);
    window.addEventListener('keydown', playBgVideo);
  }
});
