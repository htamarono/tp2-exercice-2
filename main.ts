input.onButtonPressed(Button.A, function () {
    led.unplot(pos_x, 4)
    pos_x += direction
    led.plot(pos_x, 4)
    if (pos_x >= 4) {
        direction += -1
    } else if (pos_x <= 0) {
        direction += 1
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(pos_x, 4)
    pos_x += direction
    led.plot(pos_x, 4)
    if (pos_x < 4) {
        direction += 1
    } else if (pos_x > 0) {
        direction += -1
    }
})
let pos_x = 0
let direction = 0
direction = 1
pos_x = 0
let pos_y = randint(0, 4)
led.plot(pos_x, pos_y)
basic.forever(function () {
    led.unplot(pos_x, pos_y)
    pos_y += direction
    led.plot(pos_x, pos_y)
    if (pos_y >= 4) {
        pos_y = direction
    } else if (pos_y >= 4) {
        led.unplot(4, 4)
    }
    basic.pause(200)
})
