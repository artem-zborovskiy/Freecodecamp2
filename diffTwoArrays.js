// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    function findDiff(arrF, arrS) {
        let newArr = arrF.filter(function(curr) {
            if(!arrS.includes(curr)) {
                return curr;
            }
        });
        
        return newArr;
    }
  
    return findDiff(arr1, arr2).concat(findDiff(arr2, arr1));
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);