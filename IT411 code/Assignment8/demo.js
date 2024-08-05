$(function() {

    runQuiz = function() {
        console.log("runQuiz function called");
        let count = 0;
       
            //This is the MVP question
        if ($('#curry').is(':checked')) {
            count +=1;
            console.log('Curry is checked as MVP');
        }
            

            //This is about Jordan Poole facts
        if ($('#clutchShots').is(':checked')) {
            count+= 1;
    
        }
        if ($('#freeThrows').is(':checked')) {
            count+= 1;
        
        }
        //rookie would be an incorrect answer chioice, his rookie season was 2019

        // This is about where GSW placed in Western Conference
        if ($('#first').is(':checked')) {
            count += 1;
        
        }

        //This is the top scorer question
        if($('#curryScorer').is(':checked')) {
            count += 1;
           
        }

        //This is the question about A.Wiggins jersey #
        if($('#jersey22').is(':checked')) {
            count += 1;
        }
        
        //Result message
        let resultMessage = "Keep trying!"
        if (count === 6 ) {
            resultMessage = " a perfect score. You're a true Warriors fan!";
        } else if (count === 5 ) {
            resultMessage = " that's excellent effort. You're one point away!";
        } else if (count === 4) {
            resultMessage = " and looking good. Almost there!";
        } else if (count === 3) {
            resultMessage= " which is fine. Just try again!!";
        } else if (count === 2 ) {
            resultMessage = " and not bad, you might want to catch up on more games!";
        } else if (count === 1) {
            resultMessage= " and this is not your best. Keep learning about the Warriors!";
        }
        
       //Displaying results
        $('#results').html(`Your score is  ${count}  out of 6,  ${resultMessage}`);
       
        //Displaying correct answers at the end
        $('#correctAnswers').show();

    };

    // Subtle indication in question interaction
    $('input[type=radio], input[type=checkbox]').on('click', function() {
        $(this).css('box-shadow', '0 0 5px yellow'); // Shadow
    });

    //hint shows through hover 
    $('.hint-icon').hover(function() {
    $(this).attr('title', $(this).data('hint')
    ); 
});
  


    $('#showButton').on('click', runQuiz);
    $('#correctAnswers').hide().fadeIn(2000);
});