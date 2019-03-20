$(document).ready(function(){

    var timer;
    //인스타그램 url과 토큰을 가져온다.
    var url = 'https://api.instagram.com/v1/users/self/media/recent';
 
    var token = "8426882499.1677ed0.81c118e0b9a5456a8a8642d81b97e13d";
    
    var $instaBox = $("#instaBox");
    var $instaBoxUl = $('#instaBox>ul');
    

    callData(url,token,12);
    //ajax 

    //callData
    function callData(url,token,num){
            
        $.ajax({
            url: url,
            dataType:'jsonp',
            data:{ //요청에 전달되는 프로퍼티를 가진 객체
                access_token :token,
                count:num
            },
            success:function(data){
                console.log(data.data);
                var item = data.data; // 이미지 배열
            $(item).each(function(index,data){ //이미지를 갯수만큼 돌린다.
                //console.log(data);
                var imgSrc = data.images.thumbnail.url;
                var link = data.link;
                var tags = data.tags;

                $('#instaBox>ul').append(
                    $('<li>').append(
                        $('<a>').attr({'href':link,'target':'_blank'}).append(
                            $('<img>').attr({'src':imgSrc})
                        
                        ).append(
                            $('<p>').text(tags)
                        )
                    )
                )

            });//each 


            },
            error:function(){
                alert('데이터를 불러오는데 실패했습니다');
            }

        })//ajax



    }//callData

        var i=0;
        insatSlideMove(2,150)
      
        $instaBox.on('mouseenter',function(){
        clearInterval(timer);
    });

        $instaBox.on('mouseleave',function(){
        insatSlideMove(2,150);
    });

    function insatSlideMove(speed,wid){
        timer = setInterval(function(){
        
            if(i<=-wid){
                i=0;
                $instaBoxUl.find('li').first().appendTo($instaBoxUl);
            }else{
                i-=speed;
            }
            $instaBoxUl.css({"left":i});
        
        },1000/30);
    }
      

})//doc