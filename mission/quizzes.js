let tibetanQuestions = [
  {
    question: "What is the meaning of 'གཞན་ཕན།'?",
    options: ["Taking care of yourself", "Taking care of others", "Taking care of your community"],
    correct: "B"
  },
  {
    question: "Which is used mean the term language?",
    options: ["སྐད་འཕྲིན།", "སྐད་ཡིག", "སྐད་ཆ།"],
    correct: "B"
  },
  {
    question: "What does 'རང་ལས་གཞན་གཅེས།' mean?",
    options: ["Others before self", "Self before the others", "Love before greed"],
    correct: "A"
  },
  {
    question: "How many root letters are in the Tibetan alphabet?",
    options: ["26", "30", "42"],
    correct: "B"
  },
  {
    question: "What is གནམ་ལོ་གསར་ཚེས།?",
    options: ["Harvest festival", "New Year", "Buddha's Birthday"],
    correct: "B"
  }
];

let csQuestions = [
  {
    question: "In computer science coding, which means a program?",
    options: ["'a code block that performs a task'", "'repeated lines of code'", "'a line of code'"],
    correct: "A"
  },
  {
    question: "What is a 'loop' used for?",
    options: ["To repeat actions", "To create sound", "To change color"],
    correct: "A"
  },
  {
    question: "Which of these is a conditional block?",
    options: ["'if then'", "'forever'", "'wait 1 sec'"],
    correct: "A"
  },
  {
    question: "What is 'debugging'?",
    options: ["Running fast", "Fixing errors", "Making sounds"],
    correct: "B"
  },
  {
    question: "Which block helps make decisions in code?",
    options: ["'if'", "'say'", "'repeat'"],
    correct: "A"
  }
];

// These will hold the selected questions during the session
let selectedTibetanQuestion;
let selectedCSQuestion;

function drawTibetanQuiz() {
  background(250);
  fill(30);
  textAlign(CENTER);
  textSize(20);
  text("📘 Tibetan Language Quiz", width / 2, 60);

  if (selectedTibetanQuestion) {
    textSize(16);
    text("Q: " + selectedTibetanQuestion.question, width / 2, 120);
    text("A. " + selectedTibetanQuestion.options[0], width / 2, 160);
    text("B. " + selectedTibetanQuestion.options[1], width / 2, 200);
    text("C. " + selectedTibetanQuestion.options[2], width / 2, 240);
    textSize(14);
    text("Press A, B, or C to answer", width / 2, 300);
  }
}

function drawCSQuiz() {
  background(250);
  fill(30);
  textAlign(CENTER);
  textSize(20);
  text("💻 Computer Science Quiz", width / 2, 60);

  if (selectedCSQuestion) {
    textSize(16);
    text("Q: " + selectedCSQuestion.question, width / 2, 120);
    text("A. " + selectedCSQuestion.options[0], width / 2, 160);
    text("B. " + selectedCSQuestion.options[1], width / 2, 200);
    text("C. " + selectedCSQuestion.options[2], width / 2, 240);
    textSize(14);
    text("Press A, B, or C to answer", width / 2, 300);
  }
}

/**
 * Handles keyboard input when user is in a quiz.
 * @param {string} key The key pressed.
 */
function keyPressedQuizHandler(key) {
  let answer = key.toUpperCase();
  if (answer !== "A" && answer !== "B" && answer !== "C") return;

  if (gameState === "tibetanQuiz" && selectedTibetanQuestion) {
    if (answer === selectedTibetanQuestion.correct) {
      alert("Correct! 🎉 You’ve earned the Tibetan Badge.");
      schoolTests.tibetan = true;  // ✅ Set completion flag
      gameState = "schoolHub";
    } else {
      alert("Oops! That's not correct. Try again.");
    }
  }

  else if (gameState === "csQuiz" && selectedCSQuestion) {
    if (answer === selectedCSQuestion.correct) {
      alert("Correct! 💻 You've completed the CS quiz.");
      schoolTests.cs = true;  // ✅ Set completion flag
      gameState = "schoolHub";
    } else {
      alert("Not quite. Give it another go.");
    }
  }
}


