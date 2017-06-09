$(document).ready(function() {
    
    
    // Navigation
    $(".js--nav-item").on("click", function(e) {
        e.preventDefault();
        
        // 1. Replace # to ""
        var layout = $(this).attr("href").replace("#", "");
        console.log(layout);
        
        // 2. Remove active from all sections
        $("section").removeClass("active");
        
        // 3. Add active class to target section
        $(".section-" + layout).addClass("active");
        
    });
    
    
    // SlideShow
    $(".js--slide-background").backstretch([
        "resources/img/background-blue.png",
        "resources/img/background-room.png",
        "resources/img/background-river.png",
        "resources/img/background-cottage.png",
    ], {duration: 15000, fade: 1000});
    
    
    // Mobile Navigation
    $("#nav-mobile-icon").on("click", function() {
        $(this).toggleClass("open");
        $(".mobile-menu").toggleClass("mobile-open");
        
    });
    
    $(".js--mobile-nav-item").on("click", function(e) {
        e.preventDefault();
        
        // 1. Replace # to ""
        var layout = $(this).attr("href").replace("#", "");
        console.log(layout);
        
        // 2. Remove active from all sections
        $("section").removeClass("active");
        
        // 3. Add active class to target section
        $(".section-" + layout).addClass("active");
        $("#nav-mobile-icon").toggleClass("open");
        $(".mobile-menu").toggleClass("mobile-open");
    });
    
});