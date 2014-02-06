function loadWorld(playerName, worldSpot, worldID, x, y) {
    Lib().load(function () {
        switch (worldID) {
            case 0:
                loadTestWorld(playerName, worldSpot, x, y);
                break;
        }
    });
}

