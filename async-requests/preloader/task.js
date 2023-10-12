const xhr = new XMLHttpRequest();
const loader = document.querySelector(".loader");
const itemsList = document.getElementById("items");

xhr.addEventListener('readystatechange', () => {
    let valuteListResponse;
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove("loader_active");
        valuteListResponse = xhr.response.response.Valute;
    }

    for (let item in valuteListResponse) {
        itemsList.insertAdjacentHTML('beforeend', `<div class="item"><div class="item__code">
        ${valuteListResponse[item].CharCode}
    </div>
    <div class="item__value">
        ${valuteListResponse[item].Value}
    </div>
    <div class="item__currency">
        руб.
    </div></div>`);
    }
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = "json";
xhr.send();

