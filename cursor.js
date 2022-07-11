const bodyElement = document.body;

bodyElement.addEventListener('mousemove', e => {
  bodyElement.style.setProperty('--pageX', e.pageX + 'px');
  bodyElement.style.setProperty('--pageY', e.pageY + 'px');
});