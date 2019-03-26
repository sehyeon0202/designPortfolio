$(document).ready(function(){	

    var $visual = $('#visual');
    var $panel_li = $('.bg_panel>li');
    var $navi_li = $('.navi_motion>li');
    var total = $panel_li.length-1;
    var isBlock = true;   
    var active_index = 0;

    $navi_li.on('click',function(e){
        e.preventDefault();
        var target_index = $(this).index();
        if(isBlock){
            if(target_index == active_index){
                return;
            }
            if(target_index > active_index){
                moveUp(target_index);
            }
            if(target_index < active_index){
                moveDown(target_index);
            }
            active_index = target_index;

            $navi_li.removeClass('on');
            $navi_li.eq(active_index).addClass('on');
        }
        
    })
    
    $('.down').on('click',function(e){
        e.preventDefault();       

        if(isBlock){
            var current_index = $panel_li.filter('.on').index();
            var next_index = current_index+1;

            if(current_index ==total){
                next_index=0;
            }else{
                next_index = current_index+1;
            }
            active_index = next_index;
            moveUp(active_index);  
        }      
    }); 

    $('.up').on('click',function(e){
        e.preventDefault();
        if(isBlock){
            var current_index = $panel_li.filter('.on').index();
            var prev_index = current_index-1;

            if(current_index == 0){
                prev_index = total;
            }else{
                prev_index = current_index-1;
            }
            active_index = prev_index;

            moveDown(active_index);
        } 
    });  



     function moveUp(index){
         isBlock = false;        

        //기존 활성화된 박스를 on삭제하고 top붙여서 비활성화
        $panel_li.filter('.on').removeClass('on').addClass('top');
        $panel_li.eq(index).addClass('bottom');          
        
        //비활성화된 직후에 top클래스 제거
        setTimeout(function(){
            $panel_li.removeClass('top');  
            isBlock = true;  
            $navi_li.removeClass('on');
            $navi_li.eq(active_index).addClass('on');                 
        },1000);  
        
        setTimeout(function(){
            $panel_li.eq(index).removeClass('bottom').addClass('on');
        },500);
     }

    function moveDown(index){
        isBlock = false;        

        //기존 활성화된 박스를 on삭제하고 top붙여서 비활성화
        $panel_li.filter('.on').removeClass('on').addClass('bottom');
        $panel_li.eq(index).addClass('top');          

        //비활성화된 직후에 bottom 제거
        setTimeout(function(){
            $panel_li.removeClass('bottom');  
            isBlock =true;   
            $navi_li.removeClass('on');
            $navi_li.eq(active_index).addClass('on');                
        },1000);  

        setTimeout(function(){
            $panel_li.eq(index).removeClass('top').addClass('on');
        },500); 
    }


});