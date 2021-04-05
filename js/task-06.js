// Напиши скрипт, который бы при потере фокуса на инпуте, 
//проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается 
//в его атрибуте data - length.
// Если введено подходящее количество, то border инпута 
//становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');

function onInputTyping() {
  const inputTextLength = inputRef.value.length;
  const dataLength = Number(inputRef.getAttribute('data-length'));

  if (inputTextLength > dataLength || inputTextLength < dataLength) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }

  if (inputTextLength === dataLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }

  if (!inputTextLength) {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
  }
}

inputRef.addEventListener('blur', onInputTyping);