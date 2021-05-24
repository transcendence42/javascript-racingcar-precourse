'use strict';

import { checkValidCarName, checkValidCount } from './check-value.js';
import { getInputCarName, getInputCount } from './input.js';
import getRandomSingleDigit from './random.js';
import toggleTagDisplay from './css-handler.js';
import Car from './car.js';

/*
 ** Init
 */

export default function initGame() {
  let _cars = [];
  let _count = 0;

  toggleTagDisplay('racing-count-container');
  toggleTagDisplay('result-container');
  registerButtonEvent();

  return;

  /*
   ** Start Game
   */

  function getWinners() {
    const totalDistances = _cars.map((car) => car.distance);
    const maxDistance = Math.max(...totalDistances);
    return _cars
      .filter((car) => {
        return car.distance == maxDistance;
      })
      .map((winner) => winner.name);
  }

  function startGame() {
    let count = 0;
    let result = '';
    while (count < _count) {
      _cars.forEach((car) => {
        const randomDigit = getRandomSingleDigit();
        if (randomDigit >= 4) {
          car.move();
        }
        result += `${car.name}: ${'-'.repeat(car.distance)}<br>`;
      });
      result += '<br>';
      count += 1;
    }
    const $resultContainer = document.getElementById('result-container');
    $resultContainer.innerHTML +=
      result + '<br>최종 우승자:' + getWinners().join();
  }

  /*
   ** Event Listener
   */

  function addButtonEvent(buttonId, func) {
    const $submitButton = document.getElementById(buttonId);
    $submitButton.addEventListener('click', () => func());
  }

  function clickCarNamesSubmit() {
    let inputCarNames = getInputCarName();
    if (!checkValidCarName(inputCarNames)) {
      alert(
        `유효하지 않은 입력입니다. 재입력 해주세요. 입력: ${inputCarNames}`,
      );
      return;
    }
    inputCarNames.forEach((name) => {
      _cars.push(new Car(name));
    });
    toggleTagDisplay('racing-count-container');
  }

  function clickRacingCountSubmit() {
    _count = getInputCount();
    if (!checkValidCount(_count)) {
      alert(`유효하지 않은 입력입니다. 재입력 해주세요.`);
      return;
    }
    _count = parseInt(_count);
    toggleTagDisplay('result-container');
    startGame();
  }

  function registerButtonEvent() {
    addButtonEvent('car-names-submit', clickCarNamesSubmit);
    addButtonEvent('racing-count-submit', clickRacingCountSubmit);
  }
}
