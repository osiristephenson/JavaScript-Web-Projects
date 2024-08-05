console.log('red');

window.addEventListener('load', function() {        
    // run this function after all of the page elements have been loaded

    console.log('green');
    
    let bill_box = document.querySelector('#billAmount');
    let result_box = document.getElementById('tip');
    let service_menu = document.querySelector('#serviceMenu');
 
    document.querySelector('#calcButton').addEventListener('click', function() {
        console.log('brown');
        let bill = bill_box.value;
        let calculated_tip;
        if (service_menu.value === "Good") {
            calculated_tip = Number(bill) * 0.2;
        }
        else if (service_menu.value === "Fair") {
            calculated_tip = Number(bill) * 0.15;
        }
        else {
            calculated_tip = Number(bill) * 0.25;
        }
        
        // document.querySelector('#tip').innerHTML = calculated_tip;
        let message = "The tip is $" + calculated_tip.toFixed(2);
        result_box.innerHTML = message;
        let total = Number(bill) + calculated_tip;
        result_box.innerHTML += "<br>The total is $" + total.toFixed(2);
    });
    console.log('yellow');
});
console.log('blue');