const menuItems = document.querySelectorAll('.menu a[href^="#"]');
const imgs = document.querySelector('#img');
const img = document.querySelectorAll('#img img');
var idx = 0;

menuItems.forEach((item) => {
    item.addEventListener('click', scrollTo)
});

function scrollTo(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    window.scroll(0, section - 110);
}

function carrossel(opr) {
    if (opr == "+") {
        idx++;
    } else if (opr == "-") {
        idx--;
    }

    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < (img.length - 1) * (-1)) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 600}px)`;
}

console.log(img.length - 1);