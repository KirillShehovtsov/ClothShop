var agreebutton = document.querySelector(".agree-btn");

// Функция для изменения цвета кнопки "Оформить заказ" при нажатии
function invertButtonColor() {
    agreebutton.classList.toggle('invert-color');
}
// Получаем кнопку "Подтвердить"
const confirmButton = document.querySelector('.agree-btn');

// Добавляем обработчик события для нажатия на кнопку "Подтвердить"
confirmButton.addEventListener('click', function() {
    // Получаем все поля ввода
    const inputs = document.querySelectorAll('input');
    // Очищаем значения всех полей ввода
    inputs.forEach(input => input.value = '');
});

agreebutton.addEventListener('mousedown', invertButtonColor);
agreebutton.addEventListener('mouseup', invertButtonColor);


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