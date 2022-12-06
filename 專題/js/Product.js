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
$(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
    ]
});