import { renderRaceResult, renderWinner } from './render.js';

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function playDice() {
  const randonNumber = generateRandomNumber(1, 9);

  if (randonNumber >= 4) {
    return true;
  }
  return false;
}

function checkDiceWinner(carObjectArray) {
  carObjectArray.forEach((car) => {
    if (playDice()) {
      car.moveForward();
    }
  });
}

function getMaxPosition(carObjectArray) {
  let position = 0;

  carObjectArray.forEach((car) => {
    if (car.position > position) {
      position = car.position;
    }
  });
  return position;
}

function getWinnerArray(carObjectArray) {
  const winnerCarArray = [];

  carObjectArray.forEach((car) => {
    if (car.position === getMaxPosition(carObjectArray)) {
      winnerCarArray.push(car.name);
    }
  });
  return winnerCarArray;
}

export default function startRace(carObjectArray, racingCount) {
  let winnerArray = [];

  for (let index = 0; index < racingCount; index += 1) {
    checkDiceWinner(carObjectArray);
    renderRaceResult(carObjectArray);
  }
  winnerArray = getWinnerArray(carObjectArray);
  renderWinner(winnerArray);
}
