$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots: true,
    margin: 50,
    autoplay: true,
    autoplaySpeed: 5000,
    autoplayTimeout: 6000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).ready(function(){
    $(".togglenavtest").hide();
    $("#btn_test").click(function(){
        $(".togglenavtest").toggle("2000");
        // debugger;
    });
     AOS.init();
});

 
