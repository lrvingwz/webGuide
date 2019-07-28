var fs=require("fs")
var http=require("http")
var server=http.createServer()
server.on("request",function(req,res){
    var url=req.url
    if(url==="/html"){
        fs.readFile("./resource/index.html",function(error,data){
            if(error){
                res.setHeader("content-type","text/plain;charset=utf-8")
                res.end("文件读取失败，重新加载")
            }else{
                res.setHeader("content-type","text/html;charset=utf-8")
                res.end(data)
            }
        })
        
    }else if(url==="/ab"){
        fs.readFile("./resource/ab2.jpg",function(error,data){
            if(error){
                res.setHeader("content-type","text/plain;charset=utf-8")
                res.end("文件读取失败，重新加载")
            }else{
                res.setHeader("content-type","image/jpeg")
                res.end(data)
            }
        })
    }
})

server.listen(3000,function(){
    console.log("server is runing")
})
