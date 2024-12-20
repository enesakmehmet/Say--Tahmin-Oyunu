const randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById('check-btn').addEventListener('click', function () {
    const guess = Number(document.getElementById('guess').value);
    const result = document.getElementById('result');

    if (guess === randomNumber) {
        result.textContent = "Doğru Tahmin!";
        result.style.color = "green";
    } else if (guess > randomNumber) {
        result.textContent = "Daha düşük bir sayı girin!";
        result.style.color = "red";
    } else {
        result.textContent = "Daha yüksek bir sayı girin!";
        result.style.color = "blue";
    }
});
