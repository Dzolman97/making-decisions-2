//console.log("hello World")

let backpack = []

backpack.push('sword', 'shield', 'spear', 'food')

// backpack.push('sadf')
// backpack.push('sadf')
// backpack.push('sadf')
// backpack.push('sadf')

// let sword = backpack.shift()
// let sword = backpack.splice(0, 1)


// backpack.unshift(sword[0])

let furCoat = 'fur coat'

backpack.push(furCoat)

backpack.pop()

backpack.push('flint', 'blanket', 'knife', 'toothbrush')

let itemCount = backpack.length

let backpack2 = backpack.splice(4, 4)

// console.log(backpack2[0])

// for(let i = 0; i < backpack.length; i++){
//     console.log(backpack[i])
// }


// if(backpack.length >= 3){
//     for(let i = 0; i < 3; i++){
//     console.log(backpack[i])
//     }
// } else {
//     for(let i = 0 ; i < backpack.length; i++){
//         console.log(backpack[i])
//     }
// }

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log('------------------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log('guessMe is divisble by 4 or 5. Added 25')
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        console.log('guessMe is divisible by 3, subtracted by 27')
        guessMe -= 27
    } else {
        console.log("added 3")
        guessMe += 3
    }
    guessMe += 22
    console.log(`added 22, guessMe is now ${guessMe}`)
}

console.log(guessMe)