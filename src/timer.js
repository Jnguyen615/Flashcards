let start
let end
function startTimer() {
  start = new Date()
}

function stopTimer() {
  end = new Date()
  const elapsedTime = end - start
  
  const minutes = Math.floor(elapsedTime / 60000)
  const seconds = Math.floor((elapsedTime % 60000) / 1000)
  
  return console.log(`It took ${minutes} minutes and ${seconds} seconds to complete this activity.`)
}
const numbers = Array.from(Array(1000).keys())
numbers.forEach(i => {
  Math.sqrt(i)

  return 
});

module.exports = {
  startTimer,
  stopTimer
}