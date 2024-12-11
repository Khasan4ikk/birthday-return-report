// Определяем действующие элементы на странице
const title = document.querySelector(".title");
const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const preloader = document.querySelector("#preloader");
const backgroundVideo = document.getElementById("background-video");

// Делаем расчеты
const currentYear = new Date().getFullYear(); // 2025
const nextYear = new Date(`December 27, ${currentYear} 00:00:00`); // Исправлено форматирование даты

// Устанавливаем год на страницу
year.innerText = currentYear;

function updateCounter() {
  const currentTime = new Date();
  const diff = nextYear - currentTime;

  // Перевод в дни
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  // Часов всего, далее остаток от деления на 24 (преобразования в дни), получаем 8 часов
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  // Минут всего, далее остаток от преобразования в часы, минут осталось
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  // Секундк всего, далее остаток от преобразования в минуты, секунд осталось
  const secondsLeft = Math.floor(diff / 1000) % 60;

  // Проверка на дату рождения
  if (
    daysLeft === 0 &&
    hoursLeft === 0 &&
    minutesLeft === 0 &&
    secondsLeft === 0
  ) {
    title.textContent = "С днем рождения меня!!!";
    countdown.style.display = "none";
    clearInterval(updateInterval); // Останавливаем таймер после достижения даты
  } else {
    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
  }
}

// Запускаем расчет 1 раз в секунду (каждую секунду)
const updateInterval = setInterval(updateCounter, 1000);

setTimeout(function () {
  preloader.remove();
  countdown.style.display = "flex";
}, 1000);
