var input = document.querySelector('input[name="number_Order"]');
input.addEventListener("keydown", function (e) {
  var numero =
    (e.keyCode >= 48 && e.keyCode <= 57) ||
    (e.keyCode >= 96 && e.keyCode <= 105);
  var controlos = [8, 37, 39].includes(e.keyCode);
  if (!numero && !controlos) return e.preventDefault();
});
