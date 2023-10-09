const plusList = document.getElementsByClassName("product__quantity-control_inc");
const valueList = document.getElementsByClassName("product__quantity-value");
const minusList = document.getElementsByClassName("product__quantity-control_dec");
const imagesList = document.getElementsByClassName("product__image");
const addCartBtnList = document.getElementsByClassName("product__add");
const productsList = document.getElementsByClassName("product");
const cart = document.querySelector("div.cart__products");

function addProduct(i) {
    cart.insertAdjacentHTML(`beforeend`, `
        <div class="cart__product" data-id=${productsList[i].dataset.id}>
    <img class="cart__product-image" src=${imagesList[i].src}>
    <div class="cart__product-count">${valueList[i].textContent}</div>
</div>`);
}

function addAmountProduct(i) {
    let cardList = document.getElementsByClassName("cart__product");
    let productCount = document.getElementsByClassName("cart__product-count");
    for (let j = 0; j < cardList.length; ++j) {
        if (cardList[j].dataset.id == productsList[i].dataset.id) {
            productCount[j].textContent = valueList[i].textContent;
            return 1;
        }
    }
    return 0;
}

for (let i = 0; i < valueList.length; ++i) {
    plusList[i].addEventListener("click", () => {
        valueList[i].textContent = String( +valueList[i].textContent + 1);
    });

    minusList[i].addEventListener("click", () => {
        if (valueList[i].textContent > 1) {
            valueList[i].textContent = valueList[i].textContent - 1;
        }
    });

    addCartBtnList[i].addEventListener("click", () => {
        if (addAmountProduct(i) == 0) {
            addProduct(i);
        }
    });
}

