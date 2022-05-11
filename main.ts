radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        cuteBot.turnright()
    } else if (receivedNumber == 2) {
        cuteBot.turnleft()
    } else if (receivedNumber == 3) {
        cuteBot.backforward()
    } else if (receivedNumber == 4) {
        cuteBot.forward()
    } else if (receivedNumber == 5) {
        cuteBot.stopcar()
    }
})
basic.forever(function () {
    radio.setGroup(999)
})
