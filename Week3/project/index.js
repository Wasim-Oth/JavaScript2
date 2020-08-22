// Your code goes in here
let log= console.log;
let paymentAmount = document.querySelector(".payment");
let service= document.querySelector('#service');
let peopleNumber = document.querySelector(".people");
let calculate= document.querySelector('.calculate');
let tipAmount= document.querySelector('.tip-amount');
let each= document.querySelector('#each');


calculate.addEventListener('click', cal);
function cal(){
if (paymentAmount.value == '' || service.value == 0 || peopleNumber.value == ''){
    alert('Fill in all the fields!')
}
else {
    tipAmount.textContent= `TIP AMOUNT $${Math.floor(((parseFloat(paymentAmount.value)/100) * parseFloat(service.value)) / parseFloat(peopleNumber.value) * 100 ) / 100 } `;
    if (peopleNumber.value > 1 ){
        each.style.display = 'block';
    }
    else{
        each.style.display = 'none';
     }
    } 

   

};






