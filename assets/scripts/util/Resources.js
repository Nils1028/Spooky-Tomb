class Resources {
    constructor() {
        this.toLoad = {
            explorpheus: "./assets/images/explorpheus.png",
            book: "./assets/images/Openbook.png",
            exclamationMark: "./assets/images/ExclamationMark.png",
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

        this.pixelOperator = null;
        this.texts = null;
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

    async loadFont() {
        try {
            const response = await fetch("./assets/data/PixelOperator8.ttf");
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const buffer = await response.arrayBuffer();
            this.pixelOperator = opentype.parse(buffer);

        } catch(err) {
            console.error('Error while loading font:', err);
        }
    }

    async loadTexts() {
        try {
            const response = await fetch("./assets/data/Texts.json");
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            this.texts = await response.json();
        } catch(err) {
            console.error('Error while loading json:', err);
        }
    }
}

const resources = new Resources();
