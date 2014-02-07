function loadTestChar(playerName, worldArray, x, y) {
    Lib("testChar").sprite({
        src:"game/Graphics/Characters/bun.png",
        size:[712,712],
        position:[0, 0],
        speed:100,
        scale:0.25,
        frequency: 13,
        x:x,
        y:y
    });

    Lib("testChar").load(function () {
        socket.on('disconnect', function () {
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

        var isClicked = false;
        var prio = -1;

        window.addEventListener('mousdown', function() {
            isClicked = true;
            var dirX = -this.getNoScrollX() + window.event.clientX;
            var dirY = -this.getNoScrollX() + window.event.clientY;

            if (dirX > 0) {
                Lib().addInputKey(39);
            }
            else if (dirX < 0) {
                Lib().addInputKey(37);
            }

            if (dirY > 0) {
                Lib().addInputKey(40);
            }
            else if (dirY < 0) {
                Lib().addInputKey(38);
            }

             var a = Math.abs(dirX) - Math.abs(dirY);

             if(a > 0)
             {
                prio = 1;
            }
            else if(a < 0)
            {
                prio = 0;
            }
        });

        window.addEventListener('mouseup',function() {
            isClicked = false;
            prio    = -1;
            Lib().removeInputKey(39);
            Lib().removeInputKey(37);
            Lib().removeInputKey(40);
            Lib().removeInputKey(38);
        });
        // Lib("testChar").unclick(function() {
            
        // });

        Lib().addInputRule(function () {
            var character = Lib("testChar");
            character.stopAnimation();

            var widthTiles = 40;
            var heightTiles = 30 - 1;

            if (Lib().hasInputKey(39)) {
                if (character.getNoScrollX() > window.innerWidth * 0.90 && character.getX() < (widthTiles * 200) - character.getWidth() - (character.getWidth() * 0.5)) {
                    Lib("testChar").detach();
                    character.increaseScrollX();
                }
                else if (character.getNoScrollX() <= window.innerWidth - character.getWidth()) {
                    character.increaseX();
                }
                if(prio == 1 || prio    == -1)
                {
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 2);
                character.setFrames([1, 2, 3, 4, 5, 6, 7]);
                character.reverseAnimation(false);
                character.resumeAnimation();
            }
            }
            if (Lib().hasInputKey(37)) {
                if (character.getNoScrollX() < 50 && character.getScrollX() > 0) {
                    Lib("testChar").detach();
                    character.decreaseScrollX();
                }
                else if (character.getNoScrollX() >= 0 || character.getScrollX() > 0) {
                    character.decreaseX();
                }
                if(prio == 1 || prio    == -1)
                {
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 3);
                character.reverseAnimation(true);
                character.setFrames([3, 4, 5, 6, 7, 8, 9]);
                character.resumeAnimation();
            }
            }
            if (Lib().hasInputKey(40)) {
                // console.log(character.getNoScrollY());
                if (character.getNoScrollY() > window.innerHeight * 0.90 - character.getHeight() && character.getY() < (heightTiles * 250) - character.getHeight() * 0.5) {
                    Lib("testChar").detach();
                    character.increaseScrollY();
                }
                else if (character.getNoScrollY() <= window.innerHeight - character.getHeight()) {
                    character.increaseY();
                }
                if(prio == 0 || prio    == -1)
                {
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 0);
                character.setFrames([0, 1, 2, 3, 4, 5, 6]);
                character.reverseAnimation(false);
                character.resumeAnimation();
            }
            }
            if (Lib().hasInputKey(38)) {
                if (character.getNoScrollY() < 50 && character.getScrollY() > 0) {
                    Lib("testChar").detach();
                    character.decreaseScrollY();
                }
                else if (character.getNoScrollY() >= 0 || character.getScrollY() > 0) {
                    character.decreaseY();
                }
                if(prio == 0 || prio    == -1)
                {
                character.setSpriteX(712 * 0);
                character.setSpriteY(712 * 1);
                character.setFrames([0, 1, 2, 3, 4]);
                character.reverseAnimation(false);
                character.resumeAnimation();
            }
            }

            var tileList = [[0, "speed", 150], [1, "speed", 80], [2, "stop"], [3, "keyInteract", "treasureTile", 32, chestHandle],
            [4, "keyInteract", "houseTile", 32, houseHandle], [5, "keyInteract", "houseTile", 32, houseHandle]];
            checkCollisionsBase(worldArray, character, 200, 250, tileList);
        });
    });
}

function houseHandle(x, y) {
    console.log("testing");
    homeImage();
}

function chestHandle(x, y) {
    var widthTiles = 40;
    var chest = Lib("treasureTile" + (x + y * widthTiles));
    chest.hidden = true;
    chest.hide();
    Lib("grassTile" + (x + y * widthTiles)).show();
}

