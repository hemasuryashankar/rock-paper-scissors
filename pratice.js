let computerMove='';
let playerMove='';
let resultMove='';
let score=
{
Wins:0,
Losses:0,
Tie:0
};


let resultElement=document.querySelector('.js-result-move');

function moveDisplay()
{
    let playerImage=`${playerMove}.png`;
    let computerImage=`${computerMove}.png`;
    resultElement.innerHTML = `You <img class="displaymove" src="${playerImage}" /> <img class="displaymove" src="${computerImage}" /> Computer`;
}

function updateScore()
{   
    
    localStorage.setItem("myobject", JSON.stringify(score));
    let scoreElement=document.querySelector('.js-score');
    scoreElement.innerHTML= `Wins: ${score.Wins} Losses: ${score.Losses} Tie: ${score.Tie}`;

}


const JsonString=JSON.stringify(score);

const storedItem = localStorage.getItem("myobject");

if (storedItem) {
    score = JSON.parse(storedItem);
  } else {
    score = {
      Wins: 0,
      Losses: 0,
      Tie: 0
    };
  }
  
  updateScore(); 


function computerFun()
{
     computerMove=Math.random();
    if(computerMove>=0 && computerMove<1/3)
    {
    computerMove='rock';
    }
    else if(computerMove>=1/3 && computerMove<2/3)
    {
    computerMove='paper';
    }
    else
    {
        computerMove='scissors';
    }

}

function rockFunction()
{   
    computerFun();
    playerMove='rock';
    if(computerMove==='scissors')
    {
        resultMove='You Win';
        score.Wins++;
    }
    else if(computerMove==='paper')
    {
        resultMove='You Loss'; 
        score.Losses++;  
    }
    else
    {
        resultMove='Tie';
        score.Tie++;
    }
    document.querySelector('.js-result').innerHTML=resultMove;
    updateScore();
    moveDisplay();
}

function paperFunction()
{   computerFun();
    playerMove='paper';
    if(computerMove==='rock')
    {
        resultMove='You Win';
        score.Wins++;
    }
    else if(computerMove==='scissors')
    {
        resultMove='You Loss';
        score.Losses++;   
    }
    else
    {
        resultMove='Tie';
        score.Tie++;
    }
    document.querySelector('.js-result').innerHTML=resultMove;
updateScore();
moveDisplay();

}

function scissorsFunction()
{   computerFun();
    playerMove='scissors';
    if(computerMove==='paper')
    {
        resultMove='You Win';
        score.Wins++;
    }
    else if(computerMove==='rock')
    {
        resultMove='You Loss'; 
        score.Losses++;  
    }
    else
    {
        resultMove='Tie';
        score.Tie++;
    }
    document.querySelector('.js-result').innerHTML=resultMove;
    updateScore();
    moveDisplay();
}


function resetFunction()
{
score={
    Wins:0,
    Losses:0,
    Tie:0
};
localStorage.setItem("myobject", JSON.stringify(score));
updateScore();
}
