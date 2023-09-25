document.addEventListener('DOMContentLoaded', ()=> {

//declare img Array
const cardArray = [
    {
        name: 'another',
        img: 'Images/another.png'
    },
    {
        name: 'another',
        img: 'Images/another.png'
    },
    {
        name: 'baptism',
        img: 'Images/baptism.png'
    },
    {
        name: 'baptism',
        img: 'Images/baptism.png'
    },
    {
        name: 'chakras',
        img: 'Images/chakras.png'
    },
    {
        name: 'chakras',
        img: 'Images/chakras.png'
    },
    {
        name: 'czinger',
        img: 'Images/czinger.png'
    },
    {
        name: 'czinger',
        img: 'Images/czinger.png'
    },
    {
        name: 'tartaria',
        img: 'Images/tartaria.png'
    },
    {
        name: 'tartaria',
        img: 'Images/tartaria.png'
    },
    {
        name: 'spaceship',
        img: 'Images/spaceship.png'
    },
    {
        name: 'spaceship',
        img: 'Images/spaceship.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
cardsChosen = [];
cardsChosenId = [];
cardsWon = [];

//create Grid
function createBoard(){
for (let i = 0; i < cardArray.length; i++){
    const card = document.createElement('img');
    card.setAttribute('src', 'Images/blank.png')
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
    }
}
createBoard()

//flip your card function
function flipCard(){
var cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if (cardsChosen.length === 2){
    setTimeout(findMatch, 551)
 }
}

//find match function
function findMatch(){
    cards = document.querySelectorAll('img')
    optionOneId = cardsChosenId[0];
    optionTwoId = cardsChosenId[1];

    if(optionOneId === optionTwoId){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'Images/white.png');
        cards[optionTwoId].setAttribute('src', 'Images/white.png');
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'blank.png');
        cards[optionTwoId].setAttribute('src', 'blank.png');
        alert('Sorry, Try Again!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
    
}
})