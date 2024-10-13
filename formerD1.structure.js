

// create an array with 8 student names, after that crete a function which takes 2 parameters(allStudents & studentName), iterate over all students and find that specific user 'studentName'

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

// var findStudent=(allStudent,studentName)=>{
//     // for(let i=0; i<allStudent.length; i++ ){

//     // }
//     let i=0; 
//     i<allStudent.length; 
//     i++;

//     if(allStudent[i]===studentName){
//         console.log(`found ${studentName}`)
//     }
//     else{
//         console.log('not found')
//     }
// }


// findStudent(allStudent,'siddharth')















// const allStudents=['aman','bharat','chetan','dushyant','eman','farukl','golu','hitesh']


// const findStudent=(allStudents,studentName)=>{
//     for(let i =0; i<allStudents.length; i++){
//         if(allStudents[i]===studentName){
//             console.log(`found ${studentName} at ${[i]}`)
//         }
//         // else{
//         //     console.log('not found')
//         // }
//     }
// }

// findStudent(allStudents,'eman')





// const allStudent=['hitesh','vikash','chavan','swara','manish','dipesh','rancho','ayush']

// var findStudent=(allStudent,studentName)=>{
         
//        for(let i=0;i<allStudent.length;i++){
//         if(allStudent[i]===studentName){
//             console.log(`found ${studentName} at ${i}`)
//         }
//         else{
//             // console.log('not found')
//         }
//     }
// }

// findStudent(allStudent,'rancho')