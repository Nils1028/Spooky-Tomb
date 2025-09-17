class Orpheus extends GameObject {
    constructor(x, y) {
        super({
            position: new Vector2(x, y),
        });

        document.addEventListener("keydown", (event) => {
            if(event.code === "KeyW" || event.code === "ArrowUp") {
                this.position = new Vector2(this.position.x, this.position.y - 1);
                events.emit("ORPHEUS_MOVED", this.position);
            } else if(event.code === "KeyA" || event.code === "ArrowLeft") {
                this.position = new Vector2(this.position.x - 1, this.position.y);
                events.emit("ORPHEUS_MOVED", this.position);
            } else if(event.code === "KeyS" || event.code === "ArrowDown") {
                this.position = new Vector2(this.position.x, this.position.y + 1);
                events.emit("ORPHEUS_MOVED", this.position);
            } else if(event.code === "KeyD" || event.code === "ArrowRight") {
                this.position = new Vector2(this.position.x + 1, this.position.y);
                events.emit("ORPHEUS_MOVED", this.position);
            }
        });
    }

    step(delta) {
        
    }

    draw(ctx) {
        if(resources.images.explorpheus.isLoaded) {
            ctx.drawImage(resources.images.explorpheus.image, this.position.x * CELL_SIZE, this.position.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
    }

    tryMove() {

    }
}