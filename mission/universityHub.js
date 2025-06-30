function drawUniversityHub() {
   if (universityBgImage) {
    tint(255, 200); // Apply 80% opacity
    image(universityBgImage, 0, 0, width, height);
    noTint();
  } else {
    background(250); // fallback color
  }
  textAlign(CENTER, TOP);
  textSize(22);
  fill(30);
  text("🎓 Welcome to the Tibetan University", width / 2, 30);
  if (universityComplete) {
    // 🎉 Badge Message Configuration
    const badgeText = "🎉 You've earned valuable learnings from the Tibetan University!";
    const boxWidth = textWidth(badgeText) + 40; // dynamic width based on text length
    const boxHeight = 60;
    const boxX = (width - boxWidth) / 2;
    const boxY = 70;

    // 🟩 Translucent green background box
    fill(200, 255, 200, 200); // light green with alpha
    noStroke();
    rect(boxX, boxY, boxWidth, boxHeight, 12);

    // 🎓 Badge text
    textAlign(CENTER, CENTER);
    textSize(16);
    fill(30);
    text(badgeText, width / 2, boxY + boxHeight / 2);
  }
  // --- Section Labels ---
  textSize(18);
  fill(0);
  text("Resources", 200, 150);
  text("Learning Tracks", 500, 150);

  // --- Resource Buttons ---
  drawButton(uniResource1Btn, "📜 Digital Skills for Tibetan Youth", [160, 120, 80]);
  drawButton(uniResource2Btn, "🗣️ Voices of Tibet: Journalism", [160, 120, 80]);

  // --- Learning Track Buttons ---
  drawButton(uniTraditionalBtn, "🧘 Traditional & Civic Studies", [85, 107, 47]);
  if (universityTasks.traditional) {
    text("✅", uniTraditionalBtn.x + uniTraditionalBtn.w - 30, uniTraditionalBtn.y + 15);
  }

  drawButton(uniModernBtn, "💻 Modern Disciplines", [70, 130, 180]);
  if (universityTasks.modern) {
    text("✅", uniModernBtn.x + uniModernBtn.w - 30, uniModernBtn.y + 15);
  }

  // --- Exit Button ---
  drawButton(universityExitBtn, "🚪 Exit to Village", [100, 100, 100]);

}
