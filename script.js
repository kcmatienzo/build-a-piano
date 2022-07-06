

// get all of the keys as element (these are classes that has class name "key")
const keys = document.querySelectorAll('audio.dataset.code');
console.log(keys)

// Loop over the keys
// foreach key we want to run this function
// and inside, add an event listener
// we do this whenever we click this key
// Run a function w/c is going to acall a function named playNote that takes in a key argument


  
// /* we want to get the AudioElement based on the datanote property that we press */
// function playNote(key) {
//   const noteAudio = document.getElementById(key.dataset.code);
//   noteAudio.currentTime = 0; // This will reset audio every time you click the key
//   noteAudio.play();
//   key.classList.add('active'); // add a class "active" to our key when we click on it
//   noteAudio.addEventListener('ended', () => {
//     key.classList.remove('active');
//   })// event listener so as soon as the audio stops, it will remove the active colour
// }



keys.forEach(key => {
  key.addEventListener('click', () => playSound(key))
})
window.addEventListener('keydown', playSound);
/** */

function playSound(e) { 
  //console.log(e)
  const audio = this.document.querySelector(`audio[data-code="${e.code}"]`)
  const key = this.document.querySelector(`.key[data-code="${e.code}"]`) // select the corresponding key
  //console.log(key)
  if (!audio) return // stop the function from running altogether
  audio.currentTime = 0; // This will reset audio every time you click the key
  audio.play()
  //console.log(key);
  key.classList.add('active'); // add a class "active" to our key when we click on it
  audio.addEventListener('ended', () => {
  key.classList.remove('active');
  })// event listener so as soon as the audio stops, it will remove the active colour
  
}
