$(document).ready(function(){
    $('.team ul li').hover(
        function() {
            
            $(this).find('ul:first').stop(true, true);
            $(this).find('ul:first').slideDown();
        },
        function() {            
            $(this).find('ul:first').slideUp(); 
        }
    );    
    /*$('.team li:has(ul)').find('a:first').append('&raquo;');*/
});