export default function toggleTagDisplay(id) {
  const $tagStyleDisplay = document.getElementById(id);
  if ($tagStyleDisplay.style.display == 'none') {
    $tagStyleDisplay.style.display = 'block';
  } else {
    $tagStyleDisplay.style.display = 'none';
  }
}
