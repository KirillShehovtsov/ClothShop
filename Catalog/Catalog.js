const menuButton = document.querySelector('.Menu');
const menuList = document.querySelector('.MenuList');

function toggleMenu(event) {
    event.stopPropagation(); 
    menuList.classList.toggle('show');
}

menuButton.addEventListener('click', toggleMenu);
 


document.addEventListener("DOMContentLoaded", function() {
    var jsonData = {
      "product": [
        {
          "img": "../images/NikeJacket.png",
          "name": "Nike Windrunner PrimaLoft",
          "cost": 160.99,
          "path":"../Jacket1/Jacket1.html"
        },
        {
          "img": "../images/LevisJacket.webp",
          "name": "Levis YPE III SHERPA TRUCKER JACKET",
          "cost": 108.00,
          "path":"../Jacket2/Jacket2.html"
        },
        {
          "img": "../images/BenShermanJacket.webp",
          "name": "Wool Blend Check Coach Jacket",
          "cost": 259.00,
          "path":"../Jacket3/Jacket3.html"
        },
        {
          "img": "../images/AlphaindenstrisJacket.jpg",
          "name": "Raf MK3 Mod Jacket",
          "cost": 300.00,
          "path":"../Jacket4/Jacket4.html"
        },
        {
          "img": "../images/HugoJeans.webp",
          "name": "REGULAR-FIT JEANS",
          "cost": 158.00,
          "path":"../Jeans1/Jeans1.html"
        },
        {
          "img": "../images/KelvinKleinJeans.webp",
          "name": "Jean Slim",
          "cost": 99.90,
          "path":"../Jeans3/Jeans3.html"
        },
        {
          "img": "../images/TommyJeans.webp",
          "name": "STANDARD RYAN JEANS",
          "cost": 99.00,
          "path":"../Jeans2/Jeans2.html"
        },
        {
          "img": "../images/KelvinKleinJeansV2.webp",
          "name": "Kelvin Klein Jean Fuselé",
          "cost": 139.90,
          "path":"../Jeans4/Jeans4.html"
        },
        {
          "img": "../images/BenShermanShirt.webp",
          "name": "RSIGNATURE BRIGHTON BEACH CLUB TEE",
          "cost": 49.00,
          "path":"../Shirts2/Shirts2.html"
        },
        {
          "img": "../images/HugoShirt.webp",
          "name": "Hugo Shirt",
          "cost": 49.00,
          "path":"../Shirts3/Shirts3.html"
        },
        {
          "img": "../images/NikeShirt.png",
          "name": "Nike Dri-FIT Miler",
          "cost": 34.99,
          "path":"../Shirts1/Shirts1.html"
        },
        {
          "img": "../images/NikeShirtV2.png",
          "name": "Nike Sportswear Club",
          "cost":24.99,
          "path":"../Shirts4/Shirt4.html"
        },
        {
          "img": "../images/test4.png",
          "name": "GEL-CUMULUS 26",
          "cost": 160.00,
          "path":"../Sneakers2/Sneakers2.html"
        },
        {
          "img": "../images/VansSnikers.webp",
          "name": "Vans Old Skool Shoe",
          "cost": 70.00,
          "path":"../Sneakers4/Sneakers4.html"
        },
        {
          "img": "../images/NikeSnikers.jpeg",
          "name": "Air Jordan 1 Low",
          "cost": 129.99,
          "path":"../Sneakers1/Sneakers1.html"
        },
        {
          "img": "../images/NewBalanceSnikers.jpg",
          "name": "New Balace 530",
          "cost": 99.99,
          "path":"../Sneakers3/Sneakers3.html"
        }
      ]
    };
  
    var productContainer = document.getElementById('product-container');
    var products = jsonData.product;
    
  
    products.forEach(function(product) {
      var cardLink = document.createElement('a'); // Создаем ссылку
      cardLink.href = product.path; // Используем путь из JSON
    
      var cardDiv = document.createElement('div');
      cardDiv.classList.add('card');
    
      var img = document.createElement('img');
      img.src = product.img;
      cardDiv.appendChild(img);
    
      var name = document.createElement('p');
      name.textContent = product.name;
      cardDiv.appendChild(name);
    
      var cost = document.createElement('p');
      cost.textContent = '$' + product.cost.toFixed(2);
      cardDiv.appendChild(cost);
    
      cardLink.appendChild(cardDiv); // Добавляем div внутрь ссылки
      productContainer.appendChild(cardLink); // Добавляем ссылку вместо div в контейнер
    });
  });

  document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('open');
})