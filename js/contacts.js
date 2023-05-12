// Получаем нужные элементы
let modal = document.getElementById("myModal");
let btn = document.getElementsByClassName("readmore");
let span = document.getElementsByClassName("close")[0];
let p = document.getElementById("modal-text")

const descriptions = {
    0: 'Ваш запрос отправлен, в ближайшее время с вами свяжется наш специалист'
}

btn[0].onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
    p.innerHTML = descriptions[0];
}

// Закрываем модальное окно при клике на крестик
span.onclick = function () {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}