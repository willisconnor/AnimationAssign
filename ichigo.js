class Ichigo {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("/AnimationAssign/fixed_spritesheet.png"), 2, 196, 64, 48, 3, 0.2);
        
        this.speed = 200;
        this.x = 0;
        this.y = 0;
    };

    update(){
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = 0;


    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

}