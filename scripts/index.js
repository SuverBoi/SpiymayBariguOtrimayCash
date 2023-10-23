const button1 = document.getElementById('submitAnonymouslyButton1');
const button2 = document.getElementById('submitAnonymouslyButton2');

const submitAnonymously = document.getElementById('submitAnonymously');


function toggleSubmitAnonymously() {
    if (submitAnonymously.style.display === 'block') {
        submitAnonymously.style.display = 'none';
    } else {
        submitAnonymously.style.display = 'block';
    }
}

button1.addEventListener('click', toggleSubmitAnonymously);
button2.addEventListener('click', toggleSubmitAnonymously);

window.addEventListener('click', function (e) {
    if (e.target === submitAnonymously) {
        submitAnonymously.style.display = 'none';
    }
});

document.querySelector('.close').addEventListener('click', function () {
    submitAnonymously.style.display = 'none';
});

function submitForm() {
    var region = document.getElementById("region").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if (region === '' || city === '' || address === '' || email === '') {
        alert("Будь ласка, заповніть усі поля перед відправкою форми.");
    } else {
        alert("Вітаємо ваша заявка прийнята і буде оброблена на протязі тижня!");
        closeForm();
    }
}

function closeForm() {
    var overlay = document.getElementById("submitAnonymously");
    overlay.style.display = "none";
}