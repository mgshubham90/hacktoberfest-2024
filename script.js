let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price });
    totalPrice += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPriceElem = document.getElementById('totalPrice');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(listItem);
    });
    totalPriceElem.textContent = `Total: $${totalPrice}`;
}
alet cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price });
    totalPrice += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPriceElem = document.getElementById('totalPrice');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(listItem);
    });
    totalPriceElem.textContent = `Total: $${totalPrice}`;
}
