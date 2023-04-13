// Выбираем поле ввода телефона по его ID
const phoneInput = document.querySelector('#phone');

// Инициализируем маску для телефона, используя библиотеку Inputmask
Inputmask({mask: '+38 (999) 999-99-99'}).mask(phoneInput);
