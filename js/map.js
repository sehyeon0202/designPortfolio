window.onload = function(){
    var lat=37.5088823;
    var lng=127.0602669;

//카카오맵에 표시될 DOM지정
var container = document.getElementById('mapBoxView1');

//표시할 지역의 경도, 위도, 줌레벨 설정
var options = {
        center: new daum.maps.LatLng(37.5088823, 127.0602669),
        level: 4
};

//map 인스턴스 생성
var map = new daum.maps.Map(container, options);

    // 마커를 표시할 위치와 title 객체 배열입니다 
    var positions = [
        {
                title: '삼성 파르나스', 
                latlng: new daum.maps.LatLng(37.5088823, 127.0602669)
        }             
];

var imageSrc = "img/marker.png"; 

for (var i = 0; i < positions.length; i ++) {

        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new daum.maps.Size(50, 50); 
        
        // 마커 이미지를 생성합니다    
        var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize); 
        
        // 마커를 생성합니다
        var marker = new daum.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage // 마커 이미지 
        });
}


var imageSrc = "img/marker.png", // 마커이미지의 주소입니다    
    imageSize = new daum.maps.Size(50, 50), // 마커이미지의 크기입니다
    imageOption = {offset: new daum.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.


// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map); 


//click
$('.tabN>li>a').on('click',function(e){
    e.preventDefault();
        $("#mapBoxView1").remove();
    
    //$('.mapBox').css({'visibility':'hidden'})
    $('#mapBoxView').css({'visibility':'visible'});

    lat = $(this).attr('param').split(":")[0];
    lat = parseFloat(lat);
    lng = $(this).attr('param').split(":")[1];
    lng = parseFloat(lng);

    console.log(lat,lng);

//카카오맵에 표시될 DOM지정
var container = document.getElementById('mapBoxView');

//표시할 지역의 경도, 위도, 줌레벨 설정
var options = {
center: new daum.maps.LatLng(lat, lng),
level: 4
};

//map 인스턴스 생성
var map = new daum.maps.Map(container, options);

// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
{
    title: '삼성 파르나스', 
    latlng: new daum.maps.LatLng(lat, lng)
}         
];

var imageSrc = "img/marker.png"; 

for (var i = 0; i < positions.length; i ++) {

// 마커 이미지의 이미지 크기 입니다
var imageSize = new daum.maps.Size(50, 50); 

// 마커 이미지를 생성합니다    
var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize); 

// 마커를 생성합니다
var marker = new daum.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image : markerImage // 마커 이미지 
});
}


var imageSrc = 'img/marker.png', // 마커이미지의 주소입니다    
imageSize = new daum.maps.Size(50, 50), // 마커이미지의 크기입니다
imageOption = {offset: new daum.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption),
markerPosition = new daum.maps.LatLng(lat, lng); // 마커가 표시될 위치입니다


// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map); 

});//$tab_a



}
