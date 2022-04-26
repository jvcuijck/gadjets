input.onButtonPressed(Button.A, function () {
    Reading = input.lightLevel()
    led.plotBarGraph(
    Reading,
    225
    )
})
input.onGesture(Gesture.Shake, function () {
    Stappen += 2
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(Stappen)
    basic.showIcon(IconNames.Duck)
})
input.onButtonPressed(Button.AB, function () {
    Temperatuur = input.temperature()
    basic.showNumber(Temperatuur)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    Graden = input.compassHeading()
    if (Graden < 45) {
        basic.showString("N")
    } else if (Graden < 135) {
        basic.showString("O")
    } else if (Graden < 225) {
        basic.showString("Z")
    } else if (Graden < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
let Graden = 0
let Temperatuur = 0
let Reading = 0
let Stappen = 0
Stappen = 0
basic.showIcon(IconNames.Duck)
basic.forever(function () {
    if (input.soundLevel() > Math.constrain(140, 140, 150)) {
        if (input.soundLevel() > Math.constrain(160, 160, 170)) {
            if (input.soundLevel() > Math.constrain(180, 180, 190)) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
                basic.pause(5000)
                basic.showIcon(IconNames.Duck)
            }
        }
    }
})
