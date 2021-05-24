import getElements from './elements.js';

function getInputCarName() {
  return getElements.carNamesInput.value.split(',');
}

function getInputCount() {
  return getElements.racingCountInput.value;
}

export { getInputCarName, getInputCount };
