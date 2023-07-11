const http = require('http');
const server = http.createServer((req,res) => {
    const url = req.url;
    res.setHeader("Content-Type","text/html");

    if(url == '/') {
        res.write("<html>");
        res.write("<head><title>Routing using node</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' placeholder='Enter message'/></form></body>");
        res.write("</html>");
        res.end();
    } else {
        res.write("<html>");
        res.write("<head><title>Server Routing</title></head>");
        res.write("<body>Server is running</body>");
        res.write("</html>");
        res.end();
    }    
})

const port = 3001;
server.listen(port,() => {
    console.log(`Server is running at port number ${port}`);
})