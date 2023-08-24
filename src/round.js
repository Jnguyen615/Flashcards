const { evaluateGuess } = require('../src/card')
const { stopTimer } = require('../src/timer')

const createDeck = (cards) => {
  return {
    cards,
  }
}

const countCards = (deck) => {
  return deck.cards.length
}

const createRound = (deck) => {
  return {
    deck: deck.cards,
    currentCard: deck.cards[0],
    turns: 0,
    incorrectGuesses: []
  }
}

const takeTurn = (guess, round) => {
  const answer = round.currentCard.correctAnswer;
  const response = evaluateGuess(guess, answer)

  if (response === 'Incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns++;
  round.deck.shift()
  round.currentCard = round.deck[0];
  return response 
}
    
const calculatePercentCorrect = (round) => {
  const numberCorrect = round.turns - round.incorrectGuesses.length
  return Math.round((numberCorrect / round.turns) * 100)
}
  
const endRound = (round) => {
  const percent = calculatePercentCorrect(round)
   console.log(`** Round Over! ** You answered ${percent}% of the questions correctly!`)
   stopTimer()
  }




module.exports = {
  createDeck, 
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
}