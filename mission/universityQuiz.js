const trackAQuestions = [
  {
    question: "What does the Tibetan proverb 'འདུ་འཛིན་བྱས་ནས་མཐུན་འབྲེལ་འབད།' (With unity, harmony is possible) teach about civic engagement?",
    options: ["Only work alone", "Avoid group action", "Work together for a common goal"],
    answer: 2
  },
  {
    question: "Which Tibetan value is most important when representing your community?",
    options: ["Patience", "Wealth", "Popularity"],
    answer: 0
  },
  {
    question: "The proverb 'སྤྱི་ཚོགས་ནང་ལོག་གཏོང་མི་དགེ།' (Harming the community is not virtuous) implies what?",
    options: ["One must protect and serve the community", "Avoid all leadership", "Stay silent"],
    answer: 0
  },
  {
    question: "Why is knowledge of Tibetan literature important for civic leaders?",
    options: ["It helps memorize prayers", "It connects leaders to community identity", "It is just tradition"],
    answer: 1
  },
  {
    question: "Which action best reflects civic responsibility in Tibetan society?",
    options: ["Criticizing others", "Ignoring issues", "Participating in community meetings"],
    answer: 2
  },
  {
    question: "According to Tibetan teachings, what makes a leader effective?",
    options: ["Kindness and moral strength", "Strict control", "Popularity on social media"],
    answer: 0
  }
];

const trackBQuestions = [
  {
    question: "Which is the most ethical way to report on sensitive Tibetan issues?",
    options: ["Use verified facts and avoid exaggeration", "Make the story more dramatic", "Never report"],
    answer: 0
  },
  {
    question: "Why is it important for Tibetan youth to learn digital storytelling?",
    options: ["To create viral memes", "To amplify Tibetan voices to a global audience", "To become influencers"],
    answer: 1
  },
  {
    question: "Which of these is a responsible use of social media?",
    options: ["Sharing unverified rumors", "Posting only fun content", "Advocating for Tibetan culture with truth and respect"],
    answer: 2
  },
  {
    question: "Why is web development a powerful tool for Tibetans in exile?",
    options: ["It helps build global networks", "It replaces traditional learning", "It is just a hobby"],
    answer: 0
  },
  {
    question: "How should you handle controversial content in journalism?",
    options: ["Avoid it entirely", "Share only one-sided opinions", "Present balanced perspectives with context"],
    answer: 2
  },
  {
    question: "What is one purpose of a digital portfolio or personal website?",
    options: ["Show off random photos", "Publish stories and projects that reflect cultural identity", "Sell things anonymously"],
    answer: 1
  }
];
const universityQuizState = {
  track: null,
  currentIndex: 0,
  selectedQuestions: [],
  score: 0
};

function startUniversityQuiz(track) {
  universityQuizState.track = track;
  universityQuizState.currentIndex = 0;
  universityQuizState.score = 0;

  if (track === 'A') {
    universityQuizState.selectedQuestions = shuffle([...trackAQuestions]).slice(0, 2);
    gameState = "universityQuizA";
  } else if (track === 'B') {
    universityQuizState.selectedQuestions = shuffle([...trackBQuestions]).slice(0, 2);
    gameState = "universityQuizB";
  }

  console.log("✅ Quiz Started:", universityQuizState);
}

function drawUniversityQuiz() {
  

  const q = universityQuizState.selectedQuestions[universityQuizState.currentIndex];

  background(250);
  fill(30);
  textAlign(CENTER, TOP);
  textSize(20);
  text("🎓 University Quiz", width / 2, 40);

  textAlign(LEFT, TOP);
  textSize(16);
  text(q.question, 80, 100, width - 160);

  for (let i = 0; i < q.options.length; i++) {
    fill(70, 130, 180);
    rect(100, 180 + i * 60, 500, 40, 10);
    fill(255);
    textAlign(CENTER, CENTER);
    text(q.options[i], 350, 200 + i * 60);
  }
}


