import Car from "./car.js";
import { showElements } from "./elements.js";
import startRace from "./race.js";

function checkNames(elems) {
  let result = true;
  elems.forEach(function (item) {
    if (item.length > 5) {
      result = false;
    }
  });
  return result;
}

export function setNum() {
  let userInputNum = document.getElementById("#racing-count-input").value;
  let checkNum = num => !isNaN(num);

  if (checkNum(userInputNum) == false) {
    alert("잘못된 입력입니다.");
    document.getElementById("#racing-count-input").value = "";
  } else {
    let userInputNames = document.getElementById("#car-names-input").value;
    const names = userInputNames.split(",");
    let cars = Array();

    names.forEach(item => {
      cars.push(new Car(item));
    });

    let info = { inputNum: userInputNum, cars: cars };
    startRace(info);
  }
}

export function setNames() {
  let userInputNames = document.getElementById("#car-names-input").value;
  const names = userInputNames.split(",");

  if (checkNames(names) === false) {
    alert("잘못된 입력입니다.");
    document.getElementById("#car-names-input").value = "";
  } else {
    showElements();
  }
}
