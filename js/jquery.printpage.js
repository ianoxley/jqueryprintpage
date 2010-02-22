// jquery.printpage.js
// -------------------
// Adds a print page icon and onclick event handler
// to a <span class="print">...</span> tag
// @author: ian oxley [ijoxley [at] gmail dot com]
// @date:   2010-02-22
// 
(function(jQuery) {
    jQuery.fn.printPage = function() {
       return this.each(function() {
            // Wrap each element in a <a href="#">...</a> tag
            var $current = jQuery(this);
            $current.wrapInner('<a href="#"></a>');
            
            jQuery('span.print > a').click(function() {
                window.print(); 
                return false;    
            });
       });
    }
})(jQuery);
