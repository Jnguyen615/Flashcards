const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard } = require('../src/card')
const { createDeck, createRound, countCards, endRound } = require('../src/round')

const makeCards = (cards) => {
  const game = cards.map((card) => {
    const createCards = createCard(card.id, card.question, card.answers, card.correctAnswer)
    return createCards
  })
  return game 
}

const startGame = () => {
  const cards = makeCards(prototypeQuestions.slice(0,5))
  const deck = createDeck(cards)
  const round = createRound(deck)

  printQuestion(round)
  printMessage(deck)
  endRound(round)
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { 
  printMessage, 
  printQuestion, 
  startGame 
};
