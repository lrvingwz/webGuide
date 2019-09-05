var fs=require("fs");
fs.writeFile("date/你好.ttxt","hello world",function(error){
    if(error){
        console.log("文件写入失败");
    }else{
        console.log("文件写入成功");
    }
});