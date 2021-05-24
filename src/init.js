'use strict';

function Car(name) {
  this.name = name;
}

/*
 ** Init
 */

export default function initGame() {
  let _cars = [];
  registerButtonEvent();

  return;
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
  }

  function clickRacingCountSubmit() {
    console.log('bye');
  }

  function registerButtonEvent() {
    addButtonEvent('car-names-submit', clickCarNamesSubmit);
    addButtonEvent('racing-count-submit', clickRacingCountSubmit);
  }
}
