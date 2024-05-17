const menuButton = document.querySelector('.Menu');
const menuList = document.querySelector('.MenuList');

function toggleMenu(event) {
    event.stopPropagation(); 
    menuList.classList.toggle('show');
}

menuButton.addEventListener('click', toggleMenu);
 
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('open');
})