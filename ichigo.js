class Ichigo {
    constructor(game) {
        this.game = game;
        this.walkAnimator = new Animator(ASSET_MANAGER.getAsset("/AnimationAssign/fixed_spritesheet.png"), 2, 192, 64, 52, 3, 0.2);
        this.idleAnimator = new Animator(ASSET_MANAGER.getAsset("/AnimationAssign/fixed_spritesheet.png"), 0, 107, 60, 64, 2, 0.2);
        this.slashAnimator = new Animator(ASSET_MANAGER.getAsset("/AnimationAssign/fixed_spritesheet.png"), 0, 466, 88, 89, 5, 1, false);
        
        this.speed = 200;
        this.x = 400;
        this.y = 500;
        this.direction = 1; // 1 for right, -1 for left
        this.isMoving = false;
        this.isSlashing = false;
    };

    update(){
        // If slashing, don't allow movement
        if (this.isSlashing) {
            if (this.slashAnimator.isDone()) {
                this.isSlashing = false;
                this.slashAnimator.elapsedTime = 0;
            }
        } else {
            const moveLeft = this.game.keys['a'] || this.game.keys['ArrowLeft'];
            const moveRight = this.game.keys['d'] || this.game.keys['ArrowRight'];

            this.isMoving = false;

            if (moveLeft && !moveRight) {
                this.x -= this.speed * this.game.clockTick;
                this.direction = -1;
                this.isMoving = true;
            } else if (moveRight && !moveLeft) {
                this.x += this.speed * this.game.clockTick;
                this.direction = 1;
                this.isMoving = true;
            }

            // Keep Ichigo on screen
            if (this.x < 0) this.x = 0;
            if (this.x > 1024) this.x = 1024;
        }
    };

    slash() {
        if (!this.isSlashing) {
            this.isSlashing = true;
            this.slashAnimator.elapsedTime = 0;
        }
    };

    draw(ctx){
        // Select the appropriate animator based on state
        let currentAnimator;
        if (this.isSlashing) {
            currentAnimator = this.slashAnimator;
        } else {
            currentAnimator = this.isMoving ? this.walkAnimator : this.idleAnimator;
        }

        // Save the current context state
        ctx.save();

        // If facing left, flip the canvas
        if (this.direction === -1) {
            ctx.translate(this.x + currentAnimator.width, this.y);
            ctx.scale(-1, 1);
            ctx.translate(-currentAnimator.width, 0);
            currentAnimator.drawFrame(this.game.clockTick, ctx, 0, 0);
        } else {
            currentAnimator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        }

        // Restore the context state
        ctx.restore();
    };

}