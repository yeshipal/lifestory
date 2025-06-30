// =======================
// monasteryQuiz.js
// =======================

const dalaiLamaQuestions = [
  {
    q: "What does the Dalai Lama say is the key to a happy life?",
    options: ["Fame and wealth", "A calm mind and compassion", "Being better than others"],
    answer: 1
  },
  {
    q: "Which of the following best shows compassion?",
    options: ["Helping someone without expecting anything", "Only caring for people you like", "Ignoring those who are struggling"],
    answer: 0
  },
  {
    q: "What should we do when someone believes in a different religion?",
    options: ["Argue with them", "Respect their beliefs", "Try to change their mind"],
    answer: 1
  },
  {
    q: "Why should we care for the environment?",
    options: ["It’s the government’s job", "Because the Earth is our shared home", "Nature can take care of itself"],
    answer: 1
  },
  {
    q: "How can we reduce anger and hate?",
    options: ["By always winning arguments", "By practicing patience and understanding", "By avoiding everyone"],
    answer: 1
  },
  {
    q: "What makes human values universal?",
    options: ["They belong to one religion", "They are taught only in monasteries", "They apply to all people, everywhere"],
    answer: 2
  },
  {
    q: "What should you do if you see a classmate being left out?",
    options: ["Laugh with the others", "Invite them to join you", "Say nothing"],
    answer: 1
  },
  {
    q: "How can you practice compassion in your daily life?",
    options: ["By listening when a friend is upset", "By ignoring people with problems", "By doing only what helps you"],
    answer: 0
  },
  {
    q: "Why does the Dalai Lama believe education is important?",
    options: ["To win debates", "To get rich", "To develop both the mind and heart"],
    answer: 2
  },
  {
    q: "What is the Dalai Lama’s message about Tibet?",
    options: ["Forget the past", "Use violence to resist", "Preserve Tibetan identity through nonviolence and truth"],
    answer: 2
  }
];

let quizState = {
  currentIndex: 0,
  selectedQuestions: [],
  score: 0
};



function drawMonasteryQuiz() {
  background(255);

  const q = quizState.selectedQuestions[quizState.currentIndex];

  fill(0);
  textAlign(CENTER);
  textSize(20);
  text(`Question ${quizState.currentIndex + 1} of 3`, width / 2, 60);
  textSize(16);
  text(q.q, width / 2, 120);

  for (let i = 0; i < 3; i++) {
    fill(60 + i * 60, 120, 180);
    rect(180, 180 + i * 60, 480, 40, 10);
    fill(255);
    text(q.options[i], width / 2, 190 + i * 60);
  }
}
