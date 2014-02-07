function loadTestChar(playerName, worldArray, x, y) {
    Lib("testChar").sprite({
        src:"Game/Graphics/Characters/bun.png",
        size:[712,712],
        position:[0, 0],
        speed:100,
        scale:0.125,
        frequency: 13,
        x:x,
        y:y
    });

    Lib("testChar").load(function () {
        socket.on('disconnect',function() {
            Lib("testChar").hide();
        });
        if (x > window.innerWidth * 0.90) {
            Lib("testChar").detach();
            Lib("testChar").setScrollX(x - (window.innerWidth * 0.90) + (window.innerWidth / 2));
            Lib("testChar").setX(Lib("testChar").getNoScrollX() - Lib("testChar").getScrollX());
        }
        if (y > window.innerHeight * 0.90) {
            Lib("testChar").detach();
            Lib("testChar").setScrollY(y - (window.innerHeight * 0.90) + (window.innerHeight / 2));
            Lib("testChar").setY(Lib("testChar").getNoScrollY() - Lib("testChar").getScrollY());
        }

        Lib().addInputRule(function () {
            var character = Lib("testChar");
            character.stopAnimation();

            if (Lib().hasInputKey(39)) {
                if (character.getNoScrollX() > window.innerWidth * 0.90 && character.getX() < (13 * 102) * 0.90) {
                    Lib("testChar").detach();
                    character.increaseScrollX();
                }
                else if (character.getNoScrollX() <= window.innerWidth * 0.90) {
                    character.increaseX();
                }
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 2);
                character.setFrames([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                character.reverseAnimation(false);
                character.resumeAnimation();
            }
            if (Lib().hasInputKey(37)) {
                if (character.getNoScrollX() < 50 && character.getScrollX() > 0) {
                    Lib("testChar").detach();
                    character.decreaseScrollX();
                }
                else if (character.getNoScrollX() >= 0 || character.getScrollX() > 0) {
                    character.decreaseX();
                }
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 3);
                character.setFrames([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                character.reverseAnimation(true);
                character.resumeAnimation();
            }
            if (Lib().hasInputKey(40)) {
                if (character.getNoScrollY() > window.innerHeight * 0.90 && character.getY() < (10 * 121) * 0.90) {
                    Lib("testChar").detach();
                    character.increaseScrollY();
                }
                else if (character.getNoScrollY() <= window.innerHeight * 0.90) {
                    character.increaseY();
                }
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 0);
                character.setFrames([0, 1, 2, 3, 4, 5, 6]);
                character.reverseAnimation(false);
                character.resumeAnimation();
            }
            if (Lib().hasInputKey(38)) {
                if (character.getNoScrollY() < 50 && character.getScrollY() > 0) {
                    Lib("testChar").detach();
                    character.decreaseScrollY();
                }
                else if (character.getNoScrollY() >= 0 || character.getScrollY() > 0) {
                    character.decreaseY();
                }
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 1);
                character.setFrames([0, 1, 2, 3, 4]);
                character.reverseAnimation(false);
                character.resumeAnimation();
            }

            var tileList = [[0, "speed", 100], [1, "speed", 40], [2, "stop"], [3, "keyInteract", "treasureTile", 32, chestHandle]];
            checkCollisionsBase(worldArray, character, 102, 121, tileList);
        });
    });
}

function chestHandle(x, y) {
    var chest = Lib("treasureTile" + (x + y * 13));
    chest.hidden = true;
    chest.hide();
    Lib("grassTile" + (x + y * 13)).show();
}

