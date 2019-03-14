$(document).ready(function(){

    var url = 'https://api.instagram.com/v1/users/self/media/recent';
    
    var token = "8426882499.1677ed0.81c118e0b9a5456a8a8642d81b97e13d";
   ;
    callData(url,token,12);
   //호출할때 쿼리스트링
   //주소값?access_token=토큰값&count=5
   //(쿼리스트링:서버에 요청을 보낼때 옵션값을
   //get방식으로 달아서 요청)
   
   
   function callData(url,token,num){
   
       $.ajax({
           url: url,
           dataType:'jsonp',
           data:{
               access_token :token,
               count:num
           },
           success:function(data){ 
               console.log(data.data);
               var item = data.data;
               $(item).each(function(index,data){
                   console.log(data);
                   var imgSrc = data.images.thumbnail.url;
                   var link = data.link;
                   var tagsCon ='';
                   var tags = data.tags;
                   
                   //console.log(data.tags);
                   console.log(tagsCon);
                   $('#instaBox>ul').append(
                       $('<li>').append(
                           $('<a>').attr({'href':link,'target':'_blank'}).append(
                               $('<img/>').attr('src',imgSrc)
                           )
                       ).append(
                           $('<p>').text(tags)
                       )
                   )
   
                   
               })
              
           },
           error : function(){
               alert('데이터를 호출하는데 실패했습니다')
           }     
   
      })
     
   }
   
   });
   
 

