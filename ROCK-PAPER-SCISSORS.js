 
let score =JSON.parse(localStorage.getItem('score'));

  if(!score) //deci prima data imi initializez scorul cu 0
  {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }

  function playGame(playerMove)
  {
    const computerMove = pickRandomMove();
    let result='';

    if(playerMove === 'scissors'){
      if(computerMove === 'rock'){
        result = 'YOU LOSE!';
      }else if(computerMove === 'paper'){
        result = 'YOU WIN! YEEEY';
      }else if(computerMove === 'scissors'){
        result = 'TIE';
    }

    }else if(playerMove === 'paper'){
      if(computerMove === 'rock'){
        result = 'YOU WIN! YEEEY';
      }else if(computerMove === 'paper'){
        result = 'TIE';
      }else if(computerMove === 'scissors'){
        result = 'YOU LOSE!';
      }

    }else if(playerMove ==='rock'){
      if(computerMove === 'rock'){
        result = 'TIE';
      }else if(computerMove === 'paper'){
        result = 'YOU LOSE!';
      }else if(computerMove === 'scissors'){
        result = 'YOU WIN! YEEEY';
      }
    }

    if (result === 'YOU WIN! YEEEY') {
      score.wins += 1;
    } else if (result === 'YOU LOSE!') {
      score.losses += 1;
    } else if (result === 'TIE') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score)); //aici imi actualizez scorul

    alert(`You chose: ${playerMove}, computer chose: ${computerMove} => ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`); 
  }

  function pickRandomMove()
  {
    let computerMove=' ';
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3){
      computerMove ='rock';
    }else if(randomNumber >=1/3 && randomNumber < 2/3){
      computerMove = 'paper';
    }else{
      computerMove = 'scissors';
    }
  return computerMove;
 }
