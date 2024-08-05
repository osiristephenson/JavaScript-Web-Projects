// farm = ['cow', 'emu', 'pig', 'sheep']

farm = [
    { name: 'cow', sound: 'moo', size: 3 },
    { name: 'emu', sound: 'thump', size: 2, image: 'cow.jpg' },
    { name: 'pig', sound: 'oink', size: 1},
    { name: 'sheep', sound: 'baa', size: 2}
]

inventory = [
    { name: 'stapler', cost: 15, quantity: 4},
    { name: 'pencil', cost: 1, quantity: 15},
    { name: 'scissors', cost: 22, quantity: 6}
]

window.onload = function() {

    let contentBox = document.querySelector('#content');

    // display the array of inventory nicely in the content tag
    // optional: alongside each item, dispaly the total cost
    // optional: at the bottom of the list, display the grand total

};