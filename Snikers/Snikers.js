const menuButton = document.querySelector('.Menu');
const menuList = document.querySelector('.MenuList');

function toggleMenu(event) {
    event.stopPropagation(); // Предотвращаем распространение события на дочерние элементы
    menuList.classList.toggle('show');
}

menuButton.addEventListener('click', toggleMenu);
