'use strict';

var score, roundscore, activePlayer;

init();


 document.querySelector('.btn--roll').addEventListener('click', function() {
        
        var dice = Math.trunc(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';
    diceDOM.src = './image/dice-' + dice + '.png';

    if (dice !==1) {
      roundscore += dice;
      document.querySelector('#current--'+ activePlayer).textContent = roundscore;
    } 

    else {
      nextPlayer();
    }  

    

    });


    document.querySelector('.btn--hold').addEventListener('click', function() {

        score[activePlayer] += roundscore;
        document.querySelector('#score--' + activePlayer).textContent =score[activePlayer]

        if (score[activePlayer] >= 20) {
            document.querySelector('#name--' + activePlayer).textcontent= 'player--winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('reset');
        
        }
        else {
           nextPlayer();
        }

          nextPlayer();
    
    });

   
    
    function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundscore = 0;
  
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';
  
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
  
        document.querySelector('.dice').style.display = 'none;'

    }

    
    document.querySelector('.btn--new').addEventListener('click', init);

    function init() {
        score = [0,0];
        roundscore =0;
        activePlayer = 0;

        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score--0').textContent = '0';
        document.getElementById('score--1').textContent = '0';
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';
        

        document.querySelector('.player--0').classList.remove('winner');
        document.querySelector('.player--1').classList.remove('winner');
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');
        

    }





