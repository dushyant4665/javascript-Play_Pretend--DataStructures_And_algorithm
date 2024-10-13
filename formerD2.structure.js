
const allStudent=['vedant','siddharth','lokesh','dushyant','ayush','nehar','vijay','madhav']




var findStudent=(allStudent,studentName)=>{
    let found=false;
    for(let i=0; i<allStudent.length; i++){
    if(allStudent[i]===studentName){
    console.log(`found ${studentName}`)
    found=true;
    break;}
     
    }
    if(!found){
    console.log(`Not found ${studentName}`) 
    }
}

findStudent(allStudent,'mm');