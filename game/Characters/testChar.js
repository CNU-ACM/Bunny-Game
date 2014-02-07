function loadTestChar(playerName, worldArray, x, y) {
    Lib("testChar").sprite({
        src:"Game/Graphics/Characters/bun.png",
        size:[712,712],
        position:[0, 0],
        speed:70,
        scale:0.125,
        frequency: 13,
        x:x,
        y:y
    });

    Lib("testChar").load(function () {
        Lib("testChar").detach();
        Lib().addInputRule(function () {
            var character = Lib("testChar");
            character.stopAnimation();

            if (Lib().hasInputKey(39)) {
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 2);
                character.setFrames([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                character.reverseAnimation(false);
                character.increaseX();
                character.resumeAnimation();
            }
            if (Lib().hasInputKey(37)) {
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 3);
                character.setFrames([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                character.reverseAnimation(true);
                character.decreaseX();
                character.resumeAnimation();
            }
            if (Lib().hasInputKey(40)) {
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 0);
                character.setFrames([0, 1, 2, 3, 4, 5, 6]);
                character.reverseAnimation(false);
                character.increaseY();
                character.resumeAnimation();
            }
            if (Lib().hasInputKey(38)) {
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 1);
                character.setFrames([0, 1, 2, 3, 4]);
                character.reverseAnimation(false);
                character.decreaseY();
                character.resumeAnimation();
            }

            var tileList = [[0, "speed", 70], [1, "speed", 40], [2, "stop"], [3, "keyInteract", "treasureTile", 32, chestHandle]];
            checkCollisionsBase(worldArray, character, 200, 250, tileList);
        });
    });
}

function chestHandle(x, y) {
    var chest = Lib("treasureTile" + (x + y * 13));
    chest.hidden = true;
    chest.hide();
    Lib("grassTile" + (x + y * 13)).show();
}

