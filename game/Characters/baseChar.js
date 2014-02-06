function loadCharacter(playerName, characterID, worldArray, x, y) {
    switch (characterID) {
        case 0:
            loadTestChar(playerName, worldArray, x, y);
            break;
    }
}

function checkCollisionsBase(worldArray, character, tileWidth, tileHeight, tileList) {
    var x = (character.getX() + character.getWidth() / 2) / tileWidth;
    var y = (character.getY() + 80) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);

    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * 13] == tileList[i][0] && tileList[i][1] == "speed") {
            character.setSpeed(tileList[i][2]);
        }
    }

    // Top side collisions
    x = (character.getX() + character.getWidth() / 2) / tileWidth;
    y = (character.getY() + 50) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * 13] == tileList[i][0] && tileList[i][1] == "stop") {
            character.increaseY();
        }
    }

    // Left side collisions
    x = (character.getX()) / tileWidth;
    y = (character.getY() + character.getHeight() / 2) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * 13] == tileList[i][0] && tileList[i][1] == "stop") {
            character.increaseX();
        }
    }

    // Right side collisions
    x = (character.getX() + character.getWidth()) / tileWidth;
    y = (character.getY() + character.getHeight() / 2) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * 13] == tileList[i][0] && tileList[i][1] == "stop") {
            character.decreaseX();
        }
    }

    // Bottom side collisions
    x = (character.getX() + character.getWidth() / 2) / tileWidth;
    y = (character.getY() + character.getHeight()) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * 13] == tileList[i][0] && tileList[i][1] == "stop") {
            character.decreaseY();
        }
    }
}
