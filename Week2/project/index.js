/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */


 const timeUp= document.querySelector('#up');
 const timeDown= document.querySelector('#down');
 const startingTime= document.querySelector('#set-time');
 const currentTimer= document.querySelector('#timer');
 const startButton= document.querySelector('#start');
 const pause= document.querySelector('#pause');

 let duration = startingTime.textContent;
 let time;
 let min;
 let sec;
 let myInterVal = false;
 let interValId;
//  let cond = true;

timeUp.addEventListener('click', addOneMin);
timeDown.addEventListener('click', removeOneMin)

function addOneMin(){
  if(duration < 60){
    duration++;
    startingTime.innerText = duration;
    currentTimer.innerText= `${duration}:00`;
}
};

function removeOneMin(){
  if(duration > 0){
    duration--;
    startingTime.innerText = duration;
    currentTimer.innerText= `${duration}:00`;
   }
  };

  startButton.addEventListener('click', function(){
    myInterVal = !myInterVal  
    if(myInterVal == true){
      startButton.className = "fa fa-stop"
      time= duration * 60;
       interValId = setInterval(function(){
        time--
        min= Math.floor(time / 60);
        sec= time % 60;
        if(sec= sec < 10 ? '0' + sec : sec);
        // 
        currentTimer.innerText= `${min}:${sec}`;
        if( min == 0 && sec == 0 ){
          clearInterval(interValId);
          currentTimer.innerText= "Time's up";
        }
      }, 1000);  
      
    } else {
      startButton.className = "fa fa-play"
      currentTimer.innerText= `${duration}:00`;
      clearInterval(interValId);
    }
  });

  pause.addEventListener('click', function(){
    clearInterval(interValId); 
    startButton.className = "fa fa-play"
  })






//  let timeUp= document.querySelector('#up');
//  let timeDown= document.querySelector('#down');
//  let startingTime= document.querySelector('#set-time');
//  let currentTimer= document.querySelector('#timer');
//  let startButton= document.querySelector('#start');
//  let pause= document.querySelector('#pause');

//  let duration = startingTime.textContent;
//  let time;
//  let min;
//  let sec;
//  let condition = true;
//  let myInterVal = true;

// timeUp.addEventListener('click', addOneMin);
// timeDown.addEventListener('click', removeOneMin)

// function addOneMin(){
//   if(condition){
//     duration++;
//     if(duration <= 0){
//     startingTime.textContent= duration;
//     timer.innerText= "Time's Up"
//   } else {
//      time = duration * 60;
//      min= Math.floor( time / 60);
//      sec = time % 60;
//   if (sec = sec < 10 ? '0' + sec : sec);
//      startingTime.textContent= duration;
//      timer.innerText= `${time}:${sec}`;
// }
// }
// };

// function removeOneMin(){
//   if(condition){
//     duration--;
//   if(duration <= 0){
//     startingTime.textContent= duration;
//     timer.innerText= "Time's Up"
//   } else {
//     time= duration * 60;
//     min= Math.floor(time / 60);
//     sec= time % 60;
//     if(sec= sec < 10 ? '0' + sec : sec);
//     startingTime.innerText= duration;
//     timer.innerText= `${min}:${sec}`;
    
//     }
//    }
//   };

//   startButton.addEventListener('click', function(){

//     if(myInterVal == true){
//       startButton.className = "fa fa-stop"
//       myInterVal = setInterval(function(){
//         sec--;
//         time= duration * 60;
//         min= Math.floor(time / 60);
//         sec= time % 60;
//         if(sec= sec < 10 ? '0' + sec : sec);
//         startingTime.innerText= duration;
//         timer.innerText= `${min}:${sec}`;
//       }, 100);
//     } else {
//       startButton.className = "fa fa-play"
//       clearInterval(myInterVal);
//       myInterVal= true;
//     }
//   });


  
