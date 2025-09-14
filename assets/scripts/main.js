const canvas = this.document.getElementById("board");
const ctx = canvas.getContext("2d");
const gameLoop = new GameLoop(update, draw);

function init() {
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    resizeCanvas();
    
    while(!resources.images.explorpheus.isLoaded && !resources.images.map.isLoaded)
    {
        console.log("Wait for resources");
    }

    ctx.imageSmoothingEnabled = false;
}

function resizeCanvas() {
    const margin = 0;

    const scaleX = (window.innerWidth - margin * 2) / GAME.width;
    const scaleY = (window.innerHeight - margin * 2) / GAME.height;
    const scale = Math.min(scaleX, scaleY);

    canvas.style.width = GAME.width * scale + "px";
    canvas.style.height = GAME.height * scale + "px";
}

function update() {

}

function draw() {
    ctx.drawImage(resources.images.map.image, -Player.position.x * CELL_SIZE, -Player.position.y * CELL_SIZE, 45 * CELL_SIZE, 45 * CELL_SIZE);
    Player.draw(ctx);
}

window.addEventListener('load', init);
window.addEventListener('resize', resizeCanvas);
gameLoop.start();