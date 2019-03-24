var button = document.querySelector (".button-search-brown");
var popup = document.querySelector ("form");
var arrival = document.querySelector("[name=arrival]");
var departure = document.querySelector("[name=departure]");


button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-hotel-open");
  popup.classList.remove("search-hotel-error");

});



window.addEventListener ("keydown", function (evt) {
 if (evt.keyCode === 27) {
   if (popup.classList.contains("search-hotel-open")) {
     evt.preventDefault();
     popup.classList.remove("search-hotel-open");
   }
 }
});
popup.addEventListener("submit", function (evt) {
   if (!arrival.value || !departure.value) {
     evt.preventDefault();
     popup.classList.remove("search-hotel-error");
     popup.offsetWidth = popup.offsetWidth;
     popup.classList.add("search-hotel-error");
   }
 });
