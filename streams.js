const fs = require('fs');
var readerStream = fs.createReadStream("demo.txt");
readerStream.setEncoding("utf-8");
readerStream.on("data",function(chunk) {
    console.log(chunk)
});
readerStream.on("end",function() {
    console.log("Steam has ended..");
});
readerStream.on("error",function(err){
    console.log("Error has occured"+ err.stack)
})
console.log("Program has ended...");