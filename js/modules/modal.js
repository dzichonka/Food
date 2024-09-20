function modal() {
  const modalTriger = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    //clearInterval(modalTimerId);
  }

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  modalTriger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if ((e.code === "Escape" || e.code === "Backspace") && modal.classList.contains('show')) {
      closeModal();
    }
  });

  //const modalTimerId = setTimeout(openModal, 50000);
  function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      window.removeEventListener('scroll', showModalByScroll);
      //openModal();
      setTimeout(openModal, 5000);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
}
module.exports = modal;