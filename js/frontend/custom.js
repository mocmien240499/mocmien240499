jQuery(document).ready(function ($) {
    jQuery('.stellarnav').stellarNav({
        theme: 'light'
    });
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    margin: 10,
    loop: true,
    autoplay:false,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

$(document).ready(function() {
    $('.pgwSlideshow').pgwSlideshow();
})

// $(document).ready(function() {
//     $("#button-search").click(function(event) {
//         var loaibds = $("#loaibds").val();
//         var quanhuyen = $("#quanhuyen").val();
//         var giatien = $("#giatien").val();
//         var huong = $("#huong").val();
//         var dientich = $("#dientich").val();
//         $.ajax({
//             type: 'get',
//             dataType: 'html',
//             url: '{{url("tim-kiem-bds")}}',
//             data: 'danhmucsanpham2_id=' + loaibds + '&quanhuyen_id=' + quanhuyen + '&giatien_id='+ giatien + '&huong_id='+ huong + '&dientich_id='+ dientich,
//             success:function(response);
//         });
//     });
// });