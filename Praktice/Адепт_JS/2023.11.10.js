/*
Нужно написать скрипт, который работает с кнопкой и элементом для отображения количества кликов.

Например:
    <button id="clickButton">Нажми меня!</button>
    <p>Количество кликов: <span id="clickCount">0</span></p>

Вам нужно написать скрипт, который будет отслеживать клики по кнопке и обновлять счётчик кликов на странице.
*/

const clickButton = document.getElementById("clickButton");
    const clickCount = document.getElementById("clickCount");

    let count = 0;

    clickButton.addEventListener("click", () => {
        count++;
        clickCount.textContent = count;
    });