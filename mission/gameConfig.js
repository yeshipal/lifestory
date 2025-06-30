// --- Game Layout ---
const tileSize = 64;
const mapRows = 8;
const mapCols = 12;

let showStartScreen = true;
let showWelcomePopup = true;
let welcomePopupTimer = 0;
let hasShownWelcomePopup = false;


// --- Game State Control ---
let gameState = "map"; // Possible states: "map", "schoolPrompt", "schoolHub", "tibetanQuiz", "csQuiz"
let wasInSchool = false;

// --- Player and Character ---
let playerTile = { row: 1, col: 0 };
let character = null;

// --- Terrain & Map ---
let terrainMap = [];
const terrainTypes = {
  TREE: 0,
  MOUNTAIN: 1,
  PATH_VERTICAL: 2,
  PATH_HORIZONTAL: 3,
  BUILDING_SCHOOL: 4,
  BUILDING_COMMUNITY: 5,
  BUILDING_GOVT: 6,
  BUILDING_UNI: 7,
  BUILDING_MONA: 8,
  Q1_PATH: 9,
  Q2_PATH: 10,
  Q3_PATH: 11,
  Q4_PATH: 12,
  T_PATH: 13,
  T1_PATH: 14
};
const terrainImages = {}; // Will be filled in preload()

// --- School Quiz Status ---
const schoolTests = {
  tibetan: false,
  cs: false
};
let pendingHubState = null;

// --- UI Buttons ---

// School entry prompt buttons
const yesBtn = { x: 200, y: 300, w: 120, h: 40 };
const noBtn = { x: 360, y: 300, w: 120, h: 40 };

// School hub buttons
const resourceBtn = { x: 60, y: 200, w: 280, h: 50 };
const tibetanTestBtn = { x: 400, y: 200, w: 280, h: 50 };
const csTestBtn = { x: 400, y: 270, w: 280, h: 50 };
const exitBtn = { x: 400, y: 350, w: 280, h: 50 };
  // Monastery hub 

const monasteryTasks = { quizPassed: false };

const prayerResourceBtn = { x: 60, y: 200, w: 280, h: 50 };
const prayerPracticeBtn = { x: 400, y: 200, w: 280, h: 50 };
const monasteryExitBtn  = { x: 400, y: 300, w: 280, h: 50 };

let universityTasks = {
  traditional: false,
  modern: false
};
let universityComplete = false;
// University Buttons
const uniTraditionalBtn = { x: 360, y: 200, w: 280, h: 40 };
const uniModernBtn = { x: 360, y: 260, w: 280, h: 40 };
const uniResource1Btn = { x: 60, y: 200, w: 280, h: 40 };
const uniResource2Btn = { x: 60, y: 260, w: 280, h: 40 };
const universityExitBtn = { x: 210, y: 380, w: 280, h: 40 };


//Community Buttons
let communityTasks = {
  quizPassed: false
};

const communityResourceBtn1 = { x: 120, y: 200, w: 260, h: 40 };
const communityResourceBtn2 = { x: 120, y: 260, w: 260, h: 40 };
const communityContributeBtn = { x: 420, y: 200, w: 260, h: 40 };
const communityExitBtn = { x: 310, y: 320, w: 180, h: 40 };

let communityComplete = false;
function inside(btn) {
  return mouseX > btn.x && mouseX < btn.x + btn.w &&
         mouseY > btn.y && mouseY < btn.y + btn.h;
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// CTA

let ctaComplete = false;
let ctaBadgeEarned = false;

// === Poster Slogan Options ===
const sloganOptions = [
  "Tibetans Need Freedom Like All",
  "Freedom Is a Whisper in Tibet",
  "I Speak for Tibetans in Tibet",
  "Human Rights is a Basic Need",
  "Long Live the Dalai Lama"
];

// === Finalize Button ===
const posterFinalizeBtn = { x: 220, y: 320, w: 160, h: 40 };

// === Poster Task State ===
let posterTask = {
  selectedSlogan: null,
  selectedImage: null,   // ✅ Replace selectedIcon with selectedImage
  finalized: false
};

// === Slogan Buttons (UI Selection) ===
const sloganButtons = sloganOptions.map((slogan, i) => {
  return {
    label: slogan,
    x: 80 + i * 120,
    y: 90,
    w: 100,
    h: 36
  };
});

// === Image Choices (Posters with image thumbnails) ===
// These images should be preloaded into `posterImages` array in preload()
const imageChoices = [
  { label: "freedom-tibet.png", img: null },
  { label: "potala.png", img: null },
  { label: "tibetan-flag.png", img: null }
];

const imageOptions = [
  { label: "Freedom", key: "freedom" },
  { label: "Potala", key: "potala" },
  { label: "Flag", key: "flag" }
];

let imageButtons = [];  // To be filled dynamically
let posterImages = {};  // Loaded in preload


// Scroll View //

let currentScrollTitle = "";
let currentScrollContent = [];
let scrollCloseButton = null;
let scrollCloseCallback = null;

function drawScrollView(textContent, backCallback, title = "📜 Scroll View") {
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
  text(title, width / 2, 80);

  // Scroll Text
  textSize(16);
  textAlign(LEFT, TOP);
  textLeading(24);
  textBox(textContent, 90, 120, width - 180, height - 200);

  // Close Button
  fill(150, 50, 50);
  rect(width / 2 - 60, height - 80, 120, 40, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  text("❌ Close", width / 2, height - 60);

  // Handle click on close button
  if (mouseIsPressed &&
      mouseX > width / 2 - 60 &&
      mouseX < width / 2 + 60 &&
      mouseY > height - 80 &&
      mouseY < height - 40) {
    backCallback();
  }
}
