/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

 let timeUp= document.querySelector('#up');
 let timeDown= document.querySelector('#down');
 let startingTime= document.querySelector('#set-time');
 let currentTimer= document.querySelector('#timer');
 let startButton= document.querySelector('#start');
 let pause= document.querySelector('#pause');


 let duration = startingTime.textContent;
 let time;
 let min;
 let sec;
 let condition = true;
 let myInterVal = true;
 


timeUp.addEventListener('click', addOneMin);
timeDown.addEventListener('click', removeOneMin)


function addOneMin(){
  if(condition){
    duration++;
    if(duration <= 0){
    startingTime.textContent= duration;
    timer.innerText= "Time's Up"
  } else {
     time = duration * 60;
     min= Math.floor( time / 60);
     sec = time % 60;
  if (sec = sec < 10 ? '0' + sec : sec);
     startingTime.textContent= duration;
     timer.innerText= `${time}:${sec}`;
}
}
};

function removeOneMin(){
  if(condition){
    duration--;
  if(duration <= 0){
    startingTime.textContent= duration;
    timer.innerText= "Time's Up"
  } else {
    time= duration * 60;
    min= Math.floor(time / 60);
    sec= time % 60;
    if(sec= sec < 10 ? '0' + sec : sec);
    startingTime.innerText= duration;
    timer.innerText= `${min}:${sec}`;
    
    }
   }
  };

  


  startButton.addEventListener('click', function(){

    if(myInterVal == true){
      startButton.className = "fa fa-stop"
      myInterVal = setInterval(function(){
        sec--;
        time= duration * 60;
        min= Math.floor(time / 60);
        sec= time % 60;
        if(sec= sec < 10 ? '0' + sec : sec);
        startingTime.innerText= duration;
        timer.innerText= `${min}:${sec}`;
      }, 100);
    } else {
      startButton.className = "fa fa-play"
      clearInterval(myInterVal);
      myInterVal= true;
    }
  });


  // function startTemer(){
    
  //   intervalId = setInterval(counter, 1000);
  //   // setInterval(countDownSec, 100);
  // }

  // function counter(){
  //   sec--;
  // }
  // countDown(removeOneMin)


 


//  currentTimerMin.innerHTML= startingTime.innerHTML;
//  xx= currentTimerMin.innerHTML;
//  let time = xx * 60;


//  function setTime(){
//   timeUp.addEventListener('click', addOneMin);
//   timeDown.addEventListener('click', removeOneMin)
 
//  function addOneMin(){
//   startingTime.innerHTML++;
//   currentTimerMin.innerHTML= parseFloat(startingTime.innerHTML);
//   xx= currentTimerMin.innerHTML;
//   // y = currentTimerMin.innerHTML;

  
//  };

//  function removeOneMin(){
//   startingTime.innerHTML--;
//   currentTimerMin.innerHTML= parseFloat(startingTime.innerHTML);
//   xx= currentTimerMin.innerHTML;
//   // y=currentTimerMin.innerHTML
//  };
 
 
// };
// setTime();

// function updateCountdown(){
//   // time = currentTimerMin.innerHTML * 60;
//   const min = Math.floor(time / 60);
//   let seconds = time % 60;
//   seconds = seconds < 10 ? '0' + seconds : seconds; 
//   currentTimerMin.innerHTML= `${min}: ${seconds}`;
//   time--;
// }

// setInterval(updateCountdown, 1000);
 




// startButton.addEventListener('click', play);
      
// function play(){
//   setInterval(countDown, 100);
//   // setInterval(countDownSec, 100);
// }

// function countDown(){
//   currentTimerMin.innerHTML --;
//   // if( currentTimerMin.innerHTML == 20){
//   //   // clearInterval (countDown);
//   //   currentTimerMin.innerHTML= 'done'
//   // }
// };
