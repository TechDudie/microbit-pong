def on_button_pressed_a():
    paddle.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    paddle.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

paddle: game.LedSprite = None
ball = game.create_sprite(2, 1)
paddle = game.create_sprite(2, 3)
if Math.random_boolean():
    ball.turn(Direction.LEFT, 45)
else:
    ball.turn(Direction.RIGHT, 45)

def on_forever():
    ball.move(1)
    ball.if_on_edge_bounce()
    if ball.is_touching(paddle):
        game.add_score(1)
        if ball.get(LedSpriteProperty.DIRECTION) < 0:
            ball.turn(Direction.RIGHT, 90)
        else:
            ball.turn(Direction.LEFT, 90)
    if ball.get(LedSpriteProperty.Y) == 4:
        game.pause()
        basic.pause(1000)
        basic.show_string("GAME OVER    SCORE: " + str(game.score()))
    basic.pause(1000)
basic.forever(on_forever)
