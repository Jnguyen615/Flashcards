const chai = require('chai')
const expect = chai.expect

const { makeCards } = require ('../src/game')
const { data } = require('../src/data')


describe('initilizing the game', () => {
  it('should create a set of cards', () => {
   
    const cardSet = makeCards(data)

    expect(cardSet[0]).to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: [ 'object', 'array', 'function' ],
      correctAnswer: 'object'
    })
  })
})