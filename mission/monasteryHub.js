function drawMonasteryHub() {
  if (monasteryBgImage) {
      tint(255, 200); // Apply 80% opacity
      image(monasteryBgImage, 0, 0, width, height);
      noTint();
    } else {
      background(250); // fallback color
    }

  // --- Title ---
  fill(30);
  textAlign(CENTER, TOP);
  textSize(22);
  text("🛕 Welcome to Tsuglak Khang", width / 2, 30);

  // --- Completion Banner ---
  if (monasteryTasks.quizPassed) {
    fill(255, 223, 0);
    rect(width / 2 - 240, 70, 480, 40, 10);
    fill(0);
    textSize(18);
    text("🎉 You have achieved Tibetan Values and knowledge! 🎉", width / 2, 80);
  }

  // --- Section Labels ---
  textAlign(CENTER);
  textSize(18);
  fill(0);
  text("Reflection", 200, 160);
  text("Practice", 540, 160);

  // --- Buttons ---
  drawButton(prayerResourceBtn, "📖 Read Wisdom Scroll", [160, 120, 80]);
  drawButton(prayerPracticeBtn, "🧠 Take Values Quiz", [85, 107, 47]);
  drawButton(monasteryExitBtn, "🚪 Exit to Village", [100, 100, 100]);

  // --- Checkmark (if quiz completed) ---
  if (monasteryTasks.quizPassed) {
    text("✅", prayerPracticeBtn.x + prayerPracticeBtn.w - 30, prayerPracticeBtn.y + 15);
  }
}
function drawMonasteryScroll() {
  const scrollText = `
The Dalai Lama teaches that the foundation of a meaningful life is compassion, inner peace, and responsibility. True happiness comes not from wealth or power, but from a calm mind, kind heart, and connection with others. He emphasizes universal ethics — values like honesty, forgiveness, and nonviolence — that go beyond religion. These human values should be part of everyday education to build a more caring world. His Holiness speaks passionately about caring for the environment, urging us to protect this planet as our only home. Even small actions — like reducing waste or planting a tree — help preserve life for future generations.

He advocates for religious harmony, respecting all faiths and traditions, while also standing strong for the Tibetan people’s right to freedom, identity, and culture.

In all aspects of life — whether resolving conflict, learning in school, or living peacefully with others — the message is the same: act with compassion, think with wisdom, and care for all beings.
  `;

  drawScrollView(scrollText, () => gameState = "monasteryHub", "📜 Wisdom from His Holiness the Dalai Lama");
}


/*
function drawMonasteryScroll() {
  background(245);

  // Draw parchment-style background
  fill(255, 248, 220);
  stroke(160, 120, 80);
  strokeWeight(4);
  rect(60, 60, width - 120, height - 120, 20);
  noStroke();

  // Title
  fill(50, 30, 0);
  textSize(22);
  textAlign(CENTER, TOP);
  text("📜 Wisdom from His Holiness the Dalai Lama", width / 2, 80);

  // Scroll Text (wrapped)
  textSize(16);
  textAlign(LEFT, TOP);
  textLeading(24);  // Ensures p5 respects proper vertical line spacing


  const scrollText = `
    The Dalai Lama teaches that the foundation of a meaningful life is compassion, inner peace, and responsibility. True happiness comes not from wealth or power, but from a calm mind, kind heart, and connection with others. He emphasizes universal ethics — values like honesty, forgiveness, and nonviolence — that go beyond religion. These human values should be part of everyday education to build a more caring world. His Holiness speaks passionately about caring for the environment, urging us to protect this planet as our only home. Even small actions — like reducing waste or planting a tree — help preserve life for future generations.

    He advocates for religious harmony, respecting all faiths and traditions, while also standing strong for the Tibetan people’s right to freedom, identity, and culture.

    In all aspects of life — whether resolving conflict, learning in school, or living peacefully with others — the message is the same: act with compassion, think with wisdom, and care for all beings.
    `;

  textBox(scrollText, 90, 120, width - 180, height - 200);  // Custom wrapped text

  // Close Button
  fill(150, 50, 50);
  rect(width / 2 - 60, height - 80, 120, 40, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text("❌ Close", width / 2, height - 60);
}
*/
function textBox(txt, x, y, boxWidth, boxHeight) {
  let words = txt.split(/\s+/);
  let line = '';
  let lineHeight = 24; // Adjust to avoid overlap
  let ty = y;

  textAlign(LEFT, TOP);
  textSize(16);
  textLeading(lineHeight); // 🟢 Important! Ensures vertical spacing is respected
  fill(30);

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + ' ';
    if (textWidth(testLine) > boxWidth) {
      // Draw the current line
      text(line, x, ty);
      line = words[i] + ' ';
      ty += lineHeight;

      if (ty > y + boxHeight - lineHeight) {
        text("...", x, ty);
        return;
      }
    } else {
      line = testLine;
    }
  }

  // Final line
  text(line, x, ty);
}

