'use strict';

// variables
const noticeBar = document.querySelector('.notice');
const noticeCloseBtn = document.querySelector('.closeNotice');
const videoClose = document.querySelector('.video__close');
const video = document.querySelector('.video');
const navItem = document.querySelectorAll('.nav__link');
const navContent = document.querySelectorAll('.navbar__content__menu--item');
const navMenuIcon = document.querySelector('.navMenuIcon');
const mobileNav = document.querySelector('.mobile__nav');
const mobileNavClose = document.querySelector('.closeMobileNav');
const scrollBtn = document.querySelector('.scrollTop');
const headerSection = document.querySelector('.header');
const courseSection = document.querySelector('.courses');
const navAi = document.querySelector('.courses__ai');
const navFree = document.querySelector('.courses__free');
const navNewCoding = document.querySelector('.courses__newCoding');
const navMostPopular = document.querySelector('.courses__mostPopular');
const navSkillPath = document.querySelector('.courses__skillPath');
const navCareerPath = document.querySelector('.courses__careerPath');
const courseCard = document.querySelectorAll('.cards');
const courseNavItem = document.querySelectorAll(
  '.courses__content__nav__navMenu--navItem'
);

// courses navigation carousel

// document.querySelectorAll('.course__card').forEach((e) => {
//   console.log(
//     e.classList.forEach((className) =>
//       className == 'ai' ? console.log(className) : console.log('not ai')
//     )
//   );
// });

// Working on it
courseNavItem.forEach((navItem) => {
  navItem.addEventListener('click', (e) =>
    e.target.classList.forEach((navClassName) => {
      console.log(navClassName);
      courseCard.forEach((course) => {
        if (navClassName == course) {
          console.log('matched');
        }
      });

      // console.log(`nav class name : ${navClassName}`);
      // courseCard.forEach((card) => {
      //   card.classList.forEach((cardClass) => {
      //     console.log(navClassName);
      //     console.log(cardClass);
      //     if (cardClass == navClassName) {
      //       // console.log(cardClass);
      //       // card.classList.toggle('hidden');
      //       console.log('matched');
      //     }
      //     // } else {
      //     // card.remove();
      //     // }
      //   });
      // });
    })
  );
});

// courseNavItem.forEach((navItem) => {
//   navItem.addEventListener('click', (e) =>
//     e.target.classList.forEach((navClassName) => {
//       courseCard.forEach((card) => {
//         card.classList.forEach((cardClass) => {
//           // console.log(navClassName);
//           // console.log(cardClass);
//           if (cardClass == navClassName) {
//             card.classList.toggle('hidden');
//             console.log('matched');
//           }
//           // } else {
//           // card.remove();
//           // }
//         });
//       });
//     })
//   );
// });

// navAi.addEventListener('click', () => {
//   courseCard.forEach((card) => {
//     card.classList.forEach((cardClass) => {
//       if (cardClass === 'ai') {
//         card.classList.add('show');
//       } else {
//         card.remove();
//       }
//     });
//   });
// });

// navFree.addEventListener('click', () => {
//   courseCard.forEach((card) => {
//     card.classList.forEach((cardClass) => {
//       if (cardClass === 'free') {
//         card.classList.add('show');
//       } else {
//         card.remove();
//       }
//     });
//   });
// });

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

// mobile nav
navMenuIcon.addEventListener(
  'click',
  () => (mobileNav.style.display = 'block')
);

mobileNavClose.addEventListener(
  'click',
  () => (mobileNav.style.display = 'none')
);

// for scroll function and btn
window.addEventListener('scroll', function (e) {
  this.scrollY === 0
    ? (scrollBtn.style.display = 'none')
    : (scrollBtn.style.display = 'block');
});

scrollBtn.addEventListener('click', () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
);

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

// Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach((e) => {
//     console.log(e);
//   });
// };

// const obsOpts = {
//   root: null,
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver(obsCallback, obsOpts);
// observer.observe(courseSection);
