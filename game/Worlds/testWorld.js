function loadTestWorld(playerName, worldSpot, x, y) {

    var array = [
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];

    for (var y = 0; y < 10; y += 1) {
        for (var x = 0; x < 13; x += 1) {

            switch (array[x + y * 13]) {
                case 0:
                    Lib("grassTile" + (x + y * 13)).sprite({
                        src: "Game/Graphics/Tiles/testTiles.png",
                        size: [102, 171],
                        position: [102 * 4, 171 * 4],
                        speed: 70,
                        frequency: 0,
                        x: x * 102,
                        y: y * 121 - 50
                    });
                    break;
                case 1:
                    Lib("waterTile" + (x + y * 13)).sprite({
                        src: "Game/Graphics/Tiles/testTiles.png",
                        size: [102, 171],
                        position: [102 * 2, 171 * 0],
                        speed: 70,
                        frequency: 0,
                        x: x * 102,
                        y: y * 121 - 50
                    });
                    break;
            }
        }
    }
}

