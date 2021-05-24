'use strict';

export default function toggleTagDisplay(id) {
  let $tagStyleDisplay = document.getElementById(id);
  if ($tagStyleDisplay.style.display == 'none') {
    $tagStyleDisplay.style.display = 'block';
  } else {
    $tagStyleDisplay.style.display = 'none';
  }
}
