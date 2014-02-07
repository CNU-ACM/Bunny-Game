function loadTestWorld(playerName, worldSpot, worldArray, x, y) {
    var widthTiles = 40;
    var heightTiles = 30;
    for (var y = 0; y < heightTiles; y += 1) {
        for (var x = 0; x < widthTiles; x += 1) {
            switch (worldArray[x + y * widthTiles]) {
                case 0:
                    Lib("grassTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/testTiles.png",
                        size: [102, 171],
                        position: [102 * 4, 171 * 4],
                        speed: 70,
                        frequency: 0,
                        x: x * 102,
                        y: y * 121 - 50
                    });
                    break;
                case 1:
                    Lib("waterTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/testTiles.png",
                        size: [102, 171],
                        position: [102 * 2, 171 * 0],
                        speed: 70,
                        frequency: 0,
                        x: x * 102,
                        y: y * 121 - 50
                    });
                    break;
                case 2:
                    Lib("blockTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/testTiles.png",
                        size: [102, 171],
                        position: [102 * 4, 171 * 0],
                        speed: 70,
                        frequency: 0,
                        x: x * 102,
                        y: y * 121 - 50
                    });
                    break;
                case 3:
                    Lib("grassTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/testTiles.png",
                        size: [102, 171],
                        position: [102 * 4, 171 * 4],
                        speed: 70,
                        frequency: 0,
                        x: x * 102,
                        y: y * 121 - 50
                    });
                    Lib("grassTile" + (x + y * widthTiles)).hide();
                    Lib("treasureTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/testTiles.png",
                        size: [102, 171],
                        position: [102 * 2, 171 * 4],
                        speed: 70,
                        frequency: 0,
                        x: x * 102,
                        y: y * 121 - 50,
                        hidden: false
                    });
                    break;
            }
        }
    }
}

