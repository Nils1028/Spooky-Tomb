const Player = {
    position: {x: 0, y: 0},

    draw(ctx) {
        if(resources.images.explorpheus.isLoaded) {
            ctx.drawImage(resources.images.explorpheus.image, this.position.x * CELL_SIZE, this.position.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
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