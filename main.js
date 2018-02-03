$(document).ready(function() {
    
    $(".album").click(function() {

        if($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(".album.active").each(function() {
                $(this).removeClass("active");
            });
            
            $(this).addClass("active");
        }

    });
});