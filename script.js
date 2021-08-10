'use strict';

let collectionBooks = document.querySelectorAll('.book');
console.log('collectionBooks: ', collectionBooks);

let body = document.querySelector('body');
console.log('body: ', body);

let adv = document.querySelector('.adv');


// меняем порядок книг
collectionBooks[0].before(collectionBooks[1]);
collectionBooks[5].after(collectionBooks[2]);
collectionBooks[3].before(collectionBooks[4]);

// меняем фон на странице
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// меняем заголовок-ссылку в книге 3
// console.log('collectionBooks[4]: ', collectionBooks[4].children[0].innerHTML);
console.log('collectionBooks[4]: ', collectionBooks[4].children[0].children[0].textContent);
collectionBooks[4].children[0].children[0].textContent = 'Книга 3. this и Прототипы Объектов';

// удаляем рекламу
adv.remove();

// книга 2
// console.log('collectionBooks[0]: ', collectionBooks[0].children[1].children[6]);
collectionBooks[0].children[1].children[3].after(collectionBooks[0].children[1].children[6]);
collectionBooks[0].children[1].children[4].after(collectionBooks[0].children[1].children[8]);

// книга 5
// console.log('collectionBooks[0]: ', collectionBooks[5].children[1].children[9]);
collectionBooks[5].children[1].children[1].after(collectionBooks[5].children[1].children[9]);
collectionBooks[5].children[1].children[6].before(collectionBooks[5].children[1].children[3]);
collectionBooks[5].children[1].children[9].before(collectionBooks[5].children[1].children[6]);

// книга 6 создаем новую главу
let сhapter8Book6 = document.createElement('li');
сhapter8Book6.textContent = 'Глава 8: За пределами ES6';
// console.log(collectionBooks[2].children[1].children[8]);
collectionBooks[2].children[1].children[8].after(сhapter8Book6);
