var randomValues = [];
var myList= $('p.list ');
var inputGuess= [];
var guessed =[];
var count = 10;

var flag = false;
$(document).ready(function() {
    var clock = setInterval(function(){
        if(count == 0){
            clearInterval(clock);
        }else{
            $('span.countdown').text(count);
        };
        count--;
    }, 1000);
    random();
    displayRandom();
});

function random(){
    
    for (let i = 0; i < 5; i++) {
        var random = Math.floor(Math.random()* ( 100 - 1 +1));
        randomValues.push(random);
     
    }
    
};




function displayRandom(){

    myList.text('Random numbers :'+randomValues);

};



setTimeout( function guessNumbers(){
    myList.hide();
    setTimeout(function(){
       
        for (var i = 0; i < randomValues.length; i++) {
            var guess = prompt('riscrivi i numeri');
            inputGuess.push(guess);
            for (let j = 0; j < randomValues.length; j++) {
                if(inputGuess[i] == randomValues[j]){
                    guessed.push(inputGuess[i]);
                    flag = true;
                }
                
            };
            
           
        };
        if(flag){
            myList.show();
            $('p.guess').text('Guessed numbers:  '+ guessed); 
        }else{
            $('p.guess').text('Guessed numbers:  '+ '0'); 
        }
        
    }, 500);
    
}, 10000);




