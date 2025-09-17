const canvas = this.document.getElementById("board");
const ctx = canvas.getContext("2d");
const gameLoop = new GameLoop(update, draw);
const mainScene = new GameObject(new Vector2(0, 0));
const orpheus = new Orpheus(0, 0);
mainScene.addChild(orpheus);
const camera = new Camera();
mainScene.addChild(camera);

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

function update(delta) {
    mainScene.stepEntry(delta, mainScene);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(camera.position.x, camera.position.y);

    ctx.drawImage(resources.images.map.image, 0, 0, 45 * CELL_SIZE, 45 * CELL_SIZE);
    mainScene.draw(ctx, 0, 0);

    ctx.restore();
}

window.addEventListener('load', init);
window.addEventListener('resize', resizeCanvas);
gameLoop.start();