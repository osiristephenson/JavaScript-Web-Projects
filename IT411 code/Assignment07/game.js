window.onload = function () {

 let attempts = 0;
 let ruinsExcavated = 0;
 
  tryDig = function(targetCell) {
    attempts++;
    let targetObj = board.dig(targetCell);
  
    if (targetObj) {
      document.getElementById('messageDisplay').textContent =' Looks like you found a ' + targetObj.name;
      targetCell.innerHTML = '©';
      targetCell.style.color = 'pink';
      targetCell.classList.add('yes');
      ruinsExcavated += 1;

    if (targetObj.successes === targetObj.size) {
      document.getElementById('summaryMessage').textContent = ' An excavated ' + targetObj.name;
    }
  else {
      document.getElementById('messageDisplay').textContent ='';
      targetCell.innerHTML = '¥';
      targetCell.style.color = 'purple';
      targetCell.classList.add('no');
    }
  }

  updatePerformanceDisplay();
}

function updatePerformanceDisplay() {
  let attempts= document.getElementById('attempts');
  let ruinsExcavated= document.getElementById('ruinsExcavated');
  let summaryMessage= document.getElementById('summaryMessage');

  if(ruinsExcavated ===board.ruins.length) {
    summaryMessage.textContent = "Hey, look at you, that's everything! Nice operating";
  }
}

  board = new GameBoard();
  board.setBoard();

  document.getElementById("coordinates").onchange = function(event) {
    let cellId = event.target.value;
    let targetCell = document.getElementById("cell" + cellId);
    tryDig(targetCell);
  };
  
  let cell = document.querySelector('#cellb6');
  tryDig(cell);

};