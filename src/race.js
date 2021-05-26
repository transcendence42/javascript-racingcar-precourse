function showResult(cars, repeatNum) {
  const location = repeatNum == 0 ? '#result' : '#result_' + (repeatNum - 1);
  const resultHead = document.getElementById(location);
  resultHead.insertAdjacentHTML(
    'afterend',
    `<div id=#result_${repeatNum}></div>`,
  );
  let ret = '';
  cars.forEach((item) => {
    let scores = '';
    for (let i = 0; i < item._score; i++) {
      scores += '-';
    }
    ret += `${item._name}  :  ${scores} <br>`;
  });
  ret += '<br>';
  const newDiv = document.getElementById('#result_' + repeatNum);
  newDiv.insertAdjacentHTML('beforeend', ret);
}

function showChampion(cars, inputNum) {
  let finalScore = cars.map((x) => x._score);
  let highestScore = Math.max.apply(null, finalScore);
  let champion = '';

  cars.forEach((item) => {
    if (item._score === highestScore) {
      champion += `${item._name},`;
    }
  });
  if (champion.length) {
    champion = `<p>최종 우승자: ${champion.slice(0, -1)}</p>`;
  }
  const lastDiv = document.getElementById('#result_' + (inputNum - 1));
  lastDiv.insertAdjacentHTML('afterend', champion);
}

export default function startRace({ inputNum, cars }) {
  let repeatNum = 0;
  while (repeatNum < inputNum) {
    cars.forEach((item) => {
      let ret = Math.random() * 9;
      if (ret >= 4) {
        item._score += 1;
      }
    });
    showResult(cars, repeatNum);
    repeatNum += 1;
  }
  showChampion(cars, inputNum);
}
