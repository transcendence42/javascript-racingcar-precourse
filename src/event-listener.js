import { checkValidCarName, checkValidCount } from './check-value.js';
import { getInputCarName, getInputCount } from './input.js';
import toggleTagDisplay from './css-handler.js';
import getElements from './elements.js';
import startGame from './game.js';
import Car from './car.js';

function addButtonEvent(submitButton, func) {
  submitButton.addEventListener('click', () => func());
}

function clickCarNamesSubmit() {
  const inputCarNames = getInputCarName();
  if (!checkValidCarName(inputCarNames)) {
    alert(`유효하지 않은 입력입니다. 재입력 해주세요. 입력: ${inputCarNames}`);
    getElements.carNamesInput.value = '';
    return;
  }
  getElements.carNamesInput.value = inputCarNames;
  toggleTagDisplay(getElements.racingCountContainer);
}

function clickRacingCountSubmit() {
  const cars = [];
  let count = 0;

  const inputCarNames = getInputCarName();
  inputCarNames.forEach((name) => {
    cars.push(new Car(name));
  });

  count = getInputCount();
  if (!checkValidCount(count)) {
    alert(`유효하지 않은 입력입니다. 재입력 해주세요.`);
    getElements.racingCountInput.value = 0;
    return;
  }
  count = parseInt(count, 10);
  toggleTagDisplay(getElements.resultContainer);
  startGame(cars, count);
}

export default function registerButtonEvent() {
  addButtonEvent(getElements.carNamesSubmit, clickCarNamesSubmit);
  addButtonEvent(getElements.racingCountSubmit, clickRacingCountSubmit);
}
