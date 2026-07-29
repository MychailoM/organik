const burger = document.querySelector('.header__mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});


const productsBox = document.querySelector('.products__box');
const loadProducts = document.querySelector(".load__products");
let isProductsLoad = false;
let productsArr = [];

fetch("../products.json")
    .then(response => response.json())
    .then(products => {
        productsArr = products;
        renderProducts()
    })
    .catch(error => console.error(error));

function renderProducts() {
    productsBox.innerHTML = productsArr
        .map(product => `
            <div data-aos="zoom-in" class="product__card">
                <h5 class="product__category">${product.category}</h5>
                <img class="product__img" src="../photos/products/${product.name}.png" alt="">
                <h3 class="product__name">${product.name}</h3>
                <h4 class="product__discount"><span class="product__price">${product.price}</span>${product.discount}</h4>
            </div>
        `)
        .join("");
};
