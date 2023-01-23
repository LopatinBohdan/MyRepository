const http=require("http");

http.createServer(function(request, response){
    response.statusCode=200;
    response.setHeader("Content-Type", "text/plain");
    switch(request.url.split("/")[1].toLowerCase()){
        case "home": response.text="Home page";
            break;
        case "second":response.text="Second page";
            break;
        case "third":response.text="Third page";
            break;
        default:response.statusCode=404; 
            response.text="Not found";
            break;
    }
    response.end(response.text);
}).listen(7777, "127.0.0.1", function(){
    console.log("Server starting...")
});

