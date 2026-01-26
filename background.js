class Background {
    constructor(game) {
        this.game = game;
        this.backgroundImage = ASSET_MANAGER.getAsset("./background.jpg");
    };

    update() {
        // Background doesn't need to update
    };

    draw(ctx) {
        console.log("Background drawing");
        ctx.drawImage(this.backgroundImage, 0, 0, ctx.canvas.width, ctx.canvas.height);
    };
}
