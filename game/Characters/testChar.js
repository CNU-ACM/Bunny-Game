function loadTestChar(playerName, worldArray, x, y) {
    Lib("testChar").sprite({
        src:"Game/Graphics/Characters/testChar.png",
        size:[50,100],
        position:[0,0],
        speed:70,
        frequency: 13,
        x:x,
        y:y
    });

    Lib("testChar").load(function () {
        Lib().addInputRule(function () {
            var character = Lib("testChar");
            character.stopAnimation();

            if (Lib().hasInputKey(39)) {
                character.setSpriteX(0);
                character.setSpriteY(100);
                character.reverseAnimation(false);
                character.increaseX();
                character.resumeAnimation();
            }
            if (Lib().hasInputKey(37)) {
                character.setSpriteX(0);
                character.setSpriteY(0);
                character.reverseAnimation(true);
                character.decreaseX();
                character.resumeAnimation();
            }
            if (Lib().hasInputKey(40)) {
                character.setSpriteX(0);
                character.setSpriteY(200);
                character.reverseAnimation(false);
                character.increaseY();
                character.resumeAnimation();
            }
            if (Lib().hasInputKey(38)) {
                character.setSpriteX(0);
                character.setSpriteY(300);
                character.reverseAnimation(false);
                character.decreaseY();
                character.resumeAnimation();
            }

            var x = (character.getX() + character.getWidth() / 2) / 102;
            var y = (character.getY() + 122) / 171;
            x = Math.floor(x);
            y = Math.floor(y);

            if (worldArray[x + y * 13] == 0) {
                character.setSpeed(70);
            }
            if (worldArray[x + y * 13] == 1) {
                character.setSpeed(40);
            }
        });
    });
}
