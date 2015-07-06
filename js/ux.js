var $ = jQuery;

$(document).ready(function($){

    $('.cube-menu-children').hide();
    $('#cube-menu-bttn').click(function(){
        $('.cube-menu-children').slideToggle();
    });
    
    $('.menu').hide();
    $('#cube-menu-bttn').click(function(){
        $('.menu').slideToggle();
    });
    
//    $('#design-page').on('click', function(){
//        $('#cube-menu').addClass('inv-bttn');
//    });
    
    //ANIMATE HOVER EFFECT
    function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}
    
    //ANIMATE CLICK EFFECT
    function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
        });
}
    
    $('#cube-menu-bttn').each(function() {
        animationHover(this, 'rubberBand');
        animationClick(this, 'bounceIn');
    });
    
    $('#twitter').each(function() {
        animationHover(this, 'rubberBand');
    });
    
    $('#facebook').each(function() {
        animationHover(this, 'rubberBand');
    });
    
    $('.read-more-bttn').each(function() {
        animationHover(this, 'pulse');
    });
    
    $('.read-more-bttn-alt').each(function() {
        animationHover(this, 'pulse');
    });
    
    $('.design-read-more-bttn').each(function() {
        animationHover(this, 'pulse');
    });
    
//    $('.home-phrase').each(function() {
//        animationHover(this, 'rubberBand');
//    });
    
    $('#home-page').each(function() {
        animationClick(this, 'hinge');
    });
    
    $('#design-page').each(function() {
        animationClick(this, 'hinge');
    });
    
    $('#develop-page').each(function() {
        animationClick(this, 'hinge');
    });
    
    $('#marketing-page').each(function() {
        animationClick(this, 'hinge');
    });
    
    $('#clients-page').each(function() {
        animationClick(this, 'hinge');
    });
    
    $('#contact-page').each(function() {
        animationClick(this, 'hinge');
    });
    
    // Mouse Scroll
        $('body').mousewheel(function(event, delta) {
            if (delta < 0 ){
                 $("#nextpage").trigger("click");
            }
            else if (delta > 0){
                 $("#prevpage").trigger("click");
            }
         });
    
    //LANDING PAGE -- NAV -- PREV -- URL DIV REDIRECT
    
//    function backButton() {
//    document.querySelector("#slide-3").setAttribute("src", "http://www.fywave.com");
//}
//
//    
    
    $('.read-more-bttn').click(function(){
        
        window.location.href="http://www.fywave.com/" ;
        
        
    });
    
//    function wpredirect(){
//        $('#stuff').load('http://www.fywave.com/');
//    }
    
    function goBack() {
    window.history.back();
}
 
    //Hide and Show Portfolio Info
//    $('#portfolio tbody tr td div').hide();
    
    
    var $container	= $('#portfolio'),
	$articles	= $container.children('article'),
	timeout;

$articles.on( 'mouseenter', function( event ) {
		
	var $article	= $(this);
	clearTimeout( timeout );
	timeout = setTimeout( function() {
		
		if( $article.hasClass('active') ) return false;
		
		$articles.not($article).removeClass('active').addClass('blur');
		
		$article.removeClass('blur').addClass('active');
		
	}, 75 );
	
});

$container.on( 'mouseleave', function( event ) {
	
	clearTimeout( timeout );
	$articles.removeClass('active blur');
	
});
    
});