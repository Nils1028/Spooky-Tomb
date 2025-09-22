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

    wrapText(text, maxWidth, font, fontSize) {
        const words = text.split(' ');
        let lines = [];
        let currentLine = '';

        words.forEach(word => {
            const testLine = currentLine ? currentLine + ' ' + word : word;
            const metrics = font.getAdvanceWidth(testLine, fontSize);

            if (metrics > maxWidth) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        });

        if (currentLine) lines.push(currentLine);
        return lines;
    }

    drawImage(ctx, drawPosX, drawPosY) {
        if(this.pressedOpenKey && this.isInteractionPos) {
            // Book img
            ctx.drawImage(resources.images.book.image, this.position.x - 164, this.position.y - 110, 164 * 2, 110 * 2);
            
            // Text
            ctx.textRendering = 'geometricPrecision';

            const font = resources.pixelOperator;
            const text = String(resources.texts.stories[0]);
            const fontSize = 8;
            const maxWidth = 120;
            const lineHeight = fontSize + 2;

            const lines = this.wrapText(text, maxWidth, font, fontSize);

            lines.forEach((line, i) => {
                const y = this.position.y - 90 + i * lineHeight;
                const path = font.getPath(line, this.position.x - (164 / 4) * 3, y, fontSize);
                path.draw(ctx);
            });
        } else {
            this.speechBubble.drawImage(ctx, drawPosX, drawPosY);
        }
    }
}