const Intropage = document.querySelector(".IntroPage");
const Beginbtn = document.querySelector(".begin");
const Questionbox = document.querySelector(".Question");
const btnOptions = document.querySelectorAll(".btn-option");
const OptionA = document.querySelector(".A");
const OptionB = document.querySelector(".B");
const OptionC = document.querySelector(".C");
const OptionD = document.querySelector(".D");

const QuestionObj = [
  {
    "Question Number" : 1,
    "Questiion" : "How many squares are on a chess board",
    "A" : 16,
    "B" : 25,
    "C" : 50,
    "D" : 64,

    "Answer" : "D"
  },
  {
    "Question Number" : 2,
    "Questiion" : "How many Continents are in the world",
    "A" : 7,
    "B" : 3,
    "C" : 5,
    "D" : 10,

    "Answer" : "A"
  },
  {
    "Question Number" : 3,
    "Questiion" : "What's the answer to this : 2x - 8 = 4x + 2",
    "A" : 0,
    "B" : -5,
    "C" : 10,
    "D" : 400,

    "Answer" : "B"
  },
  {
    "Question Number" : 4,
    "Questiion" : "How many squares are on a chess board",
    "A" : 16,
    "B" : 25,
    "C" : 50,
    "D" : 64,

    "Answer" : "D"
  },
  {
    "Question Number" : 5,
    "Questiion" : "What does I.T stand for",
    "A" : "Information Technology",
    "B" : "Inquizitive Technology",
    "C" : "Information Tactics",
    "D" : "Impatient Tacion",

    "Answer" : "A"
  },
  {
    "Question Number" : 6,
    "Questiion" : "How many squares are on a chess board",
    "A" : 16,
    "B" : 25,
    "C" : 50,
    "D" : 64,

    "Answer" : "D"
  },
  {
    "Question Number" : 7,
    "Questiion" : "How many squares are on a chess board",
    "A" : 16,
    "B" : 25,
    "C" : 50,
    "D" : 64,

    "Answer" : "D"
  },
  {
    "Question Number" : 8,
    "Questiion" : "How many squares are on a chess board",
    "A" : 16,
    "B" : 25,
    "C" : 50,
    "D" : 64,

    "Answer" : "D"
  },
  {
    "Question Number" : 9,
    "Questiion" : "How many squares are on a chess board",
    "A" : 16,
    "B" : 25,
    "C" : 50,
    "D" : 64,

    "Answer" : "D"
  },
  {
    "Question Number" : 10,
    "Questiion" : "How many squares are on a chess board",
    "A" : 16,
    "B" : 25,
    "C" : 50,
    "D" : 64,

    "Answer" : "D"
  },
]

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
