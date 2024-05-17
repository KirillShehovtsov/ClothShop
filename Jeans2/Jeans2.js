const menuButton = document.querySelector('.Menu');
const menuList = document.querySelector('.MenuList');

function toggleMenu(event) {
    event.stopPropagation(); 
    menuList.classList.toggle('show');
}

menuButton.addEventListener('click', toggleMenu);
 
// JSON данные
var jsonData = {
    "product": [{
        "cost":99.00,
        "name":"STANDARD RYAN JEANS",
        "materials":"69 % хлопок, 30 % переработанный хлопок, 1 % эластан.",
        "color":"Чёрный",
        "description":"Эти прямые джинсы имеют потертый эффект на швах и идеально впишутся в уличный образ выходного дня."
    }]
};

// Функция для конвертации JSON в HTML
function convertJsonToHtml(jsonData) {
    var html = '<div class="product">';
    // Для каждого продукта в JSON
    jsonData.product.forEach(function(product) {
        // Создаем блок для продукта
        html += '<div class="product-details">';
        html += '<h2 class="cost">'+"<p><strong>€</strong>"+ product.cost + '</h2>'; // Добавлено отображение цены
        html += '<h2 class="product-name">' + product.name + '</h2>';
        html += '<p><strong>Материалы:</strong> ' + product.materials + '</p>';
        html += '<p><strong>Цвет:</strong> ' + product.color + '</p>';
        html += '<p><strong>Описание:</strong> ' + product.description + '</p>';
        html += '<p class="size"><strong>Размеры</strong></p>'
        html += '<div class="sizes">';
        html += '<button class="size-btn" onclick="selectSize(this)">S</button>';
        html += '<button class="size-btn" onclick="selectSize(this)">M</button>';
        html += '<button class="size-btn" onclick="selectSize(this)">L</button>';
        html += '<button class="size-btn" onclick="selectSize(this)">XL</button>';
        html += '</div>';
        html += '<button class="purchase-btn">Оформить заказ</button>';
        html += '</div>';
    });
    
    html += '</div>';
    return html;
}

// Получаем HTML строку
var productHtml = convertJsonToHtml(jsonData);


// Вставляем HTML в элемент с id "product-container"
document.getElementById("product-container").innerHTML = productHtml;
// Получаем элементы кнопок и изображения
var productImage = document.getElementById("product-image");

// Массив изображений
var images = [
    "../images/TommyJeans.webp", 
    "../images/TommyJeans2.webp", 
];

// Текущий индекс изображения
var currentImageIndex = 0;

// Функция для обновления изображения
function updateImage() {
    productImage.src = images[currentImageIndex];
}

// Функция для переключения на предыдущее изображение
function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateImage();
}

// Функция для переключения на следующее изображение
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateImage();
}

// Показать первое изображение при загрузке страницы
updateImage();

// Функция для выбора размера
function selectSize(button) {
    // Проверяем, есть ли у кнопки класс 'selected'
    var isSelected = button.classList.contains('selected');

    // Если у кнопки уже есть класс 'selected', то удаляем его
    if (isSelected) {
        button.classList.remove('selected');
    } else {
        // Если у кнопки нет класса 'selected', то сначала удаляем этот класс у всех кнопок размеров
        var sizeButtons = document.querySelectorAll('.size-btn');
        sizeButtons.forEach(function(btn) {
            btn.classList.remove('selected');
        });
        // Затем добавляем класс 'selected' к выбранной кнопке
        button.classList.add('selected');
    }
}

//checking button isDisable

var existingCartData;
if(localStorage.getItem('cart') === ''){
    existingCartData = []
}
else{
    existingCartData = JSON.parse(localStorage.getItem('cart')) || [];
}


existingCartData.forEach(product => {
    console.log('product: '+JSON.stringify(product));
    if(product.name === "Pidorok"){
        console.log('enter logic')

        document.querySelector('.purchase-btn').disabled = true;
    }
})

var purchaseButton = document.querySelector(".purchase-btn");

// Функция для изменения цвета кнопки "Оформить заказ" при нажатии
function invertButtonColor() {
    purchaseButton.classList.toggle('invert-color');
}



function addToCart() {
    var selectedSizeElement = document.querySelector('.size-btn.selected');
    if (!selectedSizeElement) {
        return; // Если размер не выбран, выходим из функции
    }
    var selectedSize = selectedSizeElement.textContent; // Получаем текст кнопки с выбранным размером

    var productToAdd = {
        name: "STANDARD RYAN JEANS", // Примерное название, возможно, вам нужно будет его изменить
        price: 99.00, // Примерная цена, возможно, вам нужно будет ее изменить
        img: "../images/TommyJeans.webp",
        size: selectedSize, // Добавляем выбранный размер в объект продукта
        // Другие детали продукта, если нужно
    };

    // Retrieve existing cart data from local storage or initialize an empty array
    let existingCartData;

    if (localStorage.getItem('cart') === '') {
        existingCartData = [];
    } else {
        existingCartData = JSON.parse(localStorage.getItem('cart')) || [];
    }

    // Добавляем новый продукт в корзину
    existingCartData.push(productToAdd);

    // Сохраняем обновленные данные корзины в локальное хранилище
    localStorage.setItem('cart', JSON.stringify(existingCartData));

    // Отключаем кнопку "Оформить заказ"
    document.querySelector('.purchase-btn').disabled = true;

    console.log('Тест данных корзины: ' + localStorage.getItem('cart'));
}

// Добавляем обработчик событий для кнопки "Оформить заказ"
purchaseButton.addEventListener('click', addToCart);


// Добавляем обработчики событий для кнопки "Оформить заказ"
purchaseButton.addEventListener('mousedown', invertButtonColor);
purchaseButton.addEventListener('mousedown', addToCart);
purchaseButton.addEventListener('mouseup', invertButtonColor);

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('open');
})