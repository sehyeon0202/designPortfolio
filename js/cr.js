$(document).ready(function(){
	
	var ver = navigator.userAgent;

	 console.log(ver);
	 
	if (/msie/i.test(ver)){
		console.log("구버전 IE");
		$('body').addClass('oldIE');
	}
	else if (/trident/i.test(ver)){
		console.log("최신 IE");
		$('body').addClass('newIE');
	}

	else if (/firefox/i.test(ver)){
		console.log("파이어폭스");
	}

	else if (/chrome/i.test(ver)){
		console.log("크롬");
	}

	else if (/safari/i.test(ver)){
		console.log("사파리");
	}

	else if (/opera|opr/i.test(ver)){
		console.log("오페라");
	}


	if (/mobile/i.test(ver)){	
		//location.href="#";
		$('body').addClass('mo');
	}
	
});
