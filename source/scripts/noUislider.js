const rangeSlider = document.querySelector('#slider');
const formatValues = [
  document.querySelector(".range__min-interval"),
  document.querySelector(".range__max-interval"),
];

const formatForSlider = {
  from: function (formattedValue) {
    return Number(formattedValue);
  },
  to: function (numericValue) {
    return Math.round(numericValue);
  },
};

function createSlider() {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    range: {
      min: 0,
      max: 1000,
    },
    format: formatForSlider,
  })

  rangeSlider.noUiSlider.on("update", function (values, handle) {
    formatValues[handle].value = values[handle];
  })
};

function addRangeHandleClass() {
  const rangeHandle = document.querySelectorAll('.noUi-handle');
  const connect = document.querySelector('.noUi-connect');
  const rangeHandleMin = document.querySelector('.noUi-handle-lower');
  const rangeHandleMax = document.querySelector('.noUi-handle-upper');

  connect.classList.add('range__bar');
  rangeHandleMin.classList.add('range__handle--min');
  rangeHandleMax.classList.add('range__handle--max');

  for(let i = 0; i < rangeHandle.length; i++) {
    rangeHandle[i].classList.add('range__handle');
  }
};

export {createSlider, addRangeHandleClass};
