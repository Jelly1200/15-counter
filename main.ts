input.onButtonPressed(Button.A, function () {
    Index = -1
    Iscounting = true
    while (Iscounting) {
        Index = Index + 1
        basic.showNumber(Index)
        basic.pause(300)
    }
})
input.onButtonPressed(Button.B, function () {
    Iscounting = false
})
let Index = 0
let Iscounting = false
basic.showString("Ready")
Iscounting = false
Index = 0
basic.forever(function () {
	
})
