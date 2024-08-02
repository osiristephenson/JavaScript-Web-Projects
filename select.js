$csm_highlight = function(obj,font) {
    obj.style.color = font;
    obj.style.fontWeight = 'bold';
    obj.innerHTML += 'Nice!';
}

window.onload = function() {

    let highlight = $csm_highlight;
    
    let displayObj = document.getElementById('display');
    select_list = document.querySelectorAll('ul.selection li ')

   let select_handler = function(evt) {
        //alert('selected!!!');
        console.log(evt.target);
        let clicked_item = evt.target;
        let message = 'Clicked on' +  clicked_item.innerHTML + 'the quick brown fox jumped over the lazy dog';
        console.log(message);
        displayObj.innerHTML = message;
        //highlight(displayObj, 'red');
        highlight(displayObj, clicked_item.innerHTML);

    }
     
    for(let item of select_list) {
        item.addEventListener('click', select_handler);
    }


}
