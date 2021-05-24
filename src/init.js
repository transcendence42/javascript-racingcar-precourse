'use strict';

/*
 ** Init
 */

export default function initGame() {
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
    if (!checkValidCarName(getInputCarName())) {
      alert('hi');
    }
    console.log('2');
  }

  function clickRacingCountSubmit() {
    console.log('bye');
  }

  function registerButtonEvent() {
    addButtonEvent('car-names-submit', clickCarNamesSubmit);
    addButtonEvent('racing-count-submit', clickRacingCountSubmit);
  }
}
