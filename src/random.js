export default function getRandomSingleDigit() {
  const min = 0;
  const max = 9;

  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
