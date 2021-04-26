input.onButtonPressed(Button.A, function () {
    paddle.change(LedSpriteProperty.X, 0 - 1)
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
    basic.pause(1000)
})
