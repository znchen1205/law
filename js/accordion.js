
$('.accordion-header').click(function(){
  $('.accordion-body').slideUp();
  $('.accordion-arrow').removeClass('open');
    if($(this).next('.accordion-body').css('display') == 'block'){
    	$('.accordion-body').slideUp('open');
  	}
   else{
      $(this).next('.accordion-body').slideDown();
     $(this).children('.accordion-arrow').addClass('open');
    }
});