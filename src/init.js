'use strict';

import getRandomSingleDigit from './random.js';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  _m_move(distance) {
    this.distance += distance;
  }
}

function toggleTagDisplay(id) {
  let $tagStyleDisplay = document.getElementById(id);
  if ($tagStyleDisplay.style.display == 'none') {
    $tagStyleDisplay.style.display = 'block';
  } else {
    $tagStyleDisplay.style.display = 'none';
  }
}

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

  function getWinner() {
    const totalDistances = _cars.map((car) => car.distance);
    const maxDistance = Math.max(...totalDistances);
    return _cars.filter((car) => {
      return car.distance == maxDistance;
    });
  }

  function startGame() {
    let count = 0;
    while (count < _count) {
      _cars.forEach((car) => {
        car._m_move(getRandomSingleDigit());
      });
      count += 1;
    }
    console.log(_cars);
    console.log(getWinner());
  }

  /*
   ** Check
   */

  function checkValidCarName(carNames) {
    const validCarName = carNames.filter(
      (carName) => carName.length <= 5 && carName != '',
    );
    return validCarName.length === carNames.length;
  }

  function checkValidCount(count) {
    if (count === String(parseInt(count))) {
      return true;
    }
    return false;
  }

  /*
   ** Input
   */

  function getInputCarName() {
    return document.getElementById('car-names-input').value.split(',');
  }

  function getInputCount() {
    return document.getElementById('racing-count-input').value;
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
