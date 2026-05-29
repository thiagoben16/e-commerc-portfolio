const imagens = [
    'microfone.jpg',
    'fone.jpg',
    'celular.jpg'
]

let indiceAtual = 0;

const banner = document.querySelector('.main-banner')

function alternaFundo(){
    indiceAtual = (indiceAtual +1) % imagens.length
    banner.style.backgroundImage = `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${imagens[indiceAtual]})`

}
alternaFundo();

setInterval(alternaFundo, 4000)