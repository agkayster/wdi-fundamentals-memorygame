console.log("Up and running!");


var cards = [
{
	rank : "queen",
	suit : "hearts",
	cardImage : "images/queen-of-hearts.png"
},
{
	rank : "queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png"
},
{
	rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png"
},
{
	rank : "king",
	suit : "diamonds",
	cardImage : "images/king-of-diamonds.png"
}
];



function createBoard ()
{
	for (var i = 0; i < cards.length; i += 1)
	{
		const cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		document.getElementById("game-board").appendChild(cardElement);
		cardElement.addEventListener("click", flipCard);
	}
	
};
createBoard();

var cardsInPlay = [];
function checkForMatch()
{
  if (cardsInPlay[0] === cardsInPlay[1]) 
  {
    window.alert("You found a match!");	
  } 
  else 
  {
	window.alert("Sorry, try again.");
  }

};

function flipCard()
{
const cardId = this.getAttribute('data-id');
const cardElement = this.setAttribute('src', cards[cardId].cardImage)
cardsInPlay.push(cards[cardId].rank);	
if (cardsInPlay.length === 2) 
{
checkForMatch();

} 
console.log("user flipped " +  (cards[cardId].rank));
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
};









