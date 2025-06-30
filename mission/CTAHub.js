const ctaMissionBtn1 = { x: 0, y: 0, w: 300, h: 40 };
const ctaExitBtn = { x: 0, y: 0, w: 180, h: 40 };

function drawCTAHub() {
  if (ctaBgImage) {
    tint(255, 200); // Apply 80% opacity
    image(ctaBgImage, 0, 0, width, height);
    noTint();
  } else {
    background(250); // fallback color
  }

  // --- Title ---
  textAlign(CENTER, TOP);
  textSize(22);
  fill(30);
  text("🏛️ Central Tibetan Administration (CTA)", width / 2, 30);

  // --- Info Text ---
  textSize(16);
  textAlign(CENTER, TOP);
  const infoY = 70;
  text(
    "You now represent the voice of Tibetans in exile.\nTake part in key missions to support your people worldwide.",
    width / 2, infoY
  );

  let currentY = infoY + 60; // space below info

  // --- Badge if complete ---
  if (ctaComplete) {
    const badgeW = 280;
    const badgeH = 80;
    const badgeX = width / 2 - badgeW / 2;
    const badgeY = currentY;

    // Badge background
    fill(200, 255, 200, 220); // translucent green
    noStroke();
    rect(badgeX, badgeY, badgeW, badgeH, 12);

    // Emoji and Message
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255, 140, 0);
    text("🕊️", width / 2, badgeY + 25);

    textSize(13);
    fill(30);
    text("You’ve become a valuable member\nof the Tibetan community!", width / 2, badgeY + 60);

    currentY += badgeH + 30; // move below badge
  }

  // --- Poster Task Button ---
  ctaMissionBtn1.x = width / 2 - ctaMissionBtn1.w / 2;
  ctaMissionBtn1.y = currentY;
  drawButton(ctaMissionBtn1, "🌐 Campaign for Tibet's Freedom");
  currentY += 60;

  // --- Exit Button ---
  ctaExitBtn.x = width / 2 - ctaExitBtn.w / 2;
  ctaExitBtn.y = currentY + 20;
  drawButton(ctaExitBtn, "🚪 Exit to Village");
}
