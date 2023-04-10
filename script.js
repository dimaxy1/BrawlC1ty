function toggleRules() {
  var rulesText = document.querySelector('.rules-text');
  if (rulesText.style.display === 'block') {
    rulesText.style.display = 'none';
    rulesText.classList.remove('animated');
  } else {
    rulesText.style.display = 'block';
  }
}
