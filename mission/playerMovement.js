/**
 * Handles player movement based on arrow key inputs.
 * Called from `keyPressed()` in the main game loop.
 * @param {number} keyCode The key code from the keyboard.
 */
function handleMovementKey(keyCode) {
  if (gameState !== "map") return;

  let newRow = playerTile.row;
  let newCol = playerTile.col;

  if (keyCode === UP_ARROW) newRow--;
  else if (keyCode === DOWN_ARROW) newRow++;
  else if (keyCode === LEFT_ARROW) newCol--;
  else if (keyCode === RIGHT_ARROW) newCol++;

  // Check boundaries
  if (newRow < 0 || newRow >= mapRows || newCol < 0 || newCol >= mapCols) return;

  // Prevent crossing between overlapping building tiles (e.g., 2x2 buildings)
  const currentOnSchool = isOnBuilding(playerTile.row, playerTile.col, 1, 5);
  const nextOnSchool = isOnBuilding(newRow, newCol, 1, 5);

  const currentOnMonastery = isOnBuilding(playerTile.row, playerTile.col, 4, 3);
  const nextOnMonastery = isOnBuilding(newRow, newCol, 4, 3);

  if ((currentOnSchool && nextOnSchool) || (currentOnMonastery && nextOnMonastery)) return;


  const nextTile = terrainMap[newRow][newCol];

  const walkableTiles = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, -1];

  if (walkableTiles.includes(nextTile)) {
    playerTile.row = newRow;
    playerTile.col = newCol;

    // ✅ Only play move sound on real move
    if (moveSound && moveSound.isLoaded()) {
      moveSound.play();
    }

    checkCurrentTile();
  }
}

/**
 * Checks if the tile at (row, col) is part of a 2x2 building.
 * This function is parameterized so it can work for any building.
 * @param {number} row
 * @param {number} col
 * @param {number} topRow Top-left row of the 2x2 building
 * @param {number} leftCol Top-left column of the 2x2 building
 * @returns {boolean}
 */
function isOnBuilding(row, col, topRow, leftCol) {
  return (
    (row === topRow && col === leftCol) ||
    (row === topRow && col === leftCol + 1) ||
    (row === topRow + 1 && col === leftCol) ||
    (row === topRow + 1 && col === leftCol + 1)
  );
}

/**
 * Called after player movement to handle interaction logic.
 * Currently only checks for school tile entry.
 */
function checkCurrentTile() {
  const isInSchool = isOnBuilding(playerTile.row, playerTile.col, 1, 5);
  const isInMonastery = isOnBuilding(playerTile.row, playerTile.col, 4, 3);
  const isInUniversity = isOnBuilding(playerTile.row, playerTile.col, 6, 7);
  const isInCommunity = isOnBuilding(playerTile.row, playerTile.col, 2, 10); // ✅ NEW
  const isInCTA = isOnBuilding(playerTile.row, playerTile.col, 6, 0); // adjust row/col if different

  const enteredBuilding = isInSchool || isInMonastery || isInUniversity || isInCommunity || isInCTA;

  // Stop music if newly entered a building
  if (enteredBuilding && !wasInSchool && startMusic && startMusic.isPlaying()) {
    startMusic.stop();
  }
  // Resume music if exited all buildings
  if (!enteredBuilding && wasInSchool && startMusic && !startMusic.isPlaying()) {
    buildingMusic.stop();
    startMusic.loop();
  }
  // Trigger school prompt
  if (isInSchool && !wasInSchool) {
    gameState = "schoolPrompt";
  }
  // Trigger monastery prompt
  else if (isInMonastery && !wasInSchool) {
    gameState = "monasteryPrompt";
  }
  // Trigger university prompt
  else if (isInUniversity && !wasInSchool) {
    gameState = "universityPrompt";
  }
  // ✅ Trigger community prompt
  else if (isInCommunity && !wasInSchool) {
    gameState = "communityPrompt";
  }
  // Trigger CTA prompt
  else if (isInCTA && !wasInSchool) {
    const allDone = schoolTests.tibetan && schoolTests.cs && monasteryTasks.quizPassed && universityComplete && communityTasks.quizPassed;

    if (allDone) {
      gameState = "ctaPrompt";
    } else {
      gameState = "ctaNotReadyPrompt";
    }
  }
  // Update state
  wasInSchool = enteredBuilding;
}


