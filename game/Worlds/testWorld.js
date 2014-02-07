function loadTestWorld(playerName, worldSpot, worldArray, x, y) {
    var widthTiles = 40;
    var heightTiles = 30;
    for (var y = 0; y < heightTiles; y += 1) {
        for (var x = 0; x < widthTiles; x += 1) {
            switch (worldArray[x + y * widthTiles]) {
                case 0:
                    Lib("grassTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/masterTiles.png",
                        size: [200, 250],
                        position: [200 * 1, 250 * 2],
                        speed: 70,
                        frequency: 0,
                        x: x * 200,
                        y: y * 250
                    });
                    break;
                case 1:
                    Lib("waterTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/masterTiles.png",
                        size: [200, 250],
                        position: [200 * 2, 250 * 2],
                        speed: 70,
                        frequency: 0,
                        x: x * 200,
                        y: y * 250
                    });
                    break;
                case 2:
                    Lib("blockTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/masterTiles.png",
                        size: [200, 250],
                        position: [200 * 4, 250 * 1], //6
                        speed: 70,
                        frequency: 0,
                        x: x * 200,
                        y: y * 250
                    });
                    break;
                case 3:
                    Lib("grassTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/masterTiles.png",
                        size: [200, 250],
                        position: [200 * 1, 250 * 2],
                        speed: 70,
                        frequency: 0,
                        x: x * 200,
                        y: y * 250
                    });
                    Lib("grassTile" + (x + y * widthTiles)).hide();
                    Lib("treasureTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/masterTiles.png",
                        size: [200, 250],
                        position: [200 * 7, 250 * 1],
                        speed: 70,
                        frequency: 0,
                        x: x * 200,
                        y: y * 250,
                        hidden: false
                    });
                    break;
                case 4:
                    Lib("houseTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/masterTiles.png",
                        size: [200, 250],
                        position: [200 * 1, 250 * 0],
                        speed: 70,
                        frequency: 0,
                        x: x * 200,
                        y: y * 250
                    });
                    break;
                case 5:
                    Lib("houseTile" + (x + y * widthTiles)).sprite({
                        src: "game/Graphics/Tiles/masterTiles.png",
                        size: [200, 250],
                        position: [200 * 5, 250 * 1],
                        speed: 70,
                        frequency: 0,
                        x: x * 200,
                        y: y * 250
                    });
                    break;
            }
        }
    }
}

