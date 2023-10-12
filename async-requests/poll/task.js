const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();

xhr.addEventListener('readystatechange', () => {
    let pollResponse;
    if (xhr.readyState === xhr.DONE) {
        pollResponse = xhr.response;
        pollTitle.textContent = pollResponse.data.title;
        
        for (let answer of pollResponse.data.answers) {
           pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">${answer}</button>`);
        }
        
        const buttons = document.getElementsByClassName("poll__answer");
        for (let btn of buttons) {
            btn.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'))
        }
    }
    });