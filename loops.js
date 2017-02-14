function forLoop(array){
  for (let i = 0; i < 25; i++){ 
    array = [...array, `I am ${i} strange loop${i === 1 ? '' : 's'}.`];
  }
  return array;
}

function whileLoop(n){
 while (n > 0) {
  console.log(--n);
  } 
return 'done';
}

//Use the `maybeTrue()` function (you can copy it from this README) as the condition, and remove elements 
//from the array until the array is empty or until `maybeTrue()` returns `false`. 
//(Your condition might look something like `array.length > 0 && maybeTrue()`.) Finally, return the array.




function doWhileLoop(array){
  function maybeTrue() { // <----- Is this supposed to be here?
    return Math.random() >= 0.5 //<------ 
  }
do {
  array.pop();
} while (array.length > 0 && maybeTrue()); // <----- Or here?
return array;
}
