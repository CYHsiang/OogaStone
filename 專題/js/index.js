// Sticky Header
 $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});


// 點擊折價券彈出視窗--popup
function OpenModal() {
    let element = document.getElementById('overlay')
    element.style.display = 'block'
}
function CloseModal() {
    let element = document.getElementById('overlay')
    element.style.display = 'none'
}


// 折價券輪播-----------
// $(".responsive").slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//             }
//         },
//     ]
// });

// 首頁動畫
function showImg() {
    let logo2 = document.querySelector('.logo_logo');
    let logo3 = document.querySelector('.logo_ooga');
    let logo4 = document.querySelector('.logo_circle');
    let img = document.querySelector('.logo_img');
    logo2.style.display = 'none';
    logo3.style.display = 'none';
    logo4.style.display = 'none';
    img.style.display = 'block';
}
function showLogo() {
    let logo2 = document.querySelector('.logo_logo');
    let logo3 = document.querySelector('.logo_ooga');
    let logo4 = document.querySelector('.logo_circle');
    let img = document.querySelector('.logo_img');
    logo2.style.display = 'block';
    logo3.style.display = 'block';
    logo4.style.display = 'block';
    img.style.display = 'none';
}


