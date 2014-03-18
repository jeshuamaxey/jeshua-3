// global namespace
var j = j || {};

j.main = function() {
	//toggle navigation pane
	$('.show-nav').on('click', j.showNav);
	$('.hide-nav').on('click', j.hideNav);

	//toggle sidebar pane
	/*
	$('.sidebar-toggle').on('click', function() {
		$('html').toggleClass('scroll-lock');
		$('body').toggleClass('active-sidebar');
	});
	*/
	//allow user to click on lis in nav menu to navigate
	$('.menu-item').on('click', function() {
		$('body').removeClass('active-nav');
		var url = $($(this).children()[0]).attr('href') || '/';
		window.location.href = url;
	});

	//view comments
	$('#show-comments').on('click', function() {
		$('.comments-wrapper').show();
		var y = $('.comments-wrapper').offset().top + 5;
		j.smoothScrollTop(y, 500);
	});
	$('#hide-comments').on('click', function() {
		var y = $('.post').offset().top + 5;
		j.smoothScrollTop(0, 1000, function() {
			$('.comments-wrapper').hide();
		});
	});

};

j.showNav = function() {
	$('html').addClass('scroll-lock');
	$('body').addClass('active-nav');
	setTimeout(function() {
		$('.l-content').on('click', j.hideNav);
	},1)
}

j.hideNav = function() {
	$('.l-content').unbind('click');
	$('html').removeClass('scroll-lock');
	$('body').removeClass('active-nav');
}

//
j.setupHeader = function() {
	var headroomSettings = {
	  "tolerance": 5,
	  "offset": 200,
	  "classes": {
	    "initial": "animated",
	    "pinned": "slideDown",
	    "unpinned": "slideUp"
	  }
	};
	$("#header").headroom(headroomSettings);
}

j.smoothScrollTop = function(y, dur, callback) {
	//set defaults
	var y = y || 0;
	var dur = dur || 1000;
	var callback = callback || null;
	//scroll
	$('html,body').animate({
    scrollTop: y
  }, dur, callback);

}

// Must go last
$(document).ready(j.main);