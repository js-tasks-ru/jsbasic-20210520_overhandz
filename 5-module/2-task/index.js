function toggleText() {
  let toggleTextBtn = document.querySelector('.toggle-text-button');
  let textBlock = document.getElementById ('text');
  toggleTextBtn.addEventListener ('click', () => {
    if (!textBlock.hidden) {
      textBlock.setAttribute ('hidden', true );
    } else {
      textBlock.removeAttribute ('hidden');
    }
  });
}