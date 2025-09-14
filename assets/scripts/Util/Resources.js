class Resources {
    constructor() {
        this.toLoad = {
            explorpheus: "./assets/images/explorpheus.png",
            map: "./assets/images/Map.png",
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
