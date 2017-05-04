function myScroll(link) {
    var target = $(link).attr("href");
    target = target.replace("#", "");
  
    $('a').each(function() {
        if ($(this).attr('name') === target) {
                $('html, body').animate({scrollTop: $(this).offset().top}, 500);
        }
    });
    
    return false;
}

function navToggle() {
    var menu = $("#nav-menu");
    
    menu.slideToggle(200);
}