function continueGame() {
  const alphabet = getARandomAlphabet();
  console.log("Your random alphabet : ", alphabet);

  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

//   set background color
    setBackgroundColorById(alphabet);
}

function play() {
  // hide home section
  hiddenElementById("home-screen");

  // show playground
  showElementById("play-ground");

  continueGame();
}
