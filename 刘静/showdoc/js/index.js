$(function(){
    //一级分类
        //getFCatalogue('初级');
        var timer=null;

        $(".firstCata-item").on('click',function(){
            var that=this;
            clearTimeout(timer);
            timer=setTimeout(function(){
                $('.docContainer').html("").hide();
                $('.docCata-ul').html("");
                active($(that));
                var level=$(that).text();
                getCatalogue(level,getHTML,'/openapi/course/category');
            },1600);
        });
        
        $(".subCatalogue").on('click','.subCata-item',function(){
            var that=this;
            clearTimeout(timer);
            timer=setTimeout(function(){
                $('.docContainer').html("").hide();
                active($(that));
                var subCnum=$(that).data('cnum');
                getCatalogue(null,getHTML2,'/openapi/course/category/',subCnum);
            },1600);
        });

        $(".docCata-ul").on('click','.docCata-item',function(){
            var that=this;
            clearTimeout(timer);
            timer=setTimeout(function(){
                var docCnum=$(that).data('cnum');
                getCatalogue(null,getHTML3,'/openapi/course/stage/summary/',docCnum);
                active($(that));
            },1600);
        });

        function getHTML(){
        	var level=arguments[0];
            var res=arguments[1];
            var html='';
            if(res.content.length>0){
                for (var i = 0; i < res.content.length; i++) {
                    if(res.content[i].stage==level){
                        html+="<li class='subCata-item' data-cnum="+res.content[i].cnum+">"+res.content[i].courseName+"</li>";
                    }
                }
            }
            $('.subCata-ul').html(html);
        }

        function getHTML2(){
            var res=arguments[1];
            var html='';
            if(res.content.length>0){
                for (var i = 0; i < res.content.length; i++) {
                    html+="<li class='docCata-item shadow' data-cnum="+res.content[i].cnum+">"+res.content[i].courseName+"</li>";
                }
            }
            $('.docCata-ul').html(html);
        }

        function getHTML3(){
            var res=arguments[1];
           if(res.content){
                $('.docContainer').html(res.content.summary).show();
            }
        }

        function getCatalogue(level,fn,urlAdd,cnum){
        	var cnum=cnum||'';
        	var level=level||null;
            $.ajax({
                type: 'GET',
                url:'http://study.zhanlaoshi.vip/v1'+urlAdd+cnum,
                headers:{
                    contentType:'application/json',
                    Authorization:'w0xkap48bh8by6x1hwk159d3ihvspq17qecknhdrlf5n7bppgcnrd0viz41v44g12buwl5l4wsfdbm5fybrntp5t8l4vu6pvavhaqytxaqhz875dfgu5sqh7vkj37523'
                },
                success:function(res){
                	fn(level,res);
                }
            })
        }

        function active(item){
            item.siblings().removeClass("active");
            item.addClass("active");
        }

});