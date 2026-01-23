class Ichigo {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("/AnimationAssign/fixed_spritesheet.png"), 0, 193, 58, 48, 3, 0.2);
    };

    update(){


    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, 100, 100);
    };

}