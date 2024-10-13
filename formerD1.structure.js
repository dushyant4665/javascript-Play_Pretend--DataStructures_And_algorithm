

// create an array with 8 student names, after that crete a function which takes 2 parameters(allStudents & studentName),
 // iterate over all students and find that specific user 'studentName'

const allStudent=['vedant','siddharth','lokesh','dushyant','aditya','nehar','vijay','vaibhav']

var findStudent=(allStudent,studentName)=>{
    let found=false;
    for(let i=0;i<allStudent.length;i++){
        if(allStudent[i]===studentName){
            console.log(`Found ${studentName} at ${i}`)
            found=true;
            break;
        }
      
    }
    if(!found){
        console.log(`not found ${studentName}`)
    }
}

findStudent(allStudent,'vaibhav')

