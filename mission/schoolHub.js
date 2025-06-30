function initializeSchoolQuizzes() {
  selectedTibetanQuestion = random(tibetanQuestions);
  selectedCSQuestion = random(csQuestions);
}
function drawSchoolHub() {
   if (schoolBgImage) {
    tint(255, 200); // Apply 80% opacity
    image(schoolBgImage, 0, 0, width, height);
    noTint();
  } else {
    background(250); // fallback color
  }

  // --- Title ---
  fill(30);
  textAlign(CENTER, TOP);
  textSize(22);
  text("📘 Tibetan School Learning Hub", width / 2, 30);

  // --- Graduation Message ---
  if (schoolTests.tibetan && schoolTests.cs) {
    fill(255, 223, 0);
    rect(width / 2 - 220, 70, 440, 40, 10);
    fill(0);
    textSize(18);
    text("🎉 Congratulations! You have shown excellence at Tibetan School knowledge. 🎉", width / 2, 80);
  }
  // --- Section Labels ---
  textSize(18);
  fill(255);
  text("Resources (Optional)", 200, 160);
  text("Tests (Complete to graduate)", 540, 160);

  // --- Resource Button ---
  drawButton(resourceBtn, "📺 Watch Tibetan Lesson", [70, 130, 180]);

  // --- Tibetan Test Button ---
  drawButton(tibetanTestBtn, "🧪 Take Tibetan Test", [34, 139, 34]);
  if (schoolTests.tibetan) {
    text("✅", tibetanTestBtn.x + tibetanTestBtn.w - 30, tibetanTestBtn.y + 15);
  }

  // --- CS Test Button ---
  drawButton(csTestBtn, "💻 Take CS Test", [65, 105, 225]);
  if (schoolTests.cs) {
    text("✅", csTestBtn.x + csTestBtn.w - 30, csTestBtn.y + 15);
  }

  // --- Exit Button ---
  drawButton(exitBtn, "🚪 Exit School", [100, 100, 100]);
}
