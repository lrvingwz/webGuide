var http=require("http")
var server=http.createServer();
server.on("request",function(){
    console.log("收到客户端的请求")
})

server.listen(3000,function(){
    console.log("服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问")
})