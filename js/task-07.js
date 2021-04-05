// Напиши скрипт, который реагирует на изменение значения 
//input#font - size - control(событие input) и изменяет инлайн - стиль 
//span#text обновляя свойство font - size.В результате при 
//перетаскивании ползунка будет меняться размер текста.

const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('span#text');
const fontSize = textRef.setAttribute('style', `font-size: ${rangeRef.value}px`);

function changeFontSize() {
  textRef.setAttribute('style', `font-size: ${rangeRef.value}px`);
}

rangeRef.addEventListener('input', changeFontSize);