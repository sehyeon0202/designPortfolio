$(document).ready(function(){

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

   

});












