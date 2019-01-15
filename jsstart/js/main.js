var codecontainer =document.getElementById("codecontainer");
var clickCounter = 0;
var numberOne=0;
var numberTwo=0;
var numberThree=0;

function getNumber(clickedButton){

    codecontainer.innerHTML += clickedButton.value;

    clickCounter++;

    console.log(clickCounter); 

        if(clickCounter==1){
            numberOne = clickedButton.value;
        }else if (clickCounter==2){
         numberTwo = clickedButton.value;        
        }else{
            numberThree = clickedButton.value;
        }
    if(clickCounter==3   ){
        document.getElementById("buttonOne").disabled = true;
        document.getElementById("buttonTwo").disabled = true;
        document.getElementById("buttonThree").disabled = true;
        
        if(numberOne==3 && numberTwo==3&& numberThree==1){
            answer.innerHTML= "correct";        
      
                    var correct = document.getElementById("correct");
                    var intervalTimer = 0;

                var blink = setInterval(function() {
            
            		
            intervalTimer++;
        
            //method to show div on and off
            //change the css of the green and red box to create a blinking effect
            if (correct.style.visibility == 'hidden') {
                correct.style.visibility = 'visible';
            }else {
                correct.style.visibility = 'hidden';
            }
        
            //check if the interval has runned ten times
            if(intervalTimer == 10) {
        
                //ClearInterval function stops the interval after 10 times
                clearInterval(blink); 
                document.getElementById("buttonOne").disabled = false;
                document.getElementById("buttonTwo").disabled = false;
                document.getElementById("buttonThree").disabled = false;
                answer.innerHTML= ""; 
                codecontainer.innerHTML="";
                    
            }
        
        }, 500);
        }
        else{
            answer.innerHTML= "incorrect";
         
            var correct = document.getElementById("incorrect");
            var intervalTimer = 0;

        var blink = setInterval(function() {
    
            
    intervalTimer++;

  
    if (correct.style.visibility == 'hidden') {
        correct.style.visibility = 'visible';
    }else {
        correct.style.visibility = 'hidden';
    }

    //check if the interval has runned ten times
    if(intervalTimer == 10) {

        //ClearInterval function stops the interval after 10 times
        clearInterval(blink); 
        document.getElementById("buttonOne").disabled = false;
        document.getElementById("buttonTwo").disabled = false;
        document.getElementById("buttonThree").disabled = false;
        answer.innerHTML= ""; 
        codecontainer.innerHTML="";
        clickCounter = "";
        numberOne="";
        numberTwo="";
        numberThree="";
                   
    }

}, 500);
                    
                    
                          
                
        }

    }
        
}
   
