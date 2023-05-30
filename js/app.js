// Principales preguntas sobre Monitor - Mostrar mas o menos información
var toggleButtons = document.querySelectorAll(".button__toggle");
var contents = document.querySelectorAll(".main__section__five--links--link--content");

function toggleContent(index) {
  if (contents[index].style.display === "none") {
    contents[index].style.display = "block";
    toggleButtons[index].innerHTML = "-";
  } else {
    contents[index].style.display = "none";
    toggleButtons[index].innerHTML = "+";
  }
}

for (var i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener(
    "click",
    (function (index) {
      return function () {
        toggleContent(index);
      };
    })(i)
  );
}
