import { hideElements } from './elements.js';
import { setNames, setNum } from './event_callback.js';

export default function RacingCarGame() {
  let inputElements = document.getElementsByTagName('input');
  let buttonElements = document.getElementsByTagName('button');

  inputElements[0].setAttribute('id', '#car-names-input');
  inputElements[1].setAttribute('id', '#racing-count-input');
  buttonElements[0].setAttribute('id', '#car-names-submit');
  buttonElements[1].setAttribute('id', '#racing-count-submit');
  hideElements();

  let nameBtn = document.getElementById('#car-names-submit');
  let numBtn = document.getElementById('#racing-count-submit');

  nameBtn.addEventListener('click', setNames);
  numBtn.addEventListener('click', setNum);
}

new RacingCarGame();
