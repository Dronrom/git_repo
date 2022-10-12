// Implement the getModifiedArray(array) function, which takes an arbitrary array, and returns an array with the value of the first element of the array equal to “Start”, the last element of the array equal to “End” and the rest of elements should be the same as in an initial array. The initial array should stay unchanged.

// Function example:

// getModifiedArray([12, 6, 22, 0, -8])); // [‘Start’, 6, 22, 0, ‘End’]

function getModifiedArray(array) {
    var modified = [...array]
    modified[0] = 'Start'  
    modified[modified.length - 1] = 'End'
    return modified
  }


  console.log(getModifiedArray([100, 200]));
  const arr = [100, 200];
getModifiedArray(arr)
console.log(arr);