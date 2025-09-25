class Text extends GameObject {
    constructor() {
        super({});

        this.speechBubble = new SpeechBubble();

        this.isInteractionPos = false;
        this.pressedOpenKey = false;
        this.exitPopup = document.getElementById("sceneWindow");
        this.scene6Btn = document.getElementById("scene6");
        this.scene12Btn = document.getElementById("scene12");
        this.scene14Btn = document.getElementById("scene14");
        this.scene32Btn = document.getElementById("scene32");
        this.entrancePopup = document.getElementById("entranceWindow");
        
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
            this.exitPopup.style.display = "block";
            this.scene6Btn.style.display = "inline-block";
            this.scene12Btn.style.display = "none";
            this.scene14Btn.style.display = "none";
            this.scene32Btn.style.display = "none";
        } else if(this.pressedOpenKey && UPPER_EXIT_2_POSITIONS.has(this.position.x + "," + this.position.y)) {
            this.exitPopup.style.display = "block";
            this.scene6Btn.style.display = "none";
            this.scene12Btn.style.display = "inline-block";
            this.scene14Btn.style.display = "none";
            this.scene32Btn.style.display = "none";
        } else if(this.pressedOpenKey && RIGHT_EXIT_POSITIONS.has(this.position.x + "," + this.position.y)) {
            this.exitPopup.style.display = "block";
            this.scene6Btn.style.display = "none";
            this.scene12Btn.style.display = "none";
            this.scene14Btn.style.display = "inline-block";
            this.scene32Btn.style.display = "none";
        } else if(this.pressedOpenKey && LOWER_EXIT_POSITIONS.has(this.position.x + "," + this.position.y)) {
            this.exitPopup.style.display = "block";
            this.scene6Btn.style.display = "none";
            this.scene12Btn.style.display = "none";
            this.scene14Btn.style.display = "none";
            this.scene32Btn.style.display = "inline-block";
        } else if(this.pressedOpenKey && ENTRANCE_POSITIONS.has(this.position.x + "," + this.position.y)) {
            this.entrancePopup.style.display = "block";
        } else if(this.isInteractionPos) {
            const exclamationMark = new Sprite({
                resource: resources.images.exclamationMark,
                frameSize: new Vector2(32 * 8, 32),
            });

            exclamationMark.draw(ctx, this.position.x, this.position.y);
        } else {
            this.speechBubble.drawImage(ctx, drawPosX, drawPosY);
            this.exitPopup.style.display = "none";
            this.scene6Btn.style.display = "none";
            this.scene12Btn.style.display = "none";
            this.scene14Btn.style.display = "none";
            this.scene32Btn.style.display = "none";
            this.entrancePopup.style.display = "none";
        }
    }
}