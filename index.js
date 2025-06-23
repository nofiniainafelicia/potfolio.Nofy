// Animation au survol (hover)
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.classList.add('animate__animated', 'animate__pulse');
  });

  img.addEventListener('mouseleave', () => {
    // Retirer l'animation après qu'elle soit terminée
    img.addEventListener('animationend', () => {
      img.classList.remove('animate__animated', 'animate__pulse');
    }, { once: true });
  });
});
// Animation au clic
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.add('animate__animated', 'animate__rubberBand');

    // Retirer l'animation après qu'elle soit terminée pour pouvoir la rejouer
    img.addEventListener('animationend', () => {
      img.classList.remove('animate__animated', 'animate__rubberBand');
    }, { once: true });
  });
});

//nom

// Sélectionner le nom
const nom= document.getElementById('nom');
// Animation au survol (hover)
nom.addEventListener('mouseenter', () => {
  nom.classList.add('animate__animated', 'animate__bounce');
});

// Retirer l'animation quand elle se termine (pour pouvoir la rejouer à chaque fois)
nom.addEventListener('animationend', () => {
  nom.classList.remove('animate__animated', 'animate__bounce');
});

// Animation au clic
nom.addEventListener('click', () => {
  nom.classList.add('animate__animated', 'animate__heartBeat');
});



  