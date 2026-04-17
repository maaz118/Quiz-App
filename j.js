const quizData = [
  {
    question: "What is HTML?",
    options: ["Programming Language", "Markup Language", "Database", "OS"],
    correct: 1
  },
  {
    question: "What is CSS used for?",
    options: ["Logic", "Styling", "Database", "Server"],
    correct: 1
  },
  {
    question: "Which language is used for interactivity?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  selectedOption = null;
  const current = quizData[currentQuestion];

  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach((option, index) => {
    const div = document.createElement("div");
    div.textContent = option;
    div.classList.add("option");

    div.onclick = () => {
      document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
      div.classList.add("selected");
      selectedOption = index;
    };

    optionsEl.appendChild(div);
  });
}

nextBtn.onclick = () => {
  if (selectedOption === null) {
    alert("Please select an option!");
    return;
  }

  if (selectedOption === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.textContent = `Your Score: ${score}/${quizData.length}`;
  optionsEl.innerHTML = "";
  nextBtn.textContent = "Restart";

  nextBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    nextBtn.textContent = "Next";
    loadQuestion();
  };
}
loadQuestion();
