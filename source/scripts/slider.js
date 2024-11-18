const sliderCard = document.querySelectorAll('.slider__card');
const buttonPrev = document.querySelector('.slider__button--prev');
const buttonNext = document.querySelector('.slider__button--next');
const buttonPagination = document.querySelectorAll('.slider__pagination-button');

let currentSlideIndex = 0;

function uploadSlide() {
  sliderCard[0].classList.add('slider__card--active');
  buttonPagination[0].classList.add('slider__pagination-button--current');

    for(let i = 0; i < buttonPagination.length; i++) {
      buttonPagination[i].addEventListener('click', ()=> {
        for(let k = 0; k < sliderCard.length; k++) {
          buttonPagination[k].classList.remove('slider__pagination-button--current');
          sliderCard[k].classList.remove('slider__card--active');
        }
        currentSlideIndex = i;
        sliderCard[currentSlideIndex].classList.add('slider__card--active');
        buttonPagination[currentSlideIndex].classList.add('slider__pagination-button--current');
      })
    }

    buttonPrev.addEventListener('click', ()=> {
      for(let k = 0; k < sliderCard.length; k++) {
        buttonPagination[k].classList.remove('slider__pagination-button--current');
        sliderCard[k].classList.remove('slider__card--active');
      }
      currentSlideIndex--
      if(currentSlideIndex < 0) {
        currentSlideIndex = sliderCard.length - 1
      }
      sliderCard[currentSlideIndex].classList.add('slider__card--active');
      buttonPagination[currentSlideIndex].classList.add('slider__pagination-button--current');
    })

    buttonNext.addEventListener('click', ()=> {
      for(let k = 0; k < sliderCard.length; k++) {
        buttonPagination[k].classList.remove('slider__pagination-button--current');
        sliderCard[k].classList.remove('slider__card--active');
      }
      currentSlideIndex++
      if(currentSlideIndex >= sliderCard.length) {
        currentSlideIndex = 0
      }
      sliderCard[currentSlideIndex].classList.add('slider__card--active');
      buttonPagination[currentSlideIndex].classList.add('slider__pagination-button--current');
    })

}

export {uploadSlide};
