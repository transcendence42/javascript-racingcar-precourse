'use strict';

function getInputCarName() {
  return document.getElementById('car-names-input').value.split(',');
}

function getInputCount() {
  return document.getElementById('racing-count-input').value;
}

export { getInputCarName, getInputCount };
