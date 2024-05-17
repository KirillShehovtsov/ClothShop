var cart = JSON.parse(localStorage.getItem('cart'));

var cartContainer = document.getElementById("cart-container");

let totalCost = 0;

const handleDelete = (name) => {

    console.log(name)

    cart = cart.filter(item => item.name !== name);

    //console.log('cart: '+JSON.stringify(cart, null, 2))

    localStorage.setItem('cart', '');
    localStorage.setItem('cart', JSON.stringify(cart));

    cartContainer.innerHTML = "";
    document.getElementById('total-price').innerText = "";
    totalCost = 0;

    location.reload();
}

if (cart && cart.length > 0) {
    // Loop through each item in the cart
    cart.forEach(function(product) {

        var html = '<div class="product-details" style="width: 200px; margin-right: 50px;">';
        
        // Image container
        html += '<div style="width: 200px;">';
        html += `<img style="width: 100%; height: auto;" src="${product.img}"/>`; // Set the image source here
        html += '</div>';
        
        // Product name
        html += '<div style="display: flex; justify-content: space-between;">';
        html += '<div>Name:</div>';
        html += '<div>' + product.name + '</div>';
        html += '</div>';
        
        // Product cost
        html += '<div style="display: flex; justify-content: space-between;">';
        html += '<div>Cost:</div>';
        html += '<div>' + product.price + '€</div>'; // Assuming product.cost is in euros
        html += '</div>';

        html +='<div style="display:felx; justify-conetent: space-between;">';
        html +='<div>Size:</div>';
        html +='<div>'+ product.size + '</div>';
        html +='</div>'

        html += `<button onClick="handleDelete('${product.name}')">delete</button>`;
        
        // Close the product-details div
        html += '</div>';
        
        // Append the HTML string to the cart container
        cartContainer.innerHTML += html;

        totalCost += product.price;
    });
}
else {
    // If cart is empty or null, display a message
    cartContainer.textContent = "Your cart is empty";
}

console.log('totalCost: '+totalCost);
document.getElementById('total-price').innerText = totalCost

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('open');
})

function checkout() {
    cartContainer.innerHTML = "";
    document.getElementById('total-price').innerText = "";
    localStorage.removeItem('cart');
    totalCost = 0;

    location.reload();
}

document.getElementById('checkout-button').addEventListener('click', checkout);


const menuButton = document.querySelector('.Menu');
const menuList = document.querySelector('.MenuList');

function toggleMenu(event) {
    event.stopPropagation(); 
    menuList.classList.toggle('show');
}

menuButton.addEventListener('click', toggleMenu);
 