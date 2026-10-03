const button = document.querySelector('.btn');
const diameterInput = document.getElementById('diameter');
const speedInput = document.getElementById('speed');
const feedRevInput = document.getElementById('feed-rev'); // Новая переменная для fn

const resultRpm = document.getElementById('result-rpm');   // Сюда выведем обороты
const resultFeed = document.getElementById('result-feed'); // Сюда выведем подачу

button.addEventListener('click', function() {
    const D = parseFloat(diameterInput.value);
    const Vc = parseFloat(speedInput.value);
    const fn = parseFloat(feedRevInput.value); // Считываем подачу на оборот

    // Защита от дурака: проверяем все три поля
    if (D <= 0 || Vc <= 0 || fn <= 0 || isNaN(D) || isNaN(Vc) || isNaN(fn)) {
        resultRpm.innerText = "Ошибка: Введите правильные данные!";
        resultRpm.style.color = "red";
        resultFeed.innerText = "";
        return;
    }

    // 1. Считаем обороты шпинделя (S)
    const S = (Vc * 1000) / (Math.PI * D);

    // 2. Считаем минутную подачу (Fm = S * fn)
    const Fm = S * fn;

    // Выводим оба результата на экран, округляя до целых чисел
    resultRpm.innerText = `Обороты: ${Math.round(S)} об/мин`;
    resultRpm.style.color = "green";

    resultFeed.innerText = `Минутная подача: ${Math.round(Fm)} мм/мин`;
    resultFeed.style.color = "#0077b6";
});