window.addEventListener('load', function() {        
    
    // assign html elements to variables
    let buy_button = document.querySelector('#buyButton');
    let iphone_model = document.querySelector('#iphoneModel');
    let white_button = document.querySelector('#whiteButton')
    let grey_button = document.querySelector('#greyButton');
    let addon_box = document.querySelector('#addonBox');
    let outlook_paragraph = document.querySelector('#iphone');

    buy_button.addEventListener('click', function() { 
        let selectedModel = iphone_model.value;
        let selectedColor = (white_button.checked) ? 'White' : 'Grey';
        let message = '';
        
        console.log('Button clicked');
        console.log('Selected model:', selectedModel);
        console.log('Selected Color:'), selectedColor
        
        if (selectedModel =='iPhone 15 pro') {
            if (grey_button.checked) {
                message ="Solid choice";
        }
         else{
            message = "A17 Pro chip and a new action button!";
         }
        }  
        else {
            message = "Nice pick";
        }
    
        if (addon_box.value == 'phone case') {
            message += "---Suprise :) The case comes free!!"
        }
        outlook_paragraph.textContent = message;
   
    });
}); 