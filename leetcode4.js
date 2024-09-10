// Write a function createCounter.
// It should accept an initial integer init. 
// It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.


var createCounter = function(init){
    var g = init;
    return{
        increment:()=>++g,
        decrement:()=>--g,
        reset:()=>g=init
    }  
}

function createCounter(init){
    let f =init;
    return{
        increament:()=>f+1,
        decrement:()=>f-1,
        reset:()=>f
    }
}
