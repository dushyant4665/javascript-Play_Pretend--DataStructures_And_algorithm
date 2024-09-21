// Write a function expect that helps developers test their code. 
// It should take in any value val and return an object with the following two functions.

function expect (val){
    return {
        toBe:function(valComp){
        if(val===valComp){
            return true;
        }
        else{
         throw new Error ('Not Equal')
        }
    },
    notToBe:function(valComp){
    if (val!==valComp){
        return true; 
    }
    else{
     throw new Error ('Equal')
    }
}
};
}
try{
    console.log(expect(5).toBe(5))
}catch{
    console.error(error.message)
}