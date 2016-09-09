var search=document.querySelector(".btn-search");
var popup=document.querySelector(".search-form");
var form=popup.querySelector("form");
var dateIn=popup.querySelector("[name=date-in]");
var dateOut=popup.querySelector("[name=date-out]");
var quantityAdult=popup.querySelector("#adult-amount");

search.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("search-form-show");
  dateIn.focus();
});

form.addEventListener("submit", function(event) {
  if (!(dateIn.value && dateOut.value && parseInt(quantityAdult.value, 10))) {
    event.preventDefault();
    console.log("Нужно ввести что-то");
  }
});