farm = ['cow', 'emu', 'pig', 'sheep']

window.onload = function() {

    let contentBox = document.querySelector('#content');

    // contentBox.innerHTML = farm;

    contentBox.innerHTML = '<>';



    for (let item of farm) {
        contentBox.innerHTML += '<p>The ' + item.name + ' cost is $ ' + item.cost + '.</p>'
        contentBox.innerHTML += '<p> The grand total is $' + item


    }

    contentBox.innerHTML += ''

};