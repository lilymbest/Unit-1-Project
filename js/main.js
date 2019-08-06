/*----- constants -----*/ 
// const board, score;
// const highScores = [];
const cards = [
    {
        planet: "moon",
        backgroundColor: "blue"
    },
    {
        planet: "moon",
        backgroundColor: "red"
    },
    {
        planet: "mercury",
        backgroundColor: "green"
    },
    {
        planet: "mercury",
        backgroundColor: "blue"
    },
    {
        planet: "venus",
        backgroundColor: "pink"
    },
    {
        planet: "venus",
        backgroundColor: "yellow"
    },
    {
        plant: "earth",
        backgroundColor: "purple"
    },
    {
        plant: "earth",
        backgroundColor: "grey"
    },
    {
        planet: "mars",
        backgroundColor: "grey"
    },
    {
        planet: "mars",
        backgroundColor: "orange"
    },
    {
        planet: "jupiter",
        backgroundColor: "green"
    },
    {
        planet: "jupiter",
        backgroundColor: "yellow"
    },
    {
        planet: "saturn",
        backgroundColor: "white"
    },
    {
        planet: "saturn",
        backgroundColor: "purple"
    },
    {
        planet: "uranus",
        backgroundColor: "pink"
    },
    {
        planet: "uranus",
        backgroundColor: "red"
    },
    {
        planet: "neptune",
        backgroundColor: "orange"
    },
    {
        planet: "neptune",
        backgroundColor: "black"
    },
    {
        planet: "pluto",
        backgroundColor: "white"
    },
    {
        planet: "pluto",
        backgroundColor: "black"
    }
]
/*----- app's state (variables) -----*/ 

/*----- cached element references -----*/ 

/*----- event listeners -----*/ 

document.querySelector('button').addEventListener('click', function (){
        var oneMinute = 5,
        display = document.querySelector('.timer');
        startTimer(oneMinute, display);
        render();

});


/*----- functions -----*/ 
init();

function init(){
   
}

function replay(){

}

function checkMatch(){

}

function flip(){
    
}

function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function (){
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        display.textContent = minutes + ":" + seconds;
        document.querySelector('button').addEventListener('click', function(){
            render();
        })

        if (--timer < 0) {
            timer = "0";
            alert("Time's Up!");
            render();
        }
    }, 1000);
    
};

function render(){

}