const menuItems = document.querySelectorAll('.menu a[href^="#"]');
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