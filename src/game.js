const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const { createCard } = require('../src/card');
const {
  createDeck,
  createRound,
  countCards,
  endRound,
} = require('../src/round');
const { startTimer } = require('../src/timer');

const makeCards = cards => {
  return data.prototypeData.map(card => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer);
  });
};

const startGame = () => {
  const cards = makeCards(prototypeQuestions);
  const deck = createDeck(cards);
  const round = createRound(deck);

  printQuestion(round);
  printMessage(deck);
  startTimer();
  endRound(round);
};

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(
    deck,
  )} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = {
  printMessage,
  printQuestion,
  startGame,
  makeCards,
};
