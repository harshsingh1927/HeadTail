function playGame(userChoice){
   
  const coin = document.getElementById("coin");
  const resultText = document.getElementById("result");

  const options = ["Head", "Tail"];
  const randomResult = options[Math.floor(Math.random() * 2)];

  coin.style.transform = "rotateY(360deg)";

  setTimeout(() => {
    
    coin.textContent = randomResult;

    if(userChoice === randomResult){
      resultText.textContent = "🎉 You Win!";
    } else {
      resultText.textContent = "❌ You Lose!";
    }
  }, 300);
}
