input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    A = number + 9
    B = number - 9
    basic.showNumber(A - B)
    basic.pause(200)
    C = number * 2
    basic.showNumber(C)
    basic.pause(200)
    D = number / 3
    basic.showNumber(D)
    basic.pause(200)
    E = number % 4
    basic.showNumber(E)
    basic.pause(200)
    F = Math.sqrt(number)
    basic.showNumber(F)
    basic.pause(200)
    G = Math.round(0.75)
    basic.showNumber(G)
    basic.pause(200)
    H = Math.ceil(0.33)
    basic.showNumber(H)
    basic.pause(200)
    I = number ** 3
    basic.showNumber(I)
    basic.pause(200)
    J = randint(0, 100)
    basic.showNumber(J)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let J = 0
let I = 0
let H = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
let B = 0
let A = 0
let number = 0
basic.showIcon(IconNames.Heart)
number = 0
