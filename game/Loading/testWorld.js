function loadTestWorld(playerName, worldSpot, x, y) {
    Lib("guy").sprite({
        src:"libjs/graphics/guy2.png",
        size:[50,100],
        position:[x,y],
        speed:70,
        frequency:13,
        x:'center',
        y: 'center'
    });

    Lib().load(function () {
        Lib().addInputRule(function () {
            var character = Lib("guy");
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
        });

        var loadingCanvas = document.getElementById("loading-canvas");
        var gameCanvas = document.getElementById("game-canvas");
        loadingCanvas.style.visibility = "hidden";
        gameCanvas.style.visibility = "visible";
    });
}
