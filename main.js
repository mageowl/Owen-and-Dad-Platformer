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

// var player = new GameSquare.GameSquareRectObject({
//     x: 10,
//     y: 10,
//     width: 10,
//     height: 10,
//     color: "dodgerblue"
// })
// Loop
GameSquare.updateLoopCallback = function () {
    //player.render()
}