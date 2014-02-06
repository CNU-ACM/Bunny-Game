function loadTestChar(playerName, worldArray, x, y) {
    Lib("testChar").sprite({
        src:"Game/Graphics/Characters/testChar.png",
        size:[50,100],
        position:[0,0],
        speed:70,
        scale:4,
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

            var tileList = [[0, "speed", 70], [1, "speed", 40], [2, "stop"]];
            checkCollisionsBase(worldArray, character, 102, 121, tileList);
        });
    });
}
