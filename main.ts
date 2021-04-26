input.onButtonPressed(Button.A, function () {
    paddle.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    paddle.change(LedSpriteProperty.X, 1)
})
let paddle: game.LedSprite = null
let ball = game.createSprite(2, 1)
paddle = game.createSprite(2, 3)
if (Math.randomBoolean()) {
    ball.turn(Direction.Left, 45)
} else {
    ball.turn(Direction.Right, 45)
}
basic.forever(function () {
    ball.move(1)
    ball.ifOnEdgeBounce()
    if (ball.isTouching(paddle)) {
        if (ball.get(LedSpriteProperty.Direction) < 0) {
            ball.turn(Direction.Right, 90)
        } else {
            ball.turn(Direction.Left, 90)
        }
    }
    if (ball.get(LedSpriteProperty.Y) == 4) {
        game.pause()
        basic.pause(1000)
        basic.showString("GAME OVER")
    }
    basic.pause(1000)
})
