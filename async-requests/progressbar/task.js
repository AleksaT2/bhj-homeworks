const xhr = new XMLHttpRequest();
const progress = document.getElementById('progress');
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    xhr.upload.onprogress = (event) => { 
        progress.value = event.loaded / event.total;  
    }

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    const formData = new FormData(form);
    xhr.send(formData);
});

