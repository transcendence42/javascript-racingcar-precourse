import getRandomSingleDigit from './random.js';

function getWinners(_cars) {
  const totalDistances = _cars.map((car) => car.distance);
  const maxDistance = Math.max(...totalDistances);
  return _cars
    .filter((car) => {
      return car.distance === maxDistance;
    })
    .map((winner) => winner.name);
}

export default function startGame(_cars, _count) {
  let count = 0;
  let result = '';
  while (count < _count) {
    _cars.forEach((car) => {
      const randomDigit = getRandomSingleDigit(0, 9);
      if (randomDigit >= 4) {
        car.move();
      }
      result += `${car.name}: ${'-'.repeat(car.distance)}<br>`;
    });
    result += '<br>';
    count += 1;
  }
  const $resultContainer = document.getElementById('result-container');
  $resultContainer.innerHTML += `${result}<br>최종 우승자:${getWinners(
    _cars,
  ).join()}`;
}
