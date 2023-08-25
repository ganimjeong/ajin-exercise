input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.pause(20)
    basic.showLeds(`
        . . . # .
        . . # # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.pause(20)
    basic.showLeds(`
        . . # . #
        . # # # #
        . # # # #
        . . # # #
        . . . # .
        `)
    basic.pause(20)
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showLeds(`
        # . # . .
        # # # # .
        # # # # .
        # # # . .
        . # . . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . # . . .
        # # # . .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.pause(30)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(5)
    basic.showLeds(`
        . . . . .
        . # . . .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.pause(5)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    basic.pause(5)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . #
        . . . # .
        . . . . .
        `)
    basic.pause(5)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(5)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(5)
    basic.showLeds(`
        . # . . .
        # . # . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(30)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(20)
    basic.showLeds(`
        . # . . .
        # # # . .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.pause(20)
    basic.showLeds(`
        # . # . .
        # # # # .
        # # # # .
        # # # . .
        . # . . .
        `)
    basic.pause(20)
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showLeds(`
        . . # . #
        . # # # #
        . # # # #
        . . # # #
        . . . # .
        `)
    basic.pause(30)
    basic.showLeds(`
        . . . # .
        . . # # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.pause(30)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(30)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
