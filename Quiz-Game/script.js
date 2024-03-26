const Intropage = document.querySelector(".IntroPage");
const Beginbtn = document.querySelector(".begin");
const Questionbox = document.querySelector(".Question");
const btnOptions = document.querySelectorAll(".btn-option");
const OptionA = document.querySelector(".A");
const OptionB = document.querySelector(".B");
const OptionC = document.querySelector(".C");
const OptionD = document.querySelector(".D");

const Init = function () {
  Intropage.classList.remove("hidden");
  Questionbox.classList.add("hidden");
  btnOptions.forEach((btn) => btn.classList.remove("selected"));
};

Beginbtn.addEventListener("click", function () {
  Intropage.classList.add("hidden");
  Questionbox.classList.remove("hidden");
});

const Selected = function (element) {
  btnOptions.forEach((btn) => btn.classList.remove("selected"));
  element.classList.add("selected");
};

OptionA.addEventListener("click", function () {
  Selected(OptionA);
});
OptionB.addEventListener("click", function () {
  Selected(OptionB);
});
OptionC.addEventListener("click", function () {
  Selected(OptionC);
});
OptionD.addEventListener("click", function () {
  Selected(OptionD);
});
