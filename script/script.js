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
const videoClose = document.querySelector('.video__close');
const video = document.querySelector('.video');
const navItem = document.querySelectorAll('.nav__link');
const navContent = document.querySelectorAll('.navbar__content__menu--item');
const navMenuIcon = document.querySelector('.navMenuIcon');

// closing the Notice bar
noticeCloseBtn.addEventListener('click', () => {
  noticeBar.remove();
});

// closing video
videoClose.addEventListener('click', () => video.remove());

//Rotating of arrow in navigation button
// adding class

navItem.forEach((item) =>
  item.addEventListener('mouseover', () =>
    item.firstElementChild
      ? item.firstElementChild.classList.add('rotate180')
      : ''
  )
);

// removing class
navItem.forEach((item) =>
  item.addEventListener('mouseout', () =>
    item.firstElementChild
      ? item.firstElementChild.classList.remove('rotate180')
      : ''
  )
);

// Displaying dropdown
navContent.forEach((item) =>
  item.addEventListener(
    'mouseover',
    () => (item.lastElementChild.style.display = 'block')
  )
);

navContent.forEach((item) =>
  item.addEventListener(
    'mouseout',
    () => (item.lastElementChild.style.display = 'none')
  )
);

// navContent.forEach((item) =>
//   item.addEventListener(
//     'mouseout',
//     () => (item.lastElementChild.style.display = 'none')
//   )
// );

navMenuIcon.addEventListener('click', () => console.log('hello'));
