window.addEventListener('load', function() {        
    // run this function after all of the page elements have been loaded
    
    let bill_box = document.querySelector('#billAmount');
    let result_box = document.getElementById('tip')
 
    document.querySelector('#calcButton').addEventListener('click', function() {
        let bill = bill_box.value;
        let calculated_tip = Number(bill) * 0.2;
        // document.querySelector('#tip').innerHTML = calculated_tip;
        let message = "The tip is $" + calculated_tip.toFixed(2);
        result_box.innerHTML = message;
        let total = Number(bill) + calculated_tip;
        result_box.innerHTML += "<br>The total is $" + total.toFixed(2);
    });
});