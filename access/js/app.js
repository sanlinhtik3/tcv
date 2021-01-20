$(document).ready(function () {

    let screenHeight = $(window).height();
    console.log(screenHeight);

    $(window).scroll(function () {
        let currentPosition = $(this).scrollTop();
        console.log(currentPosition);
        if (currentPosition >= screenHeight-500){
            $(".site-nav").addClass("site-nav-scroll");
        }else {
            $(".site-nav").removeClass("site-nav-scroll");
        }
    })
});

function go(url) {
    setTimeout(function () {
        location.href = `${url}`;
    },500);
}