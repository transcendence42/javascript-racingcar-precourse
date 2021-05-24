import getRandomSingleDigit from './random.js';
import getElements from './elements.js';

function findWinners(_cars) {
  const totalDistances = _cars.map((car) => car.distance);
  const maxDistance = Math.max(...totalDistances);
  return _cars
    .filter((car) => {
      return car.distance === maxDistance;
    })
    .map((winner) => winner.name);
}

function printWinners(result, _cars) {
  const $resultContainer = getElements.resultContainer;
  $resultContainer.innerHTML += `${result}<br>최종 우승자:${findWinners(
    _cars,
  ).join()}`;
}

export default function startGame(_cars, _count) {
  let result = '';
  let count = 0;
  while (count < _count) {
    _cars.forEach((car) => {
      if (getRandomSingleDigit(0, 9) >= 4) {
        car.move();
      }
      result += `${car.name}: ${'-'.repeat(car.distance)}<br>`;
    });
    result += '<br>';
    count += 1;
  }
  printWinners(result, _cars);
}
