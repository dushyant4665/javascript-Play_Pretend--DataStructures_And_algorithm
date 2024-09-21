// Write a function expect that helps developers test their code. 
// It should take in any value val and return an object with the following two functions.

// (a)
// toBe(val) accepts another value and returns true if the two values === each other. 
// If they are not equal, it should throw an error "Not Equal".

// (b)
// notToBe(val) accepts another value and returns true if the two values !== each other. 
// If they are equal, it should throw an error "Equal".



// solution

function expect(val){
    return {
        toBe:function(eqVal){
            if (val===eqVal){
                 return true
            }
            else{
                throw new error ('not equal')
            }
        }
        notToBe:function(eqVal){
            if (val!==eqVal){
                return true
            }
            else{
                throw new error ('equal')
            }

        }
    }
}