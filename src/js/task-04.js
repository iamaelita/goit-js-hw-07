// Счетчик состоит из спана и кнопок, которые должны 
//увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее 
//значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения 
//значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValueRef = document.querySelector('#value');
const incrementButtonRef = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementButtonRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);

function onDecrementButtonClick() {
  counterValueRef.textContent--;
}

function onIncrementButtonClick() {
  counterValueRef.textContent++;
}

incrementButtonRef.addEventListener('click', onIncrementButtonClick);
decrementButtonRef.addEventListener('click', onDecrementButtonClick);