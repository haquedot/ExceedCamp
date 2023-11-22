$(document).ready(function(){
    $(".agenda-nav a").click(function(){
        $(".agenda-nav a").removeClass("active");
        $(this).addClass("active");
        $("section").hide();
        var sectionId = $(this).attr("href");
        $(sectionId).show();
    });
});
