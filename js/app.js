$(function () { 

//H1 JS
	var interval=0;
	setInterval(function() {
		var height = 5.997;
		var elem = document.getElementById('title');
		elem.style.marginTop = (++interval%3)*(-height)+'rem';
	}, 2000);


});

(function () {
	$(function () {
		var timelineAnimate = function (elem) {
			return $(".timeline.animated .timelineRow").each(function(i) {
				var bottomOfObject = $(this).offset().top + $(this).outerHeight();
				var bottomOfWindow = $(window).scrollTop() + $(window).height();
				console.log(bottomOfWindow);
				console.log(bottomOfObject);
				if(bottomOfWindow > bottomOfObject) {
					return $(this).addClass("active");
				}
			});
		};
		timelineAnimate();
		return $(window).scroll(function () {
			return timelineAnimate();
		});
	});
}).call(this);


//need to find a way to get the bottom of the window to match up to the bottom of the object...
//need to get all of the other css out of the other one (use dev tools on each element in sources?? (check notes)...)