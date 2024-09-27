
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('ul.menu').classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function() {
    const texts = [
      "Sou Desenvolvedor Web",
      "Transformo Ideias em Código",
      "Vamos Trabalhar Juntos?"
    ];
    
    let currentText = 0;
    let currentChar = 0;
    const typingSpeed = 50; // Velocidade de digitação (em ms)
    const delayBetweenTexts = 1500; // Tempo de espera entre textos
    const animatedTextElement = document.getElementById('animated-text');
  
    function typeText() {
      if (currentChar < texts[currentText].length) {
        animatedTextElement.innerHTML += texts[currentText].charAt(currentChar);
        currentChar++;
        setTimeout(typeText, typingSpeed); // Continuar digitando
      } else {
        // Após o texto terminar, se não for o último texto, apaga
        if (currentText < texts.length - 1) {
          setTimeout(eraseText, delayBetweenTexts); // Apaga se não for o último texto
        }
      }
    }
  
    function eraseText() {
      if (currentChar > 0) {
        animatedTextElement.innerHTML = texts[currentText].substring(0, currentChar - 1);
        currentChar--;
        setTimeout(eraseText, typingSpeed); // Continuar apagando
      } else {
        currentText = (currentText + 1) % texts.length; // Ir para o próximo texto
        setTimeout(typeText, typingSpeed); // Começar a digitar o próximo texto
      }
    }
  
    // Iniciar a digitação
    typeText();
  });

// index.js

// Verifica se o AOS foi carregado e inicializa
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
      AOS.init();
  } else {
      console.error('AOS library not loaded');
  }
});