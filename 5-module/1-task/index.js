function hideSelf() {
  let ourBtn = document.querySelector ('.hide-self-button');
  ourBtn.addEventListener ('click', () => {
    ourBtn.hidden = 'true';
  });
}
