const fs = require('fs');
/*fs.writeFile('demo.txt','Hello,this is demo text!!',(err,data)=>{
        console.log("File created successfully...");
})*/
/*fs.readFile("demo.txt","utf-8",(err,data) => {
    console.log("Data read successfully: "+data);
})*/
/*fs.appendFile("demo.txt","This is updated/added text",(err,data) => {
    console.log("File updation done..");
})*/
/*fs.unlink("demo.txt",(err)=> {
    console.log("File deleted successfully!!");
})*/

// Blocking and unblocking
/*console.log("Hello this is statement 1");
console.log("Loading data..");
const data = fs.readFileSync("demo.txt","utf-8")
console.log("Data loading completed"+data);
console.log("Bye");*/

//Async (non-blocking)
console.log("Hello this is statement 1");
console.log("Loading data..");
fs.readFile("demo.txt","utf-8",(err,data)=>{
    if(err) {
        console.log("Data loading error: "+err);
    } else {
        console.log("Data loading completed: "+data);
    }
})
console.log("Bye");
