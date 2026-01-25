class Animator{
    constructor(spriteSheet, xStart, yStart, width, height, frameCount, frameDuration, looping = true) {
        Object.assign(this, {spriteSheet, xStart, yStart, width, height, frameCount, frameDuration, looping});

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;

    };

    drawFrame(tick, ctx, x, y){
        this.elapsedTime += tick;
        if(this.elapsedTime > this.totalTime) {
            if (this.looping) {
                this.elapsedTime -= this.totalTime;
            } else {
                this.elapsedTime = this.totalTime;
            }
        }
        const frame = this.currentFrame();

        ctx.drawImage(this.spriteSheet,
            this.xStart + this.width*frame, this.yStart,
            this.width, this.height,
            x, y,
            this.width*2, this.height*2);
        

    };

    currentFrame(){
        return Math.floor(this.elapsedTime / this.frameDuration);

    };

    isDone(){
        return (this.elapsedTime >= this.totalTime);
    };
}