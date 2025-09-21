class Text extends GameObject {
    constructor() {
        super({});

        this.speechBubble = new SpeechBubble();

        this.isInteractionPos = false;
        this.pressedOpenKey = false;
        
        events.on(ORPHEUS_MOVED, this, pos => {
            this.position = pos;

            if(INTERACTION_POSITIONS.has(pos.x + "," + pos.y)) {
                this.isInteractionPos = true;
            } else {
                this.isInteractionPos = false;
                this.pressedOpenKey = false;
            }
        })

        document.addEventListener("keyup", (event) => {
            if(event.code === "Space") {
                this.pressedOpenKey = true;
            }
        });
    }

    step(_delta) {
        // Overwrite this function!
    }

    drawImage(ctx, drawPosX, drawPosY) {
        if(this.pressedOpenKey && this.isInteractionPos) {
            // Book img
            ctx.drawImage(resources.images.book.image, this.position.x - 164, this.position.y - 110, 164 * 2, 110 * 2);
            
            // Text
            ctx.textRendering = 'geometricPrecision';
            const path = resources.pixelOperator.getPath("Hello, World!", this.position.x, this.position.y, 8);
            path.draw(ctx);
        } else {
            this.speechBubble.drawImage(ctx, drawPosX, drawPosY);
        }
    }
}