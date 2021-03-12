       const btnClose = document.querySelector('.btn');
       const btnPopup = document.querySelector('.choice-date');
       const popup = document.querySelector('.section-choice-date');
       const form = document.querySelector('form');
      

       btnPopup.classList.add('choice-date-close');
       btnClose.addEventListener('click', function (evt) {
        evt.preventDefault();
       btnPopup.classList.toggle('choice-date-close');

 });

       form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        console.log('Отправляем форму');
       });

