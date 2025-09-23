class Text extends GameObject {
    constructor() {
        super({});

        this.speechBubble = new SpeechBubble();

        this.isInteractionPos = false;
        this.pressedOpenKey = false;
        this.exitPopup = document.getElementById("sceneWindow");
        
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

    function splitLongWord(word) {
        let parts = [];
        let temp = '';

        for (let char of word) {
            const test = temp + char;
            const width = font.getAdvanceWidth(test, fontSize);

            if (width > maxWidth) {
                parts.push(temp);
                temp = char;
            } else {
                temp = test;
            }
        }
        if (temp) parts.push(temp);
        return parts;
    }

    words.forEach(word => {
        // Wort selbst prüfen
        if (font.getAdvanceWidth(word, fontSize) > maxWidth) {
            const splitParts = splitLongWord(word);

            splitParts.forEach((part, idx) => {
                if (idx === 0 && currentLine) {
                    lines.push(currentLine);
                    currentLine = '';
                }
                lines.push(part);
            });
        } else {
            const testLine = currentLine ? currentLine + ' ' + word : word;
            const width = font.getAdvanceWidth(testLine, fontSize);

            if (width > maxWidth) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
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
            const text = String(resources.texts.stories[1]);
            const fontSize = 8;
            const maxWidth = 120;
            const lineHeight = fontSize + 2;

            const lines = this.wrapText(text, maxWidth, font, fontSize);
            let drawingPosX = this.position.x - (164 / 4) * 3;

            lines.forEach((line, i) => {
                if(i < 20) {
                    const y = this.position.y - 90 + i * lineHeight;
                    const path = font.getPath(line, drawingPosX, y, fontSize);
                    path.draw(ctx);
                } else {
                    drawingPosX = this.position.x + 5;
                    const y = this.position.y - 90 + i * lineHeight - (20 * lineHeight);
                    const path = font.getPath(line, drawingPosX, y, fontSize);
                    path.draw(ctx);
                }
            });
        } else if(this.pressedOpenKey && UPPER_EXIT_POSITIONS.has(this.position.x + "," + this.position.y)) {
            this.exitPopup.style.visibility = "visible";
        } else {
            this.speechBubble.drawImage(ctx, drawPosX, drawPosY);
            this.exitPopup.style.visibility = "hidden";
        }
    }
}