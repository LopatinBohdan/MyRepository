const http=require("http");

const host="127.0.0.1";
const port=7777;
const server=http.createServer(function(request, response){
    let myUrl=new URL(request.url.toString(), `https://${host}:${port}/`);
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.text=`Host: ${myUrl.host} Path: ${myUrl.pathname} Params: ${myUrl.searchParams}`;
    response.end(response.text);
});
server.listen(7777,"127.0.0.1", function(){
    console.log("Server starting")
})