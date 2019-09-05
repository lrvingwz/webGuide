var fs=require("fs");
fs.readFile("date/hello.txt",function(error,date){
    if(error){
        console.log("读取失败");
    }else{
        console.log(date.toString());
    }
});