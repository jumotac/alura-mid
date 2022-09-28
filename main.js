//------------- FOR ---------------------

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
            elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido!');
    }
} 

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]
    const instrumento =  tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //Template String

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
        }
      }
      tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
      }
    }


//------------- WHILE ---------------------

/*function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
} 

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0


while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const instrumento =  tecla.classList[1];
    console.log(instrumento);

    //Template Strint
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;
    console.log(contador);
}*/


// Seleção dos botões do forma INDIVIDUAL:

/* POM
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play()
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;*/


/* CLAP
function tocaSomClap () {
    document.querySelector('#som_tecla_clap ').play()
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;*/

/* TIM
function tocaSomTim () {
    document.querySelector('#som_tecla_tim').play()
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;*/

/* PUFF
function tocaSomPuff () {
    document.querySelector('#som_tecla_puff').play()
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;*/

/*SPLASH
function tocaSomSplash () {
    document.querySelector('#som_tecla_splash ').play()
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;*/

/* TOIM
function tocaSomToim () {
    document.querySelector('#som_tecla_toim').play()
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;*/

/* PSH
function tocaSomPsh () {
    document.querySelector('#som_tecla_psh').play()
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;*/

/*TIC
function tocaSomTic () {
    document.querySelector('#som_tecla_tic').play()
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;*/

/* TOM
function tocaSomTom () {
    document.querySelector('#som_tecla_tom').play()
}

document.querySelector('.tecla_tom').onclick = tocaSomTom; */
