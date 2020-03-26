 let counter = 0;
 let posts = []
function increment() {
  counter++
}
function getCount() {
  return counter
}
 module.exports = {getCount, increment, posts };