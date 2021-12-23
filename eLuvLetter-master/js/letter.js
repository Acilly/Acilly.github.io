
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000Dear&nbsp;&nbsp;颖慧", 
				"穎慧^200ちゃん<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;圣诞快乐啦！^300在这个寒冷的冬天，^200我想给你送来我的温暖。^600说起来我们不知不觉也一起度过了很多！^600在以后，阿川会尽力带给你快乐^200！^600我们的明天也会长长久久的吧^200！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我好喜欢你啊！颖慧^300！^600让阿川成你的猫猫吧！^300陪伴颖慧带给颖慧温暖，^600也会一直爱你^300不论以后会有多少的风和雨！<br><p style='float:right; display:block; width:80px;'>^1000阿川^200より</p>"],
			typeSpeed: 100,
			backSpeed: 50
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
