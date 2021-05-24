'use strict';

function Car(name) {
  this.name = name;
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

  function startGame() {
    
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
      alert('유효하지 않은 입력입니다. 재입력 해주세요. 입력: ', inputCarNames);
      return;
    }
    inputCarNames.forEach((name) => {
      _cars.push(new Car(name));
    });
    toggleTagDisplay('racing-count-container');
  }

  function clickRacingCountSubmit() {
    _count = getInputCount();
    toggleTagDisplay('result-container');
    startGame();
  }

  function registerButtonEvent() {
    addButtonEvent('car-names-submit', clickCarNamesSubmit);
    addButtonEvent('racing-count-submit', clickRacingCountSubmit);
  }
}
