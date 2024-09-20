function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  //clearInterval(modalTimerId);
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector) {
  const modalTriger = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);

  modalTriger.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => {
    if ((e.code === "Escape" || e.code === "Backspace") && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });

  //const modalTimerId = setTimeout(() => openModal(modalSelector), 50000);
  function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      window.removeEventListener('scroll', showModalByScroll);
      //openModal(modalSelector);
      setTimeout(() => openModal(modalSelector), 5000);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
}
//module.exports = modal;
export default modal;
export { openModal };
export { closeModal };