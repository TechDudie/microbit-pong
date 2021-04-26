let ball = game.createSprite(2, 1)
let paddle = game.createSprite(2, 3)
basic.forever(function () {
    ball.move(1)
    ball.ifOnEdgeBounce()
    basic.pause(1000)
})
