class Resources {
    constructor() {
        this.toLoad = {
            explorpheus: "./assets/images/explorpheus.png",
            map_ground: "./assets/images/Map/Ground.png",
            map_entrances: "./assets/images/Map/Entrances.png",
            map_borders: "./assets/images/Map/Borders.png",
            map_walls: "./assets/images/Map/Walls.png",
            map_pillars: "./assets/images/Map/Pillars.png",
            // OTOP = On Top Of Player
            map_entraces_OTOP: "./assets/images/Map/Entrances (On top of Player).png",
            map_walls_OTOP: "./assets/images/Map/Walls (On top of Player).png",
            map_pillars_OTOP: "./assets/images/Map/Pillars (On top of Player).png",
        };

        this.images = {};

        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false,
            }
            img.onload = () => {
                this.images[key].isLoaded = true;
            }
        })
    }
}

const resources = new Resources();
