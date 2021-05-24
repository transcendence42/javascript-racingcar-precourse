'use strict';

function addButtonEvent(buttonId, func) {
  const $submitButton = document.getElementById(buttonId);
  $submitButton.addEventListener('click', () => func());
}

function clickCarNamesSubmit() {
  console.log('hi');
}

function clickRacingCountSubmit() {
  console.log('bye');
}

export default function registerButtonEvent() {
  addButtonEvent('car-names-submit', clickCarNamesSubmit);
  addButtonEvent('racing-count-submit', clickRacingCountSubmit);
}
