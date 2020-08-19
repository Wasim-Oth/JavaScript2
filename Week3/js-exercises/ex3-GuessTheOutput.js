/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();



/* it will alert 12 because inside the outer function'x' we are reassigning
the global variable 'a' to 12 and then we are returning an inner function which 
alerting the variable 'a'. so it will look for the variable 'a' inside
the inner function will not find it, so it will look in the outer function it find a = 12
 */

  /*for me the parentheses here })(); are confusing. why sometime we call the function
   only with the name without parentheses and sometime we have to use them?
   i still can't understaand that i always have to try it*/


   //in this example if i add parentheses to 'return insideFuncyion' i get error!

  //  function createBase(num1) {
  //   // Put here your logic...
  //   let addnum;
  //   const insideFunction = (num2)=>{
  //     addnum = num1 + num2;
  //     return addnum
  //   }
  //   return insideFunction;
  // };
  
  // const addSix = createBase(6);
  
  // console.log(addSix(9));
  // console.log(addSix(18));
  // console.log(addSix(30));