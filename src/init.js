import { checkValidCarName, checkValidCount } from './check-value.js';
import { getInputCarName, getInputCount } from './input.js';
import startGame from './game.js';
import toggleTagDisplay from './css-handler.js';
import Car from './car.js';

/*
 ** Init
 */

export default function initGame() {
  let _count = 0;

  toggleTagDisplay('racing-count-container');
  toggleTagDisplay('result-container');
  registerButtonEvent();

  /*
   ** Event Listener
   */

  function addButtonEvent(buttonId, func) {
    const $submitButton = document.getElementById(buttonId);
    $submitButton.addEventListener('click', () => func());
  }

  function clickCarNamesSubmit() {
    const inputCarNames = getInputCarName();
    if (!checkValidCarName(inputCarNames)) {
      alert(
        `유효하지 않은 입력입니다. 재입력 해주세요. 입력: ${inputCarNames}`,
      );
      document.getElementById('car-names-input').value = '';
      return;
    }
    document.getElementById('car-names-input').value = inputCarNames;
    toggleTagDisplay('racing-count-container');
  }

  function clickRacingCountSubmit() {
    const _cars = [];
    const inputCarNames = getInputCarName();
    inputCarNames.forEach((name) => {
      _cars.push(new Car(name));
    });

    _count = getInputCount();
    if (!checkValidCount(_count)) {
      alert(`유효하지 않은 입력입니다. 재입력 해주세요.`);
      document.getElementById('racing-count-input').value = 0;
      return;
    }
    _count = parseInt(_count, 10);
    toggleTagDisplay('result-container');
    startGame(_cars, _count);
  }

  function registerButtonEvent() {
    addButtonEvent('car-names-submit', clickCarNamesSubmit);
    addButtonEvent('racing-count-submit', clickRacingCountSubmit);
  }
}
