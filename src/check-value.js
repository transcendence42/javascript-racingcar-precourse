'use strict';

function checkValidCarName(carNames) {
  const validCarName = carNames.filter(
    (carName) => carName.length <= 5 && carName != '',
  );
  return validCarName.length === carNames.length;
}

function checkValidCount(count) {
  if (count === String(parseInt(count))) {
    return true;
  }
  return false;
}

export { checkValidCarName, checkValidCount };
