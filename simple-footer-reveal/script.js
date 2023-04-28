var logoElement = $('footer .logo');

$(window).scroll(function() {
  
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     
       $(logoElement).addClass('show');
     
   } else if($(logoElement).hasClass('show') && $(window).scrollTop() + $(window).height() > $(document).height() - 150) {
     
      $(logoElement).removeClass('show');
     
   }
});
