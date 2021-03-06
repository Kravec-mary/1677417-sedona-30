const btnClose = document.querySelector('.btn');
      const btnPopup = document.querySelector('.choice-date');

      btnClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      btnPopup.classList.toggle("choice-date-close");
});
