// Write a function combineArray(arr1, arr2), which takes 2 arrays, and returns a new array consisting only of numeric elements of arrays arr1 and arr2.



// Function example:

// combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));  // [12, 22, -8, 6, 15]



function combineArray(arr1, arr2) {
    let arr = [].concat(arr1,arr2)
    let numbersArr = (val) => {
      if (typeof(val) === 'number') {      
          return val;
      }
    }
    let numbers = arr.filter(numbersArr);
    return numbers
}

console.log(combineArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));