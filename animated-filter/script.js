$(function() {
  
	transition_timeout = 40;
	
	$('.title_items').click(function() {
	  
	  current = $(this).next().find('li');
	  
	  $(this).toggleClass('active');
	  current.toggleClass('visible');
	  
	  if ($(this).hasClass('active')) {
		for( i = 0; i <= current.length; i++ ) {
		  $(current[i]).css('transition-delay', transition_timeout * i + 'ms');
		}
	  }
	  else {
		for( i = current.length, j = -1; i >= 0; i--, j++) {
		  $(current[i]).css('transition-delay', transition_timeout * j + 'ms');
		}
	  }
	
	});
  });
