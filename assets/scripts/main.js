const canvas = this.document.getElementById("board");
const ctx = canvas.getContext("2d");

// Init
window.addEventListener('load', function() {
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    while(!resources.images.explorpheus.isLoaded && !resources.images.map.isLoaded)
    {
        console.log("Wait for download resource");
    }
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(resources.images.map.image, 0, 0, 45 * CELL_SIZE, 45 * CELL_SIZE);
    Player.draw(ctx);
});

function resizeCanvas() {
    const margin = 0;

    const scaleX = (window.innerWidth - margin * 2) / GAME.width;
    const scaleY = (window.innerHeight - margin * 2) / GAME.height;
    const scale = Math.min(scaleX, scaleY);

    canvas.style.width = GAME.width * scale + "px";
    canvas.style.height = GAME.height * scale + "px";
}

// Game loop

gameLoop = (timestamp) => {
    console.log("Test");

    requestAnimationFrame(this.gameLoop)
}

requestAnimationFrame(this.gameLoop)