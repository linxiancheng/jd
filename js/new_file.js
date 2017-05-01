$(function(){
	$(".dl_kg").click(function(){
			$(".dl_kg>div").toggleClass("dl_yd2");
			$(".dl_kg>div").toggleClass("dl_yd1");
			$(".dl_kg>span").toggleClass("r_bg");
	});
	
	$(".fl_sp2").click(function(){
		$(".fl_nav").slideToggle();
	});
	//返回顶部代码
	$(".gotop").hide();	//先隐藏
	  $(window).scroll(function(){
	  	
		var ind = $(document).scrollTop();
		if (ind>100) {
			$(".gotop").show();	
		} else{
			$(".gotop").hide();	
		}
		
	});

	
	$(".gotop").click(function(){		
				goTop();
			});
	//返回顶部代码end
	
//	首页轮播
	var lunbo = function(){
			var box = $("#slide");
			var likd = $("#slide li").width();
			var lileng = $("#slide li").length;
			var yuandian = $(".lbul li");
			var a=0;
			 function goleft(){
				a++;
				goo();
			};
				function goright(){
				a--;
				goo();

			};
			function goo(){
				if(a==lileng){
					a=0;
				}
				if(a==-1){
					a=lileng-1;
				}
				var l = a*likd;
				var zhi = -l+"px";
				box.animate({marginLeft:zhi},600); 
				yuandian.eq(a).addClass("cur").siblings().removeClass("cur");
			}
			var gotime = setInterval(goleft,3000);
			yuandian.click(function(){
				var b = $(this).index();
				a=b-1;
				goleft();
			});
			box.hover(function(){
				clearInterval(gotime);
			},function(){
				gotime = setInterval(goleft,5000);
			});
		//	触摸事件
			function k_touch() {
				    var _start = 0,
				    	  _end = 0, 
				    _content = document.getElementById("slide");	
				    _content.addEventListener("touchstart", touchStart, false);
				    _content.addEventListener("touchmove", touchMove, false);
				    _content.addEventListener("touchend", touchEnd, false);
				    function touchStart(event) {
				    	clearInterval(gotime);
				        var touch = event.targetTouches[0];
				        _start = touch.pageX;
				    }
				    function touchMove(event) {
				    	clearInterval(gotime);
				        var touch = event.targetTouches[0];
				        _end = (_start - touch.pageX);
				    }
				
				    function touchEnd(event) {
				        if (_end < -50) {
				        	 goright();
				            _end=0;
				            gotime = setInterval(goleft,5000);
				        }else if(_end > 50){
				            goleft();
				            _end=0;
				            gotime = setInterval(goleft,5000);
				        }
				    }
			}
			k_touch();
	
			
	}();
	
	
	
	
	
	
	
	
	
	
});
function goTop(){
			$(this).bind("click",function(){
				$('html,body').animate({
				scrollTop : '0px'
				}, 200);
			})
	  	};