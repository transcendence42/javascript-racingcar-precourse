import Car from './car.js';
import startRacing from './game.js';
import { ERROR_INPUT } from './define-msg.js';

const carObjectArray = [];
let racingCount = 0;

function checkEmptyInput(carNameInput) {
  return carNameInput.trim() === '';
}

function checkDoubleElements(carNameArray) {
  return new Set(carNameArray).length === carNameArray.length;
}

function checkValidCarNameLength(carNameArray) {
  for (let index = 0; index < carNameArray.length; index += 1) {
    if (carNameArray[index].length > 5) {
      return true;
    }
  }
  return false;
}

function checkCarNames(carNameInput, carNameArray) {
  if (checkEmptyInput(carNameInput)) {
    return ERROR_INPUT.EMPTY;
  }
  if (checkDoubleElements(carNameArray)) {
    return ERROR_INPUT.DOUBLE;
  }
  if (checkValidCarNameLength(carNameArray)) {
    return ERROR_INPUT.LENGTH;
  }
  return ERROR_INPUT.NONE;
}

function resetCarNamesInput() {
  document.getElementById('car-names-input').value = '';
  document.getElementById('car-names-input').focus();
}

function createCarObject(carNameArray) {
  carNameArray.forEach((car) => {
    carObjectArray.push(new Car(car));
  });
}

export function getCarNames() {
  const carNameInput = document.getElementById('car-names-input').value;
  const carNameArray = carNameInput.split(',');

  const carNameValid = checkCarNames(carNameInput, carNameArray);
  if (carNameValid !== ERROR_INPUT.NONE) {
    alert(carNameValid);
    resetCarNamesInput();
    return;
  }
  createCarObject(carNameArray);
}

function resetRacingCountInput() {
  document.getElementById('racing-count-input').value = '';
  document.getElementById('racint-count-input').focus();
}

function checkRacingCount() {
  if (racingCount < 1) {
    return ERROR_INPUT.COUNT;
  }
  return ERROR_INPUT.NONE;
}

export function getCount() {
  racingCount = document.getElementById('racing-count-input').value;

  const racingCountValid = checkRacingCount();
  if (racingCountValid !== ERROR_INPUT.NONE) {
    alert(racingCountValid);
    resetRacingCountInput();
    return;
  }
  startRacing(carObjectArray, racingCount);
}
