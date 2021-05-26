export function hideElements() {
  let h4s = document.getElementsByTagName("h4");
  h4s[0].style.display = "none";
  h4s[1].style.display = "none";
  h4s[1].setAttribute("id", "#result");
  document.getElementById("#racing-count-input").style.display = "none";
  document.getElementById("#racing-count-submit").style.display = "none";
}

export function showElements() {
  let h4s = document.getElementsByTagName("h4");
  h4s[0].style.display = "block";
  document.getElementById("#racing-count-input").style.display = "block";
  document.getElementById("#racing-count-submit").style.display = "block";    
}