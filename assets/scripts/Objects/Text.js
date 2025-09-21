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
            ctx.drawImage(resources.images.book.image, this.position.x - (164 / 2), this.position.y - (110 / 2), 164, 110);
        } else {
            this.speechBubble.drawImage(ctx, drawPosX, drawPosY);
        }
    }
}