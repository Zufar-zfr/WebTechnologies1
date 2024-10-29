
document.getElementById('alertt').addEventListener('click', function() {
    alert('hdjjdjjd');
});

// чендж бекгрундколор
document.getElementById('changeColorButton').addEventListener('click', function() {
    const colors = ['#f8f9fa', '#e9ecef', '#ced4da', '#adb5bd', '#6c757d'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    let sound = new Audio("click.mp3");
    sound.play();
    document.body.style.color = 'green';

});

// аремя
function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('currentDateTime').textContent = now.toLocaleString('en-US', options);
}

setInterval(updateDateTime, 1000);

// форма подписки
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('popupEmail').value;
    if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        document.getElementById('subscribeModal').modal('hide');
    } else {
        alert('Please enter a valid email address.');
    }
});

// форма контактов
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;
    
    // Валидация email
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Валидация пароля
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Валидация подтверждения пароля
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }

    if (valid) {
        alert('Form submitted successfully!');
        // код для отправки данных на сервер
    }
});

// Функция для валидации email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Первоначальное обновление даты и времени при загрузке
updateDateTime();
