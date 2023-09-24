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

const grid = document.querySelector('.grid')
cardsChosen = [];
cardsChosenId = [];

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

    
}
})