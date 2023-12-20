function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);



    if (elemento != null && elemento.localName ==='audio') {
        elemento.play(); 
    }
    
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//Enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string
   
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    
    tecla.onkeydown = function (evento) {

        console.log(evento.code === 'Space')

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}