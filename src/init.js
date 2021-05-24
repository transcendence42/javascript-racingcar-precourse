import getElements from './elements.js';
import toggleTagDisplay from './css-handler.js';
import registerButtonEvent from './event-listener.js';

export default function initGame() {
  toggleTagDisplay(getElements.racingCountContainer);
  toggleTagDisplay(getElements.resultContainer);
  registerButtonEvent();
}
