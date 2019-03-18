$(document).ready(function(){

    //mainVedio

        $('.video_banner_btn').on('mouseenter',function(){
            $('.ani_over').stop().animate({'top':'-54px'},500);
        })

        $('.video_banner_btn').on('mouseleave',function(){
        $('.ani_over').stop().animate({'top':'0px'},500);
        });


    //탭메뉴 animation

    $('.navi>ul>li').on('click',function(e){
            e.preventDefault();

            var targetIndex = $(this).index();
            var currentIndex = $('.slider>ul>li.on').index();
            var isOpen = true;

            
                if(targetIndex == currentIndex){
                    return;
                }else{
                sliderNext(targetIndex);
                }
                

    })//click

    function sliderNext(index){
       
        $('.slider>ul>li.on').stop().animate({'left':'-100%'},500,function(){
            $(this).removeClass('on')
        });

        $('.slider>ul>li').eq(index).addClass('on').css({'left':'100%'}).stop().animate({'left':'0%'},500,function(){
           
        })

        activeNavi(index);
        motionTab(index);

    }


    function motionTab(index){
        $('.tab>ul>li.on').removeClass('on');
        $('.tab>ul>li').eq(index).addClass('on');

    }

    function activeNavi(index){
        $('.navi>ul>li.on').removeClass('on');
        $('.navi>ul>li').eq(index).addClass('on');
       

    }

   //#con1- noticeList 롤링

   var i=0;
   var len = $('.notice_list>li').length-1;
    ListRolling(0);

   setInterval(function(){
   
    //0이거나 1이거나 조건문
            if(i == len){
                i=0;
            }else{
                i++;
            }
                    
            ListRolling(i);
            console.log(i);

   },2500);

   function ListRolling(index){

            $('.notice_list>li.on').stop().animate({'top':'100%'},500,function(){
                $(this).removeClass('on');
            });
    
            $('.notice_list>li').eq(index).addClass('on').css({'top':'-100%'}).stop().animate({'top':'0%'},500,function(){
               
            });    
           

   }//


   //scrollSVG
    var ease = 'swing';
    var base_line = -380;
    var pos1 = $('#contents').offset().top;
    console.log(pos1);

    $(window).on('scroll',function(){

        var scroll = $(this).scrollTop();

        if(scroll>=pos1+base_line){
            
            $('#con2').addClass('on');

            //박스2의 모션이 시작되는 세로 스크롤 위치값
            var current_pos2 = pos1+base_line; //(상단 슬라이드 이미지 어디쯤이 되면 )

            //현재스크롤된값에서 현재 박스2의 시작 위치값을 빼는
            //minus시작점을 0으로 만들기 위함
            //misnu값을 3배로 곱해서 스크롤할때마다 수치값이 3배씩 늘어가게 적용
            var minus = (scroll -current_pos2)*5; //스크롤값에서 현재 위치값빼면 거의 0이고..
            
            
            var result = 1422-minus;
            if(result<0){
                result = 0;
            }else{
                result = 1422-minus;
            }  
                
            $('.icon path').css({'stroke-dashoffset':result});
            $('.icon2 path').css({'stroke-dashoffset':result});


        }

    });

    //#con3vidoe

    $('.videoSec').on('mouseenter',function(e){
            e.preventDefault();

            var vid= $('.videoMovie').get(0);
            vid.currentTime=0;
            vid.play();



    })

    
    

});//doc












