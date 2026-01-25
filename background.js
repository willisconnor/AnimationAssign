class Background {
    constructor(game) {
        this.game = game;
        this.backgroundImage = ASSET_MANAGER.getAsset("/AnimationAssign/background.jpg");
    };

    update() {
        // Background doesn't need to update
    };

    draw(ctx) {
        ctx.drawImage(this.backgroundImage, 0, 0, ctx.canvas.width, ctx.canvas.height);
    };
}
