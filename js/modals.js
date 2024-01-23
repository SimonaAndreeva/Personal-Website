document.getElementById('item1').addEventListener('click', function() {
  document.getElementById('popup').style.visibility = 'visible';
  document.getElementById('popup').style.opacity = '1';
});

document.querySelector('.popup__close').addEventListener('click', function() {
  document.getElementById('popup').style.visibility = 'hidden';
  document.getElementById('popup').style.opacity = '0';
});