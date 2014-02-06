function loadCharacter(playerName, characterID, x, y) {
    Lib().load(function () {
        switch (characterID) {
            case 0:
                loadTestChar(playerName, x, y);
                break;
        }
    });
}

