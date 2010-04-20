$(document).ready(function(){
    $('div.timeline span a').hover(
        function() {
           var span = this.parentNode;
           var i = span.children[1];
           if (this == span.children[0]) 
           {
            var minus = 0;
            var m, ml;
						if(jQuery.browser.msie) {minus = '-'+span.children[0].offsetWidth;}						 
						$(i).css("visibility","visible");
						m = i.offsetHeight;
						ml = -i.offsetWidth/2+minus+this.offsetWidth/2;
						$(i).css("margin",'-'+m+'px 0 0 '+ml+'px');
           }
        });
      
    $('div.timeline span a').mouseout(
        function() { 
           var span = this.parentNode;
           var i = span.children[1];
           if($(i).css("visibility") == ("visible")) $(i).css("visibility","hidden");
        }
		);
});