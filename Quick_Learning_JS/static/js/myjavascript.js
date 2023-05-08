//alert("hello george");
//console.log("hello i am here");

function calculateBirthDays(){
    var yearOfBirth = prompt("What year you were born");
    let ageInDays = (2020-yearOfBirth)*365;
    var h1Text = document.createElement('h1');
    var textAnser = document.createTextNode('Your age is '+ ageInDays);
    h1Text.setAttribute('id','ageInDays');
    h1Text.appendChild(textAnser);
    document.getElementById('flex-box-result').appendChild(h1Text);
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://media.giphy.com/media/ZcXbJQxHb5YsS2qid3/giphy.gif";
    //image.src="C:\diya\masha_bear.png";
    div.appendChild(image);
}
// Rock/Paper/Scissors
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice= numberToChoice(randToRpsInt());
    //console.log(botChoice);
    //decideWinner returns an array e.g [1,0]==> Human won,[0,1]==>Computer Won,[.5,.5]==>Drawn
    results = decideWinner(humanChoice,botChoice);
    //console.log(results);
    message = finalMessage(results); 
    //console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,botChoice){
    var rpsDataBase={
        'rock':{'scissors':1,'rock':.5,'paper':0},
        'paper':{'scissors':0,'rock':1,'paper':.5},
        'scissors':{'scissors':.5,'rock':0,'paper':1}
    }
    var yourScore = rpsDataBase[yourChoice][botChoice];
    var computerScore = rpsDataBase[botChoice][yourChoice];
    return [yourScore,computerScore];
}
function finalMessage([yourScore,computerScore]){
    if (yourScore===0){
        return {'message':'You lost','color':'red'}
    } else if(yourScore === .5){
        return {'message':'You tied','color':'yellow'}
    } else{
        return {'message':'You won','color':'green'}
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase ={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    };
    //remove all images
   document.getElementById('rock').remove(); 
   document.getElementById('paper').remove(); 
   document.getElementById('scissors').remove(); 

   var humanDiv= document.createElement('div');
   var botDiv = document.createElement('div');
   var messageDiv = document.createElement('div');

   humanDiv.innerHTML = "<img src='"+imagesDatabase[humanImageChoice]+"' height=150 width=150>";
   //<img id="rock" src="static/images/rock_1.jpg" height="150" width="150" onclick="rpsGame(this)" ></img>
   document.getElementById('flex-box-rps-div').appendChild(humanDiv);

   messageDiv.innerHTML ="<h1 style='color: "+finalMessage['color']+"'>"+finalMessage['message']+"</h1>";
   document.getElementById('flex-box-rps-div').appendChild(messageDiv);

   botDiv.innerHTML= "<img src='"+imagesDatabase[botImageChoice]+"' height=150 width=150>";
   document.getElementById('flex-box-rps-div').appendChild(botDiv);

   

}