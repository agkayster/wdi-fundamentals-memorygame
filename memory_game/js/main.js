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
	cardImage : "images/king-of-hearts"
},
{
	rank : "king",
	suit : "diamonds",
	cardImage : "images/king-of-diamonds"
}
]


var cardsInPlay = []

function checkForMatch()
{
  if (cardsInPlay[0] === cardsInPlay[1]) 
  {
    alert("You found a match!");	
  } 
  else 
  {
	alert("Sorry, try again.");
  }

};

function flipCard(cardId)
{
if (cardsInPlay.length === 2) 
{


} 
cardsInPlay.push(cards[cardId].rank);

console.log("user flipped " +  (cards[cardId].rank));
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
};
flipCard(0);
flipCard(2);
checkForMatch();




