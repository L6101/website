var http = require("http");
let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"

   response.end("Date: "+year + "-" + month + "-" + date + " " +"Time: "+ hours + ":" + minutes + ":" + seconds);
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');