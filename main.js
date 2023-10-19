const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDiv = document.querySelector('#modal')
const hearts = document.querySelectorAll('.like-glyph')
function clickAlert(e){
  const heart = e.target;
  mimicServerCall()
  .then(val=>{
    
    if(heart.innerText == EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.classList.add("activated-heart")
    }
    else
    {
      heart.innerText = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
    
  })
  .catch(err => {
    errorDiv.classList.remove("hidden")
    errorDiv.innerText = err
    setTimeout(() => errorDiv.classList.add("hidden"), 3000)
  })
  }


for (const glyph of hearts) {
  glyph.addEventListener('click', clickAlert);

}



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

errorDiv.classList.add("hidden")
document.addEventListener('DOMContentLoaded', function() {
})