function abrirPagina(ano) {

  document
    .querySelector('.tela-inicial')
    .classList
    .remove('ativa');

  document
    .querySelectorAll('.pagina-ano')
    .forEach(pagina => {
      pagina.classList.remove('ativa');
    });

  const pagina = document.getElementById(`pagina-${ano}`);

  pagina.classList.add('ativa');

  ativarAnimacoes(pagina);
}

function voltarInicio() {

  /* RESETAR FRASES */

  resetarFrases();

  document
    .querySelectorAll('.pagina-ano')
    .forEach(pagina => {
      pagina.classList.remove('ativa');
    });

  document
    .querySelector('.tela-inicial')
    .classList
    .add('ativa');
}

/* MOSTRAR / ESCONDER FRASE */

function mostrarFrase(imagem) {

  const jogador = imagem.closest('.jogador');

  const fraseVisivel = jogador.querySelector('.frase-jogador');

  const fraseEscondida = jogador.querySelector('.frase-escondida');

  const textoOriginal = "Clique em mim";

  /* SE JÁ ESTÁ ABERTA → FECHA */

  if(fraseVisivel.innerHTML === fraseEscondida.innerHTML) {

    fraseVisivel.innerHTML = textoOriginal;

  }

  /* SE ESTÁ FECHADA → ABRE */

  else {

    fraseVisivel.innerHTML = fraseEscondida.innerHTML;

  }
}

/* RESETAR TODAS */

function resetarFrases() {

  const frases = document.querySelectorAll('.frase-jogador');

  frases.forEach(frase => {

    frase.innerHTML = "Clique em mim";

  });
}

/* ANIMAÇÕES */

function ativarAnimacoes(pagina) {

  const elementos = pagina.querySelectorAll(
    '.imagem-time, .card-texto, .jogador, .video-area'
  );

  elementos.forEach((elemento, index) => {

    elemento.classList.remove('animar-entrada');

    void elemento.offsetWidth;

    elemento.classList.add('animar-entrada');

    setTimeout(() => {

      elemento.classList.add('ativo');

    }, 120 * index);

  });
}

/* PREVIEW DOS ANOS */

const cardsAnos = document.querySelectorAll('.botao-ano');

cardsAnos.forEach(card => {

  /* NOTEBOOK */

  card.addEventListener('mouseenter', () => {

    card.classList.add('preview');

  });

  card.addEventListener('mouseleave', () => {

    card.classList.remove('preview');

  });

  /* CELULAR */

  card.addEventListener('click', function(e) {

    if(window.innerWidth <= 768) {

      e.preventDefault();

      const ano = this
        .getAttribute('onclick')
        .replace("abrirPagina('", '')
        .replace("')", '');

      this.classList.add('preview');

      setTimeout(() => {

        this.classList.remove('preview');

        abrirPagina(ano);

      }, 700);
    }

  });

});