ball = game.create_sprite(2, 1)
paddle = game.create_sprite(2, 3)

def on_forever():
    ball.move(1)
    ball.if_on_edge_bounce()
    basic.pause(1000)
basic.forever(on_forever)
