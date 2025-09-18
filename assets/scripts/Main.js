const canvas = this.document.getElementById("board");
const ctx = canvas.getContext("2d");

canvas.width = GAME.width;
canvas.height = GAME.height;
ctx.imageSmoothingEnabled = false;

const gameLoop = new GameLoop(update, draw);
const mainScene = new GameObject(new Vector2(0, 0));

const ground = new Sprite({
    resource: resources.images.map_ground,
    frameSize: new Vector2(45 * CELL_SIZE, 45 * CELL_SIZE),
});
mainScene.addChild(ground);

const entrances = new Sprite({
    resource: resources.images.map_entrances,
    frameSize: new Vector2(45 * CELL_SIZE, 45 * CELL_SIZE),
});
mainScene.addChild(entrances);

const borders = new Sprite({
    resource: resources.images.map_borders,
    frameSize: new Vector2(45 * CELL_SIZE, 45 * CELL_SIZE),
});
mainScene.addChild(borders);

const walls = new Sprite({
    resource: resources.images.map_walls,
    frameSize: new Vector2(45 * CELL_SIZE, 45 * CELL_SIZE),
});
mainScene.addChild(walls);

const pillars = new Sprite({
    resource: resources.images.map_pillars,
    frameSize: new Vector2(45 * CELL_SIZE, 45 * CELL_SIZE),
});
mainScene.addChild(pillars);

const orpheus = new Orpheus(9, 24);
mainScene.addChild(orpheus);

const entrances_otop = new Sprite({
    resource: resources.images.map_entraces_OTOP,
    frameSize: new Vector2(45 * CELL_SIZE, 45 * CELL_SIZE),
});
mainScene.addChild(entrances_otop);

const walls_otop = new Sprite({
    resource: resources.images.map_walls_OTOP,
    frameSize: new Vector2(45 * CELL_SIZE, 45 * CELL_SIZE),
});
mainScene.addChild(walls_otop);

const pillars_otop = new Sprite({
    resource: resources.images.map_pillars_OTOP,
    frameSize: new Vector2(45 * CELL_SIZE, 45 * CELL_SIZE),
});
mainScene.addChild(pillars_otop);

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