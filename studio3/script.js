(function(){
    'use strict'
    console.log('reading JS');

    // //This gets the current player: 
    // gameData.players[gameData.index]

    // //This gets the first die and the second die: 
    // gameData.dice[gameData.roll1-1]
    // gameData.dice[gameData.roll2-1]

    // //This gets the score of the current player: 
    // gameData.score[gameData.index]

    // //This gets the index, or turn
    // gameData.index

    // //This gets the individual dice values and the added dice value
    // gameData.roll1
    // gameData.roll2
    // gameData.rollSum

    // //This gets the winning threshold
    // gameData.rollSum
    
    
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['images/1die.svg', 'images/2die.svg', 'images/3die.svg', 'images/4die.svg', 'images/5die.svg', 'images/6die.svg'],
        players: ['player one', 'player two'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function(){
        //randomly set game index
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);


        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML = '<button id="quit">quit</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        console.log(gameData.index);
        setUpTurn();
    })

    function setUpTurn(){
        game.innerHTML = `<p>turn: <span class=bigger> ${gameData.players[gameData.index]}</span></p>`;
        actionArea.innerHTML='<button id="roll">roll the dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            console.log('roll the dice!');
            throwDice();
        });
    }

    function throwDice(){
        actionArea.innerHTML='';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
        gameData.roll2= Math.floor(Math.random() *6)+ 1;
        game.innerHTML = `<p>roll the dice for <span class=bigger> ${gameData.players[gameData.index]}</span></p>`;
        game.innerHTML += `<div id="die"><img src='${gameData.dice[gameData.roll1-1]}' width='64' height='64'><br>
                        <img src='${gameData.dice[gameData.roll2-1]}'  width='64' height='64'></div>`;
        

        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData);

        //if two 1's are rolled
        if(gameData.rollSum === 2){
            game.innerHTML += '<p>snake eyes: your score resets<p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
           }
        
        //if either die is 1
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>one of your rolls was a one, switching to ${
                gameData.players[gameData.index]
            }</p>`;
            setTimeout(setUpTurn, 2000);
        }
        //if neither die is 1
        else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">roll again</button><button id="pass">pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = 'start a new game';
        }
        else{
            showCurrentScore();

        }
    }

    function showCurrentScore(){
        score.innerHTML = `<div id=scoretitle><p>score:</p></div><p><span class=biggerscore>${gameData.players[0]}:
        ${gameData.score[0]}</span></p><p><span class=biggerscore>${gameData.players[1]}:
        ${gameData.score[1]}</span></p>`;
    }

    document.querySelector('.open').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('rules').className='showing';
    });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('rules').className='hidden';
        
    });

    function togglePopup() {
        console.log('starting popup')
        var popup = document.getElementById('rules');
        var button = document.getElementById('rulebutton');
        if (popup.classList.contains('hidden')) {
            popup.classList.remove('hidden');
            button.innerText = 'close rules';
            console.log('opened popup');
        } else {
            console.log('closing popup');
            popup.classList.add('hidden');
            button.innerText = 'open rules';
            console.log('closed popup');
        }
    }

      document.getElementById('rulebutton').addEventListener('click', function(event) {
        event.preventDefault();
        togglePopup();
    });


})();