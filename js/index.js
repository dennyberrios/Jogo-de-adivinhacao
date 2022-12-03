const conteudo = document.querySelector(".texto");
const imagem = document.querySelector(".imagem");
const btn = document.querySelector(".btn");
const btnTentativa = document.querySelector(".btnTentativa");
const confettiAt = document.getElementById("confetti");

var randomTrue = [
  "url('./Assets/img/2k.gif')",
  "url('./Assets/img/3a35.gif')",
  "url('./Assets/img/meme.gif')",
  "url('./Assets/img/FTuK.gif')",
  "url('./Assets/img/VJAw.gif')",
  "url('./Assets/img/Agx.gif')"]
var randomFalse = [
  "url('./Assets/img/1dSu.gif')",
  "url('./Assets/img/tobey-cry.gif')",
  "url('./Assets/img/8mx.gif')",
  "url('./Assets/img/2bd.gif')",
  "url('./Assets/img/Oam.gif')",
  "url('./Assets/img/10dq.gif')"]
var randomTelaPrincipal = [
  "url('./Assets/img/nazare.gif')",
  "url('./Assets/img/bqd.gif')",
  "url('./Assets/img/ekz.gif')"]

function reload() {
  location.reload();
}

function sorteia() {
  return Math.round(Math.random() * 10)
}

function sorteiaNumeros(quantidade) {

  let segredos = [];
  let numero = 1;

  while (numero <= quantidade) {
    let numeroAleatorio = sorteia();
    if (numeroAleatorio !== 0) {
      let achou = false;
      for (posicao = 0; posicao < segredos.length; posicao++) {
        if (segredos[posicao] == numeroAleatorio) {
          achou == true;
          break;
        }
      }
      if (achou == false) {
        segredos.push(numeroAleatorio);
        numero++;
      }
    }
  }
  return segredos
}

var segredos = sorteiaNumeros(1);

function mostra(msg) {
  alert(msg);
}

imagem.style.backgroundImage = randomTelaPrincipal[Math.round(Math.random() * 2)];
btnTentativa.className = "btn invisible";

function verifica() {

  let count = 200;
  let defaults = {origin: { y: 0.7 }};
  let conffetiVerdadeiroFalso;

  for (let posicao = 0; posicao < segredos.length; posicao++) {
    
    if (conteudo.value == segredos[posicao]) {
      imagem.style.backgroundImage = randomTrue[Math.round(Math.random() * 5)];
      imagem.className = "imagem verdadeiro";
      document.querySelector(".avisos").style.color = "#4ECA64";
      document.querySelector(".resposta").innerHTML = `Parabéns você acertou`;
      btn.className = "btn invisible";
      btnTentativa.className = "btn";
      conffetiVerdadeiroFalso = true;
      break;
    }
    btn.className = "btn invisible";
    btnTentativa.className = "btn";
    imagem.style.backgroundImage = randomFalse[Math.round(Math.random() * 5)];
    imagem.className = "imagem falso";
    document.querySelector(".avisos").style.color = "#DB5A5A";
    document.querySelector(".resposta").innerHTML = `Você errou a resposta correta é o número: ${segredos}`;
    conffetiVerdadeiroFalso = false;
  }

  if (conffetiVerdadeiroFalso == true) {
    confettiAt.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
  }

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  function triggerFire() {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  setTimeout(triggerFire, 300);
  conteudo.value = "";
  conteudo.focus();
}