# Spooky-Tomb

Scene (No. 66) for the Summer of Making Grand Survey Expedition.

Demo: [https://suchti18.github.io/Spooky-Tomb/](https://nils1028.github.io/Spooky-Tomb/)
<br>
Link to the game with all other scenes included: [https://isle.a.hackclub.dev/scenes/66](https://isle.a.hackclub.dev/scenes/66)

Its made purely in HTML, JavaScript and CSS.

# Controls

|   Key   | Description   |
|---------|---------------|
|   `W`   | Up            |
|   `A`   | Left          |
|   `S`   | Down          |
|   `D`   | Right         |
| `Space` | Interact      |

# Structure / How the game works
```
Spooky-Tomb
├───.github
│   └───workflows
└───assets
    ├───data
    ├───images
    │   ├───Map
    │   └───RF_Catacombs_v1.0
    │       └───PSD
    │           └───Anim
    ├───scripts
    │   ├───Constants
    │   ├───Lib
    │   ├───Objects
    │   └───Util
    └───styles
```

The Main.js file is responsible for initialisation and starting the game loop. Once the game loop has started, the draw and update functions are called every time the browser is ready to repaint (via the requestAnimationFrame function). These functions, which are also declared in the Main.js file, contain the mainScene Game Object, which then calls each of its children.


# Credits
Exclamation Mark made by [Bont](https://bontt.itch.io/exclamation-mark)
