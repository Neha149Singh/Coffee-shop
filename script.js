$(document).ready(function(){
    $("#search-btn").click(function () {
        $(".search").toggle();
    });

    $("#cart-btn").click(function () {
        $(".cart-items-container").toggle();
    });
    
    $("#menu-btn").click(function () {
        $(".navbar").toggle();
    });
    
});