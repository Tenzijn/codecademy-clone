/*
// adding notice bar with js
const noticeText =
  "Summer's over - what's your move? Join Pro for 50% off using code";
const offerCode = 'CODE50%';
const messageContainer = document.createElement('div');
messageContainer.classList.add('notice');

const message = document.createElement('div');
message.classList.add('noticeContainer');
message.classList.add('container');
message.innerHTML = ` <p class="container"> ${noticeText} <b> ${offerCode}</b> </p> <ion-icon name="close" class="right cursor close"></ion-icon>`;
const nav = document.querySelector('nav');

messageContainer.append(message);
nav.before(messageContainer);

document.querySelector('.close').addEventListener('click', function () {
  messageContainer.remove();
});
*/

// variables
const noticeBar = document.querySelector('.notice');
const noticeCloseBtn = document.querySelector('.closeNotice');
const navItem = document.querySelectorAll('.nav__link');

// closing the Notice bar
noticeCloseBtn.addEventListener('click', () => {
  noticeBar.remove();
});

//Rotating of arrow in navigation button
// adding class
navItem.forEach((item) =>
  item.addEventListener('mouseover', () =>
    item.firstElementChild.classList.add('rotate180')
  )
);
// removing class
navItem.forEach((item) =>
  item.addEventListener('mouseout', () =>
    item.firstElementChild.classList.remove('rotate180')
  )
);
