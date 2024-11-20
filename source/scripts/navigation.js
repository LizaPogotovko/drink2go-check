const navToggle = document.querySelector('.navigation__toggle');
const navList = document.querySelector('.navigation__list');

function clickOnNav() {
  navToggle.addEventListener('click',() => {
    navToggle.classList.toggle('navigation__toggle--open');
    navList.classList.toggle('navigation__list--open');
  })
}

export {clickOnNav};
