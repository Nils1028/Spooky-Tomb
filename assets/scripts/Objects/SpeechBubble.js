class SpeechBubble extends GameObject {
    constructor() {
        super({});

        this.isOpen = false;
        this.hasDrawn = false;
        
        events.on(ORPHEUS_MOVED, this, pos => {
            this.position = pos;

            if(this.isOpen) {
                this.isOpen = false;
            }
        })

        document.addEventListener("keyup", (event) => {
            if(event.code === "Space" && !this.isOpen) {
                this.isOpen = true;
            }
        });
    }

    draw(ctx) {
        const bubble = document.getElementById("bubble");

        if(this.isOpen) {
            bubble.style.visibility = "visible"
        } else {
            bubble.style.visibility = "hidden"
        }
    }
}