const canvas = this.document.getElementById("board");
const ctx = canvas.getContext("2d");

window.addEventListener('load', function() {
    canvas.width = GAME.width;
    canvas.height = GAME.height;

    resizeCanvas();

    Player.init(ctx);
});

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    const margin = 20;

    const scaleX = (window.innerWidth - margin * 2) / GAME.width;
    const scaleY = (window.innerHeight - margin * 2) / GAME.height;
    const scale = Math.min(scaleX, scaleY);

    canvas.style.width = GAME.width * scale + "px";
    canvas.style.height = GAME.height * scale + "px";
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

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Player.draw(ctx);
})
