$(document).ready(function(){
    // Show Day 1 section by default
    $("#day1").show();

    // Show the corresponding section when a nav link is clicked
    $("a").click(function(){
        var sectionId = $(this).attr("href");
        $("section").hide();
        $(sectionId).show();
    });
});