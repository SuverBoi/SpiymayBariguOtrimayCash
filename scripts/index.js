document.getElementById('submitAnonymouslyButton').addEventListener('click', function () {
    document.getElementById('submitAnonymously').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('submitAnonymously').style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('submitAnonymously')) {
        document.getElementById('submitAnonymously').style.display = 'none';
    }
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