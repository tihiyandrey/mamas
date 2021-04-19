const specialistsPopUp = document.getElementsByClassName('specialists-pop-up'),
      blackout = document.querySelector('.blackout'),
      popUpClose = document.querySelectorAll('.pop-up__close'),
      btnMobileOpen = document.querySelectorAll('.specialists__mobile-open-btn'),
      blockMobileOpen = document.querySelectorAll('.specialists__item'),
      popUp = document.querySelectorAll('.pop-up'),
      popUpRemind = document.querySelectorAll('.pop-up-remind'),
      openRemind = document.querySelectorAll('.open-remind'),
      accordionDesktop = document.querySelectorAll('.accordion_desktop'),
      accordionDefault = document.querySelectorAll('.accordion_default'),
      accordion = document.querySelectorAll('.accordion'),
      accordionItemSecond = document.querySelectorAll('.accordion__item-second'),
      accordionOPenBtn = document.querySelectorAll('.accordion__open-btn');

accordionDesktop.forEach((element, i) => {
    element.addEventListener('click', () => {
        if (window.screen.width >= 768){
            accordionOpenPopUP();
        } else{
            openAccordion(element, i);
        }
    });
});

accordionDefault.forEach((element, i) => {
    element.addEventListener('click', () =>{ 
    openAccordion(element, i);
    })
});

function openAccordion(element, i) {
    accordionItemSecond[i].classList.toggle('accordion__item-second_open');
    accordionOPenBtn[i].classList.toggle('accordion__open-btn_active');
    element.classList.toggle('accordion_open');
}
function accordionOpenPopUP() {
    specialistsPopUp[0].classList.add('pop-up_active');
    blackout.classList.add('blackout_active');
}

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
    if ($(window).width() < 1300) {
        $('.advantages__first-item').remove();
        $('.advantages__wrap').addClass("owl-carousel owl-carousel-1");
        $('.coming-soon__wrap').addClass("owl-carousel owl-carousel-2");
        $('.owl-carousel-1').owlCarousel({
            center: true,
            loop:true,
            margin:10,
            stagePadding: 40,
            dots: true,
            responsive:{
                900:{
                    items:3
                },
                600:{
                    items:2
                },
                320:{
                    items:1
                }
            }
        });
        $('.owl-carousel-2').owlCarousel({
            center: true,
            loop:true,
            margin:10,
            stagePadding: 40,
            dots: true,
            items: 1,
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


// select style 

let selectSingle = document.querySelectorAll('.select');

selectSingle.forEach((el, index) => {

    let selectSingle_title = el.querySelector('.select__title');
    let selectSingle_labels = el.querySelectorAll('.select__label');

    // Toggle menu 
    selectSingle_title.addEventListener('click', () => {
        selectSingle.forEach((element, i) => {
            if(index !== i) {
                element.setAttribute('data-state', '');
            }
        });
        
        if (el.getAttribute('data-state') === 'active') {
            el.setAttribute('data-state', '');
        } else {
            el.setAttribute('data-state', 'active');
        }
    });

    // Close when click to option 
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            el.setAttribute('data-state', '');
        });
    }
    document.body.onclick = function(e) {
        e = e || event;
        target = e.target || e.srcElement;
        
        if (target.className !== "select__title") {
            if (target.className !== 'field__radio') {
                el.setAttribute('data-state', '');
            } 
        }
        
    }
});

const pregnantCheck = document.querySelectorAll('input[name="pregnant"]');
const pregnantShow = document.querySelector('.pregnant-show');
const childrenCheck = document.querySelectorAll('input[name="children"]');
const childrenShow = document.querySelector('.children-show');
const quizField = document.querySelectorAll('.quiz__field');
const quizSubmit = document.querySelector('.quiz__fields_submit');

pregnantCheck.forEach(el => {
    el.addEventListener('change', () => {
        quizField[1].classList.remove('holded');
        if(el.value === 'yes') {
            pregnantShow.classList.add('active');
        } else {
            pregnantShow.classList.remove('active');
        }
    })
});
childrenCheck.forEach(el => {
    el.addEventListener('change', () => {
        quizSubmit.classList.remove('holded');
        if(el.value === 'yes') {
            childrenShow.classList.add('active');
        } else {
            childrenShow.classList.remove('active');
        }
    })
});

const openViewCourse = document.querySelectorAll('.open-view-course');
const quickView = document.querySelector('.quick-view');
console.log('openViewCourse', openViewCourse)

openViewCourse.forEach(el => {
    el.addEventListener('click', () => {
        quickView.classList.add('quick-view_open');
        blackout.classList.add('blackout_active');
    })
});

const openThankYou = document.querySelector('.open-thank-you');
const popupThankYou = document.querySelector('.pop-up-thank-you');

openThankYou.addEventListener('click', () => {
    popUpRemind[0].classList.remove('pop-up_active');
    popupThankYou.classList.add('pop-up_active');
    blackout.classList.add('blackout_active');
});


$(window).scroll(function() {
     let height = $(window).scrollTop();
    if(height > 100){
        $('.stiky-btn').addClass('stiky-btn__show');
    } else{
        $('.stiky-btn').removeClass('stiky-btn__show');
    }
});