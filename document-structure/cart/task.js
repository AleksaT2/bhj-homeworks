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
        let cartList = Array.from(document.getElementsByClassName("cart__product"));
        const productInCard = cartList.find((element) => element.dataset.id == productsList[i].dataset.id);
        if (productInCard) {
            let productCount = productInCard.querySelector(".cart__product-count");
            productCount.textContent = +valueList[i].textContent + +productCount.textContent;
        } else {
            addProduct(i);
}
    });
}

