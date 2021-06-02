function Fortschritt () {
    progress += 1
    Statusanzeige += 1
}
input.onButtonPressed(Button.A, function () {
    if (Level == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        Fortschritt()
    } else if (Level == 2 && progress == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        LevelZiel = 2
        Fortschritt()
    } else if (Level == 3 && progress == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        LevelZiel = 3
        Fortschritt()
    } else if (Level == 4 && progress == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        LevelZiel = 4
        Fortschritt()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Level == 2 && progress == 1) {
        music.playTone(277, music.beat(BeatFraction.Whole))
        Fortschritt()
    } else if (Level == 3 && progress == 1) {
        music.playTone(277, music.beat(BeatFraction.Whole))
        Fortschritt()
    } else if (Level == 4 && progress == 1) {
        music.playTone(277, music.beat(BeatFraction.Whole))
        Fortschritt()
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (Level == 3 && progress == 2) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        Fortschritt()
    } else if (Level == 4 && progress == 2) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        Fortschritt()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Level == 4 && progress == 3) {
        music.playTone(311, music.beat(BeatFraction.Whole))
        Fortschritt()
    }
})
function Next_Level () {
    if (progress == LevelZiel) {
        Level += 1
        progress = 0
    }
}
let LevelZiel = 0
let progress = 0
let Level = 0
Level = 1
progress = 0
LevelZiel = 1
let Statusanzeige = 0
let B_1 = 0
let B_2 = 0
let B_3 = 0
music.setVolume(10)
basic.forever(function () {
    Next_Level()
    if (Statusanzeige == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (Statusanzeige == 2) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (Statusanzeige == 3) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    } else if (Statusanzeige == 4) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # # . .
            # # # . .
            `)
    } else if (Statusanzeige == 5) {
        basic.showLeds(`
            # # . . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (Statusanzeige == 6) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (Statusanzeige == 7) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            `)
    } else if (Statusanzeige == 8) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            `)
    } else if (Statusanzeige == 9) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (Statusanzeige == 10) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (Statusanzeige == 11) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # #
            `)
    } else {
    	
    }
})
