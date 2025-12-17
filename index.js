let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')


function getRandomCard() {
    const card = Math.floor(Math.random() * 13 + 1)
    if (card === 1) return 11
    if (card === 11 || card === 12 || card === 13) return 10
    return card
}


const startGame = () => {
    isAlive = true
    hasBlackJack = false
    cards = [getRandomCard(), getRandomCard()]
    sum = 0
    for (card of cards) sum += card
    renderGame()
}


const renderGame = () =>{
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `Cards: `
    for (let card of cards) cardsEl.textContent += card + ' ' 
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}


const newCard = () => {
    if (isAlive && !hasBlackJack){
        console.log('Drawing a new card from the deck!')

        let card = getRandomCard()
        sum += card
        cards.push(card)

        renderGame()
    }
}

