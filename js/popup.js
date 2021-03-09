       const btnClose = document.querySelector('.btn');
       const btnPopup = document.querySelector('.choice-date');
      
       btnClose.addEventListener('click', function (evt) {
        evt.preventDefault();
       btnPopup.classList.toggle('choice-date-close');
      //  btnPopup.classList.add('form-show');
 });
       const popup = document.querySelector('.section-choice-date');
       const form = document.querySelector('form');
       form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        console.log('Отправляем форму');
       });

