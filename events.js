// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one()

  two()

  three()

  four()
  // Your turn! Create a new function called `two`, then call it from here.
}


function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue)

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite)
}

function two () {
  // First, we have to find the element:
  var two = document.getElementById('two')

  // Next, we add an event listener to it:
  two.addEventListener('mouseenter', makeGreen)

  // Finally, we add one to make the colour white again
  two.addEventListener('mouseleave', makeWhite)
}

function three () {
  // First, we have to find the element:
  var three = document.getElementById('three')

  // Next, we add an event listener to it:
  three.addEventListener('mouseenter', makeRed)

  // Finally, we add one to make the colour white again
  three.addEventListener('mouseleave', makeWhite)
}

function four() {

var four = document.getElementById('four')

four.addEventListener('click', toggleYellow)

function toggleYellow () {

  four.classList.toggle('yellow')
}

}

// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}

function makeRed (evt) {
  evt.target.style.backgroundColor = 'red'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}
