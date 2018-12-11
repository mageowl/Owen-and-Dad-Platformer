// Canvas
var canvas = new GameSquare.GameSquareCanvasObject("canvas")

// Classes
class Player extends GameSquare.GameSquareRectObject {
    constructer(x, y) {
        // Super
        super({
            x: x,
            y: y,
            width: 10,
            height: 10,
            color: "dodgerblue"
        })
    }
}

// Sprites
var player = new Player(10, 10)

// Loop
GameSquare.updateLoopCallback = function () {
    player.render()
}