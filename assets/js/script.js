const specialistsPopUp = document.getElementsByClassName('specialists-pop-up'),
      blackout = document.querySelector('.blackout'),
      popUpClose = document.querySelectorAll('.pop-up__close'),
      btnMobileOpen = document.querySelectorAll('.specialists__mobile-open-btn'),
      blockMobileOpen = document.querySelectorAll('.specialists__item'),
      popUp = document.querySelectorAll('.pop-up'),
      popUpRemind = document.querySelectorAll('.pop-up-remind'),
      openRemind = document.querySelectorAll('.open-remind');

blockMobileOpen.forEach((element, i) => {
    element.addEventListener('click', () => {
        if (window.screen.width >= 768){
            specialistsPopUp[0].classList.add('pop-up_active');
            blackout.classList.add('blackout_active');
        } else{
            btnMobileOpen[i].classList.toggle('specialists__mobile-open-btn_active');
            element.classList.toggle('specialists__item_mobile-open');
        }
    });
});
popUpClose.forEach((element, i) => {
    element.addEventListener('click', () =>{
        blackout.classList.remove('blackout_active');
        popUp[i].classList.remove('pop-up_active');
    })
});
openRemind.forEach((element, i) => {
    element.addEventListener('click', () => {
        popUpRemind[0].classList.add("pop-up_active");
        blackout.classList.add('blackout_active');
    })
});

const titleName = $('.advantages__first-item').html();
function owlInitialize() {
    if ($(window).width() < 769) {
        $('.advantages__first-item').remove();
        $('.advantages__wrap').addClass("owl-carousel");
        $('.coming-soon__wrap').addClass("owl-carousel");
        $('.owl-carousel').owlCarousel({
            center: true,
            loop:true,
            margin:10,
            stagePadding: 40,
            dots: true,
            responsive:{
                600:{
                    items:3
                },
                320:{
                    items:1
                }
            }
        });
    }else{
        $('.owl-carousel').owlCarousel('destroy');
        $('.advantages__wrap').removeClass("owl-carousel");
        $('.coming-soon__wrap').removeClass("owl-carousel");
        if($('.advantages__first-item').length === 0) {
            $('.advantages__wrap').prepend('<div class="advantages__first-item">' + titleName + '</div>');
        }
    }
}
$(document).ready(function(e) {
    owlInitialize();
});
$(window).resize(function() {
    owlInitialize();
});