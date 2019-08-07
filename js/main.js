/*----- constants -----*/ 
// const board, score;
// const highScores = [];
// card array
let score = 0;
const cards = [
    {
        planet: "moon",
        backgroundColor: "blue",
        cardImage: "css/images/moon-blue.png"
    },
    {
        planet: "moon",
        backgroundColor: "red",
        cardImage: "css/images/moon-red.png"
    },
    {
        planet: "mercury",
        backgroundColor: "green",
        cardImage: "css/images/mercury-green.png"
    },
    {
        planet: "mercury",
        backgroundColor: "blue",
        cardImage: "css/images/mercury-blue.png"
    },
    {
        planet: "venus",
        backgroundColor: "pink",
        cardImage: "css/images/venus-pink.png"
    },
    {
        planet: "venus",
        backgroundColor: "yellow",
        cardImage: "css/images/venus-yellow.png"
    },
    {
        planet: "earth",
        backgroundColor: "purple",
        cardImage: "css/images/earth-purple.png"
    },
    {
        planet: "earth",
        backgroundColor: "grey",
        cardImage: "css/images/earth-grey.png"
    },
    {
        planet: "mars",
        backgroundColor: "grey",
        cardImage: "css/images/mars-grey.png"
    },
    {
        planet: "mars",
        backgroundColor: "orange",
        cardImage: "css/images/mars-orange.png"
    },
    {
        planet: "jupiter",
        backgroundColor: "green",
        cardImage: "css/images/jupiter-green.png"
    },
    {
        planet: "jupiter",
        backgroundColor: "yellow",
        cardImage: "css/images/jupiter-yellow.png"
    },
    {
        planet: "saturn",
        backgroundColor: "white",
        cardImage: "css/images/saturn-white.png"
    },
    {
        planet: "saturn",
        backgroundColor: "purple",
        cardImage: "css/images/saturn-purple.png"
    },
    {
        planet: "uranus",
        backgroundColor: "pink",
        cardImage: "css/images/uranus-pink.png"
    },
    {
        planet: "uranus",
        backgroundColor: "red",
        cardImage: "css/images/uranus-red.png"
    },
    {
        planet: "neptune",
        backgroundColor: "orange",
        cardImage: "css/images/neptune-orange.png"
    },
    {
        planet: "neptune",
        backgroundColor: "black",
        cardImage: "css/images/neptune-black.png"
    },
    {
        planet: "pluto",
        backgroundColor: "white",
        cardImage: "css/images/pluto-white.png"
    },
    {
        planet: "pluto",
        backgroundColor: "black",
        cardImage: "css/images/pluto-black.png"
    }
];
/*----- app's state (variables) -----*/

/*----- cached element references -----*/ 

/*----- event listeners -----*/ 
//click button to start timer and shuffle the cards
document.querySelector('button').addEventListener('click', function (){
    var thirtySec = 30,
    display = document.querySelector('.timer');
    startTimer(thirtySec, display);
        if (timer === "0"){
        render();
        clearInterval(si);
        shuffleCards();
        }
        
});

//push player score to the highscore array and add it to an unordered list in the highScores side bar


/*----- functions -----*/ 

//shuffles the cards randomly 
function shuffleCards(ary){
    var idx = ary.length, tempVal, randomIdx;
    while (idx !== 0){
        //randomizing the idx of each card
        randomIdx = Math.floor(Math.random() * idx);
        idx -= 1;
        tempVal = ary[idx];
        ary[idx] = ary[randomIdx];
        ary[randomIdx] = tempVal;
    }
    return ary;
};

let cardFlipped = false;
let guess = [];

function checkMatch(arry, evt){
    if(arry.length === 2){
    let [num1, num2] = arry;
    console.log(num1, num2, arry);
        if(cards[num1].planet === cards[num2].planet){
            score += 10;
            guess  = [];
            console.log('match');
        } else {
            console.log('hit')
            guess = [];
            setTimeout(() => {
                flipBack(num1, num2, evt);
               }, 600);
            
            
        }
    } 
    //else {
    // flipBack(evt);
    // }
}
function flipBack(num1, num2, evt){
    
    document.getElementById(`c${num1}`).setAttribute('src', "css/images/back.png");
    document.getElementById(`c${num2}`).setAttribute('src', "css/images/back.png");
    // evt.target.setAttribute('src', "css/images/back.png");
    
}
//flip the card from the carback image to main image
function flip(evt){ 
    let cardId = evt.target.getAttribute('data-id');
    guess.push(evt.target.getAttribute('data-id'));
    evt.target.setAttribute('src', cards[cardId].cardImage);
    checkMatch(guess, evt);
}
//start timer
function startTimer(duration, display){
    var shuffle = shuffleCards(cards);
    var timer = duration, minutes, seconds;
    //setting interval for timer
    si = setInterval(function (){
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;
        //display current time in header
        display.textContent = minutes + ":" + seconds;
        document.querySelector('button').addEventListener('click', function(){
        
        })

        if (--timer < 0) {
            timer = "0";
            clearInterval(si);
        };
    
}, 1000)//multiplied by 1000 because set interval is in miliseconds  
setTimeout(() => {
    clearInterval(timer);//clearing the interval so that the alert doesnt loop forever
    alert("Time's Up! Final Score:")
   }, 31100);//alerandomIdxrt doesn't cut off before the timer visibly hits zero
};

//render the gameboard images
function render(){
    for (i = 0; i < cards.length; i++) {
        var cardEl = document.createElement('img');
        cardEl.setAttribute('src', "css/images/back.png")
        cardEl.setAttribute('data-id', i);
        cardEl.setAttribute('id', 'c'+i)
        cardEl.addEventListener('click', flip);//flips card on click
        document.getElementById('cardBoard').appendChild(cardEl);
    }
};
render();