var button = document.querySelector (".button-search-brown");
var form = document.querySelector ("form");
button.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("search-hotel-close");
});
window.addEventListener ("keydown", function(evt) {
 if (evt.keyCode === 27) {
   if (form.classList.contains("search-hotel-close")) {
     evt.preventDefault();
     form.classList.remove("search-hotel-close");
   }
 }
});
