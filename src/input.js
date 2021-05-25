import { ERROR_INPUT } from './define-msg.js';

export default function checkCarName(carNameInput) {
	const carNameArray = carNameInput.split(',').map(m_name => m_name.trim());

	if (checkEmptyInput(carNameInput)) {
	  return ERROR_INPUT.EMPTY;
	} else if (checkDoubleElements(carNameArray)) {
	  return ERROR_INPUT.DOUBLE;
	} else if (checkValidCarNameLength(carNameArray)) {
	  return ERROR_INPUT.LENGTH;
	}
	return ERROR_INPUT.NONE;
};

function checkEmptyInput(carNameInput) {
  if (carNameInput.trim() === '') {
    return true;
  }
  return false;
};

function checkDoubleElements(carNameArray) {
  const tmpArray = new Set(carNameArray);

  if (tmpArray.length !== carNameArray.length) {
    return true;
  }
  return false;
};

function checkValidCarNameLength(carNameArray) {
  for (const m_name of carNameArray) {
    if (m_name.length > 5) {
      return true;
    }
    return false;
  }
};
