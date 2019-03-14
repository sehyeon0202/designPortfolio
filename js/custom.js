$(document).ready(function(){
    var $body = $('body');	
    var $header = $('#header');
    var $gnb = $('#gnb');
    var $gnb_li =$gnb.children('li');
    var $gnb_li_ul = $gnb_li.children('ul');
    var $moGnb = $('#moGnb');
    var speed = 300;
    
    

    rwd_wid();

    setTimeout(function(){
        $(window).on('resize',rwd_wid);
    },2000);
    

    function rwd_wid(){        
            var wid = $(window).width();

            if(wid>=940){
                web();
            }else{
                mobile();
            }
    }//rwd
    
    function web(){
        $('#moGnb').remove();
        var isGnb = $('#gnb').length;

        if(!isGnb){
            
        $.ajax({
            url:'data/gnb_web.html',
            success:function(data){
                $header.append(data);

            },
            error:function(){
                alert('데이타를 불러오는데 실패했습니다');
            }
        })

        $body.on('mouseenter','#gnb>li',menuDown);
        $body.on('mouseleave','#gnb>li',menuUp);

        //gnb 1depth focus event
        $body.on('focusin','#gnb>li>a',focusDown);
        $body.on('focusout','.la',focusUp);
        

        }//if

    } //web

    function menuDown(){   
        $(this).children('a').addClass('on');
        $(this).children('ul').stop().slideDown(0);   
    }

    function menuUp(){
        $(this).children('a').removeClass('on');  
        $(this).children('ul').slideUp(0);           
    }

    function focusDown(){
        //$(this).addClass('on');
        $(this).next('ul').show();
    }
    function focusUp(){     
        //$(this).parent().parent('.subMenu').prev('a').removeClass('on');
        $(this).parent().parent('.subMenu').hide();
        
    }



//-------------------------------------------------------//
    function mobile(){
        $gnb.remove();

        var isGnb = $("#moGnb").length;

        if(!isGnb){
            $.ajax({
                url:'data/gnb_mo.html',
                success:function(data){
                    $header.append(data);
    
                },
                error:function(){
                    alert('데이타를 불러오는데 실패했습니다');
                }
            })

          $('body').on('click','.btnMo',function(e){
            e.preventDefault();
            var isOpen = $('#moPanel').hasClass('on');
            if(isOpen){
                $('#moPanel').removeClass('on');
            }else{
                $('#moPanel').addClass('on');
            }
        });
        
        $('body').on('click','.closeBtn',function(e){
            e.preventDefault();
            var isOpen = $('#moPanel').hasClass('on');
            if(isOpen){
                $('#moPanel').removeClass('on');
            }else{
                $('#moPanel').addClass('on');
            }
        });   

        }//if

    }//mobile 


$('.con1Wrap').append(
    $('<div class="conWbg1">').css({
        'width':'30%', 'height':'100%','background':'#000','position':'absolute','right':'0','top':'0'
    })
);


$('.video_banner_btn>a').on('click',function(){
    
    $('body').append(
        $('<div class="videoViewPage">').css({
            'position':'fixed','width':'100%','height':'100%','background':'#000',
            'z-index':'30','top':'0','left':'0'
        }).append(
            $('<a class="videoCloseBtn">').css({
                'display':'block','width':'28px','height':'28px','position':'absolute','top':'100px','right':'150px','cursor':'pointer'
            }).append(
                $('<img>').attr({'src':'./img/btn-util-menu-close.png'})
            )
        )
    )


})//click

$('body').on('click','.videoCloseBtn',function(e){
        e.preventDefault();
        $('.videoViewPage').css({'display':'none'})
})


//tab focus

$('.tab>dt>a').on('focusin',function(e){
        e.preventDefault();

        $('.tab>dt').removeClass('on');
        $('.tab>dd').removeClass('on');

        $(this).parent('dt').addClass('on');
        $(this).parent('dt').next('dd').addClass('on');
        
        return false;

})

//skipNavi

$('.skipNavi>div>a').on('focusin',function(e){
        e.preventDefault();

        
        $(this).parent('div').parent('.skipNavi').addClass('on');
});

$('.skipNavi>div>a:last-child').on('focusout',function(e){
        e.preventDefault();
        $('.skipNavi').removeClass('on');
})

$('body').on('click',"a.showMenuBtn",function(e){
    e.preventDefault();
    var isTrue = $('.showBtnView').hasClass('on');

    if(!isTrue){
        isTrue=false;
        $('.showBtnView').addClass('on');
    }else{
        $('.showBtnView').removeClass('on');
        isTrue=true;
    }
    

})


});//doc
