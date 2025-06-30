const letterReferenceScroll = `
📜 CONTEXT: DEGE ANTI-DAM PROTESTS (2024)

- Two senior Tibetan monks were sentenced for opposing a dam project in Dege, Kham, eastern Tibet.
- The dam would destroy six historic monasteries and displace entire Tibetan communities.
- Chinese police cracked down violently on peaceful protests.
- 78-year-old Khentrul Jigme Phuntsok Rinpoche is now in critical condition.
- This is about more than land — it's about cultural survival and spiritual freedom.

👉 Your voice matters. Use this info to write a letter demanding justice and action.
`;

const letterTemplate = [
  "Dear United Nations Human Rights Council,",
  "",
  "I am [BLANK_1], a Tibetan student in exile, deeply concerned about the events unfolding in Dege, Tibet.",
  "The sentencing of monastic leaders like [BLANK_2] for defending their land and monasteries is a violation of our basic rights.",
  "The planned dam project threatens to destroy [BLANK_3], which are not only buildings but symbols of Tibetan identity and faith.",
  "We urge international bodies to [BLANK_4], and help hold the Chinese government accountable.",
  "",
  "Sincerely,",
  "[Your Name]"
];


function drawCTALetterTask() {
  background(250);
  textAlign(LEFT, TOP);
  textSize(18);
  fill(30);
  text("📝 Speak for Tibetans Inside Tibet", 30, 20);

  textSize(14);
  fill(0);

  let y = 60;
  for (let i = 0; i < letterTemplate.length; i++) {
    let line = letterTemplate[i];
    console.log("Rendering line:", letterTemplate[i]);

    if (line.includes("[BLANK_")) {
      const parts = line.split(/\[BLANK_(\d)\]/g); // splits into text and index
      let x = 30;
      for (let j = 0; j < parts.length; j++) {
        if (j % 2 === 0) {
          // Regular text
          fill(0);
          text(parts[j], x, y);
          x += textWidth(parts[j]);
        } else {
          const blankIndex = parseInt(parts[j]) - 1;
          const input = ctaLetterTask.inputs[blankIndex] || "";

          fill(255);
          stroke(180);
          rect(x, y - 2, 160, 20, 4);
          fill(0);
          noStroke();
          text(input, x + 4, y + 2);
          x += 164; // Advance position
        }
      }
    } else if (line === "[Your Name]") {
      fill(0);
      text("Tibetan Youth", 30, y);  // fixed placeholder name
    } else {
      fill(0);
      text(line, 30, y);
    }
    y += 28;
  }

  // Scroll on right
  drawScrollView(letterReferenceScroll, width - 260, 60, 220, 250);

  // Submit button
  drawButton({ x: width / 2 - 80, y: 340, w: 160, h: 40 }, "📬 Submit Letter");
}
function handleCTALetterClick() {
  const submitBtn = { x: width / 2 - 80, y: 340, w: 160, h: 40 };

  if (inside(submitBtn)) {
    if (ctaLetterTask.inputs.every(text => text.trim() !== "")) {
      alert("✅ Your letter has been submitted. Thank you for speaking up!");
      ctaTasks.letterSubmitted = true;
      gameState = "ctaHub";

      // Check if CTA mission is now complete
      if (ctaTasks.posterCreated && ctaTasks.letterSubmitted) {
        ctaTasks.complete = true;
      }
    } else {
      alert("⚠️ Please fill in all the blanks.");
    }
  }
}


