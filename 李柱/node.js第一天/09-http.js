var http=require("http")
var server =http.createServer()

server.on("request",function(req,res){
    var url=req.url
    if(url==="/plain"){
        res.setHeader("content-type","text/plain;charset=utf-8")
        res.end("hello 世界")
    }else if(url==="/html"){
        res.setHeader("content-type","text/html;charset=utf-8")
        res.end("<p>hello html <a href='#'>点我</a>")
    }
})


  

server.listen(3000,function(){
    console.log("server is runing")
})