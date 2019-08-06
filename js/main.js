/*----- constants -----*/ 
const board, score;
const highScores = [];
// card array
const cards = [
    {
        planet: "moon",
        backgroundColor: "blue",
        cardImage: ""
    },
    {
        planet: "moon",
        backgroundColor: "red",
        cardImage: ""
    },
    {
        planet: "mercury",
        backgroundColor: "green",
        cardImage: ""
    },
    {
        planet: "mercury",
        backgroundColor: "blue",
        cardImage: ""
    },
    {
        planet: "venus",
        backgroundColor: "pink",
        cardImage: ""
    },
    {
        planet: "venus",
        backgroundColor: "yellow",
        cardImage: ""
    },
    {
        plant: "earth",
        backgroundColor: "purple",
        cardImage: ""
    },
    {
        plant: "earth",
        backgroundColor: "grey",
        cardImage: ""
    },
    {
        planet: "mars",
        backgroundColor: "grey",
        cardImage: ""
    },
    {
        planet: "mars",
        backgroundColor: "orange",
        cardImage: ""
    },
    {
        planet: "jupiter",
        backgroundColor: "green",
        cardImage: ""
    },
    {
        planet: "jupiter",
        backgroundColor: "yellow",
        cardImage: ""
    },
    {
        planet: "saturn",
        backgroundColor: "white",
        cardImage: ""
    },
    {
        planet: "saturn",
        backgroundColor: "purple",
        cardImage: ""
    },
    {
        planet: "uranus",
        backgroundColor: "pink",
        cardImage: ""
    },
    {
        planet: "uranus",
        backgroundColor: "red",
        cardImage: ""
    },
    {
        planet: "neptune",
        backgroundColor: "orange",
        cardImage: ""
    },
    {
        planet: "neptune",
        backgroundColor: "black",
        cardImage: ""
    },
    {
        planet: "pluto",
        backgroundColor: "white",
        cardImage: ""
    },
    {
        planet: "pluto",
        backgroundColor: "black",
        cardImage: ""
    }
]
/*----- app's state (variables) -----*/

/*----- cached element references -----*/ 

/*----- event listeners -----*/ 
//click button to start timer and shuffle the cards
document.querySelector('button').addEventListener('click', function (){
    var thirtySec = 30,
    display = document.querySelector('.timer');
    startTimer(thirtySec, display);
        if (timer === "0"){
        clearInterval(si);
        shuffleCards();
        }
});


/*----- functions -----*/ 
init();

function init(){
   
}

//shuffles the cards randomly 
function shuffleCards(ary){
    var idx = ary.length, tempVal, randomIdx;
    while (idx !== 0){
        randomIdx = Math.floor(Math.random() * idx);
        idx -= 1;
        tempVal = ary[idx];
        ary[idx] = ary[randomIdx];
        ary[randomIdx] = tempVal;
    }
    return ary;
};

function checkMatch(){

}

function flip(){
    var cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    checkMatch();
}
//start timer
function startTimer(duration, display){
    var shuffle = shuffleCards(cards);
    var timer = duration, minutes, seconds;
    //setting interval for timer
    si = setInterval(function (){
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        //if is m
        minutes = minutes < 10 ? "0" + minutes : minutes;
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
    alert("Time's Up!")
   }, 31100);
};

//render the game
function render(){
    for (i = 0; i < cards.length; i++) {
        var cardEl = document.createElement('img');
        cardEl.setAttribute('src', "css/images/back.png")
        cardEl.setAttribute('data-id', i);
        cardEl.addEventListener('click', flip);//flips card
        
    }
}