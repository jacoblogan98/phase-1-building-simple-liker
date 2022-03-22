// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {

const errorModal = document.querySelector("#modal");
const likeBttns = document.querySelectorAll("span.like-glyph");

likeBttns.forEach(button => button.addEventListener("click", fetchSC));

function fetchSC(button) {
  mimicServerCall()
  .then(() => {
    if (button.target.textContent === EMPTY_HEART) {
      button.target.textContent = FULL_HEART
      button.target.classList.add("activated-heart")
    }
  else if (button.target.textContent === FULL_HEART) {
    button.target.textContent = EMPTY_HEART
    button.target.classList.remove("activated-heart")
  }
})
  .catch(() => {
    errorModal.classList.remove("hidden")

    setTimeout(() => {
      errorModal.className = "hidden"}, 3000)
  });
} 
})



  


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
