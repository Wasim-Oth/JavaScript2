/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  console.log(val);
}
f1(x);
console.log(x);

// it should throw an error becuase its Assignment to constant variable.
// but i can see in the log the resault is 9. it's working only as a parameter otherwise
// if i delete the parameter and replace the val with the variale name then it's throwing the error!

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return y;
}
f2(y);
console.log(y);



//the output shoild be {x:10} becuase we are reassigning the property 'x' in the
//  object 'y' 