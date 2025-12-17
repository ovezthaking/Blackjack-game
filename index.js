let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
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
    console.log('Drawing a new card from the deck!')

    let card = getRandomCard()

    sum += card

    cards.push(card)

    startGame()
}

