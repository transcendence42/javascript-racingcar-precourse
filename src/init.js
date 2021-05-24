import { checkValidCarName, checkValidCount } from './check-value.js';
import { getInputCarName, getInputCount } from './input.js';
import getElements from './elements.js';
import startGame from './game.js';
import toggleTagDisplay from './css-handler.js';
import Car from './car.js';

/*
 ** Init
 */

export default function initGame() {
  toggleTagDisplay('racing-count-container');
  toggleTagDisplay('result-container');
  registerButtonEvent();

  /*
   ** Event Listener
   */

  function addButtonEvent(submitButton, func) {
    submitButton.addEventListener('click', () => func());
  }

  function clickCarNamesSubmit() {
    const inputCarNames = getInputCarName();
    if (!checkValidCarName(inputCarNames)) {
      alert(
        `유효하지 않은 입력입니다. 재입력 해주세요. 입력: ${inputCarNames}`,
      );
      getElements.carNamesInput.value = '';
      return;
    }
    getElements.carNamesInput.value = inputCarNames;
    toggleTagDisplay('racing-count-container');
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
    toggleTagDisplay('result-container');
    startGame(cars, count);
  }

  function registerButtonEvent() {
    addButtonEvent(getElements.carNamesSubmit, clickCarNamesSubmit);
    addButtonEvent(getElements.racingCountSubmit, clickRacingCountSubmit);
  }
}
