const menuItems = document.querySelectorAll('.menu a[href^="#"]');
const imgs = document.querySelector('#img');
const img = document.querySelectorAll('#img img');
var idx = 0;

menuItems.forEach((item) => {
    item.addEventListener('click', scrollTo)
});

function scrollTo(event) {
    //previnir do padrão
    event.preventDefault();
    //pega o elemento clicado
    const element = event.target;
    //pega o link desse elemnto
    const id = element.getAttribute('href');
    //pega o topo dele
    const section = document.querySelector(id).offsetTop;
    //vai até ele
    window.scroll(0, section - 130);
}

function aORv(opr) {
    if (opr == "+") {
        return idx++;
    } else if (opr == "-") {
        return idx--;
    }
}

function carrossel(opr) {
    //avançar ou voltar
    aORv(opr);
    //ver se chegou no final
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }
    //ir
    imgs.style.transform = `translateX(${-idx * 600}px)`;
}