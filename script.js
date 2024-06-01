/**
 * 
 * @param {*} text parameter recieved from calling
 */
function copyText(text){
  let elementText = text;
  let inputElement = document.createElement('input');
  inputElement.setAttribute('value', elementText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  inputElement.parentNode.removeChild(inputElement);
}

// for preloader
function preloader(){
  var loader = document.getElementById("pre-loader")
  window.addEventListener("load", function(){
    loader.style.display = "none";
  })
}preloader();

//tooltip
function showCopied() {
  const copiedPrompt = document.getElementById("copied-prompt");
  copiedPrompt.style.visibility = "visible";

  // Hide the prompt after a certain duration (e.g., 2 seconds)
  setTimeout(function() {
    copiedPrompt.style.visibility = "hidden";
  }, 2000);
}

