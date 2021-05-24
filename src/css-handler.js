export default function toggleTagDisplay(tagStyleDisplay) {
  const _tagStyleDisplay = tagStyleDisplay;
  if (_tagStyleDisplay.style.display === 'none') {
    _tagStyleDisplay.style.display = 'block';
  } else {
    _tagStyleDisplay.style.display = 'none';
  }
}
