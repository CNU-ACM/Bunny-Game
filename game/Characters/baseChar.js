function loadCharacter(playerName, characterID, worldArray, x, y) {
    switch (characterID) {
        case 0:
            loadTestChar(playerName, worldArray, x, y);
            break;
    }
}

function checkCollisionsBase(worldArray, character, tileWidth, tileHeight, tileList) {
    var x = (character.getX() + character.getWidth() / 2) / tileWidth;
    var y = (character.getY() + (character.getHeight() * 0.8)) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    var widthTiles = 40;

    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * widthTiles] == tileList[i][0] && tileList[i][1] == "speed") {
            character.setSpeed(tileList[i][2]);
        }
    }

    // Top side collisions
    x = (character.getX() + character.getWidth() / 2) / tileWidth;
    y = (character.getY() + (character.getHeight() * 0.5)) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * widthTiles] == tileList[i][0]) {
            switch (tileList[i][1]) {
                case "stop":
                    character.increaseY();
                    break;
                case "keyInteract":
                    if (!Lib(tileList[i][2] + (x + y * widthTiles)).hidden) {
                        character.increaseY();
                    }
                    break;
            }
        }
    }

    // Left side collisions
    x = (character.getX()) / tileWidth;
    y = (character.getY() + character.getHeight() / 2) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * widthTiles] == tileList[i][0]) {
            switch (tileList[i][1]) {
                case "stop":
                    character.increaseX();
                    break;
                case "keyInteract":
                    if (!Lib(tileList[i][2] + (x + y * widthTiles)).hidden) {
                        character.increaseX();
                    }
                    break;
            }
        }
    }

    // Right side collisions
    x = (character.getX() + character.getWidth()) / tileWidth;
    y = (character.getY() + character.getHeight() / 2) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * widthTiles] == tileList[i][0]) {
            switch (tileList[i][1]) {
                case "stop":
                    character.decreaseX();
                    break;
                case "keyInteract":
                    if (!Lib(tileList[i][2] + (x + y * widthTiles)).hidden) {
                        character.decreaseX();
                    }
                    break;
            }
        }
    }

    // Bottom side collisions
    x = (character.getX() + character.getWidth() / 2) / tileWidth;
    y = (character.getY() + character.getHeight()) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * widthTiles] == tileList[i][0]) {
            switch (tileList[i][1]) {
                case "stop":
                    character.decreaseY();
                    break;
                case "keyInteract":
                    if (!Lib(tileList[i][2] + (x + y * widthTiles)).hidden) {
                        character.decreaseY();
                    }
                    break;
            }
        }
    }

    // Interaction Top side collisions
    x = (character.getX() + character.getWidth() / 2) / tileWidth;
    y = (character.getY() + (character.getHeight() * 0.4)) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * widthTiles] == tileList[i][0]) {
            switch (tileList[i][1]) {
                case "keyInteract":
                    if (Lib().hasInputKey(tileList[i][3]) && !Lib(tileList[i][2] + (x + y * widthTiles)).hidden) {
                        tileList[i][4](x, y);
                    }
                    break;
            }
        }
    }

    // Interaction Left side collisions
    x = (character.getX() - (character.getWidth() * 0.1)) / tileWidth;
    y = (character.getY() + character.getHeight() / 2) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * widthTiles] == tileList[i][0]) {
            switch (tileList[i][1]) {
                case "keyInteract":
                    if (Lib().hasInputKey(tileList[i][3]) && !Lib(tileList[i][2] + (x + y * widthTiles)).hidden) {
                        tileList[i][4](x, y);
                    }
                    break;
            }
        }
    }

    // Interaction Right side collisions
    x = (character.getX() + character.getWidth() + (character.getWidth() * 0.1)) / tileWidth;
    y = (character.getY() + character.getHeight() / 2) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * widthTiles] == tileList[i][0]) {
            switch (tileList[i][1]) {
                case "keyInteract":
                    if (Lib().hasInputKey(tileList[i][3]) && !Lib(tileList[i][2] + (x + y * widthTiles)).hidden) {
                        tileList[i][4](x, y);
                    }
                    break;
            }
        }
    }

    // Interaction Bottom side collisions
    x = (character.getX() + character.getWidth() / 2) / tileWidth;
    y = (character.getY() + character.getHeight() + (character.getHeight() * 0.1)) / tileHeight;
    x = Math.floor(x);
    y = Math.floor(y);
    for (var i = 0; i < tileList.length; i += 1) {
        if (worldArray[x + y * widthTiles] == tileList[i][0]) {
            switch (tileList[i][1]) {
                case "keyInteract":
                    if (Lib().hasInputKey(tileList[i][3]) && !Lib(tileList[i][2] + (x + y * widthTiles)).hidden) {
                        tileList[i][4](x, y);
                    }
                    break;
            }
        }
    }
}
