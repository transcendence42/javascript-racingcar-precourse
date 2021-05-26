const resultContainer = document.querySelector('.result-container');

function racingProgressBar(carPosition) {
  let bar = '';

  for (let index = 0; index < carPosition; index += 1) {
    bar += '-';
  }
  return bar;
}

export function renderRaceResult(carObjectArray) {
  const racingResult = document.createElement('div');
  let htmlString = '';

  carObjectArray.forEach((car) => {
    htmlString += `${car.name}: ${racingProgressBar(car.position)} <br>`;
  });
  htmlString += `<br>`;

  racingResult.innerHTML = htmlString;
  resultContainer.appendChild(racingResult);
}

export function renderWinner(winnerCarArray) {
  const finalResult = document.createElement('div');

  finalResult.innerHTML = `최종 우승자 : ${winnerCarArray.join(', ')}`;
  resultContainer.appendChild(finalResult);
}
