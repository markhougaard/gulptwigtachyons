window.onblur = function() {
  document.title = '🌚 ' + (document.title).substring(2);
}
window.onfocus = function() {
  document.title = '🌝 ' + (document.title).substring(2);
}
