$('.nav_side>ul>li').eq(3).click(function (e) {
    if (!e.target.isSameNode($('.nav_side>ul>li').eq(3).find('a')[0])) {
        $(this).find('ul').toggleClass('active')
        $(this).find('span').toggleClass('active')
    }

})
$('.side').click(function (e) {
    if (this.isSameNode(e.target)) {
        $(this).addClass('active');
    }
})
console.log($('.side .button_header'));
$('.side_bottom').click(function (e) {
    $('.side').removeClass('active');
})

$('.asc select').click(function () {
})
var start = 0
var num = 1
$('.side').on('touchstart', function (e) {
    start = e.targetTouches[0].pageX
    $(this).on('touchmove', function (e) {
    })
})
$('.side').on('touchend', function (e) {
    e.changedTouches[0].pageX
    console.log(start - e.changedTouches[0].pageX);
    if (start - e.changedTouches[0].pageX >= 50) {
        $('.side').addClass('active');
    }
})