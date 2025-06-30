const communityQuestions = [
  {
    prompt: "A newly arrived family from Nepal just reached the settlement. What should you do first to support them?",
    options: [
      "Invite them to Losar celebration",
      "Help them register with the welfare office", // ✅
      "Tell them to find a house on their own"
    ],
    answer: 1,
    feedback: "✅ Well done. Supporting new arrivals ensures our community grows stronger."
  },
  {
    prompt: "You’re asked to help plan a cultural event to inspire younger generations. What event should you suggest?",
    options: [
      "Poetry reading and elders’ storytelling session", // ✅
      "Fancy dress competition",
      "Cooking show"
    ],
    answer: 0,
    feedback: "✅ Beautiful choice. Keeping oral history alive ensures the past speaks to the future."
  },
  {
    prompt: "The local Tibetan Women’s Association needs help. What is their main contribution to the community?",
    options: [
      "Advocating for Tibetan independence", // ✅
      "Selling sweaters",
      "Teaching music only"
    ],
    answer: 0,
    feedback: "✅ Correct! These associations carry the torch of activism and social care in exile."
  },
  {
    prompt: "You’re asked to create an after-school program for Tibetan youth. What kind of program would best serve their cultural and educational growth?",
    options: [
      "Tibetan language and computer literacy classes", // ✅
      "Soccer only",
      "Watching Bollywood movies"
    ],
    answer: 0,
    feedback: "✅ Excellent! Blending cultural knowledge with modern skills empowers the next generation."
  },
  {
    prompt: "There’s a health awareness event being planned in the settlement. What should be a focus area?",
    options: [
      "Tibetan medicine and hygiene practices", // ✅
      "Free movie tickets",
      "Construction of a dance hall"
    ],
    answer: 0,
    feedback: "✅ Correct! Traditional Tibetan healthcare is a valuable resource that should be shared and sustained."
  },
  {
    prompt: "You’re helping prepare a monthly bulletin for the settlement. What is a key type of content you should include?",
    options: [
      "Profiles of community leaders and upcoming events", // ✅
      "Jokes and puzzles only",
      "Product ads and gossip"
    ],
    answer: 0,
    feedback: "✅ Right choice! Sharing local stories and events keeps the community informed and united."
  }
];


let communityQuizState = {
  currentIndex: 0,
  score: 0
};


function drawCommunityQuiz() {
  const q = communityQuizState.selectedQuestions[communityQuizState.currentIndex];

  background(250);
  fill(30);
  textAlign(CENTER, TOP);
  textSize(20);
  text("🤝 Community Task", width / 2, 40);

  // Question text
  textAlign(LEFT, TOP);
  textSize(16);
  text(q.prompt, 80, 100, width - 160);

  // Options
  for (let i = 0; i < q.options.length; i++) {
    fill(70, 130, 180);
    rect(100, 180 + i * 60, 500, 40, 10);
    fill(255);
    textAlign(CENTER, CENTER);
    text(q.options[i], 350, 200 + i * 60);
  }
    // ✅ Completion Badge
  if (communityTasks.quizPassed) {
    // Draw torch badge
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255, 140, 0);
    text("🏅", width - 60, 50); // top-right corner

    textSize(12);
    fill(50);
    text("Community Torchbearer", width - 60, 80);
  }

}

function handleCommunityQuizClick() {
  const q = communityQuizState.selectedQuestions[communityQuizState.currentIndex];

  for (let i = 0; i < q.options.length; i++) {
    if (mouseY > 180 + i * 60 && mouseY < 220 + i * 60) {
      if (i === q.answer) {
        alert(q.feedback);
        communityQuizState.score++;
      } else {
        alert("❌ Not quite. Try to consider what strengthens the community.");
      }

      communityQuizState.currentIndex++;

      if (communityQuizState.currentIndex >= communityQuizState.selectedQuestions.length) {
        if (communityQuizState.score === 2) {
          communityTasks.quizPassed = true;
          alert("🎊 You’ve played a key role in sustaining the exile community.\n🏅 You are now a Community Torchbearer.");
        } else {
          alert("You need to answer both questions correctly to earn the badge. Try again!");
        }
        gameState = "communityHub";
      }

      break;
    }
  }
}


