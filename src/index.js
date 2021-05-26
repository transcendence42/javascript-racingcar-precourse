import { getCarNames, getCount } from './input.js';

export default function RacingCarGame() {
  const carNamesButton = document.getElementById('car-names-submit');
  const racingCountButton = document.getElementById('racing-count-submit');

  carNamesButton.addEventListener('click', getCarNames());
  racingCountButton.addEventListener('click', getCount());
}

new RacingCarGame();
