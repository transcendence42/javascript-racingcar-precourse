import registerButtonEvent from './event-listener.js';
import toggleTagDisplay from './css-handler.js';
import getElements from './elements.js';

export default function initGame() {
  toggleTagDisplay(getElements.racingCountContainer);
  toggleTagDisplay(getElements.resultContainer);
  registerButtonEvent();
}
