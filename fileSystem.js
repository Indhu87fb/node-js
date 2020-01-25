const fs=require("fs");
const printerFn=item=>{
    console.log(item);
};
//Traditional method for loop
//for(let i=0;i<myArray.length;i++){
    //code
//}


const myArray=[1,2,3,4,5];
myArray.forEach(printerFn);
console.log("loop done!");
//Async file read
fs.readFile("myfile.txt",(err,data)=>{
    if(err){

        // errors in Async Functions are
        //handled inside the callbacks
        console.log(err);
        return;
    }
    printerFn(data.toString());
    
}); 


// sync function using try and catch
try{
    const fileBuffer=fs.readFileSync("myFile.txt");
printerFn(fileBuffer.toString());
}
catch(e){
    console.error(e);
}

console.log("end of the file");