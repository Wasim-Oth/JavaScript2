/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
function removeDuplicates(letter){
  // let ff = letter.sort();
  // console.log(ff);
  let newLetters=[];
  letter.forEach((element, ind) => {
    //  console.log('lertters are: ' + element + '; '+ 'inedx is: ' + ind)
    //  console.log(letter.indexOf(element));
    if ( letter.indexOf(element) == ind){
      // console.log(element);
      newLetters.push(element)
    }
  });
  return newLetters
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

// console.log(removeDuplicates(letters));
const removeDuplicate = (removeDuplicates(letters));

// i can compare two arrays in this 2 ways
// if (JSON.stringify(removeDuplicate) ===JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f']))
if (removeDuplicate == ['a', 'b', 'c', 'd', 'e', 'f'] +[])
  console.log("Hooray!")