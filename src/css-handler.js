export default function toggleTagDisplay(tagStyleDisplay) {
  if (tagStyleDisplay.style.display === 'none') {
    tagStyleDisplay.style.display = 'block';
  } else {
    tagStyleDisplay.style.display = 'none';
  }
}
