import { openModal, closeModal } from "./modal.js";
import { postData } from "../services/services.js";

function form(formSelector) {

  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      // const object = {};
      // formData.forEach(function (value, key) {
      //     object[key] = value;
      // });

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      //postData('http://localhost:3000/requests', JSON.stringify(object))
      //postData('post.json', json)
      postData('http://localhost:3000/requests', json)
        //postData('http://localhost:3000/', json)
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure)
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal('.modal');

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal('.modal');
    }, 4000);
  }
  //fetch('http://localhost:3000/menu')
  fetch('cards.json')
    .then(data => data.json())
    .then(res => console.log(res));

  // form XMLHttpRequest

  // const forms = document.querySelectorAll('form');

  // const message = {
  //     loading: '../img/form/spinner.svg',
  //     success: "Спасибо! Скоро мы с вами свяжемся",
  //     fail: "Что-то пошло не так"
  // };

  // forms.forEach(item => {
  //     postData(item);
  // });

  // function showThanksModal(message) {
  //     const mainModalDialog = document.querySelector('.modal__dialog');

  //     mainModalDialog.classList.add('hide');
  //     openModal('.modal');

  //     const thanksModalDialog = document.createElement('div');
  //     thanksModalDialog.classList.add('modal__dialog');
  //     thanksModalDialog.innerHTML = `
  //         <div class="modal__content">
  //             <div data-close class="modal__close">&times;</div>
  //             <div class="modal__title">${message}</div>
  //         </div>
  //     `;

  //     document.querySelector('.modal').append(thanksModalDialog);
  //     setTimeout(() => {
  //         thanksModalDialog.remove();
  //         mainModalDialog.classList.remove('hide');
  //         mainModalDialog.classList.add('show');
  //         closeModal('.modal');
  //     }, 4000);
  // }

  // function postData(form) {
  //     form.addEventListener('submit', (e) => {
  //         e.preventDefault();

  //         const statusMassage = document.createElement('img');
  //         statusMassage.src = message.loading;
  //         statusMassage.style.cssText = `
  //             display: block;
  //             margin: 20px auto;
  //         `;
  //         form.insertAdjacentElement('afterend', statusMassage);


  //         const request = new XMLHttpRequest();
  //         const formData = new FormData(form);

  //         const object = {};

  //         formData.forEach(function (value, key) {
  //             object[key] = value;
  //         });

  //         const json = JSON.stringify(object);

  //         request.open('POST', 'server.php');
  //         request.setRequestHeader('Content-type', 'application/json');
  //         //request.send(formData);
  //         request.send(json);

  //         request.addEventListener('load', () => {
  //             if (request.status === 200) {
  //                 console.log(request.response);
  //                 showThanksModal(message.success);
  //                 form.reset();
  //                 statusMassage.remove();
  //             } else {
  //                 showThanksModal(message.fail);
  //                 form.reset();
  //                 statusMassage.remove();
  //             }
  //         });
  //     });
  // }
}
//module.exports = form;
export default form;