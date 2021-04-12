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
    