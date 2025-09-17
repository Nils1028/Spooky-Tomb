const canvas = this.document.getElementById("board");
const ctx = canvas.getContext("2d");

canvas.width = GAME.width;
canvas.height = GAME.height;
ctx.imageSmoothingEnabled = false;

const gameLoop = new GameLoop(update, draw);
const mainScene = new GameObject(new Vector2(0, 0));

const map = new Sprite({
    resource: resources.images.map,
    frameSize: new Vector2(45 * CELL_SIZE, 45 * CELL_SIZE),
});
mainScene.addChild(map);

const orpheus = new Orpheus(9, 24);
mainScene.addChild(orpheus);

const camera = new Camera();
camera.position = new Vector2(-9 * CELL_SIZE + -8 + canvas.width / 2, -24 * CELL_SIZE + -8 + canvas.height / 2)
mainScene.addChild(camera);

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

    mainScene.draw(ctx, 0, 0);

    ctx.restore();
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
gameLoop.start();