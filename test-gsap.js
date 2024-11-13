gsap.to(".img", { y : -300,
    duration: 1,
    repeat: -1,
    yoyo: true,
    stagger: {
        each:0.1, 
        repeat: -1,
        yoyo: true,
        from:"center",
    }
    }
)

let loaderBar = document.querySelector('.loader-bar');
    
let progress = 0;
function updateProgress() {
  if (progress < 100) {
    progress += 1;
    loaderBar.style.width = progress + '%';
  }
}

// Simuler le chargement en augmentant la largeur de la barre toutes les 50ms
setInterval(updateProgress, 50);