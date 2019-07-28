var http=require("http")
server=http.createServer()
server.on("request",function(req,res){
    res.setHeader("content-type","text/plain;charset=utf-8")
    res.end("hello 世界")
})


server.listen(3000,function(){
    console.log("server is runing")
})