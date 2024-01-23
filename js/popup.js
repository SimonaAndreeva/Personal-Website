document.getElementById('item1').addEventListener('click', function() {
  document.getElementById('popupItem1').style.visibility = 'visible';
  document.getElementById('popupItem1').style.opacity = '1';
});
 
document.getElementById('closeItem1').addEventListener('click', function() {
  document.getElementById('popupItem1').style.visibility = 'hidden';
  document.getElementById('popupItem1').style.opacity = '0';
});
 
document.getElementById('item2').addEventListener('click', function() {
  document.getElementById('popupItem2').style.visibility = 'visible';
  document.getElementById('popupItem2').style.opacity = '1';
});
 
document.getElementById('closeItem2').addEventListener('click', function() {
  document.getElementById('popupItem2').style.visibility = 'hidden';
  document.getElementById('popupItem2').style.opacity = '0';
});