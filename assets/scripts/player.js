const Player = {
    image: new Image(),
    position: {x: 0, y: 0},

    async init(ctx) {
        this.image.src = "./assets/images/explorpheus.png";
        await this.image.decode();
        this.draw(ctx);
    },

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x * CELL_SIZE, this.position.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    },

    setPos(x, y) {
        if(x >= 0 && x < COLUMS) {
            this.position.x = x;
        }

        if(y >= 0 && y < ROWS) {
            this.position.y = y;
        }
    }
}