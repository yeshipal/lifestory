function drawCTAPosterTask() {
  background(255, 245, 230);

  // --- Title ---
  fill(20);
  textAlign(CENTER, TOP);
  textSize(22);
  text("🎨 Create a Digital Advocacy Poster", width / 2, 20);

  // === Slogan Selection ===
  textSize(16);
  fill(30);
  text("Choose a slogan:", width / 2, 60);

  const sloganXStart = 100;
  const sloganYStart = 90;
  const sloganSpacingY = 50;
  const colGap = 40;

  for (let i = 0; i < sloganButtons.length; i++) {
    const row = Math.floor(i / 2);
    const col = i % 2;

    const label = sloganButtons[i].label;
    const btnW = textWidth(label) + 30;
    const btnH = 40;

    // Calculate position based on dynamic width
    let xOffset = sloganXStart;
    if (col === 1) {
      const prevW = textWidth(sloganButtons[i - 1].label) + 30;
      xOffset = sloganXStart + prevW + colGap;
    }

    const btn = sloganButtons[i];
    btn.x = xOffset;
    btn.y = sloganYStart + row * sloganSpacingY;
    btn.w = btnW;
    btn.h = btnH;

    fill(posterTask.selectedSlogan === i ? "#2e7d32" : "#555");
    rect(btn.x, btn.y, btn.w, btn.h, 8);
    fill(255);
    textSize(13);
    textAlign(CENTER, CENTER);
    text(label, btn.x + btn.w / 2, btn.y + btn.h / 2);
  }

  // === Image Selection ===
  fill(30);
  textSize(16);
  textAlign(CENTER, TOP);
  text("Choose an image:", width / 2, 240);

  const imgXStart = 100;
  const imgYStart = 270;
  const imgSpacingX = 200;
  const imgSpacingY = 110;

  for (let i = 0; i < imageButtons.length; i++) {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const btn = imageButtons[i];
    const img = posterImages[imageOptions[i].key];

    btn.x = imgXStart + col * imgSpacingX;
    btn.y = imgYStart + row * imgSpacingY;

    // Border highlight
    stroke(posterTask.selectedImage === i ? "#1565c0" : "#aaa");
    strokeWeight(3);
    noFill();
    rect(btn.x - 2, btn.y - 2, btn.w + 4, btn.h + 4, 8);
    noStroke();

    // Thumbnail
    if (img) {
      image(img, btn.x, btn.y, btn.w, btn.h);
    } else {
      fill(200);
      rect(btn.x, btn.y, btn.w, btn.h, 8);
    }

    // Label
    fill(30);
    textSize(12);
    textAlign(CENTER, TOP);
    text(imageOptions[i].label, btn.x + btn.w / 2, btn.y + btn.h + 5);
  }

  // === Finalize Button ===
  posterFinalizeBtn.x = 100;
  posterFinalizeBtn.y = 350;
  drawButton(posterFinalizeBtn, "✅ Finalize Poster");

  // === Poster Preview ===
  if (posterTask.selectedSlogan !== null && posterTask.selectedImage !== null) {
    const imgKey = imageOptions[posterTask.selectedImage].key;
    const previewImg = posterImages[imgKey];

    const previewX = width / 2;
    const previewY = 350;
    const previewW = 240;
    const previewH = 150;

    imageMode(CORNER);
    image(previewImg, previewX, previewY, previewW, previewH);
    const slogan = sloganOptions[posterTask.selectedSlogan];
    // Overlay Slogan
    fill(255, 230);
    rect(previewX, previewY + 100, previewW, 40, 8);
    fill("#d32f2f");
    textSize(16);
    textAlign(CENTER, CENTER);
    text(slogan, previewX + previewW / 2, previewY + previewH - 20);
  }
}
