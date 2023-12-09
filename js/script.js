$(document).ready(function () {
    $(".agenda-nav a").click(function () {
        $(".agenda-table").children().first().addClass("active-img");
        $(".agenda-nav a").removeClass("active");
        $(this).addClass("active");
        $(".agenda-table").hide();
        var sectionId = $(this).attr("href");
        $(sectionId).show();
    });
    $(".day-content").click(function () {
        $(".agenda-table .day-content").removeClass("active-img");
        $(this).addClass("active-img");
        var dayContent = $(this).attr("id");
        $(".img-campAgenda img").attr('src', 'images/' + dayContent + '.png');
    });
});
