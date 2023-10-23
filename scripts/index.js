// Отримуємо посилання на обидві кнопки за їх id
const button1 = document.getElementById('submitAnonymouslyButton1');
const button2 = document.getElementById('submitAnonymouslyButton2');

// Отримуємо посилання на ваш віджет
const submitAnonymously = document.getElementById('submitAnonymously');

// Функція для обробки натискання на кнопки
function toggleSubmitAnonymously() {
    if (submitAnonymously.style.display === 'block') {
        submitAnonymously.style.display = 'none';
    } else {
        submitAnonymously.style.display = 'block';
    }
}

// Додаємо обробник подій для обох кнопок
button1.addEventListener('click', toggleSubmitAnonymously);
button2.addEventListener('click', toggleSubmitAnonymously);

// Додаємо обробник події для закриття вікна при кліці поза ним
window.addEventListener('click', function (e) {
    if (e.target === submitAnonymously) {
        submitAnonymously.style.display = 'none';
    }
});

// Додаємо обробник події для закриття вікна при кліці на "Закрити"
document.querySelector('.close').addEventListener('click', function () {
    submitAnonymously.style.display = 'none';
});

function submitForm() {
    // Отримайте значення полів вводу
    var region = document.getElementById("region").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    // Перевірте, чи усі поля заповнені
    if (region === '' || city === '' || address === '' || email === '') {
        alert("Будь ласка, заповніть усі поля перед відправкою форми.");
    } else {
        // Тут може бути ваш JavaScript-код для відправки форми
        alert("Вітаємо ваша заявка прийнята і буде оброблена на протязі тижня!");

        // Додайте код для закриття форми
        closeForm();
    }
}

function closeForm() {
    // Ваш код для закриття форми
    var overlay = document.getElementById("submitAnonymously");
    overlay.style.display = "none";
}