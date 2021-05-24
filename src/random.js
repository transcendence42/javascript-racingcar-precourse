'use strict';

export default function getRandomSingleDigit() {
  const min = 1;
  const max = 10;

  return Math.floor(Math.random() * (max - min)) + min;
}
