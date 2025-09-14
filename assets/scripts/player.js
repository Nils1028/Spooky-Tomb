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

window.addEventListener("keydown", (event) => {
    if(event.code === "KeyW" || event.code === "ArrowUp") {
        Player.setPos(Player.position.x, Player.position.y - 1);
    } else if(event.code === "KeyA" || event.code === "ArrowLeft") {
        Player.setPos(Player.position.x - 1, Player.position.y);
    } else if(event.code === "KeyS" || event.code === "ArrowDown") {
        Player.setPos(Player.position.x, Player.position.y + 1);
    } else if(event.code === "KeyD" || event.code === "ArrowRight") {
        Player.setPos(Player.position.x + 1, Player.position.y);
    }
})
