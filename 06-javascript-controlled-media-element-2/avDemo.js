window.onload = function() {
    vidObj = document.querySelector('#vidElem');
    let playButtonObj = document.querySelector('#playButton');
    let pauseButtonObj = document.querySelector('#pauseButton');
    let changeRateButtonObj = document.querySelector('#changeRateButton');
    let stopButtonObj = document.querySelector('#stopButton');
    let rewindButtonObj = document.querySelector('#rewindButton');
    let videoSelectorObj = document.querySelector('#videoSelector');
    let messageObj = document.querySelector('#message');

    playButtonObj.addEventListener('click' ,function() {
        vidObj.play();
    });
   
    pauseButtonObj.addEventListener('click',function() {
        vidObj.pause();
    });

    changeRateButtonObj.addEventListener('click',function() {
        vidObj.playbackRate = 2;
    });

    stopButtonObj.addEventListener('click', function() {
        vidObj.pause();
        vidObj.currentTime = 0;
    });

     rewindButtonObj.addEventListener('click',function() {
        vidObj.currentTime -= 10;
    });

    videoSelectorObj.addEventListener('change',function() {
       if (videoSelectorObj.value === 'timestamp1') {
            vidObj.currentTime = 29; //jump to the middle of the video @ 29 seconds
        } else if (videoSelectorObj.value === 'timestamp2') {
            vidObj.currentTime = 59; //and this jumps to the end of the video 2 59 seconds
        }
        vidObj.src = videoSelectorobj.value;
    });



vidObj.addEventListener('ended', function() {
    messageObj.innerHTML = "Thanks for watching!! Remember use side of your car like I did to break up the sand in your shoes";
    });



};