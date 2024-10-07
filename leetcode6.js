// var hello = function(arr,fn){
//     var arr = [1,2,3]
//     var newarr = hey.map((fn)=>{

//     })

// }


function map(arr, fn) {
    const returnedArray = []; // Nayi array jo result store karegi
    
    // Input array ke har element pe loop karo
    for (let i = 0; i < arr.length; i++) {
      returnedArray.push(fn(arr[i], i)); // Function fn apply karke result store karo
    }
    
    return returnedArray; // Transformed array return karo
  }