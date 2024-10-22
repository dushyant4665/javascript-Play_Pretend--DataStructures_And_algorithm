// Write a function expect that helps developers test their code. 
// It should take in any value val and return an object with the following two functions.

// (a)
// toBe(val) accepts another value and returns true if the two values === each other. 
// If they are not equal, it should throw an error "Not Equal".

// (b)
// notToBe(val) accepts another value and returns true if the two values !== each other. 
// If they are equal, it should throw an error "Equal".



// solution

function expect(val) {                            //creating a function named expect which takes in a value val
    return {                                      //the function returns an object.
        toBe: function(eqVal) {                   //the first method in the object is 'toBe which accepts eqVal as a parameter
            if (val === eqVal) {                  //it checks if val is strictly equal to eqVal
                return true;                      //if they are equal, it returns true
            } else {                              //otherwise,
                throw new Error('Not Equal');     //it throws an error with the message Not Equal
            }  
        },
        notToBe: function(eqVal) {                //the second method is notToBe, which accepts eqVal as a parameter
            if (val !== eqVal) {                  //it checks if val is NOT strictly equal to eqVal
                return true;                      //if they are not equal, it returns true.
            } else {                              //otherwise,
                throw new Error('Equal');         //it throws an error with the message Equal
         }
    }
};
}
